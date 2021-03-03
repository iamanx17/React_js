import React from 'react';
import App from './App';
import Postdata from './Postdata';

const Post=(value)=>{
  return(
  <App 
  key={value.id}
  imgsrc={value.imgurl} 
  title={value.title} 
  desc={value.desc}
  />
  );
}


const Card=()=>{
  return(
    Postdata.map(Post)
    );
  }

export default Card
