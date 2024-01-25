import './App.css'
import Skill from './components/Skill'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <div className='bg-[url(assets/mountain.jpg)] bg-cover min-screen' >
        <Nav/>
        <Banner/>
      </div>
      <div>
        <Skill/>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
      
  )
}

export default App
