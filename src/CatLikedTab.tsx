import { Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CatCard from "./CatCard";
import { CAT_RESPONSE } from "./constants";
import { readFromLocalStorage } from "./storage/storage";

const CatLikedTab = () => {
  const [likedCats, setLikedCats] = useState([]);

  useEffect(() => {
    //@ts-ignore
    setLikedCats(readFromLocalStorage());
  }, [likedCats]);

  const likedCatValue = useMemo(() => {
    // TODO: check array is not null or something
    return likedCats?.length; //probablides
  }, [likedCats]);

  return (
    <Stack spacing={2} alignItems={"center"}>
      <div> Gatos likeados {likedCatValue}</div>
      {likedCats?.map((catElement: CAT_RESPONSE) => {
        return <CatCard cat={catElement} key={catElement!.id} />;
      })}
    </Stack>
  );
};

export default CatLikedTab;
