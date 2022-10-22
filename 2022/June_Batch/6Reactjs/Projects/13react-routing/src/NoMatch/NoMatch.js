import './NoMatch.css';
import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

const NoMatch = () => {

    const [getList,setList]=useState(["/product","/products","/prod","/productss"]);
    const [getFlag,setFlag]=useState(false);
    const {pathname} = useLocation();

    useEffect(()=>{
       console.log(pathname);
       const filter = getList.includes(pathname);
       if(filter){
           setFlag(true);
       }
    },[])

    return (<div style={{marginTop:'170px'}} className="container">
        <div className="row">
            <div className="col-12">
                <div class="jumbotron">
                    <h1 class="display-4">Sorry!</h1>
                    <p class="lead"> This particular {pathname} does not exists.</p>
                    <hr class="my-4" />
                    <p>Please login back to Newton School.</p>
                    {getFlag && <h1>please visit the below page <Link to="product">product</Link></h1>}
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        </div>
    </div>)
}
export default NoMatch