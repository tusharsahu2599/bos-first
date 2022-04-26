import React from 'react';
import HomeTable from './HomeTable';

const Home = () => {
    return (
        <div>
            <h1
            style={{ 
                backgroundColor: 'teal',
                borderRadius: '5px',
                padding: '10px',
                fontFamily: 'Helvetica',
                fontSize: '20px',
                textAlign: 'center'
        }}>
                Welcome to My Website
            </h1>
            <HomeTable />   
        </div>
    );
}

export default Home;
