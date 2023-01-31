// Importando os tipos prontos do Express
import { Request, Response } from "express";

// Aplicando um tipo aos parâmetros da função
function convertCLTToPJ(req: Request, res: Response) {
  const { salary } = req.query;

  const newSalary = Number(salary) + (Number(salary) * 0.3);

  res.send({
    result: `O seu salário deve ser pelo menos: ${newSalary}`
  });
}

export {
  convertCLTToPJ
};
