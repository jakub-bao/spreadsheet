import React, {CSSProperties} from 'react';

const styles = {root: {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px'
} as CSSProperties};

export class Luckysheet extends React.Component {

    componentDidMount() {
        // @ts-ignore
        const luckysheet = window.luckysheet;
        luckysheet.create({
            container: "luckysheet",
            plugins:['chart']
        });
    }
    render() {
        return (
            <div
                id="luckysheet"
                style={styles.root}
            ></div>
        )
    }
}
