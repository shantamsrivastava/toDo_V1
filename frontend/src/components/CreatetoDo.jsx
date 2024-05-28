import {useState} from 'react'

export function CreatetoDo() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    return (
        <div>
            <input id = "title" style = {{
                margin: 10,
                padding: 10
            }} type = "text" placeholder = "title" onChange = {
                function(e) {
                    const title = e.target.value;
                    setTitle(title);
                }
            }></input> <br />
            <input id = "description "style = {{
                margin: 10,
                padding: 10
            }} type = "text" placeholder = "description" onChange = {
                function(e) {
                    const desc = e.target.value;
                    setDesc(desc);
                }
            }></input> <br />
            <button id = "button" style = {{
                margin: 10, 
                padding: 10
            }} onClick = {
                function() {
                    const data = {
                        title: title,
                        description: desc,
                        completed: false
                    }
                
                    fetch("http://localhost:3000/todo", {
                        method: 'POST', 
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data) 
                      }) 
                }
            }>Add to List</button>
        </div>
    )
}


