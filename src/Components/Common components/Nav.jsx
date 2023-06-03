import React, { useState } from 'react';
import appStyles from "../../../src/App.module.css";
import { Link } from 'react-router-dom';
import Logo from "../../Images/logo.png"
import { Box, Text, Flex, Button, chakra, HStack, Image } from "@chakra-ui/react";
import { MobileDrawer } from './MobileDrawer';
import {AiOutlineShopping} from "react-icons/ai";
import {IoIosSearch} from "react-icons/io"

export const Nav = ({navId_home, navId_services, navId_about, navId_products, navId_blog}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const displaySearchBar = () =>{
  }
  const setInputData = (setInput, e) => {
    setInput(e.target.value);
  }
  const formHandler = (e) =>{
    e.preventDefault()
    if(isClicked === true){
      if (searchedText !== ""){
        alert(searchedText)
      }
      else{
        setIsClicked(false)

      }
      // alert("submitted")
    } else{
      setIsClicked(true)
      return
    }
  }
  return (
    <>
        <chakra.header
         position={'fixed'} 
         top={"0"} 
         id={appStyles.navHeader} 
         >
          <Flex 
            align="center"
            justify="space-between"
            style={{marginTop:"-2em", marginLeft:"-3em"}}
          >
            <Image id={appStyles.logo} src={Logo}/>
            <HStack color={"white"} className={appStyles.nav} as="nav" spacing={7}
             
            >
              <Link className={appStyles.homeLink} id={navId_home} style={{marginRight:"0vw"}} to="/">Home</Link>
              <Link className={appStyles.homeLink}  id={navId_products} to="/products">Products</Link>
              <Link className={appStyles.homeLink}  id={navId_services} to="/services">Services</Link>

              <Box id={appStyles.asideNav}>
                <form onSubmit={formHandler}>
                {isClicked &&(
                  <input onChange={(e)=>setInputData(setSearchedText, e)} type="text" name="seacrh" id={appStyles.navSearch} />

                )}
                <Button  type='submit' className={appStyles.homeLink}  id={isClicked?appStyles.navId_searchIconClicked:appStyles.navId_searchIcon}><IoIosSearch/></Button>
                </form>
                <Link className={appStyles.homeLink}  id={appStyles.navId_cart} to="/cart"><AiOutlineShopping/></Link>
              </Box>
              {/* <Link className={appStyles.homeLink}  id={navId_about} to="/about">About</Link>
              <Link className={appStyles.homeLink}  id={navId_blog} to="/blog">Blog</Link> */}
          
            </HStack>
            <HStack
            //  display={{base:"none", md:"flex"}}
            >
            
              <MobileDrawer 
                navId_home={navId_home}
                navId_services={navId_services}
                navId_products={navId_products}
                navId_blog={navId_blog}
                navId_about={navId_about}
              />
            </HStack>
          </Flex>
        </chakra.header>
          {/* <nav className={appStyles.nav}>
            <Box id="nav">
              
            </Box>
         </nav> */}
    </>
  )
}
