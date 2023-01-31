import { Request, Response } from "express";
import { findMany, insertUnique } from "../repositories/job-repository.js";
import { Job } from "../protocols/Job.js";

function listAll(req: Request, res: Response) {
  const jobs = findMany();

  return res.send(jobs);
}

function insert(req: Request, res: Response) {
  const newJob = req.body as Job; // Variável se comportando como um tipo

  const insertedJob = insertUnique(newJob);

  return res.send(`Job inserido com o id de número: ${insertedJob.id}`);
}

export {
  listAll,
  insert
};
