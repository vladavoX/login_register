import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  isLogin: boolean
}

const LoginRegisterForm = ({ isLogin }: Props) => {
  const navigation = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails({ ...userDetails, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isLogin) {
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      })
    }
    if (!isLogin) {
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      })
      navigation('/')
    }
  }

  return (
    <form
      className='flex flex-col justify-center items-center w-96 gap-8'
      onSubmit={handleSubmit}
    >
      <input
        className='w-full bg-gradient-to-br from-cyan-700 to-teal-800 p-4 rounded-2xl text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500'
        type='text'
        placeholder='Username'
        required
        name='username'
        onChange={handleChange}
        value={userDetails.username}
      />
      <input
        className='w-full bg-gradient-to-br from-cyan-700 to-teal-800 p-4 rounded-2xl text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500'
        type='password'
        placeholder='Password'
        required
        name='password'
        onChange={handleChange}
        value={userDetails.password}
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
      <button
        type='submit'
        className='w-full bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl text-gray-200 font-bold'
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
    </form>
  )
}

export default LoginRegisterForm
