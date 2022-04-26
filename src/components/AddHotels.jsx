import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddHotels() {
  const [hotel, setHotel] = useState({
    name: "",
    city: "",
    address: "",
    capacity: "",
    cost_per_day: "",
    verified: "",
    rating: "",
    img: "",
  });

  const [hotels, setHotels] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/hotels", hotel)
      .then((res) => {
        console.log(res);
        setHotels([...hotels, res.data]);
        setHotel({
          name: "",
          city: "",
          address: "",
          capacity: "",
          cost_per_day: "",
          verified: "",
          rating: "",
          img: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setHotel({
      ...hotel,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Add Hotels</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "left",
          margin: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          padding: "10px",
          fontFamily: "Helvetica",
          lineHeight: "1.5",
        }}
        onSubmit={handleSubmit}
      >
        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'

        }}
          type="text"
          name="name"
          placeholder="Name"
          value={hotel.name}
          onChange={handleChange}
        />
        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'
            
        }}

          type="text"
          name="city"
          placeholder="City"
          value={hotel.city}
          onChange={handleChange}
        />
        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'
            
        }}
          type="text"
          name="address"
          placeholder="Address"
          value={hotel.address}
          onChange={handleChange}
        />
        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'
            
        }}
          type="text"
          name="capacity"
          placeholder="Capacity"
          value={hotel.capacity}
          onChange={handleChange}
        />

        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'
            
        }}
          type="text"
          name="cost_per_day"
          placeholder="Cost"
          value={hotel.cost_per_day}
          onChange={handleChange}
        />
        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'
        }}
            type="text"
            name="verified"
            placeholder="Verified"
            value={hotel.verified}
            onChange={handleChange}
        />
        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'
            
        }}
          type="text"
          name="rating"
          placeholder="Rating"
          value={hotel.rating}
          onChange={handleChange}
        />
        <input
        style={{
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            fontSize: '14px',
            fontFamily: 'Helvetica'
            
        }}
          type="text"
          name="img"
          placeholder="Image"
          value={hotel.img}
          onChange={handleChange}
        />
        <button
            style={{
                width: '200px',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '14px',
                fontFamily: 'Helvetica',
                backgroundColor: 'teal',
                color: 'white',
                cursor: 'pointer'

            }}
         type="submit">Add Hotel</button>
      </form>
      <Link to="/">
        <button
            style={{
                width: '200px',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '14px',
                fontFamily: 'Helvetica',
                backgroundColor: 'teal',
                color: 'white',
                cursor: 'pointer'

            }}
         type="submit">
            Back
        </button>
      </Link>
    </div>
  );
}

export default AddHotels;
