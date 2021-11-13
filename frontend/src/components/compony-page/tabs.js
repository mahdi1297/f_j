import React, { lazy, Suspense } from "react";
import {
  COMPONY_INTRODUCTION,
  COMPONY_INTRODUCTION_FA,
  OWN_COMPONY_ANNOUNCEMENTS,
  OWN_COMPONY_ANNOUNCEMENTS_FA,
} from "../../constant/messages";
import TotalPageLoader from "../../shared/loader/totalPageLoader";

const ComponyIntroduction = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/compony-introduction/introduction"));
  });
});
const ComponyJobs = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/compony-jobs"));
  });
});

export const tabItems = () => {
  let steps = [
    {
      id: "1",
      eventKey: COMPONY_INTRODUCTION,
      title: COMPONY_INTRODUCTION_FA,
      header: {
        title: COMPONY_INTRODUCTION_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<TotalPageLoader />}>
            <ComponyIntroduction />
          </Suspense>
        ),
      },
    },
    {
      id: "2",
      eventKey: OWN_COMPONY_ANNOUNCEMENTS,
      title: OWN_COMPONY_ANNOUNCEMENTS_FA,
      header: {
        title: OWN_COMPONY_ANNOUNCEMENTS_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<TotalPageLoader />}>
            <ComponyJobs />
          </Suspense>
        ),
      },
    },
  ];

  return steps;
};
