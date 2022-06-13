import React, { useState } from 'react';
import {Button,Form,Modal} from "react-bootstrap";


function ToAddmovie({movies, setMovies}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovies, setNewMovies] = useState({
     name:"",
     posterurl:"",
     description:"",
     rating:0,
  });

  const handleAdd=()=>{setMovies([...movies,newmovies]);
  handleClose()}

  return (
    <div>
      <button className="btn" onClick={handleShow}
  //     style={{
  // margin: "20px auto",
  // marginLeft:"20px",
  // borderRadius: "12px",
  // backgroundColor: "#fffff",
  // textAlign: "center",
  // fontSize: "16px",
  // transitionDuration: "0.4s",
  // cursor: "pointer"  }}
     
      >
       Add movie
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form.Label>name:</Form.Label>
            <input onChange={(e)=>setNewMovies({...newmovies,name:e.target.value})} />
            <br/>
         <Form.Label>posterurl:</Form.Label>
         <input onChange={(e)=>setNewMovies({...newmovies,posterurl:e.target.value})} />
         <br/>
         <Form.Label>description:</Form.Label>
         <input onChange={(e)=>setNewMovies({...newmovies,description:e.target.value})} />
         <br/>
         <Form.Label>rating:</Form.Label>
         <input onChange={(e)=>setNewMovies({...newmovies,rating:e.target.value})} />
            
              </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={()=>{handleAdd(); handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default ToAddmovie