import React from 'react'
import Card from './Card'

import image1 from "../assets/Carn.jpg"
import image2 from "../assets/Tort.jpg"
import image3 from "../assets/Chesco.jpg"

const cards=[
  {
      id:1,
      title: 'Tacos de Carnitas',
      image:image1,
      instructor:"Carlos Jiménez"
  },
  {
      id:2,
      title:'Tortas de Carnitas',
      image:image2,
      instructor:"Carlos Jiménez"
  },
  {
      id:3,
      title: 'Refrescos',
      image:image3,
      instructor:"Carlos Jiménez"
  }
]

export default function Cards() {
  console.log()
  return (
      <div className='container d-flex justify-content-center align-items-center h-100'>
          <div className='row'>
              {
                  cards.map(c => (
                      <div className="col-md-4" key={cards.id}>
                          <Card
                              key={c.id}
                              id={c.id}
                              title={c.title}
                              image={c.image}
                              instructor={c.instructor}
                          />
                      </div>
                  ))
              }
          </div>
     </div>
);
}


/* export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-40'>
      <div className='row'>
        <div className='col-md-4'>
         <Card/>
        </div>
        <div className='col-md-4'>
         <Card/>
        </div>
        <div className='col-md-4'>
         <Card/>
        </div>
      </div>
    </div>
  )
}
 */