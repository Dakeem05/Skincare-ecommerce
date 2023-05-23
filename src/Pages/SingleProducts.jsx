import React from 'react'
import { Link, useParams } from "react-router-dom";
export const SingleProducts = () => {
    const {productsId} = useParams();
    console.log(useParams());
  return (
    <>
    SingleProsuct
    </>
  )
}
