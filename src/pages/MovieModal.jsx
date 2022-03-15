

import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import alt from '../movieHub/imgNotAvailable.jpg';

function MovieModal(props) {

  const imdb = (rating) => {
    let val = parseFloat(rating)
    val = (val/10)*100
    return val.toString()+'%'
  }

  return (
    <div>
      <Modal
        {...props}
        size="xl"
        fullscreen={'lg-down'}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton className='bg-dark text-white'>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.sm.Title} ({props.sm.Year})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white'>
                <div className='container-fluid'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                      <Image src={props.sm.Poster} alt={alt}/>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                      <p>Rating: {props.sm.imdbRating} of 10</p>
                      <div className='progress' style={{height:"5px"}}>
                        <div className="progress-bar bg-info" role="progressbar" style={{ width:imdb(props.sm.imdbRating) }} aria-valuenow={props.sm.imdbRating} aria-valuemin="0" aria-valuemax="10"></div>
                      </div>

                      <br></br>
                      <p>Type: {props.sm.Type}</p>
                      <p>Genre: {props.sm.Genre}</p>
                      <p>Runtime: {props.sm.Runtime}</p>
                      <p>Released: {props.sm.Released}</p>
                      <p>Movie revenue: {props.sm.BoxOffice}</p>
                      <p>Awards: {props.sm.Awards}</p>
                      <br></br>
                      <p className='fw-bold'>About:</p>
                      <p>{props.sm.Plot}</p>
                      <br></br>
                    </div>
                  </div>
                </div>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-white'>
          <div className='text-center'>
            <Button onClick={props.onHide}>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MovieModal