import React, { useState } from 'react'
// import './card-styles.css'


import MovieModal from './MovieModal'
import axios from 'axios';
import alt from '../movieHub/imgNotAvailable.jpg';


function CardUI({ result }) {
    const [selectedMovie, setSelectedMovie] = useState({})
    const [modal, setModal] = useState(false)

    const apiurl = process.env.REACT_APP_API;
  
  
    const handleOpen = (id) => {

      axios(apiurl + "&t=" + id).then(({ data })=> {
        let selectedMovie = data;
        setSelectedMovie(selectedMovie)
      });
      
      setModal(true)
    }
  
    const handleClose = () => {
      setModal(false)
      setSelectedMovie({})
    }

    return (
        <div className=" card border-0 text-center shadow rounded-end" style={{ marginBottom:"20px" }} >
            <div className="overflow">
                <img src={result.Poster} alt={alt} className="card-img-top" onClick={()=> handleOpen(result.Title)} style={{cursor:"pointer"}}/>
            </div>
            <div style={{cursor:"pointer", background:"rgba(0,0,0,0.2)"}} className="card-body text-dark" onClick={()=> handleOpen(result.Title)} data-bs-toggle="modal" data-bs-target="#exampleModal">
               <h4 className="card-title">{result.Title}</h4>

            </div>
            
            <MovieModal
                show={modal}
                onHide={handleClose}
                sm={selectedMovie}
            />
        </div>
    )
}

export default CardUI
