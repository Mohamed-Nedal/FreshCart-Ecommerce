import axios from "axios";
import store from "../../store/store";
import router from "../../router";

const getPrivateAxios = () => {
  const user = store.getState().user.user;

  const req = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      token: `${user ? user.token : null}`,
    },
  });

  req.interceptors.request.use((config) => {
    if (!user) {
      router.navigate("/login");
      return Promise.reject(new Error("Please Login to Continue!!!"));
    }
    return config;
  });

  return req;
};

export default getPrivateAxios;
