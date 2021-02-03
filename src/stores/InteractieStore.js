import { decorate, observable, action } from "mobx";
import InteractieService from "../services/InteractieService";

// interacties
class InteractieStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentTimeStamp = undefined;
    this.interactieService = new InteractieService({
      firebase: this.rootStore.firebase,
    });
  }

  loadCurrentTimeStamp = async () => {
    return await this.interactieService.getInteractie("lastInteractie", this.updateTimeStamp);
  }

  updateTimeStamp = async (json) => {
    console.log('hallo', json)

    this.currentTimeStamp = json.timestamp.toDate()
  }

  checkDifference = () => {
    let diffInMilliseconds = Math.abs(Date.now() - this.currentTimeStamp);

    var minutes = Math.floor(diffInMilliseconds / 60000);
    var seconds = ((diffInMilliseconds % 60000) / 1000).toFixed(0);

    return {minutes, seconds}; 
  }
}

decorate(InteractieStore, {
  currentTimeStamp: observable,
  loadCurrentTimeStamp: action,
});

export default InteractieStore;
