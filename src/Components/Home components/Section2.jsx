import React from 'react'
import appStyles from "../../App.module.css";
import { Link } from 'react-router-dom';
import Pic5 from "../../Images/pic5.jpg";
import Pic6 from "../../Images/pic6.jpg";
import Pic7 from "../../Images/pic7.jpg";
import { Image } from '@chakra-ui/react';
import { IoIosHeart, IoIosArrowRoundForward, IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import {AiOutlineShopping} from "react-icons/ai"; 
export const Section2 = () => {
  return (
    <span id={appStyles.section2}>
        <article id={appStyles.section2Main}>
          Our best products
        </article>
        <span id={appStyles.section2Flex1}>

        <article id={appStyles.section2WeWill}>
          We will deliver your products within 30 minutes in your town
        </article>
        <button className={appStyles.section2BtnClass} id={appStyles.section2ContentBtn}><Link class={appStyles.section2ContentBtnLink} to="/products">Explore All Products <IoIosArrowRoundForward style={{position:"absolute", right:"-2.5em", top:"-0.4em"}} size={"2.5em"}/> </Link></button>
        </span>
        <span id={appStyles.section2Flex2}>
          <span id={appStyles.section2Imgcover}>

          <div class={appStyles.section2ImgCont}>
            <Image src={Pic5}/>
          </div>
          <span className={appStyles.section2ProductTitle}>
            Moistourizer Cream
          </span>
          </span>

          <span id={appStyles.section2ImgCover}>

            <div class={appStyles.section2ImgCont}>
              <Image src={Pic6}/>

            </div>
            <span id={appStyles.section2ImgText}>
              <span className={appStyles.section2ImgTextFlex1}>
                <span id={appStyles.section2ImgTextProductPrice}>

                $120.99
                </span>
                <IoIosHeart style={{color:"red", position:"absolute", right:"0"}}/>
              </span>
              <article id={appStyles.section2ImgTextTitle}>Body lotion</article>
              <article id={appStyles.section2ImgTextweWill}> We will deliver your products within 30 minutes in your town</article>
              <span id={appStyles.section2ImgTextRatingsCover}>
                <article id={appStyles.section2ImgTextRatingsNumber}>3.5</article>
                <span id={appStyles.section2ImgTextRatingsCoverStarsCover}>
                  <IoIosStar/>
                  <IoIosStar/>
                  <IoIosStar/>
                  <IoIosStarHalf/>
                  <IoIosStarOutline/>

                </span>
              </span>
              <span id={appStyles.section2ImgTextFlex2}>
              <button className={appStyles.section2BtnClass} id={appStyles.section2ContentBtn2}><Link class={appStyles.section2ContentBtnLink} id={appStyles.section2ContentBtnLink2} to="/products/:Id">Shop Now<IoIosArrowRoundForward style={{position:"absolute", right:"1.5em", top:"0em"}} size={"1.5em"}/> </Link></button>
              <button className={appStyles.section2BtnClass} id={appStyles.section2ContentBtn3}><Link  id={appStyles.section2ContentBtnLink3} to="/cart"> <AiOutlineShopping size={"1.2em"}/> </Link></button>
              
              </span>
            </span>
          </span>
          <span id={appStyles.section2Imgcover}>

          <div class={appStyles.section2ImgCont}>
            <Image src={Pic7}/>

          </div>
          <span className={appStyles.section2ProductTitle}>
           Nail Polish
          </span>
          </span>
        </span>
    </span>
  )
}
