import { Component } from "react";


class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error) {
		return { hasError: true }
	}

    componentDidCatch(error){
        console.log(error);
    }

    render(){
        if(this.state.hasError){
            return <div>There is some issue</div>
        }
        return <div>{this.props.children}</div>
    }

}

export default ErrorBoundary;