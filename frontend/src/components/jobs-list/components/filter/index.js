import React from "react";
import CheckboxContainer from "./../../../../shared/form/checkbox";
import { Card, Container, Input } from "reactstrap";
import { addJobListDataAction } from "./../../../../state/actions/jobActions";
import { getJobListData } from "./data";
import { formStructure } from "./formStructure";
import { useDispatch } from "react-redux";
import {
  ENTER_EMAIL_FOR_NEWES,
  NEW_ANNOUNCEMENTS,
  JOBTYPE_TYPE_FA,
  LEVEL_TYPE_FA,
  SALARY_FA,
} from "../../../../constant/messages";
import "./style.css";

const JobListFilter = () => {
  const dispatch = useDispatch();
  var itemsArray = {
    level: [],
    jobtype: [],
  };
  const valueGetter = async (itemToSendTitle, name, status) => {
    if (itemToSendTitle === "level") {
      if (status === true) {
        itemsArray.level.push(name);
      } else {
        const index = itemsArray.level.indexOf(name);
        itemsArray.level.splice(index, 1);
      }
    }
    if (itemToSendTitle === "jobtype") {
      if (status === true) {
        itemsArray.jobtype.push(name);
      } else {
        const index = itemsArray.level.indexOf(name);
        itemsArray.jobtype.splice(index, 1);
      }
    }

    const request = await getJobListData(itemsArray);
    dispatch(addJobListDataAction([]));
    request.status === 200 &&
      setTimeout(() => {
        dispatch(addJobListDataAction(request.result));
      }, 100);
  };

  return (
    <div id="body">
      <Container>
        <Card className="p-3" style={{ background: "#eae8ff" }}>
          <h3 className="f-16">{NEW_ANNOUNCEMENTS}</h3>
          <p className="f-12">{ENTER_EMAIL_FOR_NEWES}</p>
          <Input className="form-control" placeholder="Email" />
        </Card>
      </Container>
      <div>
        <p className="f-18 f-w-400 m-0 p-3">{JOBTYPE_TYPE_FA}</p>
        <div style={{ marginTop: "-30px" }}>
          <CheckboxContainer
            itemData={formStructure.employementType}
            itemToSendTitle="jobtype"
            valueGetter={valueGetter}
            register={{}}
            error={[]}
          />
        </div>
      </div>
      <div>
        <p className="f-18 f-w-400 m-0 p-3">{LEVEL_TYPE_FA}</p>
        <div style={{ marginTop: "-30px" }}>
          <CheckboxContainer
            itemData={formStructure.level}
            valueGetter={valueGetter}
            itemToSendTitle="level"
            register={{}}
            error={[]}
          />
        </div>
      </div>
      <div>
        <p className="f-18 f-w-400 m-0 p-3">{SALARY_FA} </p>
        <div style={{ marginTop: "-30px" }}>
          <CheckboxContainer
            itemData={formStructure.salary}
            valueGetter={valueGetter}
            register={{}}
            error={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default JobListFilter;
