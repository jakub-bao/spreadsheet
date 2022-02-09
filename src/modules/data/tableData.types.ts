export type StringMap = {[key:string]:string};
export type StringListMap = {[key:string]:string[]};

export enum ColumnType {
    dropdownSelect='dropdownSelect',
    number='number',
    text='text',
    boolean='boolean'
}

export type ColumnMeta = {
    id:string;
    type: ColumnType;
}

export type Column = ColumnMeta & {
    fullName: string;
    // id:string;
    // type: ColumnType;
    valueList?: string[];
};