
import { useState } from 'react'
import Header from '../Header'
import "./EditorBody.css"

const EditorBody = () => {
    const [text, setText] = useState('')
    console.log(text);
    
    return (
        <div>
            <Header name="Editor" ></Header>
            <textarea className='edit-area' onChange={e => setText(e.target.value)}></textarea>
        </div>
    )
}

export default EditorBody
