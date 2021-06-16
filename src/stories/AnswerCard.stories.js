import React from 'react';
import { AnswerCard } from './AnswerCard';

export default {
    title : "Answer Card",
    component : AnswerCard,
    // argTypes: {
    //     // backgroundColor: { control: 'color' },
    //     size : {control : 'select'},
    // },
};


const Template = (args) => <AnswerCard {...args}/>

export const Default = Template.bind({});