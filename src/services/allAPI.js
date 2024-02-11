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


