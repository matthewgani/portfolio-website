
const Education = () => {
  return (
    <div name='education' className="w-full h-screen bg-[#0a192f] text-gray-300">
      
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
                Deans' List (AY21/22 Semester 2)
              </li>
              <li>
                Marketing Head for the ECE Club AY20/21 
              </li>
            </ul>
          </div>
          <div>
            <div className="text-center text-3xl ">
              <p>
              Relevant modules
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Education