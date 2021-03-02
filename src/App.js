import React from 'react';
import Project from './Project';
import Pdata from './Pdata';

const Pro=(i)=>{
  return(
    <project
    imgsrc={i.imgurl}
    title={i.title}
    desc={i.desc}
    />

  );
}




const Data=()=>{
  return(
    Pdata.map(Project)
  );
}

  
export default Data;

