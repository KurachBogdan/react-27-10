import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello, App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis laborum saepe labore temporibus corporis consectetur.
                Ipsa veniam omnis quidem quos tempore voluptatum vero
                consequatur, nihil illo eum temporibus saepe fugiat!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis laborum saepe labore temporibus corporis consectetur.
                Ipsa veniam omnis quidem quos tempore voluptatum vero
                consequatur, nihil illo eum temporibus saepe fugiat!
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
    <>
      <Title />
      <Content />
    </>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
