import { useReducer } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getUserList } from './utils/apis/user'
import './App.css'
import Header from './components/layout/Header'
import RootRouter from './routes/RootRouter'
import { reducer } from './stores/reducers/CountReducer'

function App() {
  
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <ToastContainer limit={10}/>
      <Header />
      <RootRouter />
    </>
  )
}

export default App
