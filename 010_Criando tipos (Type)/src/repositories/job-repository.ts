// Criando tipo (convenção: iniciar com letra maiúscula, o nome/identificador do tipo)
type Job = {
  id?: number, 
  title: string,
  salary: number,
  skills: string[],
  isRemote: boolean,
  until: string | Date
};

const jobs: {
  id?: number, 
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

function findMany() {
  return jobs;
}

function insertUnique(job: {
  id?: number, 
  title: string,
  salary: number,
  skills: string[],
  isRemote: boolean,
  until: string | Date
}) {
  jobs.push(job);
}

export {
  findMany,
  insertUnique
};
