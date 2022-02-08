import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import {headers} from "../data/tableData";
import { registerValidator } from 'handsontable/validators';
import {dropdownValues1, StringMap} from "../data/dropdownValues";

registerAllModules();

const hotData = [
    headers,
];

function generateDropDownsColumns(dropdownValues:StringMap){
    return Object.entries(dropdownValues).map(([columnName, valueList])=>({type: 'dropdown', source:valueList}))
}


const columns = [{},...generateDropDownsColumns(dropdownValues1)];


// registerValidator();

export function Handsontable(){
    return <HotTable
        data={hotData}
        colHeaders={true}
        rowHeaders={true}
        licenseKey={'non-commercial-and-evaluation'}
        columns={columns}
        // columnSettings={[]}
    />
}