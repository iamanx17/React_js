import React from 'react';

const Projects=(proj)=>{
    return(
        <div class="col">
          <div class="card">
            <img src={proj.imgurl} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{proj.title}</h5>
              <p class="card-text">
                {proj.desc}
              </p>
              <a href="#" class='btn btn-dark'>Live preview</a>
            </div>
          </div>
        </div>

    );
}


export default Projects;