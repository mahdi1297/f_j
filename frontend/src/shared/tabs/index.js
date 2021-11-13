/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Col } from "reactstrap";
import "./style.css";

const TabsContainer = ({ data, color }) => {
  const [key, setKey] = useState();

  useEffect(() => {
    data.forEach((element) => {
      setKey(element.header.title);
    });
  }, []);

  return (
    <Col sm="12" xl="12" className="p-0">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        variant="pills"
      >
        {data.map(
          (item) =>
            item.eventKey && (
              <Tab
                key={item.id}
                eventKey={item.eventKey}
                title={item.header.title}
                unmountOnExit={true}
              >
                {item.body.component}
              </Tab>
            )
        )}
      </Tabs>
    </Col>
  );
};

export default TabsContainer;
