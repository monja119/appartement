// react imports
import React, { useState, useEffect } from "react";
// local imports
import Add from "./Add";
import ListAppart from "./ListAppart";
import Graprh from "./graprh";
// data imports
import { appartData } from "../../../data/aparts";
import { getData} from "../../../services/appartementService";

export default function List () {
    const [appartData, setAppartData] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const handleCloseAdd = () => setShowAdd(false)
    const handleShowAdd = () => setShowAdd(true)

    // fetch data
    useEffect(() => {
        getData()
            .then((response) => {
                const data = response.data.data
                setAppartData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    let list =
        <>
            <Add show={showAdd} hide={handleCloseAdd} />
            <div className={"row"}>
                <div className={"col-1"}>
                    <button className={"btn btn-primary btn-sm"}
                            onClick={handleShowAdd}
                    >
                        <i className={"fas fa-plus"}></i> Ajouter
                    </button>
                </div>
            </div>

            <div className={"row mt-2"}>
                <div className={"col-12"}>
                    <ListAppart data={appartData} />
                </div>
            </div>

            <div className={"row mt-2"}>
                <div className={"col-12"}>
                    <Graprh data={appartData} />
                </div>
            </div>
        </>

    return (list)
}