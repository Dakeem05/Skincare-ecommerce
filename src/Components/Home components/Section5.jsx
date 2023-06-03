import React from 'react';
import appStyles from "../../App.module.css"
import {IoIosArrowRoundForward} from "react-icons/io"
import Pic1 from "../../Images/pic1-bg.png";
import Pic2 from "../../Images/pic2.jpg";
import { Image } from '@chakra-ui/react';

export const Section5 = () => {
  return (
    <span id={appStyles.section5}>
        <div id={appStyles.section5Part1}>
            <Image src={Pic1} id={appStyles.section5Pic1}/>
        </div>
        <span id={appStyles.section5Part2}>
            <article id={appStyles.section5Main}>
                <span id={appStyles.section5Main1}>customers says</span>
                <span id={appStyles.section5Main2}>about our services</span>
            </article>
            <article id={appStyles.section5Test}>
                This cream is really amazing for oily skin type people. This cream is not greasy after applying on the face, it absorbs ver quickly. The most excellent part is it's small, which is so good and refreshing.
            </article>
            <span id={appStyles.section5Flex1}>
                <div id={appStyles.section5ImgCont}>
                    <Image src={Pic2} id={appStyles.section5Pic1}/>
                </div>
                <span id={appStyles.section5Flex2}>
                    <article id={appStyles.section5Name}>John alexis texas</article>
                    <article id={appStyles.section5Address}>New  York, USA</article>
                </span>
                <IoIosArrowRoundForward size={"2.5em"} style={{position:"absolute", right:"0", top:"1em", color:"palevioletred"}}/>
            </span>
        </span>
    </span>
  )
}
