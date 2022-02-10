import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import {CellMeta, CellProperties} from "handsontable/settings";
import {columnDefinition, initialData} from "./handsontableData";

registerAllModules();

function isTestEnv(){
    return process.env.NODE_ENV==='test'
}

let tableSettings = {};
if (isTestEnv()) tableSettings = {
    renderAllRows: true,
    viewportColumnRenderingOffset: 10000
};

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
        settings={tableSettings}
    />
}