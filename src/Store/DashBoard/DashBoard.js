import { actionHandler } from "../api";
const initialRegQ = '/api/resource/EOI For Land/';
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
