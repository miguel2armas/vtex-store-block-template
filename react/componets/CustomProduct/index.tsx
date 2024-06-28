import React from 'react'
import { useProduct } from 'vtex.product-context'

const CustomProduct = () => {
    const productContextValue = useProduct();
    console.log({productContextValue});
    
  return (
    <div>context product</div>
  )
}

export default CustomProduct