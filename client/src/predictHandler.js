import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API_URL

export const predictHandler = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/predict`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error occurred during prediction request:', error);
        throw error;
    }
};