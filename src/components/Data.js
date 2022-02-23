import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const userUrl = "https://randomuser.me/api//?results=10";

function Data() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(userUrl)
      .then((response) => {
        let users = [];
        response.data.results.map((user, index) => {
          console.log(user);
          let userObj = {
            id: user?.login?.uuid,
            profile: user?.picture?.medium,
            fullName: user?.name?.first + " " + user?.name?.last,
            email: user?.email,
            phone: user?.phone,
            city: user?.location?.city,
            status: false,
            index,
          };
          return users.push(userObj);
        });
        console.log(users);
        setUserData(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (obj) => {
    const arr = [...userData];
    arr.splice(obj.index, 1);
    setUserData(arr);
  };

  return (
    <div className="data">
      {userData.map((data) => (
        <Card key={data?.id} data={data} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Data;
