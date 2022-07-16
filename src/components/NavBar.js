import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/my-logo.png'
import { Link } from 'react-scroll'
import Resume from '../assets/MatthewGani_Resume.pdf'


const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className= "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <img src={Logo} alt="logo" style={{width: '50px'}} />
      </div>

      {/*anything above median is displayed */}

      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true}  duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true}  duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true}  duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true}  duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true}  duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}  duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/**hamburger  with z index 10*/}
      <div onClick={handleNav} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to="home" smooth={true}  duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to="education" smooth={true}  duration={500}>
            Education
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to="work" smooth={true}  duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to="skills" smooth={true}  duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to="projects" smooth={true}  duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to="contact" smooth={true}  duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons, only shown after large 1024 breakpoint*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://www.linkedin.com/in/matthewgani/" target="_blank" rel="noreferrer">LinkedIn <FaLinkedin size={30} />
             </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://github.com/matthewgani" target="_blank" rel="noreferrer">GitHub <FaGithub size={30} />
             </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="mailto: matthewgani2@gmail.com">Email <HiOutlineMail size={30} />
             </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href= {Resume} download>Resume <BsFillPersonLinesFill size={30} />
             </a>
          </li>
        </ul>

      </div>


    </div>
  )
}

export default NavBar