import './NoMatch.css';

const NoMatch = () => {
    return (<div style={{marginTop:'170px'}} className="container">
        <div className="row">
            <div className="col-12">
                <div class="jumbotron">
                    <h1 class="display-4">Sorry!</h1>
                    <p class="lead">Please provide Proper Information.</p>
                    <hr class="my-4" />
                    <p>Please login back to Newton School.</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        </div>
    </div>)
}
export default NoMatch