import { actionHandler } from "../api";
const initialRegQ = '/api/resource/EOI%20For%20Land?fields=[%22name%22,%22district%22,%22land_name%22,%22total_availability_of_land_in_acres_%22,%20%22total_availability_of_land_in_units_%22]';
const LandDetailedApi = '/api/resource/EOI%20For%20Land'
const TechnicalUrl = '/api/resource/Technical%20Proposal%20Submission%20Form'
const SubmissionFormUrl = '/api/resource/FINANCIAL%20PROPOSAL%20SUBMISSION%20FORM'
const UnitsURL = '/api/method/develop.rest.get_units'
const SubUnitsURL = '/api/method/develop.rest.get_sub_units'
const ProfileURL = '/api/method/develop.rest.user_cred'

export const LandsList = async () => {
  try {
    const response = await actionHandler({
      url: initialRegQ,
      method: 'GET',
    });
    return response.data; // Return the actual data part of the response
  } catch (error) {
    console.error('Error fetching Lands:', error);
    throw error; // Propagate the error to be caught by the query
  }
}

export const LandDetailed = async (id) => {
  try {
    const response = await actionHandler({
      url: `${LandDetailedApi}/${id}`,
      method: 'GET',
    });
    console.log(response.data); // Logging the response data
    return response.data; // Return the actual data part of the response
  } catch (error) {
    console.error('Error fetching Lands:', error);
    throw error; // Propagate the error to be caught by the query
  }
}

export const TechnicalPost = async (payload) => {
  try {
    const response = await actionHandler({
      url: TechnicalUrl,
      method: 'POST',
      data: payload,
    });
    return response?.data;
  } catch (error) {
    console.error('TechnicalPost Error:', error);
    throw error;
  }
}

export const SubmissionFormPost = async (payload) => {
  try {
    const response = await actionHandler({
      url: SubmissionFormUrl,
      method: 'POST',
      data: payload,
    });
    return response?.data;
  } catch (error) {
    console.error('TechnicalPost Error:', error);
    throw error;
  }
}

export const UnitsList = async () => {
  try {        
    const response = await actionHandler({
      url: UnitsURL,
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.error('Units List Error:', error);
    throw error;
  }
}

export const SubUnitsList = async () => {
  try {
    const response = await actionHandler({
      url: SubUnitsURL,
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.error('Sub Units List Error:', error);
    throw error;
  }
}

export const ProfileDetails = async () => {
  try {
    const response = await actionHandler({
      url: ProfileURL,
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.error('Profile Details Error:', error);
    throw error;
  }
}



