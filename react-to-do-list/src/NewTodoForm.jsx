import { useState } from "react";

export default function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        props.addTodo(newItem);
        setNewItem("")
    }

    return (
            <form 
            className="new-item-form"
            onSubmit={handleSubmit}
            >
            <div className="form-row">
            <label htmlFor="item"> New item </label>
            <input 
                value={newItem} 
                onChange={e =>setNewItem(e.target.value)} 
                type="text" id="item" 
            />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}