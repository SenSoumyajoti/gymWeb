import React,{useState} from 'react'

function Dropdown({options}) {
    const [svalue,setvalue] =useState(options[0].value);
    const handleChange=(e)=>{
        const selectedValue = e.target.value;
        setvalue(selectedValue);
        onChange(selectedValue); 
    }
  return (
    <select value={svalue} onChange={handleChange}>
        {options.map((option)=>(
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
  )
}

export default Dropdown