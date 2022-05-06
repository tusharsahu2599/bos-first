import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function HomeTable() {

    const [rowdata, setrowdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/hotels').
            then(res => {
                setrowdata([...res.data]);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const handleClick = (id) => {
        navigate(`/listing/${id}`);
    }


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
            <select
            style={{
                width: '200px',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '14px',
                fontFamily: 'Helvetica'

            }}
            >
                <option value="">Filter</option>
                <option value="city">City</option>
                <option value="verified">Verified</option>
                <option value="cost">Cost</option>
                <option value="rating">Rating</option>
            </select>

            <select
            style={{
                width: '200px',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '14px',
                fontFamily: 'Helvetica'

            }}
            >
                <option value="">parameter</option>
                <option value="city">City</option>
                <option value="verified">Verified</option>
                <option value="cost">Cost</option>
                <option value="rating">Rating</option>
            </select>

            <select
            style={{
                width: '200px',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                fontSize: '14px',
                fontFamily: 'Helvetica'
            }}
            >
                <option value="">Sort</option>
                <option value="high">High to low</option>
                <option value="low">Low to high</option>
            </select>

        </div>
        <div>
            <table border="2" cellSpacing="0" cellPadding="10" 
            style=
            {{
                width: '100%',
                borderCollapse: 'collapse',
                border: '1px solid #ccc',
                fontFamily: 'Helvetica',
                textAlign: 'center'
            }}
            >
                <thead
                style=
                {{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Helvetica'
                }}
                >
                    <tr
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        fontFamily: 'Helvetica' 
                    }}
                    >
                        <th>id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Capacity</th>
                        <th>Cost per day</th>
                        <th>verified</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody
                style={{
                    backgroundColor: '#f5f5f5',
                    fontSize: '18px',
                    fontFamily: 'Helvetica'
                }}
                >
                    {rowdata.map((row,id) => (
                        
                        <tr
                        onClick={() => {
                            handleClick(row.id);
                        }}
                        key={id}
                        style={{
                            border: '1px solid #ccc',
                            cursor: 'pointer',
                        }}
                        
                        >
                            <td>{row.id}</td>
                            {/* <Link to={`/hotels/${row.id}`}> */}
                            <td
                            style={{
                                fontFamily: 'Helvetica',
                                fontSize: '18px',
                                borderBottom: '1px solid #ccc',
                                color: '#000',
                                textDecoration: 'none',
                            }}
                            >{row.name}</td>
                            {/* </Link> */}
                            <td>{row.city}</td>
                            <td>{row.address}</td>
                            <td>{row.capacity}</td>
                            <td>{row.cost_per_day}</td>
                            <td>{row.verified}</td>
                            <td>{row.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div>
        <Link to="/listing/create">
            <button
            style={{
                width: '100%',
                height: '50px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '10px',
                fontSize: '14px',
                fontFamily: 'Helvetica',
                backgroundColor: '#f5f5f5',
                color: '#000',
                fontWeight: 'bold',
                margin: '10px'
            }}
            >
                Create Hotel
            </button>
        </Link>
        </div>
    </div>

  )
}
export default HomeTable;