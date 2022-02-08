import React, {ReactElement} from "react";
import {Luckysheet} from "../examples/luckysheet.component";
import {Handsontable} from "../examples/handsontable.component";
import {Reactspreadsheet} from "../examples/reactspreadsheet.component";

export type Example = {
    demo: ReactElement,
    url: string,
    name: string,
    whyWontWork: string[];
}
export const examples:Example[] = [{
    url: 'luckysheet',
    name: 'Lucky sheet',
    demo: <Luckysheet/>,
    whyWontWork: []
},{
    url: 'handsontable',
    name: 'Handson table',
    demo: <Handsontable/>,
    whyWontWork: ['']
},{
    url: 'react-spreadsheet',
    name: 'React spreadsheet',
    demo: <Reactspreadsheet/>,
    whyWontWork: [
        `Doesn't support menus or skip logic`,
        `Doesn't support multiple custom components for cells. All cells have to share the same component`
    ]
}]