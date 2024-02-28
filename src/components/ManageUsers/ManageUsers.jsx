import { useState, useEffect } from "react";
import './ManageUsers.scss';
import { connect } from "react-redux";
import * as userServices from '../../services/userServices';
import ReactPaginate from 'react-paginate';
import { toast } from "react-toastify";
import ModalDelete from "./ModalDelete";
const ManageUsers = (props) => {
    const [ users, setUsers ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentLimit, setCurrentLimit ] = useState(3);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ isShowModalDelete, setIsShowModalDelete ] = useState(false);
    const [ dataModal, setDataModal ] = useState({});
    const fetchAllUsers = async () => {
        
        const response = await userServices.getAllUsers(currentPage, currentLimit);
        if (response && +response.EC === 0) {
            setUsers(response.DT.users);
            setTotalPages(response.DT.totalPages);
        }
    }
    const handlePageClick = (event) => {
        console.log(event.selected);
        setCurrentPage(event.selected + 1);
    };
    const handleDeleteUser = async () => {
        const response = await userServices.deleteUser(dataModal.id);
        if (response && response.EC === 0) {
            toast.success(response.EM);
            fetchAllUsers();
        } else if (response && response.EC === 1) {
            toast.error(response.EM);
            fetchAllUsers();
        } else {
            toast.error(response.EM);
        }
    }
    const handleOpenEditModal = (user) => {

    }
    const handleOpenModalDelete = (user) => {
        setIsShowModalDelete(true);
        setDataModal(user);
    }
    const handleCloseModalDelete = () => {
        setIsShowModalDelete(false);
    }
    useEffect(() => {
        fetchAllUsers();
    }, []);
    useEffect(() => {
        if (currentPage) {
            fetchAllUsers();
        }
    }, [ currentPage]);
    return (
        <>
            <div className="manage-users-container container">
                <div className="user-header">
                    <div className="title">
                        <h3>Table Users</h3>
                    </div>
                    <div className="actions">
                        <button className="btn btn-success">Refresh</button>
                        <button className="btn btn-primary">Add new user</button>
                    </div>
                </div>
                <div className="user-body">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Group</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.length > 0 ?
                                    <>
                                        {
                                            users.map((user, index) => (
                                                <tr key={user.id} className="align-middle">
                                                    <td>{index + 1}</td>
                                                    <td>{user.id}</td>
                                                    <td title={user.email}>{user.email}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.Group ? user.Group.name : 'None'}</td>
                                                    <td className="d-flex align-items-center gap-1">
                                                        <button className="btn btn-warning" style={{minWidth: '68px'}} onClick={() => handleOpenEditModal(user)}>Edit</button>
                                                        <button className="btn btn-danger" style={{minWidth: '68px'}} onClick={() => handleOpenModalDelete(user)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </>
                                    :
                                    <>
                                        <tr>
                                            <td colSpan={5}>Not found users</td>
                                        </tr>
                                    </>
                            }
                        </tbody>
                    </table>
                    
                </div>
                <div className="user-footer">
                    {
                        totalPages > 0 &&
                            <ReactPaginate
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={totalPages}
                                previousLabel="<"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                    }
                </div>
            </div>
            <ModalDelete
                isShow={isShowModalDelete}
                handleClose={handleCloseModalDelete}
                confirmDeleteUser={handleDeleteUser}
                dataUser={dataModal}
            />
        </>
    )
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);