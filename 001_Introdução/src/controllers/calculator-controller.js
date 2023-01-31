function convertCLTToPJ(req, res) {
  const { salary } = req.query; // string

  const newSalary = salary + (salary * 0.3);

  res.send({
    result: `O seu salário deve ser pelo menos: ${newSalary}`
  });
}

export {
  convertCLTToPJ
};
