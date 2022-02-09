import {columnList, headers} from "../../data/tableData";
import {Column, ColumnType} from "../../data/tableData.types";

export const initialData = [
    headers,
    [],[],[],[],[],[],[]
];

type HandsonColumn = {

}

const columnTypeMap = {
    dropdownSelect: 'dropdown'
}

function transformColumnDefinitions(columnList:Column[]){
    return columnList.map(({type,valueList})=>({
        type: columnTypeMap[type]||type,
        source: type===ColumnType.dropdownSelect?valueList:undefined
    }))
}

export const columnDefinition:HandsonColumn[]= transformColumnDefinitions(columnList);

console.log('handson column list', columnDefinition)