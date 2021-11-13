/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ComponyPageHeader from "./components/header";
import TabsContainer from "../../shared/tabs";
import { getComponyData, getComponyInfoData } from "./data";
import { Col, Container } from "reactstrap";
import { componyAction } from "../../state/actions/compoyActions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { tabItems } from "./tabs";
import "./style.css";

const ComponyPage = () => {
  const { _id } = useParams();

  const [data, setData] = useState({});
  const [tabs, seTabs] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const componyDataGetter = async () => {
      if (_id !== undefined) {
        const request = await getComponyData(_id);
        setData(request.result);
        const response = await getComponyInfoData(_id);

        dispatch(
          componyAction({
            compony: request.result,
            info: response.data.result,
          })
        );
      }
    };
    const getTabs = () => {
      const tab = tabItems();
      seTabs(tab);
    };

    componyDataGetter();
    getTabs();
  }, [seTabs, _id]);

  return (
    <Container className="p-0">
      <ComponyPageHeader data={data} />

      <Col className="m-t-50">
        <TabsContainer data={tabs} color="primary" />
      </Col>
    </Container>
  );
};

export default ComponyPage;
