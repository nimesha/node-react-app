import React, { useState, useEffect, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';

import Gallery from "react-photo-gallery";
import Photo from "../components/Photo";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { setSelection, getUserPhotos } from '../api';
import { useHistory } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

const SortablePhoto = SortableElement(item => <Photo {...item} />);

const SortableGallery = SortableContainer(({ items }) => (
    
     <Gallery photos={items}  renderImage={props => <SortablePhoto {...props} />}
    />
));

const photos = [
    {
        "id": "00000",
        "message": "",
        "picture": "https://dummyimage.com/200x200/000/fff",
        "pictureSmall": "",
        "pictureMedium": "",
        "pictureStored": "",
        "timestamp": 1578391381,
        'status': false,
        'src': 'https://dummyimage.com/200x200/000/fff',
        'width' : 0,
        'height': 0


    }

];


const UserGallery = () => {

    const history = useHistory();
    const { user } = useContext(UserContext)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        let isCancelled = false;

        if (!user) {
            history.push(`/`);
        }

        async function fetchData() {
            const data = await getUserPhotos(user.user_id);

            data.gallery.forEach((item, index) => {
  
                data.gallery[index]['src'] = item.picture.substr(item.picture.lastIndexOf('/') + 1)
                data.gallery[index]['width'] = 0;
                data.gallery[index]['height'] = 0
            })
            setItems(data.gallery);
        }
        fetchData();

        return () => {
            isCancelled = true;
        };

    }, []);

    const onSortEnd = ({ oldIndex, newIndex }) => {

        setLoading(true);
        setItems(array_move(items, oldIndex, newIndex));


        const selectedImg = {
            "user_id": user.user_id,
            "gallery": items
        }

        async function setData(selectedImg) {
            try {
                await setSelection(selectedImg);

            } catch (error) {
                alert("Error , TODO:exception not handled ")
            }

            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);
            return () => clearTimeout(timer);

        }
        setData(selectedImg);

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

    const home = () => {
        history.push(`/`);
    }


    return (<div>

        <div className="fixed-top bg-dark mb-5 ">
            <Container>
                <div className="d-flex mt-2 flex-row justify-content-between align-items-center py-2 px-2 mb-2">
                    <div><p className="text-white h2">Photo Gallery <small className="h6">(Drag to reorder)</small></p>
                        {user && <small className="text-white "> User ID : {user.user_id} </small>}</div>
                    <Button onClick={() => home()} className="btn btn-success btn-lg"><strong> Home</strong></Button>
                </div>
            </Container>
        </div>

        <Container className="mt-100">
            <div className="fix-height">
                {loading && <div className="text-center "> <p className="text-white">Loading....</p></div>}
            </div>
             <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </Container>

    </div>);
}

export default UserGallery;