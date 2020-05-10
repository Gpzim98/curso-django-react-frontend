import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(props){
    const items = props.items;
    return (
        <div>
            <h2> { props.listName} </h2>
            <ul>
                {items.map(item => <ItemComponent key={item.id} name={item.name} status={item.done} />)}
            </ul>
        </div>
    )
}