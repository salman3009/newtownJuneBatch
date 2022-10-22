

const Person=(props)=>{

    if(props.name === "salman"){
        throw new Error("There is some issue");
    }

    return (<div>Welcome Person</div>)

}

export default Person;