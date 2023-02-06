interface Props {
  isLogin: boolean
}

const LoginRegisterForm = ({ isLogin }: Props) => {
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
        <p className='text-gray-200'>
          {isLogin ? 'Do not have an account?' : 'Already have an account?'}
        </p>
        <a
          href={isLogin ? '/register' : '/'}
          className='text-green-600'
        >
          {isLogin ? 'Register now!' : 'Login now!'}
        </a>
      </div>
      <button className='w-full bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl text-gray-200 font-bold'>
        {isLogin ? 'Login' : 'Register'}
      </button>
    </form>
  )
}

export default LoginRegisterForm
