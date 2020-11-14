import UrlAssembelr from "url-assembler";
import axios from "axios";

export const RESTURL = UrlAssembelr("http://116.89.189.12");

const METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE"
};

function getHeaders(token) {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return { headers };
}

function axiosWrap(params) {
  const headers = getHeaders(params?.token);
  return axios({
    ...headers,
    ...params
  });
}

export async function get(params) {
  return axiosWrap({
    method: METHOD.GET,
    ...params
  });
}

export async function post(params) {
  return axiosWrap({
    method: METHOD.POST,
    ...params
  });
}

export async function put(params) {
  return axiosWrap({
    method: METHOD.PUT,
    ...params
  });
}

export async function Delete(params) {
  return axiosWrap({
    method: METHOD.DELETE,
    ...params
  });
}
