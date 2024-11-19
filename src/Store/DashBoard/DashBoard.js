import { actionHandler } from "../api";
const initialRegQ = '/api/resource/EOI%20For%20Land?fields=[%22name%22,%22total_availability_of_land_in_acres_%22,%20%22intercropping_area_available%22] ';
export const LandsList = async () => {
    try {
        const response = await actionHandler({
            url: initialRegQ,
            method: 'GET',
        });
        console.log(response.data); // Logging the response data
        return response.data; // Return the actual data part of the response
    } catch (error) {
        console.error('Error fetching Lands:', error);
        throw error; // Propagate the error to be caught by the query
    }
};
export const LandDetailed = async () => {
    try {
        const response = await actionHandler({
            url: initialRegQ,
            method: 'GET',
        });
        console.log(response.data); // Logging the response data
        return response.data; // Return the actual data part of the response
    } catch (error) {
        console.error('Error fetching Lands:', error);
        throw error; // Propagate the error to be caught by the query
    }
};
