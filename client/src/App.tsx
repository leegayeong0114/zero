import { useReducer } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getUserList } from './utils/apis/user'
import './App.css'
import Header from './components/layout/Header'
import RootRouter from './routes/RootRouter'
import { reducer } from './stores/reducers/CountReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ThemeProvider } from 'react-bootstrap'
import AuthContextProvider from './contexts/AuthContext'

function App() {
  
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <AuthContextProvider>
        <ToastContainer limit={10}/>
        <ThemeProvider
          breakpoints={['xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
          >
          <Header />
          <Container className="px-3 py-3 my-5" style={{ borderBottom: '1px black solid', maxWidth: '800px', minHeight: '800px'}}>
            <RootRouter />
          </Container>
        </ThemeProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
