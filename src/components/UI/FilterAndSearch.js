import React from 'react'
import MyInput from './MyInput/MyInput';
import MySelect from './Select/MySelect';
 

const FilterAndSearch = ({filter, setFilter}) => {
    return (
        <div className="nom">
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selected => setFilter({...filter, sort: selected})}
                defaultValue="Sorted by "
                options={[
                    { value: "title", name: "Programming" },
                    { value: "stack", name: "Jobs" }
                ]}
            />
        </div>
    )
}

export default FilterAndSearch;
