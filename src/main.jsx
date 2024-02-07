import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";

const initialState = {
    sidebarState: false
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIDEBAR_OPEN":
            return {...state, sidebarState: true}
        case "SIDEBAR_CLOSE":
            return {...state, sidebarState: false}
        default:
            return state
    }
}

const store = createStore(sidebarReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <div className="main_base">
                <App />
            </div>
        </Provider>
    </BrowserRouter>
)
