import { decorate, observable, action, computed } from "mobx";
import User from "../models/User";
import UserService from "../services/UserService";

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.users = [];
    this.usersService = new UserService({ firebase: this.rootStore.firebase });
    this.loadAllUsers();
  }

  // form
  createUser = async (user) => {
    return await this.usersService.create(user);
  };

  loadAllUsers = async () => {
    const jsonUsers = await this.usersService.getAll();
    jsonUsers.forEach((json) => this.updateUserFromServer(json));
  };

  getUsers = async () => {
    return await this.usersService.getUsers(this.callbackUsers);
  }

  callbackUsers = async (json) => {
    console.log(json);
    this.updateUserFromServer(json);
  };

  updateUserFromServer(json) {
    let user = this.users.find((user) => user.id === json.id);
    if (!user) {
      user = new User({
        id: json.id,
        store: this.rootStore.userStore,
      });
    }
    if (json.isDeleted) {
      this.users.remove(user);
    } else {
      user.updateFromJson(json);
    }
    return user;
  }

  addUser = (user) => {
    this.users.push(user);
  };

  get userCount(){
    return this.users.length
  }
}

decorate(UserStore, {
  users: observable,
  addUser: action,
  updateUserFromServer: action,
  empty: action,
  userCount: computed
});

export default UserStore;
