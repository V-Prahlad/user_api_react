import React, { useState } from "react";
import { HeartFilled, EditFilled, DeleteFilled } from "@ant-design/icons";

const Card = ({ data, handleDelete }) => {
  const [userData, setUserData] = useState({ ...data });

  const handleChecked = () => {
    const obj = { ...userData };
    obj.status = !obj.status;
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
            className={userData.status ? "liked__heart" : ""}
            id="card__button_heart"
            onClick={() => handleChecked()}
          />
        </div>
        <div className="card__button_edit">
          <EditFilled />
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
