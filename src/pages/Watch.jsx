import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'


function Watch() {
  const [history, setHistory] = useState([])
  const getAllHistory = async () => {
    const result = await getHistoryAPI()
    if (result.status >= 200 && result.status < 300) {
      setHistory(result.data)
    }
  }

  useEffect(() => {
    getAllHistory()
  }, [])

  // delete history

  const deleteHistory = async (vId) => {
    // api call
    await removeHistoryAPI(vId)
    getAllHistory()
  }

  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className="d-flex justify-content-between">
          <h3>Watch History</h3>
          <Link to={'/home'}>Back to <i className='fa-solid fa-house'></i></Link>

        </div>
        <table className='table mt-5 mb-5'>
          <thead >
            <tr>

              <th>#</th>
              <th >Caption</th>

              <th>Video Link</th>
              <th>Time Stamp</th>
              <th><i className='fa-solid fa-ellipsis-vertical'></i></th>

            </tr>
          </thead>
          <tbody >
            {history?.length > 0 ? history?.map((video, index) => (

              <tr key={index}>
                <td>{index + 1}</td>
                <td>{video?.caption}</td>
                <td><a href={video?.youtubeLink} target='_blank'>{video?.youtubeLink}</a></td>
                <td>{video?.timeStamp}</td>
                <td> <i onClick={()=>deleteHistory(video.id)} className='fa-solid fa-trash text-danger'></i></td>
              </tr>
            ))
              : <tr className='text-danger fw-bolder'>No Watch History !</tr>
            }
          </tbody>

        </table>
      </div>

    </>
  )
}

export default Watch