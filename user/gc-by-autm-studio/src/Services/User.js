import axios from 'axios';
import { createUrl } from '../utils'

export const signup = async (formData) => {
  try {
      const url = createUrl('users/add-user');
      const response = await axios.post(url, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
  } catch (err) {
      return { status: 'error', error: err.response?.data || err.message };
  }
};
  
export const signin = async (email, password) => {
  try {
      const url = createUrl('users/login/');
      const body = { email, password };
      const response = await axios.post(url, body);
      return response.data; // Ensure it includes ID, username, etc.
  } catch (err) {
      return { status: 'error', error: err.response?.data || err.message };
  }
};                                          


export const updateUserProfile = async (formData) => {
    const { username, firstName, lastName, email, password, profilePicture } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('userId', sessionStorage.getItem("userId"));  // Add userId from sessionStorage
    formDataToSend.append('username', username);  // Mapping fields from updateUserDto
    formDataToSend.append('firstName', firstName);
    formDataToSend.append('lastName', lastName);
    formDataToSend.append('email', email);
    formDataToSend.append('password', password);

    // If a new profile picture is selected, append it to the form data
    if (profilePicture) {
        formDataToSend.append('profileImage', profilePicture);
    }

    try {
        // Ensure the request URL matches your backend endpoint
        const response = await axios.put('http://localhost:8080/users/update-user', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',  // Important to set this for FormData
            },
        });
        return response.data;  // Return the response data for further use
    } catch (error) {
        console.error("Error updating profile:", error.response?.data || error.message);
        throw error;
    }
};


