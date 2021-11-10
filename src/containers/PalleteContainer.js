import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'
import { getPalettes } from '../redux/actionCreators'
import { useEffect } from "react"

function PaletteContainer(props) {
    //destructuring - instead of props and then using props.palettes 
//console.log(palettes)

//   componentDidMount(){
//     this.props.getPalettes()
//   }

    useEffect(() => props.getPalettes())

        
        return (
            <div className="App-Main"> 
                <h2 className="palettes"> Palette Library </h2>
                <div className="palette-container">
                {props.palettes.map(palette => <PaletteCard key={palette.id} id={palette.id}colors={palette.colors} /> )}
            </div>
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        palettes: state.palettes
    }
}

export default connect(mapStateToProps, {getPalettes})(PaletteContainer)