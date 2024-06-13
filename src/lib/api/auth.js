import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const signUp = async ({ id, password, nickname }) => {
  const response = await axios.post(AUTH_API_HOST + "/signup", {
    id: id,
    password: password,
    nickname: nickname,
  });
  return response;
};
