import { post, get, RESTURL } from "./common";

export const postImage = body => {
  const url = RESTURL.template("/images/multi").toString();
  return post({ url, data: body, withCredentials: true });
};

export const getImage = id => {
  const url = RESTURL.template("/images").param({ id }).toString();
  return get({ url, withCredentials: true });
};
