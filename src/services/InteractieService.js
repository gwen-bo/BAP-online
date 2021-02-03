import "firebase/firestore";

class InteractieService {
  constructor({ firebase }) {
    this.db = firebase.firestore();
  }

  getById = async (id) => {
    return (await this.db.collection("interactie").doc(id).get()).data();
  };

  // wordt afgehandeld door fysieke installatie
  // create = async (group) => {
  //   const groupRef = await this.db.collection("interactie").doc(group.id);
  //   await groupRef.set(group);
  //   return group;
  // };

  getInteractie = async (id, callback) => {
    await this.db.collection("interactie")
      .onSnapshot(async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          // console.log(change);
          if (change.type === "added" || change.type === "modified") {
            callback(change.doc.data());
          }
        });
      });
  };

}

export default InteractieService;
