import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import image from "../Navbar/emptyProfilePic.png";
import "./Settings.css";

export default function Settings() {
    const [editMode, setEditMode] = useState(false);
    const [noEdit, setNoEdit] = useState(true);
    const [isSaved, setSaved] = useState(false);
    
    const [input, setInput] = useState({
        name: "An Qing",
        gender: "Female",
        email: "jjjjj@gmail.com",
        major: "danmei studies",
    });

    const initVal = {
        name: "An Qing",
        gender: "Female",
        email: "jjjjj@gmail.com",
        major: "danmei studies",
    };

    useEffect(() => {
        let edited = true
        for (let key in input){
            if(initVal[key] !== input[key]) {
                edited = false;
            } 
        }
        setNoEdit(edited);
    });

    const onEdit = (e) => {
        const { id, value } = e.target;
        setInput((input) => ({ ...input, [id]: value }));
    };
    const onSave = (e) => {
        // e.preventDefault();
        // if (checkEmptyInput() === false) {
        //     setEmptyError(true);
        // } else {
            // setOpen(true);
            // submitProfile();
        // }
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <Image src={image} roundedCircle width={150} />
                    <h5 className="mt-3">An Qing</h5>
                </div>
                <div className="col-md-8">
                    <div className="card text-left mb-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">Basic Info</h5>
                                {!editMode?
                                <button type="button" className="btn btn-primary mr-3" 
                                    onClick={() => setEditMode(!editMode)}>
                                    Edit
                                </button>
                                :<></>}   
                            </div>
                            {editMode ? 
                                /* Edit mode */
                                <form onSubmit={onSave}>
                                    <div className="form-group">
                                        <label htmlFor="nameInput">Name</label>
                                        <input type="text" 
                                            className="form-control" 
                                            id="name" 
                                            placeholder="Enter name"
                                            value={input.name}
                                            onChange={onEdit}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="genderInput">Gender</label>
                                        <input type="text" 
                                            className="form-control" 
                                            id="gender" 
                                            placeholder="Enter gender"
                                            value={input.gender}
                                            onChange={onEdit}/>
                                        <small className="form-text text-muted">We'll never share your gender identity with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailInput">Email</label>
                                        <input type="text" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="Enter email"
                                            value={input.email}
                                            onChange={onEdit}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="majorInput">Major</label>
                                        <input type="text" 
                                            className="form-control" 
                                            id="major" 
                                            placeholder="Enter major"
                                            value={input.major}
                                            onChange={onEdit}/>
                                    </div>
                                    <button 
                                        type="button" 
                                        className="btn btn-light mr-2" 
                                        onClick={() => setEditMode(!editMode)}>
                                            Cancel
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                        disabled={noEdit === true}>
                                            Save
                                    </button>
                                </form>
                                :
                                /* Default mode */
                                /* TODO: Factor into mappable array */
                                <ul className="list-group list-group-flush mb-2">
                                    <li className="list-group-item d-flex justify-content-between">
                                        <div>Name</div>
                                        <div className="text-secondary">{input.name}</div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <div>Gender</div>
                                        <div className="text-secondary">{input.gender}</div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <div>Email</div>
                                        <div className="text-secondary">{input.email}</div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <div>Major</div>
                                        <div className="text-secondary">{input.major}</div>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>

                    <div className="card text-left">
                        <div className="card-body">
                            <h5>Account</h5>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item d-flex justify-content-between">
                                    <div>Password</div>
                                    <div>
                                        <Link to="#">Change password</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        
}