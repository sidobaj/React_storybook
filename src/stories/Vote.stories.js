import React from 'react';
import {Vote} from './Vote';

export default {
    title : 'UpVote and DownVote component',
    component: Vote,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    //     size : {control : 'select'}
    // },
};

const Template = args => <Vote {...args}/>

export const Default = Template.bind({});
// voteup.args = {
//     primary: true,
//     label: 'Button',
// };