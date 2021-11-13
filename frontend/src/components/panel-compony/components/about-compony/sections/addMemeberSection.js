import React, { useEffect, useState } from "react";
import FormContainer from "./../../../../../shared/form/formContainer";
import MemberList from "./components/memberList";
import { getComponyData, submitAboutComponyData } from "./data";
import { ArrowLeft, ArrowDown, Plus, X } from "react-feather";
import { Button, Card, Col } from "reactstrap";
import { formStrcuture } from "./formStructure";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  REGISTER_COMPONY_MEMBER_FA,
  ADD_COMPONY_MEMBER_FA,
  NO_ITEM_EXISTS_FA,
  CANCEL_FA,
} from "../../../../../constant/messages";

const AddComponyMemberSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const token = useSelector((store) => store.token);

  const [addMemeberWindwo, setAddMemberWindow] = useState(false);
  const [members, setMembers] = useState([]);
  const [memberCount, setMemberCount] = useState("");

  const getComponyInfoData = async (token) => {
    const response = await getComponyData(token);

    if (response.result !== null || response.result !== undefined) {
      if (response.result.memebers) {
        setMembers(response.result.memebers || "");
        setMemberCount(response.result.memebers.length || 0);
      }
    }
  };

  useEffect(() => {
    setMembers([]);
    getComponyInfoData(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addMemberSubmitHandler = async (data, e) => {
    const refinedData = {
      componyid: token._id,
      update_type: "member",
      memberusername: data.memberusername,
      memberrole: data.memberrole,
      memeberimage: data.memeberimage,
      aboutmember: data.aboutmember,
    };
    await submitAboutComponyData(refinedData);

    getComponyInfoData(token._id);
    reset();
    e.target.reset();
  };

  const addUserWindowOpenHnalder = () => setAddMemberWindow(true);
  const addUserWindowCloseHnalder = () => setAddMemberWindow(false);

  return (
    <>
      <Card className="p-0 m-0">
        <div className="d-flex align-items-center">
          <Col xl="11" className="p-0">
            <h1 className="f-20 m-b-30 m-t-30 d-flex align-items-center">
              <Plus size={18} color={"#7366ff"} className="m-r-10" />
              {ADD_COMPONY_MEMBER_FA}
            </h1>
          </Col>
          <Col xl="1" className="p-0 d-flex justify-content-end">
            {addMemeberWindwo ? (
              <ArrowLeft
                className="cursor-pointer display-block"
                size={18}
                onClick={addUserWindowCloseHnalder}
              />
            ) : (
              <ArrowDown
                className="cursor-pointer display-block"
                size={18}
                onClick={addUserWindowOpenHnalder}
              />
            )}
          </Col>
        </div>
        <div>
          <Col className="p-0" xl="12">
            {addMemeberWindwo && (
              <div className="p-3 b-r-5" style={{ border: "1px solid #ccc" }}>
                <form onSubmit={handleSubmit(addMemberSubmitHandler)}>
                  <FormContainer
                    data={formStrcuture.addMemberForm}
                    register={register}
                    errors={errors}
                  />
                  <div className="d-flex justify-content-between">
                    <Button
                      type="button"
                      color="danger"
                      onClick={addUserWindowCloseHnalder}
                    >
                      {CANCEL_FA}
                    </Button>
                    <Button type="submit" color="primary">
                      {REGISTER_COMPONY_MEMBER_FA}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </Col>
        </div>
      </Card>
      {memberCount && memberCount === 0 ? (
        <Col xl="12">
          <p className="d-flex justify-content-center align-items-center">
            {NO_ITEM_EXISTS_FA}
            <X size={16} color="red" className="m-l-10 m-t-2" />
          </p>
        </Col>
      ) : (
        <MemberList members={members} />
      )}
    </>
  );
};

export default AddComponyMemberSection;
