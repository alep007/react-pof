import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";

import * as request from "./axios/request";
import { RecoilRoot } from "recoil";
import CatListTab from "./CatListTab";
import "@testing-library/jest-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

jest.mock("react-responsive-carousel/lib/styles/carousel.min.css", () => "");

jest.useFakeTimers();

beforeAll(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

test("renders learn react link", async () => {
  const response = [{ id: "123", url: "anurl", height: 123, width: 321 }];

  jest
    .spyOn(request, "getRequest")
    .mockResolvedValue(Promise.resolve(response));

  const { getByTestId } = render(
    <RecoilRoot>
      <Suspense fallback={<div data-testid="suspense">...</div>}>
        <CatListTab />
      </Suspense>
    </RecoilRoot>
  );
  expect(getByTestId("suspense")).toBeInTheDocument();
  expect(getByTestId("suspense")).toHaveTextContent("...");
  await flushPromisesAndTimers();

  expect(getByTestId("button-refresh")).toBeInTheDocument();
});

function flushPromisesAndTimers(): Promise<void> {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100);
        jest.runAllTimers();
      })
  );
}
