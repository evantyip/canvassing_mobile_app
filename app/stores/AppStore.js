import { makeObservable, observable, action, toJS, computed } from 'mobx';

class AppStore {
  token = '';
  volunteerName = '';
  searchResults = [];
  selectedVoter = {};
  constructor() {
    makeObservable(this, {
      token: observable,
      volunteerName: observable,
      searchResults: observable,
      selectedVoter: observable,
      voterHash: computed,
      setToken: action,
      setVolunteerName: action,
      setSearchResults: action,
      setSelectedVoter: action,
    });
  }

  setToken(token) {
    this.token = 'Bearer ' + token;
  }

  setVolunteerName(name) {
    const nameArray = name.split(' ');
    const firstName = capitalizeName(nameArray[0]);
    const lastName = capitalizeName(nameArray[1]);
    this.volunteerName = firstName + ' ' + lastName;
  }

  setSearchResults(results) {
    this.searchResults = results;
    this.searchResults = toJS(this.searchResults);
  }

  setSelectedVoter(voter) {
    this.selectedVoter = voter;
    this.selectedVoter = toJS(this.selectedVoter);
  }

  get voterHash() {
    const hash = {};
    this.searchResults.forEach((voter) => {
      hash[voter.voter_id] = voter;
    });
    return hash;
  }
}

function capitalizeName(name) {
  if (name) {
    return name.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return null;
}

export default AppStore;
