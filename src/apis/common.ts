import axios, { type AxiosError } from "axios";


const httpClient = axios.create({
  timeout: 60000,
  withCredentials: true,
});

httpClient.interceptors.request.use((config) => {
  config.headers.pragma = "no-cache";
  config.headers["X-Requested-With"] = "XMLHttpRequest";



  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res?.state === "200" ) {

      return res?.body;
    }
    return Promise.reject(
      new Error(
        res?.message,
      ),
    );
  },
  (error: AxiosError) => {

    return Promise.reject(error);
  },
);

export { httpClient };
