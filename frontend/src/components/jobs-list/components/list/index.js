import React, { useEffect, useState } from "react";
import TotalPageLoader from "./../../../../shared/loader/totalPageLoader";
import ErrorIndicator from "../../../../helper/errorIndicator";
import useScreenSize from "./../../../../hooks/useScreenSize";
import ListJobItem from "./jobItem";
import { NOT_ANNOUNCEMENTS_YET_FA } from "../../../../constant/messages";
import { useDispatch, useSelector } from "react-redux";
import { SERVER_PROPBLEM_FA } from "../../../../constant/errors";
import { getJobListData } from "./data";
import { Frown } from "react-feather";
import { Col } from "reactstrap";
import {
  removeJobListDataAction,
  addJobListDataAction,
} from "./../../../../state/actions/jobActions";
import "./style.css";

const JobLists = () => {
  const { width } = useScreenSize();

  const [jobsCount, setJobsCount] = useState("");
  const [error, setError] = useState(false);
  const jobs = useSelector((store) => store.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataFromServer = async () => {
      let { data, error } = await getJobListData();

      if (error.errorType) {
        dispatch(removeJobListDataAction());
        setError(true);
        return ErrorIndicator();
      }

      setError(false);
      setJobsCount(data.count);
      dispatch(addJobListDataAction(data.result));
    };
    getDataFromServer();
  }, [dispatch]);

  return (
    <ul className="p-0">
      {error && (
        <Col xl="12">
          <p className="d-flex justify-content-center">{SERVER_PROPBLEM_FA}</p>
        </Col>
      )}
      {jobsCount !== 0 ? (
        jobs.length === 0 && <TotalPageLoader />
      ) : (
        <Col xl="12">
          <p className="d-flex justify-content-center align-items-center f-20">
            {NOT_ANNOUNCEMENTS_YET_FA}
            <Frown size={22} className="m-l-10" />
          </p>
        </Col>
      )}
      <ListJobItem jobs={jobs} width={width} />
    </ul>
  );
};

export default JobLists;
