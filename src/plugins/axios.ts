import Vue, { PluginObject } from 'vue';
import axios, {
  AxiosRequestConfig, AxiosInstance, CancelToken,
  CancelTokenStatic, CancelTokenSource, Canceler, Cancel,
} from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 这里构建用于取消重复请求的代码
const CancelToken: CancelTokenStatic = axios.CancelToken;
const pendingList: string[] = [];

const cancelPending = (key: string, cancel: Canceler, pendings: string[]) => {
  const element = pendings.find((item: string) => {
    return item === key;
  });
  if (element !== undefined) {
    cancel();
  } else {
    pendings.push(key);
  }
};

const removePending = (cfg: AxiosRequestConfig, pendings: string[]) => {
  const key: string = cfg.url! + '&' + cfg.method!;
  const index = pendings.findIndex((item: string) => {
    return item === key;
  });
  if (index !== -1) {
    pendings.splice(index, 1);
  }
};

const config: AxiosRequestConfig = {
  baseURL: 'https://easy-mock.com/mock/5c0e283020e3956ecb888792/',
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const Axios: AxiosInstance = axios.create(config);

Axios.interceptors.request.use(
  (cfg) => {
    // Do something before request is sent
    const source: CancelTokenSource = CancelToken.source();
    cfg.cancelToken = source.token;
    const key: string = cfg.baseURL! + cfg.url! + '&' + cfg.method!;
    cancelPending(key, source.cancel, pendingList);
    return cfg;
  },
  (err) => {
    // Do something with request error
    return Promise.reject(err);
  },
);

// Add a response interceptor
Axios.interceptors.response.use(
  (res) => {
    // Do something with response data
    const cfg: AxiosRequestConfig = res.config;
    removePending(cfg, pendingList);
    return res;
  },
  (err) => {
    // Do something with response error
    const cfg: AxiosRequestConfig = err.config;
    if (cfg !== undefined) {
      removePending(cfg, pendingList);
    }
    return Promise.reject(err);
  },
);

const Plugin: PluginObject<any> = {
  install: (vueInstance) => {
    vueInstance.$axios = Axios;
  },
};
Plugin.install = (vueInstance) => {
  vueInstance.$axios = Axios;
  window.axios = Axios;
  Object.defineProperties(vueInstance.prototype, {
    $axios: {
      get() {
        return Axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
