import React from "react";
import { Edit, List, Trash } from "react-feather";
import { Card, Col, Row } from "reactstrap";
import { COMPONY_MEMBERS_FA } from "../../../../../../constant/messages";
import ImageContainer from "../../../../../../shared/image";

const MemberList = ({ members }) => {
  return (
    <Card className="m-t-20 p-0">
      <Row className="m-t-30 p-0">
        <Col xl="11">
          <h1 className="f-20 m-t-30 d-flex align-items-center">
            <List size={18} color={"#7366ff"} className="m-r-10" />
            {COMPONY_MEMBERS_FA}
          </h1>
        </Col>
        <ul className="w-100">
          {members &&
            members.map((m, l) => (
              <li
                key={l}
                className="p-2 m-4 b-r-10"
                style={{ boxShadow: "1px 3px 5px #ccc" }}
              >
                <Row className="p-0 m-0 d-flex justify-content-between align-items-center">
                  <Col
                    xl="11"
                    xs="11"
                    sm="11"
                    className="p-0 d-flex justify-content-start align-items-center"
                  >
                    <ImageContainer
                      src={m.memeberimage}
                      alt="x"
                      width="60"
                      radiusClass="b-r-10"
                    />
                    <div className="p-2 m-l-10">
                      <h1 className="f-20 m-b-30 m-t-30">{m.memberusername}</h1>
                      <p>{m.memberrole}</p>
                    </div>
                  </Col>
                  <Col
                    xl="1"
                    xs="1"
                    sm="1"
                    className="p-0 m-0 d-flex justify-content-end"
                  >
                    <div
                      className="m-r-5  "
                      style={{ width: "18px", height: "18px" }}
                    >
                      <Trash size={18} className="cursor-pointer text-danger" />
                    </div>
                    <div
                      className="m-r-5  "
                      style={{ width: "18px", height: "18px" }}
                    >
                      <Edit size={18} className=" cursor-pointer" />
                    </div>
                  </Col>
                </Row>
                <Col xl="12">
                  <p className="p-3 f-14">{m.aboutmember}</p>
                </Col>
              </li>
            ))}
        </ul>
      </Row>
    </Card>
  );
};

export default MemberList;
