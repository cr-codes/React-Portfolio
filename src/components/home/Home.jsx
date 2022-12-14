import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/Button';
import { BsMouse } from 'react-icons/bs';
// import { TbClick } from 'react-icons/tb';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
        {/* <TbClick className='clickIcon' /> */}
        <span className='click'>Click Me!</span>
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p className='home-text'>
        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
