


import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import TailWind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import PSQL from '../assets/psql.png'
import Express from '../assets/express.png'
import RISCV from '../assets/RISCV.png'
import Python from '../assets/python.png'
import Java from '../assets/java.png'
import CPP from '../assets/cpp.png'
import C from '../assets/cLang.png'



const Skills = () => {
  return (

      <div name='skills' className='w-full h-auto bg-[#0a192f] text-gray-300 pt-16'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>Here are some of the technologies I've worked with!</p>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8 px-8'>
            <div>
              <p className='font-bold text-3xl'>Languages</p>
              <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 py-4 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={Python} alt="html icon" />
                  <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={Java} alt="html icon" />
                  <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={CPP} alt="html icon" />
                  <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={C} alt="html icon" />
                  <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={RISCV} alt="html icon" />
                  <p className='my-4'>Assembly (RISC-V)</p>
                </div>
              </div>
            </div>
            <div>
              <p className='font-bold text-3xl'>Web Dev</p>
              <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={HTML} alt="html icon" />
                  <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={CSS} alt="html icon" />
                  <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={JavaScript} alt="html icon" />
                  <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={ReactImg} alt="html icon" />
                  <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={Node} alt="html icon" />
                  <p className='my-4'>NodeJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={Express} alt="html icon" />
                  <p className='my-4'>Express</p>
                </div>
              </div>
            </div>
            <div>
              <p className='font-bold text-3xl'>Database</p>
              <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={Mongo} alt="html icon" />
                  <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={PSQL} alt="html icon" />
                  <p className='my-4'>PostgreSQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 icon'>
                  <img className='w-20 mx-auto'src={FireBase} alt="html icon" />
                  <p className='my-4'>Firebase</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}
export default Skills