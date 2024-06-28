import React from 'react'
import { Overlay } from 'vtex.react-portal';
import { useCssHandles } from 'vtex.css-handles'
import { useRuntime } from 'vtex.render-runtime'
//import styles from './style.css'

const CSS_HANDLES =[
    "container_wp",
    "container_wp_img"
]

const CustomExample = (props:any) => {
    console.log({props});
    const runtime = useRuntime()
    const { navigate, setQuery } = useRuntime()

    const handleClick = () => {
        
      navigate({
        to: '/other-page'
      })
    }
    console.log({handleClick});
    
    const handleClick2 = () => {
      setQuery({ foo: 'bar' })
    }
    console.log({runtime});
    const handles = useCssHandles(CSS_HANDLES)
  return (
    <Overlay>
        <button className={handles.container_wp} onClick={handleClick2}>
            <img className={handles.container_wp_img} src='https://nevenpartnerco.vtexassets.com/assets/vtex.file-manager-graphql/images/4965e392-8912-4618-88be-4aac01bda2b1___203adbe4f93bb94d4b6f6a2b22248e34.png' alt='WhatsApp' />
        </button>
    </Overlay>
  )
}

export default CustomExample