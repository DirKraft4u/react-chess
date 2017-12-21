import React from 'react';


export default function Square(props) {

    return (
        <button className={"square " + props.shade}
                onMouseDown={props.onMouseDown}
                onMouseUp={props.onMouseUp}
                style={props.style}>

        </button>
    );

}
