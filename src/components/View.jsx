import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'
function View({uploadVideoStatus}) {
  const [allVideo,setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]= useState(false)
  const getAllVideoFromDB = async()=>{
    const response = await getAllVideos();
    const {data} = response;
    console.log(response);
    setAllVideos(data);
  }
  useEffect(()=>{
   getAllVideoFromDB(); 
  },[uploadVideoStatus,deleteVideoStatus])
  return (
    <>
    <Row>{
      allVideo.length>0?
      allVideo.map((videos)=>(
        <Col sm={12} md={6} lg={4} xl={3}><VideoCard displayVideo = {videos} setDeleteVideoStatus={setDeleteVideoStatus}/></Col>
      ))
        :
        <p>Nothing to display</p>
    }
    </Row>
    </>
  )
}

export default View