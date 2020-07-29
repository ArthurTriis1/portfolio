import React, { useState, useEffect, useRef } from 'react';
import group from '../../assets/images/sidebar/background.png';
import sun from '../../assets/images/sidebar/sun.png';

import { AiFillGithub, AiFillInstagram, AiOutlineMenu, AiFillLinkedin, AiFillCloseCircle,  AiOutlineArrowUp, AiOutlineMedium} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({photo}) {

    const navBarRef = useRef();
    const [showMenu, setShowMenu] = useState(false)
    const [showFlutterButton, setShowFlutterButton] = useState(false);

    function SmoothVerticalScrolling(e, time, where) {
        var eTop = e.getBoundingClientRect().top;
        var eAmt = eTop / 100;
        var curTime = 0;
        while (curTime <= time) {
            window.setTimeout(SVS_B, curTime, eAmt, where);
            curTime += time / 100;
        }
    }
    
    function SVS_B(eAmt, where) {
        if(where === "center" || where === "")
            window.scrollBy(0, eAmt / 2);
        if (where === "top")
            window.scrollBy(0, eAmt);
    }

    useEffect(() => {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 160) {
                setShowFlutterButton(true)
            }else{
                setShowFlutterButton(false)
            }
        }
    }, [])

    return (
        <>
        <div className={`flutterMenuButton ${showFlutterButton && "flutterMenuButtonShow"}`}>
            <AiOutlineMenu className="iconFlutterMenu" onClick={() => setShowMenu(true)}/>
        </div>
        <div className={`flutterTopButton ${showFlutterButton && "flutterMenuButtonShow"}`}>
            <AiOutlineArrowUp className="iconFlutterMenu" onClick={()=>{
                SmoothVerticalScrolling(navBarRef.current, 300, "top")
            }}/>
        </div>
        <nav className="navBar" ref={navBarRef}>
            <AiOutlineMenu className="iconMenu" onClick={() => setShowMenu(true)}/>
            <h3 className="navTitle">Arthur Andrade</h3>
            <h4 className="navSubtitle">Desenvolvedor Front End</h4>
            <img src={sun} alt="Sol da bandeira de Pernambuco" className="iconSun"/>
        </nav>
        <aside className={`Sidebar ${showMenu && "ShowMenu"}`}>
            <AiFillCloseCircle className="btClose" onClick={() => setShowMenu(false)}/>
            <div className="backgroundPe">
                <div style={{backgroundImage: `url(${photo})`}} className="imagePhoto"></div>
                <img src={group} alt="" className="imageSidebar"/>
            </div>
            <h2 className="title">Arthur Andrade</h2>
            <h3 className="subtitle">Desenvolvedor Front End</h3>
            <h4 className="description">Apaixonado por tecnologia, compartilho com todos sempre o meu melhor.</h4>
            <section className="socialWrap">
                <a href="https://github.com/ArthurTriis1">
                    <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/kikikiiing/">
                    <AiFillInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/arthur-andrade-30047818b/">
                    <AiFillLinkedin/>
                </a>
                <a href="https://medium.com/@arthurfelandrade/">
                    <AiOutlineMedium/>
                </a>
            </section>
            <section className="selectPages">
                <NavLink to="/" exact activeStyle={{color: "#FED605"}} onClick={()=> setShowMenu(false)}>Home</NavLink>
                <NavLink to="/about" exact activeStyle={{color: "#FED605"}} onClick={()=> setShowMenu(false)}>Sobre</NavLink>
                <NavLink to="/colab" exact activeStyle={{color: "#FED605"}} onClick={()=> setShowMenu(false)}>Colab</NavLink>
                <a href="https://docs.google.com/document/d/1DfYhDTgFIdP46p0WP6-tKpwmPswzU7m-avQ5sxIKX44/edit">Currículo</a>
            </section>
        </aside>
        </>
    )
}

export default Sidebar;