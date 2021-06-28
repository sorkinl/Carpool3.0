import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import image from "../Navbar/emptyProfilePic.png";
import "./Settings.css";

export default function Settings() {
    const [isEditting, setEdit] = useState(false);
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <Image src={image} roundedCircle width={150} />
                    <h5 className="mt-3">An Qing</h5>
                </div>
                <div className="col-md-8">
                    <div className="card text-left">
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 class="card-title">Basic Info</h5>
                                <button type="button" className="btn btn-primary mr-3" 
                                    onClick={() => setEdit(true)}>
                                    Edit
                                </button>
                            </div>
                            
                            <ul class="list-group list-group-flush mb-3">
                                <li class="list-group-item d-flex justify-content-between">
                                    <div>Name</div>
                                    <div className="text-secondary">An Qing</div>
                                    {/* <input type="text" class="form-control" id="inputCity"/> */}
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <div>Gender</div>
                                    <div className="text-secondary">Female</div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <div>Email</div>
                                    <div className="text-secondary">jjjjj@gmail.com</div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <div>Major</div>
                                    <div className="text-secondary">Computer Science</div>
                                </li>
                            </ul>
                            
                            <h5>Account</h5>
                            <ul class="list-group list-group-flush mb-3">
                                <li class="list-group-item d-flex justify-content-between">
                                    <div>Password</div>
                                    <div>
                                        <Link to="#">Change password</Link>
                                    </div>
                                </li>
                            </ul>
                            
                            
                            {/* <form className="row g-3 d-flex align-items-center justify-content-center">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4"/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">State</label>
                                    <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="inputZip"/>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </div>
                            </form> */}

                        </div>
                    </div>
        
                </div>
            </div>
        </div>

    )
        
}