import React, { useState } from "react";
function ApiTest() {
  const [data, setdata] = useState([]);

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((data) => {
  //     return data.json();
  //   })
  //   .then((data2) => {
  //     console.log(data2);
  //     setdata(data2);
  //   });

  // async function getsums() {
  //   return 5;
  // }

  // async function display() {
  //   const x = await getsums();
  //   console.log(x);
  // }
  // display();
  // getsums().then((data) => {
  //   console.log(data);
  // });

  return (
    <div>
      {/* {data.map((user: any) => (
        <div key={user.id}>
          <div>{user.id}</div>
          <div>{user.name}</div>
        </div>
      ))} */}
    </div>
  );
}

export default ApiTest;
