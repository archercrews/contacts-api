import Datastore from "nedb";
import { Contact } from './contact';

export class Database {
  public db: Datastore = new Datastore("./contacts.json");
  
  constructor() {
    this.db = new Datastore("./contacts.json");
    this.db.loadDatabase();
  }

  public getAllContacts() {
    return this.db.getAllData();
  }

  public getById(id: string) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ id: parseInt(id) }, (err, contact) => {
        if (err) {
          reject("Unable to retrieve contact: " + err);
        }
        resolve(contact);
      })
    })
  }

  public createContact(contact: any) {
    return new Promise((resolve, reject) => {
      this.db.insert(contact, (err, newContact) => {
        if (err) {
          reject("Unable to create contact: " + err);
        }
        resolve(newContact);
      })
    }) 
  }

  public updateContact(contact: Contact) {
    return new Promise((resolve, reject) => {
      this.db.update({ id: contact.id }, contact, { returnUpdatedDocs: true }, (err, num, updatedContact) => {
        if (err) {
          reject("Unable to update contact: " + err);
        }
        resolve(updatedContact);
      })
    })
  }

  public deleteContact(id: string) {
    return new Promise((resolve, reject) => {
      this.db.remove({ id: parseInt(id) }, (err) => {
        if (err) {
          reject("Unable to remove contact: " + err);
        }
        resolve();
      })
    })
  }
  
};