import React from "react";
import {Route, Routes} from "react-router-dom";
import {Landingpage} from "./landingpage.component";
import {examples} from "../data/exampleList";
import { Outcome } from "./outcome.component";

const styles = {
    root: {
        padding: 20
    }
}

export default function ContentRouter({}:{}) {
    return <div style={styles.root}>
        <Routes>
            <Route path='/' element={<Landingpage/>}/>
            {examples.map((example)=><Route path={example.url} element={<Outcome example={example}/> }/>)}
        </Routes>
    </div>
}