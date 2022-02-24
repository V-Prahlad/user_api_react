import React, { useState } from "react";
import { HeartFilled, EditFilled, DeleteFilled } from "@ant-design/icons";
import EditUser from "./EditUser";

const Card = ({ data, handleDelete }) => {
  const [userData, setUserData] = useState({ ...data });
  const [showmodel, setShowmodel] = useState(false);

  const handleChecked = () => {
    const obj = { ...userData };
    obj.status = !obj.status;
    setUserData(obj);
  };

  const handleEdit = (obj) => {
    setShowmodel(true);
  };

  const handleCallBack = (obj) => {
    setUserData(obj);
  };
  return (
    <div className="card">
      <div className="card__image">
        <img src={userData?.profile} alt="" />
      </div>
      <div className="card__name">
        <span>{userData?.fullName} </span>
      </div>
      <div className="card__email">
        <span> {userData?.email}</span>
      </div>
      <div className="card__phone">
        <span> {userData?.phone}</span>
      </div>
      <div className="card__button">
        <div>
          <HeartFilled
            id={userData.status ? "liked__heart" : ""}
            className="card__button_heart"
            onClick={() => handleChecked()}
          />
        </div>
        <div className="card__button_edit">
          <EditFilled
            onClick={() => {
              handleEdit(userData);
            }}
          />
          <EditUser
            userData={userData}
            model={showmodel}
            setShowmodel={setShowmodel}
            callBack={handleCallBack}
          />
        </div>
        <div>
          <DeleteFilled
            onClick={() => {
              handleDelete(userData);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
