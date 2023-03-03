import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { CAT_RESPONSE } from "./constants";
import Image from "mui-image";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { dialogAtom, selectedCatAtom } from "./recoil/atom";
import CatDialog from "./CatDialog";
import React from "react";

const CatCard = ({ cat }: { cat: CAT_RESPONSE }) => {
  const [showDialog, setDialog] = useRecoilState(dialogAtom);

  const setSelectedCat = useSetRecoilState(selectedCatAtom);

  const onClickCard = () => {
    setDialog(true);
    setSelectedCat(cat);
  };

  return (
    <Container sx={{ width: 600, height: 400, alignContent: "center" }}>
      {showDialog ? <CatDialog /> : null}
      <Card onClick={onClickCard}>
        <CardHeader title={`GATO #${cat.id}`} />
        <CardContent>
          <Image
            src={cat.url}
            width={500}
            height={350}
            duration={100}
            shiftDuration={100}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default React.memo(CatCard);
