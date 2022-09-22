import MusocLogo from '../assets/logo.png'
import FbIcon from '../assets/icons/fb.png'
import IgIcon from '../assets/icons/ig.png'
import YtIcon from '../assets/icons/yt.png'
import Cat1 from '../assets/SliderImages/cat1.jpg'

import { SliderData } from '../data/SliderData';

import ImageSliderContainer from '../components/ImageSliderContainer'
const Home = () => {
    return ( 
        <div className='home'>
            
            <header     className="page-header">
            
                <h1 className="f-sz-36">The Music Society</h1>
        


                <h3 className="o-75">The Music addicts of BITS Goa</h3>
                <img src={MusocLogo} className="musoc-logo" alt="MuSoc logo"/>
                
                
                
            </header>
            <ImageSliderContainer slides ={SliderData}></ImageSliderContainer>
            
            <footer className = 'page-footer'>
                <h2 className = 'f-sz-36'>Connect With Us</h2>
                <ul className='footer-list'>
                <a className="tx-c" href="https://youtube.com/channel/UCs3URAnJc629Is22Q6tPK4g"  title="Youtube channel">
                    <img src={YtIcon} alt="YT Icon" /> 
                    
                    </a>
                    <a className="tx-c" href="https://facebook.com/MusicSocietyBitsGoa/"  title="Facebook Page">
                    <img src={FbIcon} alt="FB Icon" /> 
                   
                    </a>
                    <a className="tx-c" href="https://instagr.am/musoc_bpgc/"  title="Instagram Page">
                    <img src={IgIcon}  alt="IGIcon" /> 
                    
                    </a>
                </ul>
            </footer>
           
        </div>
    );
}
export default Home;