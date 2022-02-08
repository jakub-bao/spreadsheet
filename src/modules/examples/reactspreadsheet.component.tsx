import Spreadsheet from "react-spreadsheet";
import {headers} from "../data/tableData";
import {Typography} from "@mui/material";


export const Reactspreadsheet = () => {
    const data = [
        headers.map(value=>({value})),
        [{ value: "Strawberry" }, { value: "Cookies" }],
    ];
    return <Spreadsheet data={data} />
};