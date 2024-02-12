import { instance } from ".";
import { saveToken } from "./storage";

const login = async (userInfo) => {
  const res = await instance.post("/api/login", userInfo);
  if (res.token) {
    saveToken(res.data.token);
  }
  return res.data;
};

const register = async (userInfo) => {
  const res = await instance.post("/api/register", userInfo);
  if (res.token) {
    saveToken(res.data.token);
  }
  return res.data;
};

const me = async () => {
  const { data } = await instance.get("/api/me");
  return data;
};

export { login, register, me };
