import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";
import { FaCheck , FaStepBackward} from "react-icons/fa";
const Add = () => {
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [gender, genderchange] = useState("");
    const [role, rolechange] = useState('Admin');
    const [errmessage,seterrmessage]=useState("");
    const isEmpty = (value) => value.trim() === '';
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const validate=()=>{
        let errmessage="";
        if(phone.length <10){
            errmessage="Phone number should be of 10 digits";  
        }
        if(errmessage)
        {
            seterrmessage(errmessage);
            return false;
        }
        return true;
    }

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        email: true,
        phone: true,
        gender: true,
      });
     // handles selection change
     const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            genderchange(target.value);
        }
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { name, email, phone, gender,role };
        
        const isValid=validate();
        if(isValid)
        {

        }
       

        const enteredNameIsValid = !isEmpty(name);
        const enteredEmailIsValid = !isEmpty(email);
        const enteredPhoneIsValid = !isEmpty(phone);
        const enteredGenderIsValid = !isEmpty(gender);


        setFormInputsValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            phone: enteredPhoneIsValid,
            gender: enteredGenderIsValid,
          });

        const formisValid=enteredNameIsValid &&
        enteredEmailIsValid && 
        enteredPhoneIsValid &&
        enteredGenderIsValid

        if(!formisValid){
            return
        }
        dispatch(FunctionAddUser(userobj));
        navigate('/user');
    }
   
    return (
        <div>
            <br/>
              <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title" style={{height:40}}>
                                <h2 style={{paddingLeft:210,color:'white',paddingTop:10,backgroundColor:'blue',fontStyle:'italic'}}>Add User</h2>
                            </div>
                            <div className="card-body" style={{backgroundColor:'rgb(186, 225, 249)',fontStyle:'italic',fontWeight:500}}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input  value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {!formInputsValidity.name && <p style={{ color: 'red' }}>Please enter a valid name!</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input  value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                            {!formInputsValidity.email && <p style={{ color: 'red' }}>Please enter a valid email!</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input  value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                            {!formInputsValidity.phone && <p style={{ color: 'red' }}>Please enter a valid phone number!</p>}
                                            <p style={{color:'red'}}> {errmessage}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <br />
                                            <input type="radio" value="Male" checked={gender === "Male"} onChange={e => genderchange(e.target.value)} /> Male
                                            <br />
                                            <input type="radio" value="Female" checked={gender === "Female"} onChange={e => genderchange(e.target.value)} /> Female
                                            <br />
                                            <input type="radio" value="Other" checked={gender === "Other"} onChange={e => genderchange(e.target.value)} /> Other
                                            <br />
                                            {!formInputsValidity.gender && <p style={{ color: 'red' }}>Please Select the Gender!</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Role</label>
                                            <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                                <option value="Admin">Admin</option>
                                                <option value="Staff">Staff</option>
                                            </select>
                                        </div>
                                    </div>

                                    <br />


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <br />
                                            <button className="btn btn-success" type="submit"><FaCheck/>Submit</button>
                                            <Link to="/user" className="btn btn-danger" style={{marginLeft:10}}><FaStepBackward/>Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Add;