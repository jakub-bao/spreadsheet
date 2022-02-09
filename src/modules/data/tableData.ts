import {Column, ColumnMeta, ColumnType, StringListMap, StringMap} from "./tableData.types";
import {dropdownValues} from "./dropdownValues";

export enum ColumnNames{
    id="Record Number (optional)",
    gender="Gender",
    workTitle="Employment title",
    isPrime="Employed through Prime or Sub IP?",
    compensationType="Mode of Hire",
    moh="MOH Staff/seconded to MOH?",
    workedMoths="Months of Work in Past Year",
    fteAvg="Average FTE per Month",
    multipleSites="Work in or support multiple sites (Roving Staff)?",
    snu1="SNU1",
    psnu="PSNU",
    community="Community",
    facility="Facility",
    snu5="SNU5",
    snu6="SNU6",
    ou="Valid OU",
    primaryProgramArea="Primary Program Area?",
    directDelivery="Deliver services DIRECTLY to beneficiaries?",
    covid="In past year provided support for the COVID response?",
    totalExpenditure="Sum of Annual PEPFAR Expenditure, excluding Fringe",
    fringe="Annual PEPFAR Fringe Expenditure",
    level4Check="Level4Check",
    level5Check="Level5Check",
    level6Check="Level6Check",
    level7Check="Level7Check",
    level8Check="Level8Check",
    level9Check="Level9Check",
    comments="Comments"
}

export let headers = Object.entries(ColumnNames).map(([key,value])=>value);

const columnMetadata:ColumnMeta[] = [
    {id: ColumnNames.id, type: ColumnType.number},
    {id: ColumnNames.gender, type: ColumnType.dropdownSelect},
    {id: ColumnNames.workTitle, type: ColumnType.dropdownSelect},
    {id: ColumnNames.isPrime, type: ColumnType.boolean},
    {id: ColumnNames.compensationType, type: ColumnType.dropdownSelect},
    {id: ColumnNames.moh, type: ColumnType.boolean},
    {id: ColumnNames.workedMoths, type: ColumnType.number},
    {id: ColumnNames.fteAvg, type: ColumnType.number},
    {id: ColumnNames.multipleSites, type: ColumnType.boolean},

    {id: ColumnNames.snu1, type: ColumnType.dropdownSelect},
    {id: ColumnNames.psnu, type: ColumnType.dropdownSelect},
    {id: ColumnNames.community, type: ColumnType.dropdownSelect},
    {id: ColumnNames.facility, type: ColumnType.dropdownSelect},
    {id: ColumnNames.snu5, type: ColumnType.dropdownSelect},
    {id: ColumnNames.snu6, type: ColumnType.dropdownSelect},
    {id: ColumnNames.ou, type: ColumnType.dropdownSelect},

    {id: ColumnNames.primaryProgramArea, type: ColumnType.dropdownSelect},
    {id: ColumnNames.directDelivery, type: ColumnType.dropdownSelect},
    {id: ColumnNames.covid, type: ColumnType.boolean},
    {id: ColumnNames.totalExpenditure, type: ColumnType.number},
    {id: ColumnNames.fringe, type: ColumnType.number},
    // {id: ColumnNames.level4Check, type: ColumnType.type},
    // {id: ColumnNames.level5Check, type: ColumnType.type},
    // {id: ColumnNames.level6Check, type: ColumnType.type},
    // {id: ColumnNames.level7Check, type: ColumnType.type},
    // {id: ColumnNames.level8Check, type: ColumnType.type},
    // {id: ColumnNames.level9Check, type: ColumnType.type},
    {id: ColumnNames.comments, type: ColumnType.text}
]


function generateColumnList(columnMetadata: ColumnMeta[], columnNames: StringMap, dropdownValues: StringListMap): Column[] {
    return columnMetadata.map(({id,type}:ColumnMeta)=>({
        id,
        type,
        fullName: id,
        valueList: type===ColumnType.dropdownSelect?dropdownValues[id]:undefined
    }));
}

export const columnList:Column[] = generateColumnList(columnMetadata, ColumnNames,dropdownValues)

console.log('Internal column list',columnList)
