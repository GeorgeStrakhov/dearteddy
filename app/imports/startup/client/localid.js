/*
 * Checks for local storage support and gets the uuid of the current user (i.e. browser) from the local storage.
 * If no userId in the localstorage - then it's the first visit (we can use it to show some howto
 * If no userId in the localstorage - sets it and save to the Session (Meteor.session)
 */

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

class LocalId {

  constructor() {
    if (typeof(Storage) !== "undefined") {
      this.isSupported = true;
    } else {
      this.isSupported = false;
    }
  }

  getLocalId() {
    this.id = null;
    if(this.isSupported) {
      this.id = localStorage.getItem('user-uuid');
      if (!this.id) {
        this.id = Meteor.uuid();
        localStorage.setItem('user-uuid', this.id);
      }
      Session.set('user-uuid', this.id);
    }
  }

}

export default new LocalId;
