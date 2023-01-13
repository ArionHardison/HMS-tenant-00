import Echo from "laravel-echo";

window.io = require("socket.io-client");

export default ({store}) => {
  window.Echo = new Echo({
    broadcaster: "socket.io",
    host: `${
      process.env.NODE_ENV === "development"
        ? process.env.SOCKET_URL_DEV
        : "https://app.codify.solutions"
    }`,
    authEndpoint: `${
      process.env.NODE_ENV === "development"
        ? process.env.CORE_URL_DEV
        : "https://codify.solutions"
    }/broadcasting/tenant`,
    auth: {
      headers: {
        Authorization: `Bearer ${store.state.authData.accessToken}`,
        "X-Client": store.state.initializedId,
      },
    },
  });
};
