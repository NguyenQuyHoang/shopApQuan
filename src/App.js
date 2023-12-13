import { useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import MainRouter from './Components/MainRouter/MainRouter'
import Navigation from './Components/navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from './redux/LoginSlice'
import { LoginSelecter } from './redux/selector'
import { AxiosGetProducts } from './redux/productsSlice'
import PageLogin from './Components/Login/Login'
import Footer from './Components/footer'
import Register from './Components/Login/Register'
import { initState } from './redux/ctspSlice/CtspSlice'




function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AxiosGetProducts())
    let username = sessionStorage.getItem("username")
    if (username === '' || username === null) {
      dispatch(LoginAction.SetLogin(1))
    }
  }, [])

  let getStateLogin = useSelector(LoginSelecter)
  const data = () => {
    console.log("chạy vào data")
    if (getStateLogin.Login === 1) {
      return (
        <PageLogin />
      )
    } else if (getStateLogin.Home === 1){
      return (
          <Navigation />
      )
    }else {
      return (
        <Register />
      )
    }
  }


  return (
    <div className='App'>
      {/* // Khung chính cho toàn bộ trang web */}
      <Header />
      {/* Dòng thông tin giới thiệu đầu trang web về hotline và thông báo sản phẩm */}
      {/* Phần Header nằm ngoài phần container */}
      <div className='container'>
        {data()}
        {/* <PageLogin /> */}
        <MainRouter />
        <Footer />
      </div>
    </div>
  )
}

export default App