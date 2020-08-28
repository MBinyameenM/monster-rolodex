import React from 'react';
import './card.css';

export const Card = props => (
    <div className="col-md-3 mb-5" >
        
        <div className="card p-3" >
            <img className="card-img-top" src={`https://robohash.org/${props.monster.id}?set=set2`} alt="mosnter image" />
            <div className="card-body">
                <h5 className="card-title"> { props.monster.name }</h5>
                <p className="card-text"> {props.monster.email} </p>
            </div>
        </div>
        
    </div>
);