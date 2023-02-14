import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";
import Resume from "./components/Post";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <RingLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        <AnimatePresence>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route component={Home} path="/" exact />
              <Route component={About} path="/about" />
              <Route component={Resume} path="/resume" />
              <Route component={Project} path="/project" />
            </Switch>
            <Footer />
          </BrowserRouter>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
