import { decorate, observable, action } from "mobx";
import Auteur from "../models/Auteur";
import AuteurService from "../services/AuteurService";

class AuteurStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.auteurs = [];
    this.auteurService = new AuteurService({ firebase: this.rootStore.firebase });
  }

  loadAllAuteurs = async () => {
    const jsonAuteurs = await this.auteurService.getAll();
    jsonAuteurs.forEach((json) => this.updateAuteurFromServer(json));
  };

  loadAuteur = async (id) => {
    const jsonAuteur = await this.auteurService.getById(id);
    return this.updateAuteurFromServer(jsonAuteur);
  };

  resolveAuteur = (id) => {
    const number = Number(id);
    // console.log(number);
    return this.auteurs.find((auteur) => auteur.auteurId === number);
  }

  updateAuteurFromServer(json) {
    // console.log('auteur json', json)
    let auteur = this.auteurs.find((auteur) => auteur.id === json.id);
    if (!auteur) {
      auteur = new Auteur({
        id: json.id,
        store: this.rootStore.auteurStore,
      });
    }
    if (json.isDeleted) {
      this.auteurs.remove(auteur);
    } else {
      auteur.updateFromJson(json);
    }
    return auteur;
  }

  addAuteur = (auteur) => {
    this.auteurs.push(auteur);
  };
}

decorate(AuteurStore, {
  auteurs: observable,
  addAuteur: action,
  updateAuteurFromServer: action,
});

export default AuteurStore;
