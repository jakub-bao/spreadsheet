import {List, ListItemText, Typography} from "@mui/material";
import {Example} from "../data/exampleList";

const styles = {
    problemsHeading: {
        marginTop: 30
    }
}

export function Outcome({example}:{example:Example}){
    let {name, demo, whyWontWork} = example;
    return <>
        <Typography variant={'h4'}>{name}</Typography><br/>
        {demo}
        <Typography variant={'h5'} style={styles.problemsHeading}>Problems</Typography>
        <List>
            {whyWontWork.map(reason=><ListItemText>{reason}</ListItemText>)}
        </List>
    </>
}