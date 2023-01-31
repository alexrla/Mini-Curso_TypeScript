import { Request, Response } from "express";

// Inferência de tipo
let otherValue = "Alex"; // string

/*
  ! ERROR: otherValue = 2;
*/

function isOdd(num) {
  if(num % 2 !== 0) return true;
  else return false; 
}

let result = isOdd(1); // boolean

/*
  ! ERROR: result = 4;
  ! ERROR: result = "Léo";
*/

function convertCLTToPJ(req: Request, res: Response) {
  const { salary } = req.query; // string

  const newSalary = Number(salary) + (Number(salary) * 0.3);

  res.send({
    result: `O seu salário deve ser pelo menos: ${newSalary}`
  });
}

export {
  convertCLTToPJ
};
