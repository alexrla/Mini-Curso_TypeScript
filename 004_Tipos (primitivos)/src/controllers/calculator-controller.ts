import { Request, Response } from "express";

// Definindo um tipo para a variável
const name: string = "Theo";
const value: number = 2;
const boolValue: boolean = true;

/*
  ! ERROR: const name: string = 2;
  ! ERROR: const value: number = "Theo";
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
