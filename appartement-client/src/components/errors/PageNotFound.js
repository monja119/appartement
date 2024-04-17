import React from 'react'
import notFound from '../../assets/images/404.png'

export default function PageNotFound(){
    const notFoundPage = 
        <>
            <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <img src={notFound} alt="404" className="img-fluid" />
                </div>
            </div>

            <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                    <button className="btn btn-primary"
                        onClick={() => {
                            window.history.back()
                        }}
                        >
                        Return
                    </button>
                </div>
            </div>
        </>

    return (notFoundPage)
}
