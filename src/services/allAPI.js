// upload video api - store video in http://localhost/3000/videos

// add component
import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

export const uploadVideoAPI = async (video) => {
// send response to add component
    return await commonAPI("POST", `${SERVER_URL}/videos`, video)
}

// get video api caleed by view
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/videos`, "")
}

// store watch history to local host 3000 from videocard
export const saveHistoryAPI = async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

// get history from local host 3000 
export const getHistoryAPI= async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// remove from history
export const  removeHistoryAPI=async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

// remove video from videos
export const removeVideoAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}


// save category
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}

// get category to category component
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

// to delete a category
export const removeCategoryAPI=async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${categoryId}`)
}

// drag and drop, get single video api

export const getAVideoAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}


// update category api - use put

export const updateCategoryAPI = async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${categoryId}`,updatedCategoryDetails)
}


//  getSingleCategoryAPI 
export const getSingleCategoryAPI = async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/category/${categoryId}`,"")
}








