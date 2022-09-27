//2d arrays

//9 exits in array a or not ,return index 
/*

var a=[1,2,3,4,5,6,7,8,9]

for(let i=0;i<a.lenbth;i++){
    if(a[i]===9){
        return i
    }
}
*/

// function index(arr,element){
//     var b=[]
//     for(let i=arr.length-1;i>=0;i--){
    
//         for(let j=arr[i].length-1;j>=0;j--){
//            if(arr[i][j]===element){
//             b.push(i)
//             b.push(j)
//             return b
//            } 
//         }
    
//     }

//     return `${element} does not exist`
// }


// function index(arr,element){
//     var b=[]
//     for(let i=arr.length-1;i>=0;i--){//colm index
    
//         for(let j=arr[i].length-1;j>=0;j--){//row index
//            if(arr[i][j]===element){
//             b.push(i)
//             b.push(j)
//             return b
//            } 
//         }
    
//     }

//     return `${element} does not exist`
// }


// var a=
// [
//     [1,2,3], 1==>0,0     3=0,2
//     [4,9,6],  9==>1,1    9=1,1
//     [7,8,10]  10==>2,2   7=2,0

// ]

/*
10==>2,2  8==>2,1 7==>2,0  
6==>1,2   9==>1,1 4==>1,0 
3==>0,2   2==>0,1 1==>0,0 

*/

// console.log(index(a,9))


// spiral form


// var a=[
//  //cs   ce  ce   
//    [1,2,3,4],//rs
//    [5,6,7,8],   //<--rs   <--re
//    [4,3,2,1],//re
// ]
/*

var a=[
//rs=0//1
//cs=0
//re=arr.length-1//2
//ce=arr[0].length-1//3-->2
    //1strow==>(0,0) (0,1) (0,2) (0,3) for(let i=cs;i<=ce;i++)0 1 2 3 a[rs][i]// rs++
//last colm ==> (1,3) (2,3)            for(let i=rs;i<=re;i++)      a[i][ce]//ce--
//last row  ==> (2,2) (2,1) (2,0)      for(let i=ce;i>=cs;i--)      a[re][i]//re--
//1st colm ==> (1,0)                   for(let i=re;i>=rs;i--)      a[i][cs]//cs++


[1,2,3,4],
[5,6,7,8],
[4,3,2,1],
]



// */
// var a=[

//     [1,2,3,4],
//     [5,6,7,8],
//     [4,3,2,1],
//     ]
    
// var rs=0,cs=0,re=a.length-1,ce=a[0].length-1
// // var str=""
// while(cs<=ce && rs<=re){

//     for(let i=cs;i<=ce;i++){
//         str+=a[rs][i]
//     }rs++

//     if(rs>re){break}

//     for(let i=rs;i<=re;i++){
//        str+= a[i][ce]
//     }ce--
    
//     for(let i=ce;i>=cs;i--){
//         str+=a[re][i]
//     }re--

//     for(let i=re;i>=rs;i--) {
//       str+= a[i][cs]
//     }cs++


// }
// console.log(str)

