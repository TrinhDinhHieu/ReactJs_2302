import axios from "axios";

const GetDataVirusCorona = async () => {
  const url = "https://api.covid19api.com/summary";
  const reponse = await axios.get(url);
  return await reponse.status === 200 ? await reponse.data : {};
};
export const api = {
  GetDataVirusCorona
};
