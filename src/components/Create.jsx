import React, { useState } from "react";
import { toast } from "react-toastify";
import { createContact } from "../db/store"; //{} typed/ nameds imports


//import React ,{usestate } form "react" (only function compornted) 

//to read values from form inputs in react forms
//mutable -> useRef() hook
// immutable -> state and change method()
const getRondom =() =>{
    return Math.round(Math.random()*1000); //rondom id
}

function Create(props) {
    //const [state,handler()]=usestate(initialvalue)
    const [fname, setFName] = useState('')
    const [femail, setFEmail] = useState('')
    const [fmobile, setFMobile] = useState('')
    const [fimage, setFImage] = useState('')
    const [faddress, setFAddress] = useState('')


    const submitHandler = async (e) => {
        e.preventDefault(); //to avoid page refresh

        let data = {
            id:getRondom(),
            name: fname,
            email: femail,
            mobile: fmobile,
            image: fimage,
            address : faddress
        };
        console.log('new contact =',data)
        createContact(data);
        //toast .success('successfully submitted')

    }
  
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
                            <form autoComplete="off" onSubmit={submitHandler} >
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={fname} onChange={(e) => setFName(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email"   value={femail} onChange={(e) => setFEmail(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="mobile" name="mobile" id="mobile"  value={fmobile} onChange={(e) => setFMobile(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">image</label>
                                    <input type="url" name="image" id="image" value={fimage} onChange={(e) => setFImage(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Address</label>
                                    <textarea type="address" id="address" cols="30" rows="5"  value={faddress} onChange={(e) => setFAddress(e.target.value)} className="form-control" required />
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