import jobs from "../database/data.js";
import { Job } from "../protocols/Job.js";

function findMany() {
  return jobs;
}

function insertUnique(job: Job) {
  job.id = jobs.length + 1;
  jobs.push(job);
  return job;
}

export {
  findMany,
  insertUnique
};
