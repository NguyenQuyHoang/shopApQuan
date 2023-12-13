import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginAction } from "../../redux/LoginSlice";

const Register = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { id, name, password, email, phone,  address, gender };
            if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                alert('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                alert('Failed :' + err.message);
            });
        }
    }

    function handleLogin(){
        navigate("/")
        dispatch(LoginAction.SetLogin(1))
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6 mt-5 ">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header text-center">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <div className="mt-2 px-3">
                                            <input type="radio"  checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check ms-3 me-1"></input>
                                            <label>Male</label>
                                            <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check ms-5 me-1"></input>
                                            <label>Female</label>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                

                            </div>

                        </div>
                        <div className="card-footer mx-auto">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <div className="mx-auto">
                            <p>Bạn đã có tài khoản? <Link onClick={
                                handleLogin
                            } className="text-primary">Login</Link></p>
                        </div>

                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;