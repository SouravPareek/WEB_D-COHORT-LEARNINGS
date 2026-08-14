import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}> 
        <App />
    </Provider>
)


//redux notes:https://atlantic-jellyfish-c1f.notion.site/Redux-Toolkit-Complete-Beginner-Documentation-320b5aac78f780ee9b55db9ba6592cfe?pvs=143