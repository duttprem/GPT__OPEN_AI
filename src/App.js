import './App.css';

 import { Article,Brand,CTA,Feature,Navbar } from './components';
import { Blog,Footer,Features,Header,Possibility,WhatGPT } from './container';
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
      <Navbar />
        <Header />

      </div>
      <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
      <CTA />
        <Blog />
        <Footer />
      
      
    </div>
  );
}

export default App;
