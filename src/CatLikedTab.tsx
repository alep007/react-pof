import { Stack } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CatCard from "./CatCard";
import { CAT_RESPONSE } from "./constants";
import { readFromLocalStorage } from "./storage/storage";

const CatLikedTab = () => {
  const [likedCats, setLikedCats] = useState([]);

  const likedCatsSum = useMemo(() => {
    if (likedCats !== null) return likedCats.length;
  }, [likedCats]);

  useEffect(() => {
    setLikedCats(readFromLocalStorage());
  }, [likedCats]);

  let render =
    likedCats === null ? (
      <div> no liked cats =(</div>
    ) : (
      likedCats.map((cat: CAT_RESPONSE) => {
        return <CatCard cat={cat} key={cat.id} />;
      })
    );

  return (
    <Stack spacing={2} alignItems={"center"}>
      <div> Gatos likeados {likedCatsSum}</div>
      {render}
    </Stack>
  );
};

export default React.memo(CatLikedTab);
