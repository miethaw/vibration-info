import React from 'react'
// import fonts from '../../../config/fonts'
// import colors from '../../../config/colors'
import color from "../../../config/mycolor"
import font from '../../../config/myFonts'
import { withTheme } from '../hoc/withTheme'
import '../../../App.css'

const KMGradientButton = props => {
    const { text, onClick, type, round, style, small, theme, selectTheme, onSubmit , disable} = props
    const defaultStyle = { outline: 'none', boxShadow: 'none', color: '#ffffff', border: 'none', borderRadius: round === undefined ? 5 : 16, minWidth: 160 }
    const userStyle = style === undefined ? {} : style
    return (
        <button
            disabled={disable}
            onClick={onClick}
            // onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            type={type === undefined ? "button" : type}
            className={`btn btn-block ${selectTheme === undefined ? `submit-btn-${theme}` : `submit-btn-${selectTheme}`}  ${small === undefined ? "p-3" : "px-2"}`}
            style={{ ...defaultStyle, ...userStyle }}>
            {text}

        </button>
    );
}

export default withTheme(KMGradientButton);