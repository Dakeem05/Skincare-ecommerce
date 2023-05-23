import React from 'react'
import appStyles from "../../App.module.css";
import { Link } from 'react-router-dom';
import {IoIosArrowRoundForward} from "react-icons/io"
export const Section3 = () => {
  return (
    <span id={appStyles.section3}>
        <article id={appStyles.section3Main}>
            We are <span id={appStyles.section3MainRed}>Experienced</span> 
        </article>
        <span id={appStyles.section3Flex1}>
            
        <article id={appStyles.section3WeWill}>
          We will deliver your products within 30 minutes in your town. We will deliver your products within 30 minutes
        </article>
        <button className={appStyles.section3BtnClass} id={appStyles.section3ContentBtn1}><Link class={appStyles.section3ContentBtnLink} to="/products">Browse Products <IoIosArrowRoundForward style={{position:"absolute", right:"0", top:"0"}} size={"2.5em"}/> </Link></button>
        </span>

    </span>
  )
}
