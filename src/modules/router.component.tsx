import React from "react";
import {Route, Routes} from "react-router-dom";
import {Landingpage} from "./landingpage.component";
import {examples} from "./data/exampleList";
import { Outcome } from "./outcome.component";

export default function Router({}:{}) {
    return <Routes>
        <Route path='/' element={<Landingpage/>}/>
        {examples.map((example)=><Route path={example.url} element={<Outcome example={example}/> }/>)}
    </Routes>
}