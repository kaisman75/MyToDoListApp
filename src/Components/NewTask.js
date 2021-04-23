import React from 'react'

const NewTask = () => {
    return (
        <div className="container">
         <input className="form-control form-control-lg" type="text" placeholder="New Task"></input> 
         <button className="btn btn-success">add Task</button> 
        </div>
    )
}

export default NewTask
