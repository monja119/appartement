import axios from 'axios';
let back_en_point = process.env.REACT_APP_API_URL;

export const getData = async () => {
    let response = await axios.get(`${back_en_point}/appartements/`);
    return response;
}

export const createAppartement = async (data) => {
    let response = await axios.post(`${back_en_point}/appartements/`, data);
    return response;
}

export const updateAppartement = async (id, data) => {
    let response = await axios.put(`${back_en_point}/appartements/${id}`, data);
    return response;
}

export const deleteAppartement = async (id) => {
    let response = await axios.delete(`${back_en_point}/appartements/${id}`);
    return response;
}



