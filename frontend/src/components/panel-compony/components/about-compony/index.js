import React, { lazy, Suspense } from "react";
import SpinnerLoader from "./../../../../shared/loader/loader";
import { ABOUT_COMPONY_FA } from "../../../../constant/messages";
import { Card, Container } from "reactstrap";

const AddMemeberSection = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./sections/addMemeberSection"));
  });
});
const AboutComponySection = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./sections/componyAbout"));
  });
});
const ComponyHistoySection = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./sections/componyHistory"));
  });
});

const AboutCompony = () => {
  return (
    <Container>
      <Card className="p-3">
        <h1
          className="f-22 m-b-30 m-t-30 p-b-20"
          style={{ borderBottom: "1px solid #ccc" }}
        >
          {ABOUT_COMPONY_FA}
        </h1>
        <div>
          <Suspense fallback={<SpinnerLoader />}>
            <AddMemeberSection />
          </Suspense>
          <div style={{ borderBottom: "1px solid #ccc" }}></div>
          <Suspense fallback={<SpinnerLoader />}>
            <ComponyHistoySection />
          </Suspense>
          <div style={{ borderBottom: "1px solid #ccc" }}></div>
          <Suspense fallback={<SpinnerLoader />}>
            <AboutComponySection />
          </Suspense>
        </div>
      </Card>
    </Container>
  );
};

export default AboutCompony;
