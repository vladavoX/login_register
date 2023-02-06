import LoginRegisterForm from './components/LoginRegisterForm'

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-cyan-800 to-teal-900 gap-16'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl text-gray-50'>Sing in</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-xl text-gray-200'>
            Sing in and nothing will happen, becuase that is all this app does!
          </p>
          <p className='text-gray-400'>
            Okay maybe it will show you a little message of your user data, but
            that's it. Nothing else.
          </p>
        </div>
      </div>
      <LoginRegisterForm />
    </div>
  )
}

export default App
