import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.jsx';
import First from './components/first.jsx';
import Prop1 from './components/prop.jsx';
import ColorChange from './components/state.jsx';
import Effect from './components/effect.jsx';
import LstRendering from './components/listrender.jsx';
import NavMenu from './components/key.jsx';
import Forms from './components/forms.jsx';
import Football from './components/Events.jsx';
import FormComponent from './components/FormComponent.jsx'; // Assuming this is the path to your FormComponent
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import TodoApp from './components/Todo.jsx';
import DisplayRedux from './redux/DisplayRedux.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LazyDisplay from './lazyLoading/LazyDisplay.jsx';
import Memo from './components/Memo.jsx';
import Counter from './ErrorBoundary/Counter.jsx';
import ErrorBoundary from './ErrorBoundary/Errorbounday.jsx';
import Portal from './portal/Portal.jsx'; 
import Button from './highorder/button.jsx'; 
import Heading from './highorder/Heading.jsx';
import Customhooks from './hooks/Customhooks.jsx'; // Importing Customhooks component
import UseToggle from './hooks/useToggle.jsx'; // Importing useToggle hook
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       {/* <Router>
        <nav style={{ margin: '10px' }}>
          <Link to="/home" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}
       {/* <First />
       <Prop1 />
      <ColorChange />
      <Effect />
      <LstRendering />
      <NavMenu />
      <Forms />
      <Football />
      <TodoApp />  */}
       {/* <MovieSearch />
      <FormComponent />  */}
      
       {/* <DisplayRedux />   */}
        {/* <LazyDisplay />  */}
      {/* <Memo />  */}
      {/* <Counter title={"first"}/>
      <Counter title={"Second"}/> */}
      {/* <Portal /> */}
      {/* <div>
        <Heading />
        <Button />
      </div> */}
      {/* <Customhooks /> */}

       <ErrorBoundary>
        <Counter title="First Counter" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter title="Second Counter" />
      </ErrorBoundary>
      {/* <UseToggle defaultval={false} /> */}
    </>
  );
}
export default App;