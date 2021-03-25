import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
const short = require('short-uuid');



const Dashboard = () => {

    const history = useHistory();



    const {user, addUser} = useContext(UserContext)

    const createUser = () => {
        addUser(short.generate());
        history.push(`/photos-gallery`);

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