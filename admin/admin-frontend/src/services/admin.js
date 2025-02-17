import axios from 'axios'
import { createUrl } from '../utils'


export async function adminServiceSignup(userName,email, password) {
  try {
    const body = {
      userName,
      email,
      password,
     
    }

    console.log("hi i am here");
    const url = createUrl('admin/signup')
    console.log("hi i am here");
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}
export async function adminServiceLogin(email, password) {
  try {
    const body = {
      email,
      password
     
    }

    console.log("hi i am here");
    const url = createUrl('admin/signin')
    console.log("hi i am here");
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}



