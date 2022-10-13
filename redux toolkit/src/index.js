import React from 'react'
import "./index.css"
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from "react-redux"
import {store} from "./app/store"

ReactDOM.render(
<Provider store={store}>
    <React.StrictMode>
       <App />
    </React.StrictMode>
</Provider>, 
document.getElementById('root'))