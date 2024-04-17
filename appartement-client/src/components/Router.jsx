import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { routes } from "../helpers/routes";
import Home from "./pages/home/Home";
import PageNotFound from "./errors/PageNotFound";
import '../assets/css/index/index.css'
import LeftSide from "./leftSide";

function Router()
{

    return (
        <BrowserRouter>
            <div className="index-content row">
                {/*left side */}
                <div className='left-bar bg-colour col-xl-2 col-lg-2 d-sm-none d-md-none d-lg-flex d-xl-flex flex-column'>
                    <LeftSide/>
                </div>

                {/*right side */}
                <div className="col-xl-10 col-lg-10 bg-white text-black col-md-12 col-sm-12 p-3">
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home/>}/>
                                {
                                    routes.map(
                                        (data, key) => (
                                            <Route path={data.uri} element={<data.component/>} key={key}/>
                                        )
                                    )
                                }
                            </Route>
                            <Route path="*"
                                   element={ <PageNotFound />}
                            />
                        </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Router