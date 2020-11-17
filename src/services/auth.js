import { post, RESTURL } from "./common";

export const postLogin = body => {
  const url = RESTURL.template("/users/login").toString();
  return post({ url, data: body, withCredentials: true });
};
