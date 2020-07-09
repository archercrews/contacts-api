import { Router, Request, Response } from "express";
import { Database } from "../data/database";
import { OK, CREATED, BAD_REQUEST } from 'http-status-codes';
import { Contact } from 'src/data/models/contact';

export class ContactsRouter {
  public router = Router();
  public db = new Database();
  
  constructor() {
    this.router.get("/", this.getContacts);
    this.router.get("/:id", this.getContactById);
    this.router.post("/", this.createContact);
    this.router.put("/", this.updateContact);
    this.router.delete("/:id", this.deleteContact)
  }

  getContacts = (req: Request, res: Response) => {
    const contacts = this.db.getAllContacts();
    return res.status(OK).json(contacts);
  }

  getContactById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const contact = await this.db.getById(id);
      return res.status(OK).json(contact);
    } catch (err) {
      return res.status(BAD_REQUEST).json({
        error: err,
      })
    }
  }

  createContact = async (req: Request, res: Response) => {
    const contact: Contact = new Contact(req.body);
    try {
      const newContact = await this.db.createContact(contact);
      return res.status(CREATED).json(newContact);
    } catch (err) {
      return res.status(BAD_REQUEST).json({
        error: err,
      })
    }
  }

  updateContact = async (req: Request, res: Response) => {
    const contact: Contact = req.body;
    try {
      const updatedContact = await this.db.updateContact(contact);
      res.status(OK).json(updatedContact);
    } catch (err) {
      res.status(BAD_REQUEST).json({
        error: err,
      })
    }
  }

  deleteContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await this.db.deleteContact(id);
      res.status(OK).json({ message: "success" });
    } catch (err) {
      res.status(BAD_REQUEST).json({
        error: err,
      })
    }
  }
}