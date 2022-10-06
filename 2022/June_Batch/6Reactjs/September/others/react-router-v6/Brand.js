
import { useParams,useLocation,useSearchParams } from "react-router-dom";



function Brand(){
    const { brand } = useParams();
	console.log("brand",brand);
    const location = useLocation();
    const url = location.pathname;
    console.log(location.pathname);
    //?sort=name&order=ascending
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('sort')); // 'name'
    return (<div>
            Brand
    </div>)
}
export default Brand;