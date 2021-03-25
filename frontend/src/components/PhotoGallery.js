import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';

const PhotosGallery = () => {

    const [galleryData, setGalleryData] = useState({
        "id": 2270,
        "code": "CHhASmTpKjaHyAsSaauThRqMMjWanYkQ",
        "startDate": 1578391244,
        "endDate": null,
        "author": {
            "id": "101",
            "createdAt": "2019-10-28 16:07:53",
            "name": "PastBook Dev",
            "firstName": "PastBook",
            "lastName": "Dev",
            "picture": "https://www.pastbook.com/one-click-photo-products/assets/images/Logo-01.png",
            "source": "Facebook",
            "lang": "eu",
            "country": "eu",
            "sourceId": "101030302",
            "email": "help@pastbook.com"
        },
        "cover": "https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN",
        "is_shareable": true,
        "entries": [
            {
                "id": 204900001,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 204900002,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/oTUic0PTS4KiBJFbahbl",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 204900003,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/OqPljPIRimcdPI5DWxlv",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 204900004,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/OkleqwBQLCvFBAbByUxY",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 204900005,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/AbFrknBZRLGmJuUTWYr2",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': true
            },
            {
                "id": 20490000134,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 2049000029,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/oTUic0PTS4KiBJFbahbl",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 2049000031,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/OqPljPIRimcdPI5DWxlv",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 2049000042,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/OkleqwBQLCvFBAbByUxY",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': false
            },
            {
                "id": 2049000054,
                "message": "",
                "picture": "https://www.filepicker.io/api/file/AbFrknBZRLGmJuUTWYr2",
                "pictureSmall": "",
                "pictureMedium": "",
                "pictureStored": "",
                "timestamp": 1578391381,
                'status': true
            },

        ]
    });

    const [isChecked, setIsChecked] = useState();
    const [loading, setLoading] = useState(true);

    const handleSingleCheck = e => {
        setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
    };

    /**
     * Get selected photos obj and assign to context
     */

    const onSelected = () => {

        const itemList = Object.keys(isChecked).filter(key => isChecked[key] === true)
        const selectedObject = galleryData.entries.filter(item => itemList.includes(item.id.toString()));

        console.log(selectedObject);

    }

    useEffect(() => {
        const initialIsChecked = galleryData.entries.reduce((item, d) => {
            item[d.id] = false;
            return item;
        }, {})
        setIsChecked(initialIsChecked)
        setLoading(false)
    }, [])


    return (

        <>

            <div className="fixed-top bg-dark mb-5 ">
                <Container>
                    <div className="d-flex mt-2 flex-row justify-content-between align-items-center py-2 px-2 mb-2">
                        <div><h1 className="text-white">Choose Photos</h1></div>
                        <Button onClick={() => onSelected()} className="btn btn-success btn-lg"><strong>Next : My Photo</strong></Button>
                    </div>
                </Container>
            </div>

            <Container className="mt-100">


                <div className="d-flex flex-wrap main-container mt-5 ">
                    {!loading ? galleryData.entries.map((item, index) => (
                        <div key={item.id} className="m-2 img-wrap" style={{ flexGrow: 1, height: "40vh" }}>
                            <img src={item.picture} loading="lazy" alt={item.id} className="single-image" width="auto" height="auto" style={{ maxHeight: "100%", minWidth: "100%", objectFit: "cover" }} />
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