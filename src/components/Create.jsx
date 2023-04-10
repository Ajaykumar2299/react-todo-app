import React, { useState } from "react";

//import React ,{usestate } form "react" (only function compornted) 

//to read values from form inputs in react forms
//mutable -> useRef() hook
// immutable -> state and change method()


function Create(props) {
    //const [state,handler()]=usestate(initialvalue)
    const [fname, setFName] = useState('')
    const [femail, setFEmail] = useState('')
    const [fmobile, setFMobile] = useState('')
    const [fimage, setFImage] = useState('')
    const [faddress, setFAddress] = useState('')
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-4 text-success">Create new</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off">
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={fname} onChange={(e) => setFName(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="mobile" name="mobile" id="mobile" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">image</label>
                                    <input type="url" name="image" id="image" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Address</label>
                                    <textarea type="address" id="address" cols="30" rows="5" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                   
                                    <input type="submit"  value=" Create" className="btn btn-outline-success" />
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;