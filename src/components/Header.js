import React  from 'react'

export default function Header(props) {

    const scoreColorRecord = () => {
        if( props.record <= 3) return lowstyle
        if ( props.record > 3 && props.record < 7 ) return mediumstyle
        if ( props.record >= 7) return highstyle
    }
    const scoreColorScore = () => {
        if( props.score <= 3) return lowstyle
        if ( props.score > 3 && props.score < 7 ) return mediumstyle
        if ( props.score >= 7) return highstyle
    }
    return (
        <header style={styles}>
           <h1>Memory game</h1>
           <div style={{fontSize:'24px'}}>Current score: <span style={scoreColorScore()}>{props.score}</span></div>
           <div style={{fontSize:'24px'}}>Highest score: <span style={scoreColorRecord()}> {props.record} </span> </div>

        </header>
    )
}
const styles = {
    width: '100%',
    textAlign: 'center',
    background: "#7cb1cc"
}
const highstyle = {
    color: 'red'
}
const mediumstyle = {
    color: 'yellow'
}
const lowstyle = {
    color: 'green'
}
