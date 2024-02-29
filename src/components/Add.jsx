import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI'



function Add({setUploadVideoResponse}) {

    // /upload links and image url of the video
    const [uploadVideo, setUploadVideo] = useState({
        caption: '', imageURL: '', youtubeLink: ''
    })

    // extract embed src link from youtube link
    const getYoutubeEmbedLink = (link) => {
        if (link.includes("v=")) {
            let videoid = link.split("v=")[1].slice(0, 11)
            setUploadVideo({ ...uploadVideo, youtubeLink: `https://www.youtube.com/embed/${videoid}` })

        } else {
            setUploadVideo({ ...uploadVideo, youtubeLink: "" })
            alert('Enter proper youtubr link')
        }


    }

    const [show, setShow] = useState(false);

    // handle close and clear the values from the box
    const handleClose = () => {
        setShow(false);
        setUploadVideo({ ...uploadVideo, caption: '', imageURL: '', youtubeLink: '' })
    }
    const handleShow = () => setShow(true);

    console.log(uploadVideo);

    // upload video

    const handleUpload = async () => {

        // store upload video in http://localhost:3000/videos
        const { caption, imageURL, youtubeLink } = uploadVideo
        if (caption && imageURL && youtubeLink) {
            // proceed to store video from http://localhost:5173/home to http://localhost:3000/videos
            const result = await uploadVideoAPI(uploadVideo)
            // to clear and get successfull message after upload a video
            if (result.status > 200 && result.status < 300) {
                alert(`video '${result.data.caption}' Uploaded Successfully`)
                setUploadVideoResponse(result.data)
                handleClose()

            } else {
                alert('Server Error, Please Upload after some time !')
            }

        } else {
            alert('Please fill the form Completely!!!')
        }
    }
    return (
        <>
            <div className='d-flex'>
                <h5>Upload A Video</h5>
                <button onClick={handleShow} style={{ width: '30px', height: '30px', background: '#4863A0', borderRadius: '50%', padding: '5px', marginLeft: '5px', color: '#fefefe' }}><i class="fa-solid fa-plus"></i></button>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Fill the Following!</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='border rounded border-secondary p-3'>
                        <FloatingLabel
                            controlId="floatingInputCaption"
                            label="Video Caption"
                            className="mb-3"
                        >
                            <Form.Control value={uploadVideo.caption} onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} type="text" placeholder="Video Caption" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInputImg"
                            label="Image Url"
                            className="mb-3"
                        >
                            <Form.Control value={uploadVideo.imageURL} onChange={e => setUploadVideo({ ...uploadVideo, imageURL: e.target.value })} type="text" placeholder="Image url" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputLink"
                            label="Youtube Video Link"
                            className="mb-3"
                        >
                            <Form.Control value={uploadVideo.youtubeLink} onChange={e => getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
                        </FloatingLabel>

                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ width: '100px', height: '30px', background: '#fefefe', paddingBottom: '40px', fontSize: '18px', color: '#4863A0' }} variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button style={{ width: '150px', height: '30px', background: '#4863A0', paddingBottom: '40px', fontSize: '18px', color: '#fefefe' }} variant="primary" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Add

// youtube link: "https://www.youtube.com/watch?v=uJMCNJP2ipI"

// embed link: "https://www.youtube.com/embed/uJMCNJP2ipI" 