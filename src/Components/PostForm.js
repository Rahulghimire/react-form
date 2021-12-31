import React, { useState } from "react";
import axios from "axios";
const PostForm = ({ persons }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState(0);
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const theChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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

  // useEffect(() => {
  //   async function deletePost() {
  //     await axios.delete("https://reqres.in/api/posts/1");
  //     setStatus("Delete successful");
  //   }

  //   deletePost();
  // }, []);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <label htmlFor="">Phone:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br></br>
          <label htmlFor="">Country:</label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <br></br>
          <label htmlFor="">State:</label>
          <input
            required
            type="number"
            value={state}
            onChange={(e) => setState(parseInt(e.target.value))}
          />
          <br></br>
          <label htmlFor="">City:</label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br></br>
          <input type="submit" />
        </div>
      </form>
      <label htmlFor="">Filter Method:</label>
      <input
        type="text"
        placeholder="type something......"
        onChange={theChange}
      />
      {/* filter method */}
      {persons
        .filter((person) => {
          if (person.name.toLowerCase().includes(search.toLowerCase())) {
            return person;
          } else if (search === "") {
            return person;
          }
        })
        .map((person) => {
          return <div>{person.name}</div>;
        })}
    </div>
  );
};

export default PostForm;
