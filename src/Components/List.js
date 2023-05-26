import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { FaTrash ,FaEdit,FaInfo,FaPlus} from "react-icons/fa";
import DeleteModal from "./Modal";


const List = (props) => {
    const [showModal, setShowModal] = useState(false);

    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        props.loaduser();
    },[])

    const handleDelete = (id) => {

        props.removeuser(id);

        props.loaduser();
        props.loaduser();

        toast.success('User removed successfully')

    }
    const handleShowModal = (id) => {

        setSelectedUserId(id);

        setShowModal(true);

    };



    const handleCloseModal = () => {

        setShowModal(false);

    };

    // const Alert = (code) => {
    //     Swal.fire({
    //         title: 'Are you sure you want to delete this user?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: ' #d33',
    //         cancelButtonColor: '#3085d6 ',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             props.removeuser(code);
    //             props.loaduser();
    //             props.loaduser();
    //             // toast.success('User removed successfully.')
    //             Swal.fire(
    //                 'Deleted!',
    //                 'The User has been deleted.',
    //                 'success'
    //             )
    //         }
    //     })
    // }
    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
                <>
                    {showModal && <DeleteModal onClose={handleCloseModal} onConfirm={() => handleDelete(selectedUserId)} />}
                  
                    <div>
                        <div className="card">
                            <div className="card-header" >
                                <Link to={'/user/add'} className="btn btn-success">Add User <FaPlus/></Link>
                            </div>
                            <div className="card-body" style={{fontStyle:'italic',fontWeight:500}}>
                                <table className="table table-bordered">
                                    <thead className="bg-dark text-white">
                                        <tr>
                                            <td>Code</td>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Phone</td>
                                            <td>Gender</td>
                                            <td>Role</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.user.userlist && props.user.userlist.map(item =>
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.role}</td>
                                                    <td>
                                                        <Link to={'/user/edit/' + item.id} className="btn btn-primary"><FaEdit/> Edit</Link> |
                                                        <Link to={'/user/detail/' + item.id} className="btn btn-success"><FaInfo/>Detail</Link> |
                                                        <button onClick={() => handleShowModal(item.id)} className="btn btn-danger"  ><FaTrash/>Delete</button>
                                                        {/* <button onClick={() => { Alert(item.id) }} className="btn btn-danger"  >Delete</button> */}
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>

                                </table>
                            </div>

                        </div>
                    </div>
                </>

    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);