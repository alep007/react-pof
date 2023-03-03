import { selector, selectorFamily } from "recoil";
import { getRequest } from "../axios/request";
import { GET_METHOD } from "../constants";

export const catListSelector = selector({
  key: "catList",
  get: async () => {
    const response = await getRequest(GET_METHOD);
    return response;
  },
});
