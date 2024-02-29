import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='container w-100 mt-5' style={{ height: '300px' }}>
            <div className='footer-content d-flex justify-content-between'>
                <div className="media" style={{ width: "400px" }}>
                    <h5 className='d-flex'><i style={{ height: '23px' }} className='fa-solid fa-video me-3'></i> Media Player</h5>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti tempora ducimus quaerat quod natus porro sint laborum dolore,</p>
                    <span>Code Licensed MIT,docs cc by 3.0</span><br />
                    <span>Currently v5.3.2</span>
                </div>
                <div className="links d-flex flex-column ">
                    <h5 className='d-flex'>Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>Landing Page</Link>
                    <Link to={'/home'} style={{ textDecoration: 'none' }}>Home</Link>
                    <Link to={'/watch'} style={{ textDecoration: 'none' }}>Watch History</Link>


                </div>
                <div className="guides d-flex flex-column">
                    <h5>Guides</h5>
                    <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none' }}>React Js</a>
                    <a href="https://reactrouter.com/en/main" target='_blank' style={{ textDecoration: 'none' }}>React Routing</a>
                    <a href="https://react-bootstrap.github.io/" target='_blank' style={{ textDecoration: 'none' }}>React Bootstrap</a>
                </div>
                <div className="contact">
                    <h5>Contact Us</h5>
                    <div className='d-flex'>
                        <input type="text" className='form-control me-1' placeholder='Email Id' />
                        <button style={{ background: '#4863A0', width:'50px', borderRadius:'5px' }}><i style={{ color: 'white', fontSize: '15px', fontStyle:'bold' }} class="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                    <div  style={{display:'flex',justifyContent:'left',gap:'10px'}} className='mt-3'>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-spotify"></i>
                    </div>
                </div>

            </div>
            <p className='text-center mt-5'>Copyright &copy; 2024 Media Player. Built with React</p>

        </div>
    )
}

export default Footer