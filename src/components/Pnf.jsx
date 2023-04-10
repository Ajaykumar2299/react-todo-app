import React from "react";
import { NavLink } from "react-router-dom";

function Pnf(props) {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger">requested path not found</h3>
                    <h5 className="display-5 text-danger">404 error</h5>
                    <NavLink to ={`/`} className="btn btn-outline-success">return home</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Pnf