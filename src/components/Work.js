import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {

  return (
    // takes a lot of room on mobile so anything above Medium we display h screen
    <div name='work' className="w-full md:h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          <p className="py-6 text-gray-300">/ check out some of my recent work</p>
        </div>

        {/* container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* grid item */}
          <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white trcking-wider'>
                React JS application
              </span>
              <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>demo</button></a>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button></a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${realEstate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white trcking-wider'>
                React JS application
              </span>
              <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>demo</button></a>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button></a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white trcking-wider'>
                React JS application
              </span>
              <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>demo</button></a>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button></a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${realEstate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white trcking-wider'>
                React JS application
              </span>
              <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>demo</button></a>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button></a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white trcking-wider'>
                React JS application
              </span>
              <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>demo</button></a>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button></a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${realEstate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white trcking-wider'>
                React JS application
              </span>
              <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>demo</button></a>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Work