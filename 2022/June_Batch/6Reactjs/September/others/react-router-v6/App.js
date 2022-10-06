import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
import Error from './Error';
import Brand from './Brand';
import Users from './Users';
import User from './User';
import NoMatch from './NoMatch';
import { useState } from 'react';
import './App.css';

function App() {


    const [isActive,setisActive]=useState(false);

    const users = [
        { id: '1', fullName: 'Robin Wieruch' },
        { id: '2', fullName: 'Sarah Finnley' },
    ];


    return (<div>
        <Router>
            {/* <nav>
                <Link to="/error">Error</Link>
                <Link to="/dashboard/3?sort=name">User</Link>
            </nav> */}
            <NavLink
                to="users"
                className={isActive?'active' : 'inactive'}
            >
                Users
            </NavLink>
            <Routes>
                <Route path="error" element={<Error />} />
                <Route path="dashboard/:brand" element={<Brand />} />
                <Route path="users" element={<Users users={users} />}>
                    <Route path=":userId" element={<User />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    </div>)
}

export default App;