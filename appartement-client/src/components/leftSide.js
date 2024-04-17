import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftSide() {
    return (
        <>
            <div className="row d-flex flex-column pt-4">
                <Link to="/">
                    <button className="btn fw-bold text-white justify-content-center align-items-center">
                        <i className="fas fa-home"></i> Acceuil
                    </button>
                </Link>
                <Link to="/list" className="mt-3">
                    <button className="btn fw-bold text-white justify-content-center align-items-center">
                        <i className="fas fa-list"></i> Liste
                    </button>
                </Link>
            </div>
        </>
    )
}