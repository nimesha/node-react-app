import axios from 'axios';
import PBError from '../exceptions/PBError';


const url = 'http://localhost:8888/api/v1';


export const getUsersPhotos = async () => {
    try {
        const res = await axios.get(`${url}/photos/users`);
        return res.data;
    } catch (error) {
        throw new PBError(error.response);
    }
}

export const getUserPhotos = async (id) => {
    try {
        const res = await axios.get(`${url}/photos/user/`+id);
        return res.data;
    } catch (error) {
        throw new PBError(error.response);
    }
}


export const photoApi = async () => {

    try {
        const res = await axios.get(`https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json `);
        return res.data;
    } catch (error) {
        throw new PBError(error.response);
    }
}

export const setSelection = async (postData) => {

    try {
        return await axios.post(`${url}/photos`, postData);
    } catch (error) {
        throw new PBError(error.response);
    }
}





