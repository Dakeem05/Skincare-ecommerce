import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import Pic1 from "../../Images/arrows.png"
import Pic2 from "../../Images/pic11.jpg"
import {IoIosArrowRoundForward} from "react-icons/io"
import appStyles from "../../App.module.css";

export const Section4 = () => {
  return (
    <span id={appStyles.section4}>
        <span id={appStyles.section4Part1}>
            <article id={appStyles.section4MainText}>
                <span id={appStyles.section4MainTextPart1}>
                    Take <span className={appStyles.section4Red}>care your</span>
                </span>
                <span id={appStyles.section4MainTextPart2}>
                    <span className={appStyles.section4Red}>skin</span> it's valuable
                </span>
            </article>
            <article id={appStyles.section4SubText}>
                <span id={appStyles.section4SubTextPart1}>
                    Makeup tips, reviews & skincare
                </span>
                <span id={appStyles.section4SubTextPart2}>
                    advice | blog - huda beauty 
                </span>
            </article>
            <article id={appStyles.section4WeWill}>
                We will deliver your products within 30 minutes in your town, We will deliver your products within 30 minutes in your town.
            </article>
            <button className={appStyles.section4BtnClass} id={appStyles.section4ContentBtn}><Link class={appStyles.section4ContentBtnLink} to="/blog">Go to Blog <IoIosArrowRoundForward style={{position:"absolute", right:"1em", top:"0.2em"}} size={"2.5em"}/> </Link></button>
        </span>
        <div className={appStyles.section4Arrows} id={appStyles.section4ArrowDown}>
            <Image src={Pic1}/>
        </div>
        <div className={appStyles.section4Arrows} id={appStyles.section4ArrowUp}>
            <Image src={Pic1}/>
        </div>
        <span id={appStyles.section4Part2}>
            <article id={appStyles.section4BlogTiitle}>Related Blog</article>
            <div id={appStyles.section4ImgCont}>

                <Image id={appStyles.section4Img} src={Pic2}/> 
            </div>
            <article id={appStyles.section4Part2SubText}>
                <span id={appStyles.section4Part2SubTextPart1}>
                    Makeup tips, reviews & 
                </span>
                <span id={appStyles.section4Part2SubTextPart2}>
                    skincare advice | blog
                </span>
                <span id={appStyles.section4Part2SubTextPart3}>
                    Felcom thought
                </span>
            </article>
            <article id={appStyles.section4Part2SubText}>
                <span id={appStyles.section4Part2SubTextPart1}>
                    Makeup tips, reviews & 
                </span>
                <span id={appStyles.section4Part2SubTextPart2}>
                    skincare advice | blog
                </span>
                <span id={appStyles.section4Part2SubTextPart3}>
                    Felcom thought
                </span>
            </article>
            <article id={appStyles.section4Part2SubText}>
                <span id={appStyles.section4Part2SubTextPart1}>
                    Makeup tips, reviews & 
                </span>
                <span id={appStyles.section4Part2SubTextPart2}>
                    skincare advice | blog
                </span>
                <span id={appStyles.section4Part2SubTextPart3}>
                    Felcom thought
                </span>
            </article>
        </span>
    </span>
  )
}
