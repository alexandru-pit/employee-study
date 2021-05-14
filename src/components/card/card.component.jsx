import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <div  className='card-picture' title={props.employee.prenume + " " + props.employee.nume}
      style={{backgroundImage: `url( ${props.employee.picture})`}}
    />
    <div className='card-details'> 
      <div className='card-details-title'>{props.employee.prenume} {props.employee.nume} </div>
      <div className='card-details-content'> {props.employee.role} </div>
    </div>
  
  </div>
);
