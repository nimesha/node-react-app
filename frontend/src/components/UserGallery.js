import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';

import Gallery from "react-photo-gallery";
import Photo from "../components/Photo";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

const photos = [
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
    }
];


const UserGallery = () => {

    const [items, setItems] = useState(photos);

    const onSortEnd = ({ oldIndex, newIndex }) => {
      setItems(array_move(items, oldIndex, newIndex));
    };

    const [galleryData, setGalleryData] = useState();


    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
    };
    


    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; 
    };
    




    return (<div>

        <div className="fixed-top bg-dark mb-5 ">
            <Container>
                <div className="d-flex mt-2 flex-row justify-content-between align-items-center py-2 px-2 mb-2">
                    <div><p className="text-white h2">Photo Gallery <small className="h6">(Drag to reorder)</small></p></div>
                    <Button className="btn btn-success btn-lg">Reset My gallery</Button>
                </div>
            </Container>
        </div>
        <Container className="mt-100">
        <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </Container>

    </div>);
}

export default UserGallery;