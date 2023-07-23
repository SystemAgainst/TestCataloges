const index = {
  local: {
    apiBaseURI: "http://localhost:8080",
  },
  prod: {
    apiBaseURI: "https://nlstar.com/ru/api",
  },
};

let config = index.prod;

export default Object.freeze(config);
