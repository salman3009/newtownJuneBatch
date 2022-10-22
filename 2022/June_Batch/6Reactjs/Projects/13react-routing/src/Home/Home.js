import './Home.css';
import wall from '../assets/image/wallpaper.jpg';

const Home =()=>{
     return(<div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h1 style={{textAlign:"center"}}>Welcome to Newton School</h1>
            </div>
        </div>
        <div style={{marginTop:"40px"}} className='row'>
            <div className='col-12'>
            <img src={wall} class="img-fluid" alt="Responsive image"/>
            </div>
        </div>
      
     </div>)
}

export default Home;