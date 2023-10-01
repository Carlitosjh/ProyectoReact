import React from 'react'
import PropTypes from 'prop-types'
// import image1 from "../assets/Carn.jpg"

export default function Card({id, title,image,instructor}) {
  return (
/*     <div>
        <h1>
            Terjeta de Curso
        </h1>
        <p>
            Curso: Tecnologías Computacionales II
            Instructor: Benito
            Precio: $600.00 MX
            Duración: 40 hrs.
        </p>
    </div> */
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
            <img src={image} alt="" className='card-img-top'>  
            </img>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                Taquero:{instructor}
            </p>

             <a href='#! 'className='btn btn-outline-secondary '>
                Menu
                </a>  
        </div>
    </div>
  )
}

