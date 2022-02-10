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
    comments="Comments"
}

export let headers = Object.entries(ColumnNames).map(([key,value])=>value);

const columnMetadata:ColumnMeta[] = [
    {name: ColumnNames.id, type: ColumnType.number},
    {name: ColumnNames.gender, type: ColumnType.dropdownSelect},
    {name: ColumnNames.workTitle, type: ColumnType.dropdownSelect},
    {name: ColumnNames.isPrime, type: ColumnType.dropdownSelect},
    {name: ColumnNames.compensationType, type: ColumnType.dropdownSelect},
    {name: ColumnNames.moh, type: ColumnType.boolean},
    {name: ColumnNames.workedMoths, type: ColumnType.number},
    {name: ColumnNames.fteAvg, type: ColumnType.number},
    {name: ColumnNames.multipleSites, type: ColumnType.boolean},

    {name: ColumnNames.snu1, type: ColumnType.dropdownSelect},
    {name: ColumnNames.psnu, type: ColumnType.dropdownSelect},
    {name: ColumnNames.community, type: ColumnType.dropdownSelect},
    {name: ColumnNames.facility, type: ColumnType.dropdownSelect},
    {name: ColumnNames.snu5, type: ColumnType.dropdownSelect},
    {name: ColumnNames.snu6, type: ColumnType.dropdownSelect},
    {name: ColumnNames.ou, type: ColumnType.dropdownSelect},

    {name: ColumnNames.primaryProgramArea, type: ColumnType.dropdownSelect},
    {name: ColumnNames.directDelivery, type: ColumnType.dropdownSelect},
    {name: ColumnNames.covid, type: ColumnType.boolean},
    {name: ColumnNames.totalExpenditure, type: ColumnType.number},
    {name: ColumnNames.fringe, type: ColumnType.number},
    {name: ColumnNames.comments, type: ColumnType.text}
]


function generateColumnList(columnMetadata: ColumnMeta[], columnNames: StringMap, dropdownValues: StringListMap): Column[] {
    return columnMetadata.map(({name,type}:ColumnMeta)=>({
        type,
        name,
        valueList: type===ColumnType.dropdownSelect?dropdownValues[name]:undefined
    }));
}

export const columnList:Column[] = generateColumnList(columnMetadata, ColumnNames,dropdownValues)

