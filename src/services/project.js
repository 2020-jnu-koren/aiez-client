import { get, post, RESTURL } from "./common";

export const getProject = body => {
  const url = RESTURL.template("/projects").toString();
  return get({ url, data: body, withCredentials: true });
};

export const getProjectById = () => {
  const url = RESTURL.template("/projects/user").toString();
  return get({ url, withCredentials: true });
};

export const postProject = body => {
  const url = RESTURL.template("/projects").toString();
  return post({ url, data: body, withCredentials: true });
};
