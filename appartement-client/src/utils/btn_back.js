export default function BtnBack(){
    return(
        <>
            <button 
                className="mt-1 btn rounded-5 btn-secondary" 
                onClick={ () => { window.history.back() }}>
                <i className="fa fa-angle-left"></i>                
            </button>
        </>
    )
}