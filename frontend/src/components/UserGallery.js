import React, { useState, useEffect, useContext, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Container, Button } from 'react-bootstrap';


const UserGallery = () => {
    const [names, setNames] = useState([
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

    ]);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const items = reorder(
            names,
            result.source.index,
            result.destination.index
        );

        setNames(items);
    }
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
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
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="item">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {names.map((field, index) => (
                            <Draggable key={field.id} draggableId={field.id.toString()} index={index}>
                                {provided => (
                                    <div ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps} >
                                        <img src={field.picture} loading="lazy" alt={field.id} width="150" />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        { provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
        </Container>
    </div>);
}

export default UserGallery;