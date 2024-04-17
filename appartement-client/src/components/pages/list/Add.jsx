import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap'
import { createAppartement } from "../../../services/appartementService";

const initialState = {
    numero: '',
    design: '',
    loyer: '',
}
export default function Add ({show, hide}) {
    const [state, setState] = useState(initialState)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleState = (name, value) =>
    {
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const save = () => {
        setLoading(true)
        // verification is tous les champs sont remplis
        if(state.numero === '' || state.design === '' || state.loyer === '')
        {
            setError('Veuillez remplir tous les champs')
            setLoading(false)
            return
        }
        createAppartement(state)
            .then((response) => {
                setLoading(false)
                if(response.status === 201)
                {
                    hide()
                    window.location.reload()
                }
                else {
                    setError(response.data.message)
                }
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }

    let add =
        <>
            <Modal show={show} className='modal' onHide={ hide }>
                <Modal.Header className={'border-0'}>
                    <Modal.Title className='text-center text-black'>Nouveau Appartement</Modal.Title>
                </Modal.Header>
                <Modal.Body className={'border-0'}>
                    <p className={'text-danger'}>{ error }</p>
                    <input
                        placeholder='Numéro appartement'
                        type='number'
                        className='form-control'
                        onChange={(e) => {
                            handleState('numero', e.target.value)
                        }}
                        disabled={loading}
                    />
                    <input
                        placeholder='Designation'
                        type='text'
                        className='form-control mt-1'
                        onChange={(e) => {
                            handleState('design', e.target.value)
                        }}
                        disabled={loading}
                    />
                    <input
                        placeholder='Loyer'
                        type='number'
                        className='form-control mt-1'
                        onChange={(e) => {
                            handleState('loyer', e.target.value)
                        }}
                        disabled={loading}
                    />

                </Modal.Body>
                <Modal.Footer className={'border-0'}>
                <div className='row w-100 justify-content-between'>
                        <button className='btn col-3 btn-danger'
                                onClick={hide}
                                disabled={loading}
                        >
                            Annuler
                        </button>
                        <button
                            disabled={loading}
                            className='btn btn-success col-8'
                            onClick={save}
                        >
                            {
                                loading ? (
                                    <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Enregistrement...</span>
                                    </div>
                                ) : (
                                    <>
                                        <i className="bi bi-plus-circle"></i>
                                        Enregistrer
                                    </>
                                )
                            }
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>

    return (add)
}