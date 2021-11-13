import React, { lazy, Suspense } from "react";
import SpinnerLoader from "./../../shared/loader/loader";
import {
  ABOUT_COMPONY_FA,
  COMPONY_ANNOUNCEMENTS_FA,
  COMPONY_INFORMATION_FA,
  COMPONY_NEW_JOB_FA,
  COMPONY_RESUMES,
} from "../../constant/messages";

const ComponyData = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/compony-data"));
  });
});
const NewAnnouncements = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/new-announcement"));
  });
});
const ComponyAnnouncments = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/announcements"));
  });
});

const AboutCompony = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/about-compony"));
  });
});

export const tabs = () => {
  let tab = [
    {
      id: "1",
      eventKey: COMPONY_INFORMATION_FA,
      title: COMPONY_INFORMATION_FA,
      header: {
        title: COMPONY_INFORMATION_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<SpinnerLoader />}>
            <ComponyData />
          </Suspense>
        ),
      },
    },
    {
      id: "2",
      eventKey: COMPONY_ANNOUNCEMENTS_FA,
      title: COMPONY_ANNOUNCEMENTS_FA,
      header: {
        title: COMPONY_ANNOUNCEMENTS_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<SpinnerLoader />}>
            <ComponyAnnouncments />
          </Suspense>
        ),
      },
    },
    {
      id: "3",
      eventKey: COMPONY_NEW_JOB_FA,
      title: COMPONY_NEW_JOB_FA,
      header: {
        title: COMPONY_NEW_JOB_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<SpinnerLoader />}>
            <NewAnnouncements />,
          </Suspense>
        ),
      },
    },
    {
      id: "4",
      eventKey: COMPONY_RESUMES,
      title: COMPONY_RESUMES,
      header: {
        title: COMPONY_RESUMES,
        icon: "",
      },
      body: {
        component: <h1>lskdfj234234</h1>,
      },
    },
    {
      id: "5",
      eventKey: ABOUT_COMPONY_FA,
      title: ABOUT_COMPONY_FA,
      header: {
        title: ABOUT_COMPONY_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<SpinnerLoader />}>
            <AboutCompony />
          </Suspense>
        ),
      },
    },
  ];

  return tab;
};
