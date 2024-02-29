import React, { useEffect, useState } from 'react'
import { Modal, Button, FloatingLabel, FormControl } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import Videocard from './Videocard';


function Category({removeCategoryVideoResponse}) {
  // creting state for getcategory
  const [allCategories, setAllCategories] = useState([])


  // creating a state to add category
  const [categoryName, setCategoryName] = useState("")



  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
  // add category button
  const handleAddCategory = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      handleClose()
    } else {
      alert("Fill the Form Completely !")
    }

  }

  // get category
  const getAllcategories = async () => {
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }

  useEffect(() => {
    getAllcategories()
  }, [removeCategoryVideoResponse])

  // to delete a category
  const handleRemoveCategory = async (cId) => {
    await removeCategoryAPI(cId)
    getAllcategories()
  }
// dragging
const dragOverCategory=(e)=>{
  e.preventDefault()
  console.log("dargging over category");
}

const videoDropped= async (e,categoryId)=>{
  const videoId = e.dataTransfer.getData("videoId")
  console.log(`video droped with vId:${e.dataTransfer.getData("videoId")},inside Category id:${categoryId}`);

  // get detail of videoid
  const {data}= await getAVideoAPI(videoId)
  console.log(data);

  // get category details where we have add video
  let selectedCategory = allCategories.find(item=>item.id==categoryId)
  // push data into videos[ ]array
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  // to store permanently
  await updateCategoryAPI(categoryId,selectedCategory)
  getAllcategories()


}

// to drag from category to view component(view.jsx)
const videoDragStarted= (e,videoId,categoryId)=>{
  console.log(`drag started from category id:${categoryId}with video id:${videoId}`);
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
}
  return (



    <>
      <div className='d-flex justify-content-around'>
        <h3>All Categories</h3>

        <button onClick={handleShow} style={{ width: '30px', height: '30px', background: '#4863A0', borderRadius: '50%', padding: '5px', marginLeft: '5px', color: '#fefefe' }}><i class="fa-solid fa-plus"></i> </button>
      </div>

      <div className="container-fluid mt-3">
        {/* we have to put the div in "{}" beacause it is repeating */}

        {allCategories.length > 0 ? allCategories.map((item, index) => (
          <div style={{ width: '500px', border: '2px solid #4863A0', borderRadius: '10px' }} droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className=" p-3 mb-2">
            <div className='d-flex justify-content-between '>
              <h5>{item.categoryName}</h5>
              <i style={{ marginTop: '9px', padding: "10px" }} onClick={() => handleRemoveCategory(item.id)} className='fa-solid fa-trash text-danger shadow'></i>
            </div>
            {/* to show category videos when drag and drop */}
            <div className="row mt-2">
              {
                item.allVideos?.length > 0 && item.allVideos?.map((video, index) => (
                  <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
                    <Videocard insideCategory={true} displayData={video} />
                  </div>
                ))
              }

            </div>
          </div>))
          : <div className="text-danger fw-bolder">
            No Categories to show !
          </div>
        }

      </div>


      <Modal show={show}
        onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId='FloatingInputCaption'
            label='Category Name'
            className='mb-3'>
            {/* event binding,using onchange,getting value from text box */}
            <FormControl value={categoryName} onChange={e => setCategoryName(e.target.value)} type='text' placeholder='name'></FormControl>

          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category