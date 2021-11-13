import React, { useEffect, useState } from "react";
import TabsContainer from "./../../shared/tabs";
import { Container } from "reactstrap";
import { tabs } from "./tabs";

const PanelCompony = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const step = tabs();
    setData(step);
    return () => {
      setData([]);
    };
  }, []);
  return (
    <>
      <Container>
        <h1 className="m-b-50 f-20 text-dark">داشبورد شرکت</h1>
        <TabsContainer data={data} />
      </Container>
    </>
  );
};

export default PanelCompony;
