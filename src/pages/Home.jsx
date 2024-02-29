import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'



function Home() {
  // to show category list without clicking refresh button
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse]= useState("")
  // to show uploaded videos without clicking refresh button
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse} />

        <div className='btn' style={{height:'30px',width:'150px', background:'#4863A0',paddingBottom:'30px' }}><Link style={{textDecoration:'none',color:'#fefefe'}} to={'../Watch'}>View History<i style={{marginLeft:'5px',color:'#fefefe'}} className="fa-solid fa-clock-rotate-left"></i></Link></div>
        

      </div>
      <div className="container-fluid mt-5 mb-5 row">
        <div className="col-lg-6">
          <h3>All videos</h3>
          <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>

        </div>
        <div className="col-lg-6">
          
            <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
          </div>
        </div>
      

 {/* horizontal line */}
 <div style={{width:'100%',height:'1px',background:'grey'}}></div>
    </>

  )
}

export default Home