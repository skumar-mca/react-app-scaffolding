import axios from "axios";
import { lodashIncludes, lodashGet, lodashFind, lodashIsString } from "helpers/lodash-wrapper";
import commonActions from "./common.actions";

const SilentRequestURLs = [
  '/v1/login',
  'silent=1',
];

const isSilentAPICall = (url) => {
  const isSilentURL = lodashFind(SilentRequestURLs, (itm) => {
    return url.indexOf(itm) > -1;
  });

  return isSilentURL != null
}

let currentRequests = 0;
const setupInterceptors = store => {
  // Request Interceptor
  axios.interceptors.request.use(config => {
    const isSilentURL = isSilentAPICall(config.url);
    if (!isSilentURL) {
      currentRequests++;
      store.dispatch(commonActions.setLoader(true));
    }

    return new Promise((resolve, reject) => {
      config.headers.Authorization = `Token <TOKEN_HERE>`;
      resolve(config)
    });

  });

  // Response Interceptor
  axios.interceptors.response.use(
    response => {
      const isSilentURL = isSilentAPICall(response.config.url);
      if (!isSilentURL) {
        currentRequests--;
        if (currentRequests <= 0) {
          store.dispatch(commonActions.setLoader(false));
        }
      }

      if (response && response.data) {
        // Strip out )]} string, is response is string. This is done to prevent XSS attacks.
        if (lodashIsString(response.data)) {
          // Parse JSON for security
          let updateData = response.data.replace(")]}", "");
          response.data = JSON.parse(updateData);
        }
      }
      return response;
    },
    error => {
      currentRequests = 0;
      const status = error.response ? error.response.status : null;
      if (lodashIncludes([401], status)) {
        store.dispatch(commonActions.setLoader(false));
        return Promise.reject(error);
      }

      const isSilentURL = isSilentAPICall(lodashGet(error, 'config.url', ''));
      if (!isSilentURL) {
        store.dispatch(commonActions.setLoader(false));
      }
      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;

