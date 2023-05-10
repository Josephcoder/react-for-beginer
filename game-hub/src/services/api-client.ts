import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0e4df10e396040689bfd215eabdae94f",
  },
});
