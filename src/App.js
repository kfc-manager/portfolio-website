import Header from './components/header/Header'
import Social from './components/social/Social'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Degree from './components/degree/Degree'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Social/>
      <About/>
      <Projects/>
      <Degree/>
      <Footer/>
    </div>
  );
}

export default App;
