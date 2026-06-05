import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from '../src/components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Showcase from  './components/Showcase.jsx';
import Perfromance from './components/Performance.jsx';
import Features from './components/Features.jsx';
import Highlights from './components/Highlights.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
       <main>
           <NavBar />
            <Hero />
           <ProductViewer />
           <Showcase />
           <Perfromance />
            <Features/>
           <Highlights />
           <Footer/>
       </main>
    )
}
export default App
