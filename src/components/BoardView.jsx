// src/components/BoardView.jsx
import React, {Component} from 'react';
import {WID, HGT, GRID, WALL} from '../utils/constants.js';
import Square from './Square.jsx';
import CarView from './CarView.jsx';

class BoardView extends Component
{
    render()
    {
        //Width and height of the board area, then the style
        const bWid = WID * GRID;
        const bHgt = HGT * GRID;
        const bStyle = 
        {
            top: WALL,
            left: WALL,
            width: bWid,
            height: bHgt,
            position: 'absolute'
        };

        //Make a list of things to fill the board:
        let list = [];
        let key = 1;
        for (let x = 0; x < WID; x++)
        {
            let cx = x * GRID;
            for (let y = 0; y < HGT; y++)
            {
                let cy = y * GRID;
                list.push(<Square key={key++} x={cx} y={cy} />);
            }
        }
        list.push(<CarView key={key++} x={GRID} y={2*GRID}
            wid={2*GRID} hgt={GRID} color={'red'} />);
        
        return (
            <div style={bStyle}>{list}</div>
        )
    };
};

export default BoardView;