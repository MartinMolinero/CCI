const loopTriangle = (limit) => {
    if (limit < 0 ){
        return;
    }
    for(let init = 1; init <= limit; init = init + 1){
        console.log('#'.repeat(init));
    }
}

loopTriangle(11);