import { atom } from "recoil";
import { CAT_RESPONSE } from "../constants";

export const selectedCatAtom = atom<CAT_RESPONSE>({
  key: "selectedCat",
});

export const dialogAtom = atom({
  key: "dialogAtom",
  default: false,
});
