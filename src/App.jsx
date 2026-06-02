import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from '../src/components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Showcase from  './components/Showcase.jsx';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
       <main>
           <NavBar />
            <Hero />
           <ProductViewer />
           <Showcase />

       </main>
    )
}
export default App
