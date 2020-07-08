import { Router } from "express";

export default class Contact {
  public router: Router;
  constructor () {
    this.router = Router();
  }

  public getContact() {
    this.router.get("/", async () => {
      
    })
  }
}