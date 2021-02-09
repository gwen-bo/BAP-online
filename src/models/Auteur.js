import { decorate, observable, action } from "mobx";

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
    voornaam = undefined,
    achternaam = undefined,
    bio1 = undefined,
    highlight = undefined,
    bio2 = undefined,
    link = undefined,
    linkUrl = undefined,

    geraakt = undefined,
    raak = undefined,
  }) => {
    this.auteurId = auteurId !== undefined ? auteurId : this.auteurId;
    this.voornaam = voornaam !== undefined ? voornaam : this.voornaam;
    this.achternaam = achternaam !== undefined ? achternaam : this.achternaam;
    this.bio1 = bio1 !== undefined ? bio1 : this.bio1;
    this.highlight = highlight !== undefined ? highlight : this.highlight;
    this.bio2 = bio2 !== undefined ? bio2 : this.bio2;

    this.geraakt = geraakt !== undefined ? geraakt : this.geraakt;
    this.raak = raak !== undefined ? raak : this.raak;

    this.link = link !== undefined ? link : this.link;
    this.linkUrl = linkUrl !== undefined ? linkUrl : this.linkUrl;
  };

  // get asJson() {
  //   return {
  //     auteurId: this.auteurId,
  //     name: this.name,
  //     bio: this.bio,
  //     raakEmotioneel: this.raakEmotioneel,
  //     raakFysiek: this.raakFysiek
  //   };
  // }
}

decorate(Auteur, {
  id: observable,
  name: observable,
  
  updateFromJson: action,
  // asJson: computed,
});

export default Auteur;
