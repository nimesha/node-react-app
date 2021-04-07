import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';

import { getUsersPhotos } from '../api';

const short = require('short-uuid');

const Dashboard = () => {

    const history = useHistory();

    const { user, dispatch } = useContext(UserContext)

    const [userPhotos, setUserPhotos] = useState()

    const createUser = () => {
        const id = short.generate();
        dispatch({ type: 'ADD_USER', id });
        history.push(`/photos-gallery`);
    }

    const setUser = (id) => {
        dispatch({ type: 'ADD_USER', id });
        history.push(`/user-gallery`);
    }

    useEffect(() => {
        console.log(user)
    }, [user]);


    useEffect(() => {
        async function fetchData() {
            const data = await getUsersPhotos();
            setUserPhotos(data);
        }
        fetchData();

    }, []);



    return (
        <>
            <div className="container">
                <h1 className="mt-100 mb-5 text-white">Create Your Photo Gallery</h1>
                <Button data-testid="create-new-gallery" onClick={createUser} className="btn btn-success btn-lg"><strong> Create New Gallery</strong></Button>


            </div>
            <div className="container mt-100">

                {userPhotos && <small className="text-light">User gallery  list</small>}
                {userPhotos && <ul>
                    {userPhotos.map((item) => (
                        <div key={item._id} className="text-white mt-3"> User ID - {item.user_id} : <Button onClick={(() => setUser(item.user_id))} className="btn btn-success btn-sm"><strong> Vew Gallery</strong></Button> </div>
                    ))
                    }
                </ul>}
            </div>

        </>
    );
}

export default Dashboard;