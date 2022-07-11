import React from 'react'

const MyPortfolio = (props) => {

    return (<>
        <h1>{props.value.firstName + " " + props.value.lastName}</h1>
        <h2>{props.value.fatherName}</h2>
        <h2>{props.value.userName}</h2>
        <h2>{props.value.email}</h2>
        <h2>{props.value.city}</h2>
        <h2>{props.value.phone}</h2>
    </>
    )
}

export default MyPortfolio