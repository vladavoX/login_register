interface Props {
  data: any
  setData: any
}

const DisplayDataModal = ({ data, setData }: Props) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-cyan-700 to-teal-800 p-8 rounded-2xl w-96'>
        <h1 className='text-2xl text-gray-50'>User Data</h1>
        <p className='text-gray-200'>Username: {data.data.user.username}</p>
        <p className='text-gray-200'>Password: {data.data.user.password}</p>
        <button onClick={() => setData(null)}>
          <a
            href='/'
            className='text-green-600 font-bold'
          >
            Close
          </a>
        </button>
      </div>
    </div>
  )
}

export default DisplayDataModal
