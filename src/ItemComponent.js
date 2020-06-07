import React from 'react';

export default function ItemComponent(props){
    const status = props.status;
    return <li>{ props.name } 
        Status: {status ? <span>Finalizado</span> : <span>Nao Finalizado</span>}
    </li>
}