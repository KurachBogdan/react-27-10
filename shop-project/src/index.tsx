import React from 'react'
import ReactDOM from 'react-dom/client'

const h1 = (
    <h1 id="title" className="edit">
        Hello, React.js
    </h1>
)

let a = 10
let b = 'Hello, React'

const list = (
    <ul>
        <li>List Item 1 {a + 10 + 10}</li>
        <li>List Item 2 {b}</li>
        <li>List Item 3</li>
    </ul>
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
