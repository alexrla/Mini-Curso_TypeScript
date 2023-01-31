import { Request, Response } from "express";

const jobs: string[] = ["Tech Lead", "Developer"];

/*
  ! ERROR: const jobs: string[] = ["Tech Lead", "Developer", 2];
*/

function listAll(req: Request, res: Response) {

}

export {
  listAll
};
