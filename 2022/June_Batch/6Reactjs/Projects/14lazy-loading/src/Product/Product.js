import './Product.css';

const Product = () => {

    return (<div style={{marginTop:"100px"}} className='container'>
        <div className='row'>
            <div className="col-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Samsung</td>
                            <td>40000</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Sony</td>
                            <td>25000</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Micromax</td>
                            <td>50000</td>
                            <td>Yellow</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>)
}

export default Product;