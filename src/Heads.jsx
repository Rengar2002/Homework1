import React from "react";
import "./Heads.css"
import {Routes,Route,Link} from "react-router-dom";
import {Home} from "./Home"
import {Happyday} from "./Happyday"
import {Test} from "./Test"
import {About} from "./About";
import {Blog} from "./Blog";
import { Svadba } from "./svadba"; 
import { Events1 } from "./events1";
import { Events2 } from "./events2";
import { Events3 } from "./events3";
import {NotfoundHome} from "./NotfoundHome";
import facebook from "./image/facebook.png";
import github from "./image/github.png";
import instagram from "./image/instagram.png";
import telegram from "./image/telegram.png";
import youtube from "./image/youtube.png";

const Heads = () => {
  return (
    <div> 
    <header>
    <div><p>Karapet Sayan</p></div>
    <div className="navigator">
        <Link to ="/" className="Text">Home</Link>
        <Link to ="/blog" className="Text">Blog</Link>
        <Link to ="/about" className="Text">About</Link>
        <Link to="/test" className="Text">Knowledge test</Link>
        <Link to ="/happyday"></Link>
        <Link to ="/svadba"></Link>
        <Link to ="/events1"></Link>
        <Link to ="/events2"></Link>
        <Link to ="/events3"></Link>
    </div>
    <div className="sociel">
        <a href="*" className="Image"><img src={facebook} alt="facebook"/></a>
        <a href="*" className="Image"><img src={github} alt="github"/></a>
        <a href="*" className="Image"><img src={instagram} alt="instagram"/></a>
        <a href="*" className="Image"><img src={telegram} alt="telegram"/></a>
        <a href="*" className="Image"><img src={youtube} alt="youtube"/></a>
    </div>
  </header>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/happyday" element={<Happyday/>}/>
    <Route path="/svadba" element={<Svadba/>}/>
    <Route path="/events1" element={<Events1/>}/>
    <Route path="/events2" element={<Events2/>}/>
    <Route path="/events3" element={<Events3/>}/>
    <Route path="*" element={<NotfoundHome/>}/>
  </Routes>
  </div>
  )
}

export default Heads