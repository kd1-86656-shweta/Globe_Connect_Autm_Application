import axios from "axios";
import { toast } from "react-toastify";
import { createUrl } from "../utils";

/*========== GET ALL COMMUNITIES ROUTE: posts/get-all */

export const getCommunities = async () => {
  try {
    const url = createUrl('community/get-all');
    const response = await axios.get(url);
    console.log(response.data);

    return response.data;
  } catch (err) {
    toast.warn("Error Occurred");
    return [];
  }
};

export const addCommunity = async (formData) => {
  try {
    const url = createUrl('community/add-community');

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('profileImage', formData.profileImage);

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response.data);
    toast.success('Community created successfully!');
  } catch (err) {
    toast.warn('Error Occurred');
    console.error('Error:', err);
  }
};


export const joinCommunity = async (requestData) => {
  try {
    const url = createUrl('community/join');
    const response = await axios.post(url, requestData);

    return response.data;
  } catch (error) {
    console.error("Error joining community:", error);
    return null;
  }
};

export const getJoinedCommunities = async (userId) => {
  try {
    const url = createUrl(`community/joined-communities?userId=${userId}`);
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching joined communities:", error);
    return [];
  }
};
