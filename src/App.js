import React,{Component} from 'react';
import './App.css';
import 'bootstrap-social/bootstrap-social.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';



   class App extends Component{
     render(){
       return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
         <div className='App'>
          <Main/>
          
         </div>
         </BrowserRouter>
       );
     }
   }
    
    
  


export default App;
