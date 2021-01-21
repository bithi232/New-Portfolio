import './App.css';
import picture from'../src/images/pic.jpg';
import Home from './Components/Home';

function App() {
  
  return (
    <div>
       <h1>Hi, my name is Sabrina Mamataz<br/>
       I'm a <span class="color">JavaScript Front-End-Developer.</span><br/>
       <button><a class="Link-button" href="#" >About Me</a></button><br/>
       <button><a  class="Link-button" href="https://github.com/bithi232">Github Profile</a></button><br/>
       <button><a class="Link-button" href="https://www.linkedin.com/in/sabrina-mumtaz-b06a231b1/">Linkedin Profile</a></button>
       
       </h1>
       <div className="second">
         <h2 href="#">About Me</h2>
        

               
                 <div>
                    <img src={picture} alt=""/>
                  </div>
                 
                  <div>
                   <h3 class="card-title">A self-taught software developer with a Bachelors's in Computer Science and Engineering.
                   </h3>
                   <button><a class="Link-button"href="https://drive.google.com/file/d/1o8W9VnkNgsrnc6mM1uXLhrUDsYSFEAQQ/view?usp=sharing">Resume</a></button>
                </div>
               
                 

            
             
       
         
       </div>
       <Home></Home>
       
      </div>
     
      
      
          
  
   
  );
  }

export default App;