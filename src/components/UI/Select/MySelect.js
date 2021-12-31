import React from 'react'
import "./myselect.css"

const MySelect = ({ options, defaultValue, onChange, value}) => {
    return (
        <select className="sel"
        value={value}
        onChange={e => onChange(e.target.value)}
        >
            <option  disabled value="" >{defaultValue}</option>
            {options.map(opt => (
                <option className="dis" key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
                )) }
            </select>
        )
    }
    export default MySelect;
