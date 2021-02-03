import { decorate, observable, action, computed } from "mobx";
import { v4 } from "uuid";

class Auteur {
  constructor({store, ...json}) {
    if (!store) {
      throw new Error("voorzie een store");
    }    
    this.store = store;

    this.updateFromJson(json);
    this.store.addAuteur(this);
  }

  update = async () => this.store.updateAuteur(this.asJson);

  updateFromJson = ({
    auteurId = undefined, 
    name = undefined,
    bio = undefined,
    raakEmotioneel = undefined,
    raakFysiek = undefined,
  }) => {
    this.auteurId = auteurId !== undefined ? auteurId : this.auteurId;
    this.name = name !== undefined ? name : this.name;
    this.bio = bio !== undefined ? bio : this.bio;
    this.raakEmotioneel = raakEmotioneel !== undefined ? raakEmotioneel : this.raakEmotioneel;
    this.raakFysiek = raakFysiek !== undefined ? raakFysiek : this.raakFysiek;
   
    // if (date instanceof Date) {
    //   date = date.toISOString();
    // }
    // this.date = (date !== undefined) ? new Date(date) : this.date;
  };

  get asJson() {
    return {
      auteurId: this.auteurId,
      name: this.name,
      // date: this.date.toISOString(),
      bio: this.bio,
      raakEmotioneel: this.raakEmotioneel,
      raakFysiek: this.raakFysiek
    };
  }
}

decorate(Auteur, {
  id: observable,
  name: observable,
  
  updateFromJson: action,
  asJson: computed,
});

export default Auteur;
