import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Main,Navbar,Footer,Login,Header,SignIn} from './components'
function App() {
  return (
    <div className='App'>

        <Navbar/>
        <Header/>
        <Routes>
          <Route path='/' exact={true} element={<Main/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
        </Routes>
        <Footer/>
    </div>
      

        
      
   

  )
}

export default App;
