import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";
// to upload anew video
export const uploadAllVideo = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}video`,reqBody);
}
    // to get all video already inserted

export const getAllVideos = async ()=>{
 return await commonAPI('GET',`${serverURL}video`,"")
}

//delete function to delete aperticular video

export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
}

// add details to watch history

export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}history`,videoDetails)
}

// get all details of watch history 

export const getHistory = async() =>{
    return await commonAPI('GET',`${serverURL}history`,"")
}

/// to delete history
export const deleteHistory = async(id) =>{
    return await commonAPI('DELETE',`${serverURL}history/${id}`,{})
}
// add category
export const addCategory = async(reqBody) =>{
    return await commonAPI('POST',`${serverURL}category`,reqBody)
}

// get all category 

export const getAllCategory =async()=>{
    return await commonAPI('GET',`${serverURL}category`,"")
}

export const deleteCategory =async(id)=>{
    return await commonAPI('DELETE',`${serverURL}category/${id}`,{})
}

// get video details with with video id 

export const getVideoDetails = async(id) =>{
    return await commonAPI('GET',`${serverURL}video/${id}`,"")
}

// update category with video details 

export const updateCategory =async(id,body) =>{
    return await commonAPI('PUT',`${serverURL}category/${id}`,body)
}