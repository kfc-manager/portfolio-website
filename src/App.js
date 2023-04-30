import Header from './components/header/Header'
import Social from './components/social/Social'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Degree from './components/degree/Degree'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Social/>
      <About/>
      <Projects/>
      <Degree/>
    </div>
  );
}

export default App;
