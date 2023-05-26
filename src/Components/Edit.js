import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";
import { FaCheck , FaArrowLeft} from "react-icons/fa";
const Edit = () => {
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [gender, genderchange] = useState("");
    const [role, rolechange] = useState('');
    const isEmpty = (value) => value.trim() === '';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        email: true,
        phone: true,
        gender: true,
    });

    const userobj = useSelector((state) => state.user.userobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { id, name, email, phone, gender, role };
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

        const formisValid = enteredNameIsValid &&
            enteredEmailIsValid &&
            enteredPhoneIsValid &&
            enteredGenderIsValid

        if (!formisValid) {
            return
        }
        dispatch(FunctionUpdateUser(userobj, id));
        navigate('/user');
    }

    useEffect(() => {
        dispatch(FetchUserObj(code));
    }, [])

    useEffect(() => {
        if (userobj) {
            idchange(userobj.id);
            namechange(userobj.name);
            emailchange(userobj.email);
            phonechange(userobj.phone);
            genderchange(userobj.gender);
            rolechange(userobj.role);
        }
    }, [userobj])

    return (
        <div>
            <br/>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title" style={{height:40}}>
                                <h2 style={{paddingLeft:190,color:'white',paddingTop:10,backgroundColor:'brown',fontStyle:'italic'}}>Update User</h2>
                            </div>
                            <div className="card-body" style={{backgroundColor:'bisque',fontStyle:'italic',fontWeight:500}}>
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
                                            <Link to="/user" className="btn btn-danger" style={{marginLeft:10}}><FaArrowLeft/>Back</Link>
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

export default Edit;