import { useEffect, useState } from 'react'
import LoginRegisterForm from './components/LoginRegisterForm'
import { useLocation } from 'react-router-dom'
import DisplayDataModal from './components/DisplayDataModal'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [data, setData] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/register') {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, [])
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-cyan-800 to-teal-900 gap-16'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl text-gray-50'>
          {isLogin ? 'Sing In' : 'Sing Up'}
        </h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-xl text-gray-200'>
            {isLogin
              ? 'Sing in and nothing will happen, becuase that is all this app does!'
              : 'Sing up and your account will be created, then login with it!'}
          </p>
          <p className='text-gray-400'>
            {isLogin
              ? 'Okay maybe it will show you a little message of your user data, but that is it. Nothing else.'
              : 'Once you register and login you will be able to see your user data.'}
          </p>
        </div>
      </div>
      <LoginRegisterForm
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setData={setData}
      />
      {data !== null && (
        <DisplayDataModal
          data={data}
          setData={setData}
        />
      )}
    </div>
  )
}

export default App
