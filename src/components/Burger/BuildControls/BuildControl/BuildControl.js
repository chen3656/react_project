import React from 'react'

import classess from './BuildControl.css';

const buildControl = (props) => (
    <div className={classess.BuildControl}>
        <div className={classess.Label}>{props.label}</div>
        <button className={classess.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classess.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;