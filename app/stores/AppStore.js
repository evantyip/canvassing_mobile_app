import { makeObservable, observable, action } from 'mobx';

class AppStore {
  token = '';
  constructor() {
    makeObservable(this, {
      token: observable,
      setToken: action,
    });
  }

  setToken(t) {
    this.token = t;
  }
}

export default AppStore;
