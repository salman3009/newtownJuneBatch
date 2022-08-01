function slicingDetailsHandler(input,start,end,output){
    var result = input.slice(start,end);
    console.log(result);
    if(result === output){
        console.log("result is matched");
    }
    else{
        console.log("no matched found");
    }
}