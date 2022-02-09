import {columnList, headers} from "../../data/tableData";
import {Column, ColumnType} from "../../data/tableData.types";

export const initialData = [
    headers,
    [],[],[],[],[],[],[]
];

type HandsonColumn = {

}

const columnTypeMap = {
    dropdownSelect: 'dropdown',
    number: 'numeric',
    boolean: 'dropdown',
    text: 'text'
}

function transformColumnDefinitions(columnList:Column[]){
    return columnList.map(({type,valueList})=>{
        let source;
        switch (type){
            case ColumnType.dropdownSelect:
                source = valueList;
                break;
            case ColumnType.boolean:
                source=['Yes','No']
                break;

        }
        return {
            type: columnTypeMap[type],
            source,
        }
    })
}

export const columnDefinition:HandsonColumn[]= transformColumnDefinitions(columnList);

console.log('handson column list', columnDefinition)