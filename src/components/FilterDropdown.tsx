import React from 'react'

type filterOption = 'c' | 'p' | 'l';

const FILTER_OPTION:{ label:string, value:filterOption }[]  = [
    {label:'Starts with C', value:'c'},
    {label:'Starts with P', value:'p'},
    {label:'Starts with L', value:'l'},
] 

const FilterDropdown:React.FC = () => {
  return (
    <div>FilterDropdown</div>
  )
}

export default FilterDropdown