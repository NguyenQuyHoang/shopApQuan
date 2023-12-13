import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../../redux/LoginSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PageLogin() {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const dispatch = useDispatch();

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("http://localhost:3000/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                // console.log(Object.keys(resp))
                if (Object.keys(resp).length === 0) {
                    alert('Please Enter valid username');
                    
                } else {
                    if (resp.password === password) {
                        console.log("user name befort: ", sessionStorage.getItem('username'))
                        sessionStorage.setItem('username', username);
                        dispatch(LoginAction.SetHome(1));
                        console.log("user name affter: ", sessionStorage.getItem('username'))
                        usenavigate("./TrangChu")
                    } else {
                        alert('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                alert('Login Failed due to :' + err.message);
            });
        }
    }


    const validate = () => {

        let result = true;
        if (username === '' || username === null) {
            result = false;
            alert('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            alert('Please Enter Password');
        }
        return result;
    }

    function handleRegister(){
        usenavigate("/")
        dispatch(LoginAction.SetRegister(1))
    }
    return (
        <div className="row ">
            <div className="offset-lg-3 col-lg-6 mx-auto" style={{ marginTop: '100px', width: '30rem' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className=" mx-auto mb-3">
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="toast" aria-label="Close">Login</button>
                        </div>
                        <div className=" mx-auto">
                            <p>Bạn chưa có tài khoản? <Link className="text-primary" onClick={
                                handleRegister
                            }>Regisite</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PageLogin;
