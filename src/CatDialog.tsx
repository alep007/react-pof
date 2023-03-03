import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { dialogAtom, selectedCatAtom } from "./recoil/atom";
import Image from "mui-image";
import { writeToLocalStorage } from "./storage/storage";
import { ADD_ACTION, REMOVE_ACTION } from "./constants";
import { useReducer } from "react";

/**
 * Displays a dialog,
 * reads the value from recoil (selectedCatAtom)
 * has functions to Like/Dislike a cat and updates the local storage
 * @returns
 */
const CatDialog = () => {
  const selectedCat = useRecoilValue(selectedCatAtom);
  const [showDialog, setDialog] = useRecoilState(dialogAtom);

  const onClickDislike = () => {
    writeToLocalStorage(selectedCat, REMOVE_ACTION);
    setDialog(false);
  };
  /**
   *
   */
  const onClickLike = () => {
    writeToLocalStorage(selectedCat, ADD_ACTION);
    setDialog(false);
  };

  return (
    <Dialog open={showDialog}>
      <DialogTitle>{selectedCat.id}</DialogTitle>
      <DialogContent>
        <Image
          src={selectedCat.url}
          height={selectedCat.height}
          width={selectedCat.width}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickDislike}> Dislike </Button>
        <Button onClick={onClickLike}> Like :)</Button>
      </DialogActions>
    </Dialog>
  );
};

export default useReducer(CatDialog);
