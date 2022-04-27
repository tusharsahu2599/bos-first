import axios from 'axios';
import React,{useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

function HotelDetail() {

    let {id} = useParams();

    const [hotel, setHotel] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/hotels/${id}`).
            then(res => {
                setHotel(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);




  return (
    <div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px',
            padding: '10px',
            fontFamily: 'Helvetica'
        }}>
            <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '14px',
                fontFamily: 'Helvetica'
            }}>
                <img src={hotel.img} alt="hotel" style={{width: '100%', height: '100%'}}/>
            </div>

            <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '14px',
                fontFamily: 'Helvetica'
            }}>
                <h1>{hotel.name}</h1>
                <p>{hotel.address}</p>
                <h2>{hotel.city}</h2>
                <p>{hotel.verified}</p>
                <h2>{hotel.cost_per_day}/-</h2>
                <p>{hotel.rating}🌟</p>
            </div>
        </div>
    </div>
  )
}

export default HotelDetail;