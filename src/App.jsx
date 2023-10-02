import './App.css'
import  Salute  from './components/salute/Salute'
import  MyCarousel  from './components/mycarousel/MyCarousel'
import Views from './components/views/Views'
import Reminder from './components/reminder/Reminder'
import Bye from './components/bye/Bye'


function App() {

  return (
    <>
     <Salute/>
     <MyCarousel />
     <Reminder />
     <Views />
     <Bye />
    </>
  )
}

export default App
