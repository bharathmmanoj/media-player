import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
  return (
    <div>
        <div className='container d-flex justify-content-between align-item-center'>
            <div className='add-videos'>
                <Add setUploadVideoStatus={setUploadVideoStatus}/>
            </div>
            <div>
                <Link to ={'/watch'} style={{textDecoration:"none",color:"white",fontSize:"30px"}}>Watch History</Link>
            </div> 
              
        </div>
        <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
            <div className='all-videos col-md-6 '>
                <h4>All Videos</h4>
                <View uploadVideoStatus={uploadVideoStatus} />
            </div>
            <div>
                <Category/>
            </div> 
        </div> 
    </div>
  )
}

export default Home
