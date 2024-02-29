import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Landing() {


// navigate to home by clicking "Get Started"
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate("/home")
  }


  return (
   <>
   <div className='container mt-5'>
    <div className="header row align-items-center">
      <div className="col-lg-5">
        <h3>Welcome to <span style={{color:'#123456', fontSize:'35px'}}>Media Player</span></h3>
        <p style={{textAlign:'default'}}>Media Player is a free multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.</p>
        <button style={{background:'#4863A0', color:'#ffffff', borderRadius:'20px', padding:'10px'}} onClick={handleNavigate}>Get Started</button>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
         <img  width={'500px'} src="https://media4.giphy.com/media/IfrucYnEVfvlhrgdYd/giphy.gif" alt="" />
      </div>

    </div>

    {/* fetures section */}

    <div className="features">
      <h3 className='text-center'>Features</h3>
      <div className="row">
        <div className="col-lg-4"> 
        
        <Card style={{width:'300px', height:'400px'}}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/437285/screenshots/6124358/04_______.gif" />
      <Card.Body>
        <Card.Title>jbvd</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>


        <div className="col-lg-4">
           <Card style={{width:'300px', height:'400px'}}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/793057/screenshots/4220268/music_visualisation.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>


        <div className="col-lg-4">
           <Card style={{width:'300px', height:'400px'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/09/30/2b/09302bb5c506164ba539ff36f82929f1.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>
      </div>
    </div>


{/* video section */}
    <div className="video">
      <div className='row video border p-5 mt-5 rounded text-align-center mb-5'>
        <div className="col-lg-5">
          <h3>Simple and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente blanditiis reiciendis ratione illo mollitia voluptate.</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Categorise Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente blanditiis reiciendis ratione illo mollitia voluptate.</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente blanditiis reiciendis ratione illo mollitia voluptatelorem jsgdfuyslagfsugvc.ipisicing elit. Eveniet sapiente blanditiis reiciendis .</p>

        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xW-zNOT4P1A?si=y0mvPrHf9-HIb30z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>



   </div>
   {/* horizontal line */}
   <div style={{width:'100%',height:'1px',background:'grey'}}></div>
   </>
  )
}

export default Landing