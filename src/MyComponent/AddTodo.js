import React, { useState } from "react";

export const AddTodo = ({addTodo}) =>{

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault()
        if(!title || !desc){
            alert("Field cannot be blank!");
        }
        else{
          addTodo(title,desc);
          setTitle("");
          setDesc("");
        }
    }

    return(
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
  <div className="form-group">
    <label for="title">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}className="form-control" id="title" aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label for="desc">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
        </div>
    )
}