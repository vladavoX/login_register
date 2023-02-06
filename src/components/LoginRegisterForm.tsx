const LoginRegisterForm = () => {
  return (
    <form className='flex flex-col justify-center items-center w-96 gap-8'>
      <input
        className='w-full bg-gradient-to-br from-cyan-700 to-teal-800 p-4 rounded-2xl text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500'
        type='text'
        placeholder='Username'
      />
      <input
        className='w-full bg-gradient-to-br from-cyan-700 to-teal-800 p-4 rounded-2xl text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500'
        type='password'
        placeholder='Password'
      />
      <div className='flex w-full justify-between'>
        <p className='text-gray-200'>Don't have an account?</p>
        <a
          href='/register'
          className='text-green-600'
        >
          Register now!
        </a>
      </div>
      <button className='w-full bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl text-gray-200 font-bold'>
        Login
      </button>
    </form>
  )
}

export default LoginRegisterForm
