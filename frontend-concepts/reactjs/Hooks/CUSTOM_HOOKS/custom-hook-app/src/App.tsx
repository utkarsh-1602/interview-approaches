import './App.css'
import useOnlineStatus from './hooks/useOnlineStatus'

function App() {

  const isOnline = useOnlineStatus();
  
  return (
    <>
      <div>
        <h1>
          {isOnline ? '✅ Online' : '❌ Disconnected'}
        </h1>
      </div>
    </>
  )
}

export default App
