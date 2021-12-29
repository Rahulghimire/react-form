import React, { useState } from "react";
import axios from "axios";
const PostForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState(0);
  const [city, setCity] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    const postData = {
      name,
      email,
      phoneNumber,
      address: {
        country,
        state,
        city,
      },
    };
    console.log(postData);
    if (state === 0) {
      alert("State should not be 0");
      return;
    }
    await axios
      .post(`https://api.najikai.com/api/v2/rahul`, postData)
      .then((response) => {
        if (response.data.status) {
          alert("Success");
        } else {
          alert("fail");
        }
      });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              Name:
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              Email:
              <input
                type="text"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              Phone:
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              Country:
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              State:
              <input
                required
                type="number"
                value={state}
                onChange={(e) => setState(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>
              City:
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </td>
          </tr>
          <input type="submit" />
        </table>
      </form>
    </div>
  );
};

export default PostForm;
