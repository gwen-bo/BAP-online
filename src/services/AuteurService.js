import "firebase/firestore";

class AuteurService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  getAll = async () => {
    const snapshot = await this.db.collection("auteurs").get();
    return snapshot.docs
      .map((o) => o.data())
      .map((u) => {
        u.id = u.auteurId; // quick fix to make it compatible with koens db
        return u;
      });
  };

  getById = async (id) => {
    return (await this.db.collection("auteurs").doc(id).get()).data();
  };

}

export default AuteurService;
