type Job = {
  id?: number, 
  title: string,
  salary: number,
  skills: string[],
  isRemote: boolean,
  until: string | Date
};

// Utilizando o tipo criado
const jobs: Job[] = [
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

function insertUnique(job: Job) {
  jobs.push(job);
}

export {
  findMany,
  insertUnique
};
