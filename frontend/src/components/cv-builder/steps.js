import React, { lazy, Suspense } from "react";
import TotalPageLoader from "./../../shared/loader/totalPageLoader";
import {
  ADDRESS_INFORMATION,
  EDUCATION_WORK_EXPERIENCE_FA,
  PERSONAL_INFORMATION,
  SKILLS_FA,
} from "../../constant/messages";

const CvBuilderPersonalInfo = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/personal-info"));
  });
});
const CvBuilderExperienceInfo = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/education-work-experience"));
  });
});
const CvBuilderAddressInfo = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/address-info"));
  });
});
const CvBuilderSkillsInfo = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/skills-info"));
  });
});


export const steps = () => {
  let steps = [
    {
      id: "1",
      eventKey: PERSONAL_INFORMATION,
      title: PERSONAL_INFORMATION,
      header: {
        title: PERSONAL_INFORMATION,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<TotalPageLoader className="m-t-50" />}>
            <CvBuilderPersonalInfo />
          </Suspense>
        ),
      },
    },
    {
      id: "2",
      eventKey: ADDRESS_INFORMATION,
      title: ADDRESS_INFORMATION,
      header: {
        title: ADDRESS_INFORMATION,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<TotalPageLoader className="m-t-50" />}>
            <CvBuilderAddressInfo />,
          </Suspense>
        ),
      },
    },
    {
      id: "3",
      eventKey: SKILLS_FA,
      title: SKILLS_FA,
      header: {
        title: SKILLS_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<TotalPageLoader className="m-t-50" />}>
            <CvBuilderSkillsInfo />,
          </Suspense>
        ),
      },
    },
    {
      id: "4",
      eventKey: EDUCATION_WORK_EXPERIENCE_FA,
      title: EDUCATION_WORK_EXPERIENCE_FA,
      header: {
        title: EDUCATION_WORK_EXPERIENCE_FA,
        icon: "",
      },
      body: {
        component: (
          <Suspense fallback={<TotalPageLoader className="m-t-50" />}>
            <CvBuilderExperienceInfo />
          </Suspense>
        ),
      },
    },
  ];

  return steps;
};
