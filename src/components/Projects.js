import calendarManager from '../assets/calendarManager.jpg'
import capstone from '../assets/capstone.jpeg'
import scheduler from '../assets/scheduler.png'
import ee2026 from '../assets/ee2026.jpg'
import cg2271 from '../assets/cg2271.jpg'
import cg3207 from '../assets/cg3207.jpg'

const Projects = () => {

  return (
    // takes a lot of room on mobile so anything above Medium we display h screen
    <div name='projects' className="w-full h-auto bg-[#0a192f] pt-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
          <p className="py-6 text-gray-300">Check out some of the projects I've done!</p>
        </div>

        {/* container*/}
        <div className="grid sm:grid-cols-2 gap-4">

          {/* capstone */}
          <div style={{backgroundImage: `url(${capstone})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
              <span className=' text-center font-bold text-white tracking-wider pt-4'>
                Laser Tag Capstone Project
              </span>
              <ul className='text-sm pt-2 pl-6 list-disc'>
                <li>
                  Worked in a team of 5 to create a 2-player AR laser tag system
                </li>
                <li>
                 Implemented real-time and concurrent communication between a server on an Ultra96
FPGA and laptop/phone clients
                </li>
                <li>
                 Utilized Socket.IO, TCP Sockets and MQTT for communication between system
components
                </li>
                <li>
               Ensured secure AES communication with SSH tunnelling
                </li>
              </ul>
              <div className=' text-center'>
                <a href="https://www.youtube.com/watch?v=bZgzdPY7658" target="_blank" rel="noreferrer"> <button className='text-center rounded-lg px-4 pt-0 pb-0 m-2 bg-white text-gray-700 font-bold text-xs'>demo</button></a>
              </div>
            </div>
          </div>

          {/* cg3207 */}
          <div style={{backgroundImage: `url(${cg3207})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
              <span className='text-center font-bold text-white tracking-wider pt-4'>
                FPGA RISC-V Microprocessor
              </span>
              <ul className='text-sm pt-4 px-6 list-disc'>
                <li>
                  Designed a RISC-V processor using Verilog on a FPGA
                </li>
                <li>
                  Parsed instructions from RV32I Base Integer Instruction Set
                </li>
                <li>
                  Implemented floating point operations
                </li>
              </ul>
              {/* <div className=' text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm'>demo</button></a>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm'>code</button></a>
              </div> */}
            </div>
          </div>

          {/* cg2271 */}
          <div style={{backgroundImage: `url(${cg2271})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
              <span className='text-center font-bold text-white tracking-wider pt-4'>
                Keil RTX RTOS RC Car
              </span>
              <ul className='text-sm pt-2 pl-6 list-disc'>
                <li>
                Worked in a group of 3 to create a Remote Controlled car controlled by a mobile app 
                </li>
                <li>
                Wrote code in C language on the FRDM-KL25Z microcontroller 
                </li>
                <li>
                Utilized semaphores and event flags for task synchronization                </li>
                <li>
                Configured multithreading to manage car movement, music and LED patterns
                </li>
              </ul>
              <div className=' text-center'>
                <a href="https://www.youtube.com/watch?v=iLDavXZqZ5o" target="_blank" rel="noreferrer"> <button className='text-center rounded-lg px-4 pt-0 pb-0 m-2 bg-white text-gray-700 font-bold text-xs'>demo</button></a>
              </div>
            </div>
          </div>


          {/*  cs2113t*/}
          <div style={{backgroundImage: `url(${scheduler})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
              <span className='text-center font-bold text-white tracking-wider pt-4'>
                Scheduler--
              </span>
              <ul className='text-sm pt-2 pl-6 list-disc'>
                <li>
                  Engineered a command line based scheduling application in a team of 5
                </li>
                <li>
                Became proficient in revision control, different types of testing, UML, technical
documentation and debugging
                </li>
                <li>
                Strengthened communication and problem-solving skills by facilitating team discussions
                </li>
                <li>
                  Implemented the use of RegEx for extracting events from any text
                </li>
              </ul>
              <div className=' text-center'>
                <a href="https://github.com/AY2021S1-CS2113T-T12-4/tp/blob/master/docs/team/matthewgani.md" target="_blank" rel="noreferrer"> <button className='text-center rounded-lg px-4 pt-0 pb-0 m-2 bg-white text-gray-700 font-bold text-xs'>contribution</button></a>
                <a href="https://github.com/AY2021S1-CS2113T-T12-4/tp" target="_blank" rel="noreferrer"> <button className='text-center rounded-lg px-4 pt-0 pb-0 m-2 bg-white text-gray-700 font-bold text-xs'>code/user guide</button></a>
              </div>
            </div>
          </div>

          {/* orbital */}
          <div style={{backgroundImage: `url(${calendarManager})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
              <span className='text-center font-bold text-white tracking-wider pt-4'>
                Calendar Manager (for NUS Orbital)
              </span>
              <ul className='text-sm pt-2 pl-6 list-disc'>
                <li>
                Developed and conceptualized an integrative calendar android application using Java in a
team of 2
                </li>
                <li>
                Implemented features using Microsoft Graph API, NUSmods API and Firebase
                </li>
                <li>
                Created an email parser that creates events with date/time using Regular Expressions
                </li>
                <li>
                Cultivated independent and self-directed learning
                </li>
              </ul>
              <div className=' text-center'>
                <a href="https://www.youtube.com/watch?v=vvMQKPLxsew" target="_blank" rel="noreferrer"> <button className='text-center rounded-lg px-4 pt-0 pb-0 m-2 bg-white text-gray-700 font-bold text-xs'>demo</button></a>
                <a href="https://github.com/durianpancakes/Calendar_manager" target="_blank" rel="noreferrer"> <button className='text-center rounded-lg px-4 pt-0 pb-0 m-2 bg-white text-gray-700 font-bold text-xs'>code</button></a>
              </div>
            </div>
          </div>


          {/* ee2026 */}
          <div style={{backgroundImage: `url(${ee2026})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
              <span className='text-center font-bold text-white tracking-wider pt-4'>
                FPGA Entertainment System
              </span>
              <ul className='text-sm pt-2 pl-6 list-disc'>
                <li>
                Built a Sound Display and Entertainment System in a team of 2 using Verilog
                </li>
                <li>
                Implemented graphical visualization on an OLED RGB Display based on real-time audio
                </li>
                <li>
                Fostered creative thinking skills by constructing a visual game that required users to time
and vary audio volume 
                </li>
                <li>
                Facilitated project direction and enhanced communication skills
                </li>
              </ul>
              <div className=' text-center'>
                <a href="https://docs.google.com/document/d/1FRZsYRh-V-aaFaDKW0oO6V1oVEBIuN7VMGO2sQVusXQ/edit?usp=sharing" target="_blank" rel="noreferrer"> <button className='text-center rounded-lg px-4 pt-0 pb-0 m-2 bg-white text-gray-700 font-bold text-xs'>documentation</button></a>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}


export default Projects