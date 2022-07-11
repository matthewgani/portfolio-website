import ADSK from '../assets/autodesk.svg'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className="max-w-[1000px] w-full flex justify-center items-center">
          {/* so text jumps to the right when screen gets small */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work Experience</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full px-8'>
          <div className='flex justify-center items-center'>
            <div>
              <p>Software Engineer Intern @ Autodesk</p>
              <p>June 2021 - November 2021</p>
            </div>
            <img src={ADSK} alt='autodesk logo' className='w-32'/>
          </div>
          <div className='flex justify-center items-center'>
          <ul className="list-disc">
              <li>
              Utilized AWS tools to migrate data from Oracle Database to AWS RDS Database
              </li>
              <li>
              Identified and wrote technical documentation of changes to replace enterprise application with AWS cloud system
              </li>
              <li>
              Built a Spring Boot microservice that listens to AWS Kinesis stream and pushes events to
AWS SQS
              </li>
              <li>
              Enhanced communication skills through Agile Methodology with Scrum meetings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work