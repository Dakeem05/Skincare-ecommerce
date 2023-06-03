import React from 'react'
import appStyles from "../../App.module.css";
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import Pic8 from "../../Images/pic8.jpg"
import Pic9 from "../../Images/pic9.jpg"
import Pic10 from "../../Images/pic10.jpg"
import Pic11 from "../../Images/pic11.jpg"
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
        <span id={appStyles.section3Flex2}>
          <span id={appStyles.section3Cont1}>
            <article className={appStyles.section3ServiceTitle}>Hair Treatments</article>
            <article id={appStyles.section3ServiceWeWill}>We will deliver your products within 30 minutes</article>
            <div id={appStyles.section3ServiceImg}>
              <Image className={appStyles.section3Img} src={Pic8}/>
            </div>
            <span className={appStyles.section3Flex3}>
              <article id={appStyles.section3ServicePrice}>$299</article>
              <IoIosArrowRoundForward id={appStyles.section3Arrow}/>
            </span>
          </span>
          <span id={appStyles.section3Cont2}>
            <article className={appStyles.section3ServiceTitle}>Skin Care & Facial </article>
            <article id={appStyles.section3ServiceWeWill}>We will deliver your products within 30 minutes</article>
            <div id={appStyles.section3ServiceImg}>
              <Image className={appStyles.section3Img} src={Pic9}/>

            </div>
            <span className={appStyles.section3Flex3}>
              <article id={appStyles.section3ServicePrice}>$399</article>
              <IoIosArrowRoundForward id={appStyles.section3Arrow}/>
            </span>
          </span>
          <span id={appStyles.section3Cont3}>
            <article id={appStyles.section3ServiceRed} className={appStyles.section3ServiceTitle}>Ultra Glo therapy</article>
            <article id={appStyles.section3ServiceWeWill}>We will deliver your products within 30 minutes</article>
            <div id={appStyles.section3ServiceImg}>
              <Image className={appStyles.section3Img} src={Pic10}/>

            </div>
            <span id={appStyles.section3ServiceRed} className={appStyles.section3Flex3}>
              <article id={appStyles.section3ServicePrice}>$199</article>
              <IoIosArrowRoundForward id={appStyles.section3Arrow}/>
            </span>
          </span>
          <span id={appStyles.section3Cont4}>
            <article className={appStyles.section3ServiceTitle}>Facial massage</article>
            <article id={appStyles.section3ServiceWeWill}>We will deliver your products within 30 minutes</article>
            <div id={appStyles.section3ServiceImg}>

              <Image className={appStyles.section3Img} src={Pic11}/>
            </div>
            <span className={appStyles.section3Flex3}>
              <article id={appStyles.section3ServicePrice}>$299</article>
              <IoIosArrowRoundForward id={appStyles.section3Arrow}/>
            </span>
          </span>
      
        </span>
    </span>
  )
}
