import React, {useState} from "react";

export default function ResetPassword() {
    const [send, setSend] = useState(false);
    const [validEmail, setValidEmail] = useState(true);
    
    const onEmailPasswordReset = (e) => {
        // e.preventDefault();
        //TODO: Send email with password change link
        setSend(true);        
    }
    //TODO: Maybe email validation from server is more secure?
    const validateEmail = (e) => {
        const re = /\S+@\S+\.\S+/;
        let isValid = re.test(String(e.target.value).toLowerCase())
        setValidEmail(isValid);
    }
    return (
        <div className="container text-left mt-5">
            <div className="col-md-6 offset-md-3">
                <span className="anchor" id="formResetPassword"></span>
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h3 className="mb-0">Password Reset</h3>
                    </div>
                    <div className="card-body">
                        <form className="form" role="form" autocomplete="off" onSubmit={onEmailPasswordReset}>
                            <div className="form-group">
                                <label for="inputResetPasswordEmail">Email</label>
                                <input type="email" className="form-control" id="inputResetPasswordEmail" required
                                    onChange={validateEmail}/>
                                {validEmail !== true?
                                    <p className="form-text small text-danger">Please enter a valid email.</p>
                                    : 
                                    <></>
                                }
                                <span id="helpResetPasswordEmail" className="form-text small text-muted">
                                    Password reset instructions will be sent to this email address.
                                </span>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success btn-lg float-right">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}