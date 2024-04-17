import pigeon from "../assets/images/pigeon.gif"

export default function Loading(){
    return(
        <div className="row">
            <div className="col-12 d-flex flex-row align-items-center justify-content-center">
                <img src={pigeon} style={{ width: '50px'}} alt="loading" />
            </div>
        </div>
    )
}