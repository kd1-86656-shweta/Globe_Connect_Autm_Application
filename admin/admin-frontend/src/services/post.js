import axios from 'axios';
import { createUrl } from '../utils';

// URL for the API endpoint
const url = createUrl('posts');

// Function to get the community list
export const getPostData = async (token) => {  // Use named export
  try {
    console.log(token);
    console.log("Fetching post data...");
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });
    console.log("Post Data:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching post data:', error);
    throw new Error('Could not fetch post data');
  }
};
export default getPostData;