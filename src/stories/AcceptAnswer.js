import React from 'react';
import PropTypes from 'prop-types';
import './acceptanswer.css'
import { useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
export const AcceptAnswer = ({onClick, ...props}) =>{

    const [flag , setFlag] = useState(false);

    const submitAnswer = () =>{
        setFlag(true)
    }

    return (
        <>
           <div className="checked_circle"
           type="button"
           onClick={submitAnswer}
           title = {flag ? "Accepted" : "Answer Accepted"}
           style= {flag ? {"color":  "darkgreen","margin-left":"-4px","margin-top":"4px"}: {"color":  "","margin-left":"-4px","margin-top":"4px"} }
        //    style={{"margin-right":"-10px"}}
           >{ flag ?<CheckCircleIcon
           /> : <RadioButtonUncheckedRoundedIcon/>}
           </div> 
           <div>
           {flag}
           </div>
        </>
    )
}

AcceptAnswer.prototype = {
    onClick: PropTypes.func,
}