import { Request, Response } from "express";

// Operador Union - com variáveis
let result: boolean | number = true;
result = 2;

// Operador Union - com arrays
const jobs: (string | boolean)[] = ["Tech Lead", true];


function listAll(req: Request, res: Response) {

}

export {
  listAll
};
