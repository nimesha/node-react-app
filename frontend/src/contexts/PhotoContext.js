import React, { createContext, useState } from 'react';

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
    const [photos, setPhotos] = useState([]);


    return (
        <PhotoContext.Provider value={{ photos  }}>
            {props.children}
        </PhotoContext.Provider>
    );
}

export default PhotoContextProvider;