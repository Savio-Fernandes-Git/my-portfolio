import react,{ useState, useEffect} from 'react'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { AnimatePresence } from 'framer-motion';
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
`;

function App() {
  const [loading, setLoading]=useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <div className="App">
    {loading ?  <RingLoader color={color} loading={loading} css={override} size={150}/> 
    :
    <AnimatePresence>
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route component={Home} path='/' exact/>
            <Route component={About} path='/About' />
            <Route component={Post} path='/Post' />
            <Route component={Project} path='/Project' />
          </Switch>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
    
    }
    </div>
      
  );
}

export default App;
