import { Button, Stack } from "@mui/material";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import CatCard from "./CatCard";
import { catListSelector } from "./recoil/catListSelector";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CatListTab = () => {
  const catList = useRecoilValue(catListSelector);

  const refreshList = useRecoilRefresher_UNSTABLE(catListSelector);

  const onClickRefresh = () => {
    refreshList();
  };

  return (
    <Stack spacing={2} alignItems={"center"}>
      <Button data-testid="button-refresh" onClick={onClickRefresh}>
        Refresh
      </Button>
      <Carousel showArrows swipeable>
        {catList?.map((catElement) => {
          return <CatCard cat={catElement} key={catElement.id} />;
        })}
      </Carousel>
    </Stack>
  );
};

export default CatListTab;
