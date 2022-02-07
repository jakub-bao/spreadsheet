import {Link} from "react-router-dom";
import {List, ListItem, Typography} from "@mui/material";
import {apps} from "./demoList";

export function Landingpage(){
    return <>
        <Typography variant='h4'>Tested libraries</Typography>
        <List>
            {/*<ListItem><Link to={'handsontable'}>Handsontable</Link></ListItem>*/}
            {/*<ListItem><Link to={'luckysheet'}>Luckysheet</Link></ListItem>*/}
            {/*<ListItem><Link to={'reactspreadsheet'}>Reactspreadsheet</Link></ListItem>*/}
            {apps.map(({name,url})=><ListItem><Link to={url}>{name}</Link></ListItem>)}
        </List>
    </>
}