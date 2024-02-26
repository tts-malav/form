import React from 'react'

const ValidationForm = (props) => {
  const {label ,onChange, id, ...inputProps} = props;
  return (
    <>
    <div className=''>
        <label>{label}</label>
        <input
            className='border border-black px-6 py-4 my-3' 
            {...inputProps}
            onChange={onChange}
        />
    </div>
    </>
  )
}

export default ValidationForm