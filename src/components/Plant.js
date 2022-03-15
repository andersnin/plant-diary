import React from 'react';
import { useLocation } from "react-router"

const Plant = () => {
    const location = useLocation()
    const { img_url } = location.state.plant
  return (
    <main>
        <article className='single-plant-view'>
            <img className='plant-img' src={img_url} alt="" />
        </article>
    </main>
  )
}

export default Plant