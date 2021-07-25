import { makeObservable, observable, action } from 'mobx';

class AppStore {
  token = '';
  volunteerName = '';
  searchResults = [];
  constructor() {
    makeObservable(this, {
      token: observable,
      volunteerName: observable,
      searchResults: observable,
      setToken: action,
      setVolunteerName: action,
      setSearchResults: action,
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
