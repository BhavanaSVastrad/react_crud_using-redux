import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchUserObj } from "../Redux/Action";
import { FaBackward} from "react-icons/fa";
const Detail = () => {
    const { code } = useParams();

    const userobj = useSelector((state) => state.user.userobj)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchUserObj(code));
    }, []);
    return (
        <div >
            <br/>

            <div className="container" style={{color:"purple",borderRadius:300,width:700,borderColor:"blue",fontStyle:'italic'}}>

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-body"></div>
                    <div>
                        <h2>The User Name is : <b>{userobj.name}</b></h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {userobj.email}</h5>
                        <h5>Phone is : {userobj.phone}</h5>
                        <h5>Gender is : {userobj.gender}</h5>
                        <h5>Role is : {userobj.role}</h5>
                        <Link className="btn btn-danger" to="/user">Back<FaBackward/></Link>
                        <br/>
                        <br/>

                    </div>

                </div>
            </div>
           
          

        </div >
    );
}

export default Detail;


// import React from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { FetchUserObj } from "../Redux/Action";
// import { connect } from "react-redux";

// class Detail extends React.Component {
    
//     componentDidMount(code) {
       
//       FetchUserObj(code);
//       }
//   render() {
//     return <>
//     <div className="container" style={{color:"purple",borderRadius:300,width:700,borderColor:"blue",fontStyle:'italic'}}>

//             <div className="card row" style={{ "textAlign": "left" }}>
//                   <div className="card-body"></div>
//                    <div>
//                        <h2>The User Name is : <b>{userobj.name}</b></h2>
//                        <h3>Contact Details</h3>
//                         <h5>Email is : {userobj.email}</h5>
//                          <h5>Phone is : {userobj.phone}</h5>
//                       <h5>Gender is : {userobj.gender}</h5>
//                         <h5>Role is : {userobj.role}</h5>
//                         <Link className="btn btn-danger" to="/user">Back</Link>
//                        <br/>
//                      <br/>

//               </div>

//               </div>
//             </div>
//     </>;

//   }
// }
// const mapStateToProps = (state) => {
//     return {
//         userobj: state.user.userobj
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
       
//         FetchUserObj: (code) => dispatch(FetchUserObj(code))
//     }
// }
 

// export default connect(mapStateToProps, mapDispatchToProps)(Detail);
