import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import {headers} from "../data/tableData";

registerAllModules();

const hotData = [
    headers,
    ["2020", 10, 11, 12, 13],
    ["2021", 20, 11, 14, 13],
    ["2022", 30, 15, 12, 13]
];

export function Handsontable(){
    return <HotTable
        data={hotData}
        colHeaders={true}
        licenseKey={'non-commercial-and-evaluation'}
    />
}