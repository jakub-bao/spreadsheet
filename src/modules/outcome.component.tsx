import {List, ListItemText, Typography} from "@mui/material";
import {Example} from "./data/exampleList";

export function Outcome({example}:{example:Example}){
    let {name, demo, whyWontWork} = example;
    return <>
        <Typography variant={'h4'}>{name}</Typography><br/>
        {demo}
        <List>
            {whyWontWork.map(reason=><ListItemText>{reason}</ListItemText>)}
        </List>
    </>
}