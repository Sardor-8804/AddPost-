import React from 'react';
import "./tableitems.css";

function TableItems(props) {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.post.title}</td>
            <td>{props.post.stack}</td>
            <td>
                <button onClick ={() =>props.remove(props.post)} className="btn" >Delete</button>
            </td>
        </tr>
    )
}

export default TableItems;







