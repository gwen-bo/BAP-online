import { decorate, action, computed } from "mobx";
import { v4 } from "uuid";

class User {
  constructor({ id = v4(), store, ...json }) {
    if (!store) {
      throw new Error("voorzie een store");
    }
    this.id = id;
    this.store = store;
    this.updateFromJson(json);
    this.store.addUser(this);
  }

  create = async () => this.store.createUser(this.asJson);

  updateFromJson = ({
    id = undefined,
    name = undefined,
    user = undefined,
  }) => {
    this.id = id !== undefined ? id : this.id;
    this.name = name !== undefined ? name : this.name;
    this.user = user !== undefined ? user : this.user;
  };

  get asJson() {
    return {
      id: this.id,
      name: this.name,
      user: this.user,
    };
  }
}

decorate(User, {
  updateFromJson: action,
  asJson: computed,
});

export default User;
