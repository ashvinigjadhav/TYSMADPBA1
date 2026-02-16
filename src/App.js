import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Post from './Component/Post';
import Project from './Component/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Blog />
      <Post />
      <Contact />
    </div>
  );
}

export default App;