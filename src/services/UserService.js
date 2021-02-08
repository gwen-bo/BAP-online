import "firebase/firestore";

class UserService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  // bij fysieke installatie - wel deel van online platform
  create = async (user) => {
    return await this.db.collection("users").doc(user.id).set(user);
  };


  getAll = async () => {
    const snapshot = await this.db.collection("users").get();
    return snapshot.docs
      .map((o) => o.data())
  };

  getUsers = async (callback) => {
    await this.db.collection("users")
      .onSnapshot(async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          console.log(change, change.doc.data());
          if (change.type === "added") {
            callback(change.doc.data());
          }
        });
      });
  };
}

export default UserService;
