import { decorate, observable, action } from "mobx";
import InteractieService from "../services/InteractieService";

// interacties
class InteractieStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentTimeStamp = undefined;
    this.currentDifference = undefined; 
    this.interactieService = new InteractieService({
      firebase: this.rootStore.firebase,
    });
  }

  loadCurrentTimeStamp = async () => {
    return await this.interactieService.getInteractie("lastInteractie", this.updateTimeStamp);
  }

  updateTimeStamp = async (json) => {
    this.currentTimeStamp = json.timestamp.toDate()
  }

  checkDifference = () => {
    let diffInMilliseconds = Math.abs(Date.now() - this.currentTimeStamp);

    let minutes = Math.floor(diffInMilliseconds / 60000);
    let seconds = ((diffInMilliseconds % 60000) / 1000).toFixed(0);

    this.currentDifference = {minutes, seconds};
    // return {minutes, seconds}; 
  }
}

decorate(InteractieStore, {
  currentTimeStamp: observable,
  currentDifference: observable, 
  loadCurrentTimeStamp: action,
  checkDifference: action,
});

export default InteractieStore;
