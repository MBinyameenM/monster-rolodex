import React from 'react';
import './searchbox.css';

export const SearchBox = props => (

    <div className="row mt-5">
        <div className="offset-3 col-6">
    
            <input
                autoFocus
                placeholder={ props.placeholder}
                onChange={props.handleChange}
                className="form-control"
                type="search"
            />
        
        </div>
    </div>

);