import axios, { AxiosRequestConfig } from "axios";
import qs from "querystring";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  paramsSerializer(params) {
    return qs.stringify(params);
  }
});

server.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    NProgress.start();
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

server.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res.data;
  },
  (err) => {
    Promise.reject(err);
  }
);

export default server;

export function getReq(config: AxiosRequestConfig) {
  server({
    ...config,
    method: "GET"
  });
}

export function postReq(config: AxiosRequestConfig) {
  server({
    ...config,
    method: "POST"
  });
}
export function deleteReq(config: AxiosRequestConfig) {
  server({
    ...config,
    method: "DELETE"
  });
}
export function patchReq(config: AxiosRequestConfig) {
  server({
    ...config,
    method: "PATCH"
  });
}
