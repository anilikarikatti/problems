a = [[1,2],[3,4]]
 b = [[5,6],[7,8]]

//  a = [[1,1,1],[2,2,2],[3,3,3]]
//  b = [[1,1,1],[2,2,2],[3,3,3]]

// a = [[1,2],[3,4]]
// b = [[5,6,7],[8,9,10]]
 let arr =[]
    
 for (let i =0 ; i<a.length;i++){
    let ar =[]
    for (let j =0 ; j<b[i].length;j++){
        let re  = 0;
        for(let k=0;k<b.length ; k++){
            console.log(k);
            console.log(a[i][k],b[k][j]);
            re +=  a[i][k]*b[k][j]
            // console.log(re);
        }
        ar.push(re)


 }
 arr.push(ar)
}

console.log(arr);