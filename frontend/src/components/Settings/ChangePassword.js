import React, {useState} from "react";
import { Link } from 'react-router-dom';

export default function ChangePassword() {
    const [errorMsg, setErrorMsg] = useState("");
    const [inputVal, setInputVal] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    //TODO: Get initial password from database
    const initPassword = "abc";

    const onChange = (event) => {
        const { id, value } = event.target;
        setInputVal({ ...inputVal, [id]: value });
    };

    const onSave = (e) => {
        e.preventDefault();
        const { oldPassword, newPassword, confirmPassword } = inputVal;
        if (oldPassword !== initPassword) {
            setErrorMsg("Wrong current password.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setErrorMsg("Password don't match.");
            return;
        }
        //TODO: Save new password to system
        setErrorMsg("");
    }
    return (
        <div className="container text-left mt-5">
            <div className="col-md-6 offset-md-3">
                <span className="anchor" id="formChangePassword"></span>
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h3 className="mb-0">Change Password</h3>
                    </div>
                    <div className="card-body">
                        <form className="form" role="form" autocomplete="off" onSubmit={onSave}>
                            <div className="form-group">
                                <label for="inputPasswordOld">Current Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="oldPassword" 
                                    required
                                    onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label for="inputPasswordNew">New Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="newPassword" 
                                    required
                                    onChange={onChange}/>
                                <span className="form-text small text-muted">
                                    The password must be 8-20 characters, and must <em>not</em> contain spaces.
                                </span>
                            </div>
                            <div className="form-group">
                                <label for="inputPasswordNewVerify">Verify</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="confirmPassword" 
                                    required
                                    onChange={onChange}/>
                                <span className="form-text small text-muted">
                                    To confirm, type the new password again.
                                </span>
                            </div>
                            <div className="form-group">
                                <p className="form-text small text-danger">{errorMsg}</p>
                                <button 
                                    type="submit" 
                                    className="btn btn-success btn-lg float-right">
                                        Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}