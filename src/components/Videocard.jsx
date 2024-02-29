import React from 'react'
import { useState } from 'react';
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

function Videocard({ displayData,setDeleteVideoResponse,insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // to post history in the db,get video datails
    const { caption, youtubeLink } = displayData
    let timeData = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({ caption, youtubeLink, timeStamp })
  }


  // removing a video

  const deleteVideo = async (vId) => {
    // api call
     const result=await removeVideoAPI(vId)
    // state lifting from parent 'view.js'.because there is a function to hold display video
    setDeleteVideoResponse(result.data)


  }

  // drag started
  const dragStarted = (e,vId)=>{
    console.log(`dragging started:${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }

  return (
    <>
      <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} style={{ width: '13rem', height: '23rem' }}>
        <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" src={displayData?.imageURL} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between'><p>{displayData?.caption}</p>
            {!insideCategory &&<i onClick={()=>deleteVideo(displayData?.id)}  style={{ fontSize: '15px',padding:'10px',color:'#4863a0' }} className='fa-solid fa-trash shadow'></i>}</Card.Title>

        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="350" src={`${displayData?.youtubeLink}?autoplay=1`} title="Kingdom of the Planet of the Apes | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>

      </Modal>
    </>
  )
}

export default Videocard