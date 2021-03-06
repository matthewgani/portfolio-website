


const Contact = () => {

  return (
    <div name='contact' className="w-full h-auto bg-[#0a192f] flex justify-center items-center p-4 pt-20">

      <form method='POST' action="https://getform.io/f/2a54ee1b-20b8-42a7-84e4-79056ce91f3e" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">For any enquiries, submit the form below or send me an email - matthewgani2@gmail.com</p>
        </div>

        <input className='bg-[#ccd6f6] p-2'type='text' placeholder="Name" name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]'type='text' placeholder="Email" name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder="Message" ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Send me a message!</button>
      </form>
    </div>
  )



}

export default Contact