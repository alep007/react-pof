export const API_URL = "https://api.thecatapi.com/v1/";

export const GET_METHOD = "images/search?limit=100";

export type CAT_RESPONSE = {
  id: string;
  url: string;
  height: number;
  width: number;
};

export const LIKED_CAT_ITEM = "cats";

export const ADD_ACTION = "ADD_CAT";

export const REMOVE_ACTION = "REMOVE_CAT";
