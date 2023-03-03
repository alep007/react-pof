import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CatLikedTab from "./CatLikedTab";
import CatListTab from "./CatListTab";

const Main = () => {
  const [value, setValue] = useState(0);

  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={onChangeTab} centered>
        <Tab label={"gatos"} />
        <Tab label={"mis gatos"} />
      </Tabs>

      {value === 0 ? <CatListTab /> : <CatLikedTab />}
    </>
  );
};

export default Main;
