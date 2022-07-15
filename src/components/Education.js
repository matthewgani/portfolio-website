
const Education = () => {
  return (
    <div name='education' className="w-full h-screen bg-[#0a192f] text-gray-300 pt-16">
      
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-center items-center">
          {/* so text jumps to the right when screen gets small */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Education</p>
          </div>
          <div>
          </div>
        </div>
        {/* when small we make grid cols 2 */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" font-bol flex flex-col">
            <div className="text-center text-3xl ">
              <p>
              Undergraduate experience
              </p>
            </div>
            <ul className="text-center">
              Computer Engineering @ the National University of Singapore
              <li>
                Years of study: 2019-2023
              </li>
              <li>
                GPA/CAP: 4.72/5.0
              </li>
              <li>
              Deans' List 
                <a href='https://credentials.nus.edu.sg/eaeda8aa-02d5-4b41-bcec-6bf0c03fd3bb'
                target="_blank" rel="noreferrer" className='underline text-blue-600'>
                (AY21/22 Semester 2)
                </a>
              </li>
              <li>
              NUS Orbital  
                <a href='https://credentials.nus.edu.sg/24a23141-cf29-4563-8949-d074251b0610'
                target="_blank" rel="noreferrer" className='underline text-blue-600'>
                (Apollo 11)
                </a>
              </li>
              <li>
                Marketing Head for the ECE Club AY20/21 
              </li>
            </ul>
          </div>
          <div>
            <div className="text-center text-3xl ">
              <p>
              Core modules
              </p>
            </div>
            <ul className="text-center">
              <li>
                Data Structures and Algorithms
              </li>
              <li>
                Software Engineering & Object-Oriented Programming
              </li>
              <li>
                Introduction to Information Security
              </li>
              <li>
                Database Systems
              </li>
              <li>
                Computer Architecture
              </li>
              <li>
                Computer Engineering Capstone Project
                <a className='underline text-blue-600'href='https://credentials.nus.edu.sg/b673f0c4-8e70-4ce1-b842-954579d0ab5c' target="_blank" rel="noreferrer">
                   (Top Student)
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Education