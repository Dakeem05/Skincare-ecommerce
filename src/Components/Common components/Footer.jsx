import React from 'react'
import Logo from "../../Images/logo.png";
import { Image } from '@chakra-ui/react';
import { BiCopyright } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { Link } from 'react-router-dom';
import appStyles from "../../App.module.css"
export const Footer = ({navId_home, navId_services, navId_about, navId_products, navId_blog}) => {
  return (
    <footer id={appStyles.footer}>
        <span id={appStyles.footerFlex}>
            <div id={appStyles.footerFlex1}>
                <div id={appStyles.footerLogo}>
                    <Image src={Logo} id={appStyles.footerPic}/>
                </div>
                <div id={appStyles.footerFlex1i}>

                <span>Design</span>
                <span>amazing</span>
                <span>digital</span>
                <span>experience</span>
                <span>that create</span>
                <span>more happy</span>
                <span>in the world</span>
                </div>
            </div>
            <div id={appStyles.footerFlex2}>
                <article className={appStyles.footerMain}>Product</article>
                <ul id={appStyles.footerUl}>
                    <Link className={appStyles.footerLink} id={navId_home} to="/">Home</Link>
                    <Link className={appStyles.footerLink}  id={navId_products} to="/products">Products</Link>
                    <Link className={appStyles.footerLink}  id={navId_about} to="/about">About</Link>
                    <Link className={appStyles.footerLink}  id={navId_about} to="/about">Contact</Link>
                    <Link className={appStyles.footerLink}  id={navId_about} to="/about">FAQ</Link>
                    <Link className={appStyles.footerLink}  id={navId_about} to="/about">Releases</Link>
                </ul>

            </div>
            <div id={appStyles.footerFlex3}>
                <article className={appStyles.footerMain}>Social</article>
                <ul id={appStyles.footerUl}>
                
                  <Link className={appStyles.footerLink} >Twitter</Link>
                  <Link className={appStyles.footerLink}>LinkedIn</Link>
                  <Link className={appStyles.footerLink}>Facebook</Link>
                  <Link className={appStyles.footerLink}>GitHub</Link>
                  <Link className={appStyles.footerLink}>Instagram</Link>
                  <Link className={appStyles.footerLink}>TikTok</Link>
                </ul>

            </div>
            <div id={appStyles.footerFlex4}>
                <article className={appStyles.footerMain}>Legal</article>
                <ul id={appStyles.footerUl}>
                
                  <Link className={appStyles.footerLink}>Terms</Link>
                  <Link className={appStyles.footerLink}>Privacy</Link>
                  <Link className={appStyles.footerLink}>Cookies</Link>
                  <Link className={appStyles.footerLink}>Licences</Link>
                  <Link className={appStyles.footerLink}>Settings</Link>
                </ul>

            </div>
        </span>
        <hr />
        <div id={appStyles.copyRight}>
            <span style={{display:"flex"}}>

            <BiCopyright color='palevioletred' size={"1.2em"} style={{marginRight:"1em"}}/> Dakeem Codes. All rights reserved
            </span>
            <div id={appStyles.footerIcons}>
                <IoLogoTwitter size={"1.5em"}/>
                <IoLogoLinkedin size={"1.5em"}/>
                <BsFacebook size={"1.5em"}/>
                <IoLogoGithub size={"1.5em"}/>
            </div>
        </div>
    </footer>
  )
}
