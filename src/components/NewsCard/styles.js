import {makeStyles} from '@material-ui/core';

const styles=makeStyles({
    media:{
        height:250
    },
    border:{
        border:'solid'
    },
    fullHeightCard:{
        height:'100%'
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifycontent:'space-between',
        borderBottom:'10px solid white'
    },
    activeCard:{
        borderBottom:'10px solid #222898'
    },
    grid:{
        display:'flex'
    },
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:20
    },
    title:{
        padding:'0 16px'
    },
    cardActions:{
        padding:'0 16px 8px 16px',
        display:'flex',
        justifyContent:'space-between'
    }
})

export default styles;