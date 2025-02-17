import axios from 'axios';
import { createUrl } from '../utils';

// URL for the API endpoint
const url = createUrl('get-all');

// Function to get the community list
export const getCommunityData = async (token) => {  // Use named export
  try {
    console.log("Fetching community data...");
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });
    console.log("Community Data:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching community data:', error);
    throw new Error('Could not fetch community data');
  }
};
export default getCommunityData;