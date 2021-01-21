import React from 'react';
import project from '../images/project1.png';
import project1 from '../images/project2.png';

const Home = () => {
    return (
     
        <div className="row">
            <h2>My Projects</h2>
        
           <div class="img-container col-ms-6">
           <img src={project}/>
             <h4>Doctors Portal</h4>
             <h6>Technology: React JS, React-Router, Firebase, Material UI</h6>
            <h6>Overview: A doctors appointment site. Only the client side has been built.</h6>
            
            <div>
             <img className="content" src={project1}/>
             <h4> Sabrina's Bank</h4>
             <h6>Technology: HTML, CSS,JavaScript</h6>
             <h6>A banking site. Only the client side has been built.</h6>
            <button><a href=" https://github.com/bithi232/sabrina-s-bank">Client Side Repository</a></button>
            <button><a href="https://bithi232.github.io/sabrina-s-bank/">Live Site</a></button>  
           </div>
           </div>
            <div className="last">
                <h2>Contact</h2>
                <h4>Would you like to work with me? Awesome!</h4>
                <h4>Gmail me at sabrinamamataj95@gmail.com</h4>

           </div>
            
            
           
        </div>
      
     
  
  
  

   

    
   
 

     
    );
};

export default Home;