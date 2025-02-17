import axios from "axios"
import { toast } from "react-toastify";
import { createUrl } from "../utils"

/*========== GET ALL POSTS ROUTE: posts/get-all */

export const getPosts = async()=>{

    try{
        const url = createUrl('posts/get-all')
        const response = await axios.get(url);
      
        // console.log(response.data);
        return response.data;

    }catch(err){ 
        // console.log("I am here");
        toast.warn("Error Occurred");
        return []
    }
}


// export const addpost = async(content, userId)=>{

//     try {
      
//       const url = createUrl('posts/add-post');
//       const body = {
//         content,
//         userId
        
//       }
//       const response = await axios.post(url, body);
//       return response.data;
//     } 
//     catch (err) {
//       return {
//         status: 'error', error: err
//       }
//     }
  
//   }