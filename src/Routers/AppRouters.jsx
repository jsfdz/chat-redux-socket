import { HashRouter as Router, Route } from 'react-router-dom'
import { Chat } from '../views/Chat'
import { Join } from '../views/Join'

export const AppRouters = () => {

    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    )
}