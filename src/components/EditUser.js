import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import "antd/dist/antd.css";
import { Modal, Input } from "antd";

const EditUser = ({ userData, model, setShowmodel, callBack }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [inputName, setInputName] = useState(userData?.fullName ?? "");
  const [inputEmail, setInputEmail] = useState(userData?.email ?? "");
  const [inputPhone, setInputPhone] = useState(userData?.phone ?? "");

  const handleOk = () => {
    const obj = {
      ...userData,
      fullName: inputName,
      email: inputEmail,
      phone: inputPhone,
    };
    setShowmodel(false);
    callBack(obj);
  };

  const handleCancel = () => {
    setShowmodel(false);
  };

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setInputPhone(e.target.value);
  };

  return (
    <>
      <Modal
        title="Edit User"
        visible={model}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Name"
            value={inputName}
            type="name"
            name="name"
            required
            {...register("name", { required: true })}
            onChange={handleChangeName}
          />
          <Input
            type="email"
            value={inputEmail}
            name="email"
            {...register("email", { required: true })}
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <Input
            type="phone"
            value={inputPhone}
            name="phone"
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            onChange={handleChangePhone}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditUser;
