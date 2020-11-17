import { get, RESTURL } from "./common";

export const getProject = body => {
  const url = RESTURL.template("/users").toString();
  return get({ url, data: body, withCredentials: true });
};