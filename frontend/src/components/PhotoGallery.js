import React, { useState, useEffect, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import { photoApi, setSelection } from '../api';
import { useHistory } from "react-router-dom";

const PhotosGallery = () => {

    const history = useHistory();
    const { user } = useContext(UserContext);
    const [isChecked, setIsChecked] = useState();
    const [loading, setLoading] = useState(true);

    const [galleryData, setGalleryData] = useState({
        "entries": [
            {
                "id": "0000",
                "message": "",
                "picture": "https://dummyimage.com/200x200/000/fff",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            }
        ]
    });


    useEffect(() => {

        if (!user) {
            history.push(`/`);
        }

        async function fetchData() {
            try {
                const data = await photoApi();
                setGalleryData(data);
            } catch (error) {
                alert("Error , TODO: Photo Fetch API Issue")
            }

        }

        fetchData();

        const initialIsChecked = galleryData.entries.reduce((item, d) => {
            item[d.id] = false;
            return item;
        }, {})
        setIsChecked(initialIsChecked)
        setLoading(false)
    }, [])


    const handleSingleCheck = e => {
        setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
    };

    /**
     * Get selected photos obj and assign to context
     */

    const onSelected = () => {

        const itemList = Object.keys(isChecked).filter(key => isChecked[key] === true)
        const selectedObject = galleryData.entries.filter(item => itemList.includes(item.id.toString()));

        const selectedImg = {
            "user_id": user.user_id,
            "gallery": selectedObject
        }

        async function setData(selectedImg) {
            try {
                await setSelection(selectedImg);

                history.push(`/user-gallery`);
            } catch (error) {
                alert("Error , TODO:exception not handled ")
            }

        }
        setData(selectedImg);

    }



    return (

        <>

            <div className="fixed-top bg-dark mb-5 ">
                <Container>
                    <div className="d-flex mt-2 flex-row justify-content-between align-items-center py-2 px-2 mb-2">
                        <div><h1 className="text-white">Choose Photos</h1>
                        {user && <small className="text-white "> User ID : {user.user_id} </small>}
                        </div>
                        <Button onClick={() => onSelected()} className="btn btn-success btn-lg"><strong>Next : My Photo</strong></Button>
                        
                    </div>
                </Container>
            </div>

            <Container className="mt-100">

                <div className="fix-height">
                    {loading && <div className="text-center "> <p className="text-white">Loading....</p></div>}
                </div>
                <div className="d-flex flex-wrap main-container ">
                    {!loading ? galleryData.entries.map((item, index) => (
                        <div key={item.id} className="m-2 img-wrap" style={{ flexGrow: 1, height: "40vh" }}>
                            <img src={'https://cdn.filestackcontent.com/resize=w:300/auto_image/compress/'+item.img_id} loading="lazy" alt={item.id} className="single-image" width="auto" height="auto" style={{ maxHeight: "100%", minWidth: "100%", objectFit: "cover" }} />
                            <input
                                id="chk"
                                className="image-checkbox"
                                type="checkbox"
                                name={item.id}
                                checked={isChecked[item.id]}
                                onChange={handleSingleCheck}
                            />
                        </div>
                    )) : null}
                </div>
            </Container>

        </>
    );


}

export default PhotosGallery;