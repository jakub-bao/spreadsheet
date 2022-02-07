import React from "react";
import {Route, Routes} from "react-router-dom";
import {Landingpage} from "./landingpage.component";
import {apps} from "./demoList";

export default function Router({}:{}) {
    return <Routes>
        <Route path='/' element={<Landingpage/>}/>
        {apps.map(({url, component})=><Route path={url} element={component}/>)}
    </Routes>
}