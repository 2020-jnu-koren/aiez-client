import { post, RESTURL } from "./common";

export const postImage = body => {
  const url = RESTURL.template("/images/multi").toString();
  return post({ url, data: body, withCredentials: true });
};
