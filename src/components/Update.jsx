import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  { readcontact , UpdateContact} from "../db/store"
import { toast } from "react-toastify";


function Update(props) {
    const params = useParams();
    const [fname, setFName] = useState('')
    const [femail, setFEmail] = useState('')
    const [fmobile, setFMobile] = useState('')
    const [fimage, setFImage] = useState('')
    const [faddress, setFAddress] = useState('')

   // const [contact, setContact] = useState ('')
    useEffect(() => {
        let data = readcontact(params.id)
        setFName(data.name)
        setFEmail(data.email)
        setFMobile(data.mobile)
        setFImage(data.image)
        setFAddress(data.address)

       // setContact(data)
    },[])

    const submitHandler =(e) =>{
        e.preventDefault();
        try {
            let data ={
                name:fname,
                email:femail,
                image:fimage,
                mobile:fmobile,
                address: faddress
            };
            console.log('updated data =', data)
            UpdateContact(params.id,data)
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className="container">
           <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-4 text-success">update {params.id}</h3>
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
                                   
                                    <input type="submit"  value="update" className="btn btn-outline-success" />
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update