import React from 'react';
import Images from './Images'


const App=(props)=>{
  return(
    <>
    <div className="col">
    <div className="card">
      <Images imgsrc={props.imgsrc}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.desc}
        </p>
        <a href='#' className='btn btn-dark'>Live preview</a>
      </div>
    </div>
  </div>
  </>



  );
}

export default App;