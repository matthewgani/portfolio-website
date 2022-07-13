
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
// import ProfilePicture from '../assets/profile_picture.jpg'
import ProfilePicture from '../assets/photo_2.jpeg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/*container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center text-center pt-14'>
        <img className='self-center md:self-center rounded-full w-[250px] clipped' src={ProfilePicture} alt='profile'/>
        <p className='text-pink-600'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Matthew Gani</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm an aspiring software engineer.</h2>
        <p className='text-[#8892b0] py-4 text-center'>
          I am currently looking for work!
        </p>

        <div>
          {/* use group so when we hover, the arrow points down */}
          <Link to="projects" smooth={true}  duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Projects 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home