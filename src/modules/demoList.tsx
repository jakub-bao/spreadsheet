import React, {ReactElement} from "react";
import {Route} from "react-router-dom";
import {Luckysheet} from "./luckysheet.component";
import {Handsontable} from "./handsontable.component";
import {Reactspreadsheet} from "./reactspreadsheet";

type App = {
    component: ReactElement,
    url: string,
    name: string
}
export const apps:App[] = [{
    url: 'luckysheet',
    name: 'Lucky sheet',
    component: <Luckysheet/>
},{
    url: 'handsontable',
    name: 'Handson table',
    component: <Handsontable/>
},{
    url: 'react-spreadsheet',
    name: 'React spreadsheet',
    component: <Reactspreadsheet/>
}]