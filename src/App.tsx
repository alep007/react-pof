import { Container } from "@mui/system";
import React from "react";
import { RecoilRoot } from "recoil";
import Main from "./Main";

function App() {
  return (
    <>
      <Container>
        <RecoilRoot>
          <React.Suspense fallback={<div>loading...</div>} >
            <Main />
          </React.Suspense>
        </RecoilRoot>
      </Container>
    </>
  );
}

export default App;
