import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        let newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
<div style={{height: '50px'}}>
     { props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
 <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
 
</div>}
</div>
  )
}
