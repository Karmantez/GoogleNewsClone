const setInterceptors = instance => {
  // Add interceptors for request
  instance.interceptors.request.use(
    config => {
      // Add token data to headers
      config.params.apiKey = process.env.REACT_APP_NEWS_API_KEY;
      console.log(config.params);
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // Add interceptors for response
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );
  return instance;
};

export default setInterceptors;
