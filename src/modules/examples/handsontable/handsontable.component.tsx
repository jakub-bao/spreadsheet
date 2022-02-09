import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import {CellMeta, CellProperties} from "handsontable/settings";
import {columnList} from "../../data/tableData";
import {columnDefinition, initialData} from "./handsontableData";

registerAllModules();


// function generateDropDownsColumns(dropdownValues:StringMap){
//     return Object.entries(dropdownValues).map(([columnName, valueList])=>({type: 'dropdown', source:valueList}))
// }





export function Handsontable(){
    return <HotTable
        data={initialData}
        colHeaders={true}
        rowHeaders={true}
        licenseKey={'non-commercial-and-evaluation'}
        columns={columnDefinition}
        cells={function(this: CellProperties, row: number, column: number, prop: string | number){
            return {readOnly:row===0} as CellMeta
        }}
    />
}