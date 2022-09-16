import {UserContext} from './App';

function ComponentC(){
return(<div>
        <UserContext.Consumer>
            {
                obj=>{
                    return (<div>{obj}</div>)
                }
            }
        </UserContext.Consumer>
        </div>)
}

export default ComponentC;