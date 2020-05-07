import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AddusersService {

  constructor(private db: AngularFireDatabase) { }

  create(adduser) {
    return this.db.list('/adduser').push(adduser); // This will create user and push it to database
  }

  getAll() {
    return this.db.list('/adduser'); // This will get all the user from database
  }

  getUser(userId) {
    return this.db.object('/adduser/' + userId);
  }

  update(userId, adduser) {
    return this.db.object('/adduser/' + userId).update(adduser); // This method will update the data from DB
  }

  deletUser(userId) {
    return this.db.object('/adduser/' + userId).remove(); // This method will delete the f*cking user
  }
}
