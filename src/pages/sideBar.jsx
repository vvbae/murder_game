import React from 'react';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import Main from './main';
import Intro from "./intro";

export default function SideBar({ db }) {
    return (
        <Splitter 
            direction={SplitDirection.Horizontal}
            initialSizes={[45, 55]}
            minWidths={[200, 500]} // In pixels
        >
            <Intro />
            <Main db={db}/>
        </Splitter>
    );
}