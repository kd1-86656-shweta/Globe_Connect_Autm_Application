import axios from 'axios';
import { createUrl } from '../utils';

// URL for the API endpoint
const url = createUrl('users');


// Function to get the community list
export const getUserData = async (token) => {  // Use named export
  try {
    console.log(token);
    console.log("Fetching user data...");
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });
    console.log("User Data:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Could not fetch user data');
  }
};
export default getUserData;