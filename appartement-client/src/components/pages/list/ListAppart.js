import React, { useState } from "react";
import Edit from "./Edit";
import { deleteAppartement } from "../../../services/appartementService";

export default function ListAppart (data) {

    const [showEdit, setShowEdit] = useState(false)
    const [editData, setEditData] = useState({})
    const handleCloseEdit = () => setShowEdit(false)
    const handleShowEdit = () => setShowEdit(true)

    const delete_appartement = (id) => {
        const warning = window.confirm('Voulez-vous vraiment supprimer cet appartement ?')
        if(!warning) return

        deleteAppartement(id)
            .then((response) => {
                if(response.status === 200)
                {
                    window.location.reload()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <>
            <Edit show={showEdit} hide={handleCloseEdit} data={editData} />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th className={'bg-dark text-white'}>Designation</th>
                    <th className={'bg-dark text-white'}>Loyer</th>
                    <th className={'bg-dark text-white'}>Observation</th>
                    <th className={'bg-dark text-white'}>actions</th>
                </tr>
                </thead>

                <tbody>
                {
                    data.data.map(
                        (appart, key) => (
                            <tr key={key}>
                                <td>{appart.design}</td>
                                <td>{appart.loyer}</td>
                                <td>{
                                    appart.loyer < 1000 ? 'bas' : appart.loyer < 5000 ? 'moyen' : 'haut'
                                }</td>
                                <td>
                                    <i
                                        className="fas fa-edit mr-2 text-primary  cursor-pointer"
                                        onClick={() => {
                                            setEditData(appart)
                                            handleShowEdit()
                                        }}
                                    ></i>
                                    <i
                                        className="fas fa-trash ml-1 text-danger cursor-pointer"
                                        onClick={() => {
                                             delete_appartement(appart.id)
                                        }}
                                    ></i>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
} 