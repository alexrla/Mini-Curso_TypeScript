import { Request, Response } from "express";
import { findMany, insertUnique } from "../repositories/job-repository";

function listAll(req: Request, res: Response) {
  const jobs = findMany();

  return res.send(jobs);
}

function insert(req: Request, res: Response) {
  /*
    insertUnique(
      {
        
      }
    );
  */
}

export {
  listAll,
  insert
};
