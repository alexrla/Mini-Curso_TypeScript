export type Job = {
  id?: number, 
  title: string,
  salary: number,
  skills: string[],
  isRemote: boolean,
  until: string | Date
};
