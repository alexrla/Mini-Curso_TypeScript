import { Request, Response } from "express";

// Tipando as propriedades de um objeto
const job: {
  id: number,
  title: string,
  salary: number,
  skills: string[],
  isRemote: boolean,
  until: string | Date
} = {
  id: 1,
  title: "Tech Lead",
  salary: 4000,
  skills: ["React", "Node.js"],
  isRemote: true,
  until: "2023-02-25"
};

const jobs: {
  id?: number, // Propriedade opcional (pode ter/não ter, mas se tiver, deve ser do tipo Number)
  title: string,
  salary: number,
  skills: string[],
  isRemote: boolean,
  until: string | Date
}[] = [
  {
    id: 1,
    title: "Tech Lead",
    salary: 4000,
    skills: ["React", "Node.js"],
    isRemote: true,
    until: "2023-02-25"
  },
  {
    title: "Developer",
    salary: 2500,
    skills: ["React", "Node.js", "TypeScript"],
    isRemote: true,
    until: "2023-02-20"
  }
];

function listAll(req: Request, res: Response) {
  return res.send(jobs);
}

function getJob(req: Request, res: Response) {
  return res.send(job);
}

export {
  listAll,
  getJob
};
