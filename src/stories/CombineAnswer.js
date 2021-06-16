import React from 'react';
import { AnswerCard } from './AnswerCard';
import { AcceptAnswer } from './AcceptAnswer';
import {Vote} from './Vote';



export const CombineAnswer = () =>{
    return (
        <>
            <div className="container">
                <div><AnswerCard/></div>
                <div><AcceptAnswer/></div>
                <div><Vote/></div>
            </div>
        </>
    )
}