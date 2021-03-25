import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Button } from 'react-bootstrap';


const Dashboard = () => {



    const createUser = () => {

    }

    return (
        <>
            <div className="container">
                <h1 className="mt-100 mb-5 text-white">Create Your Photo Gallery</h1>
                <Button onClick={createUser} className="btn btn-success btn-lg"><strong> Create New Gallery</strong></Button>


            </div>
            <div className="container mt-100">
                <small className="text-light">Once you created photo gallery list in here</small>
            </div>
            
        </>
    );
}

export default Dashboard;