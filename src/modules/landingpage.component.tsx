import {Link} from "react-router-dom";
import {List, ListItem, Typography} from "@mui/material";
import {examples} from "./data/exampleList";

export function Landingpage(){
    return <>
        <Typography variant='h4'>Tested libraries</Typography>
        <List>
            {examples.map(({name,url})=><ListItem><Link to={url}>{name}</Link></ListItem>)}
        </List>
    </>
}