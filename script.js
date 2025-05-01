// //Part 1: feeling loopy

// let str ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// let row=[];
// let cell="";
// let table=[];
// for (let i=0;i<str.length;i++){
//     if(str[i]===","){
//         row += " "
//     }
//     else if(str[i]==="\n"){
//         console.log(row);
//         row="";
//     }
//     else{
//         row += str[i];
//     }
// }

// //Part 1: Refactoring code 

let varData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let row = []
let cell = ""
let table = []
let count=0;
for (let i = 0; i <= varData.length; i++) {
    if (varData[i] === ",") {
        row.push(cell)
      // console.log("cell:"+cell)
         cell = ""
        //console.log("====== before else if=============")
       // console.log(row[0], row[1], row[2], row[3]);
    } else if (varData[i] === "\n") {
        row.push(cell)
       // console.log("cell2:"+cell)
         cell = ""
         count++;
       table.push(row)
       table.reverse;
        // console.log(row[0], row[1], row[2], row[3]);
         row=[]
    }
    else {
        cell += varData[i];
    }
    
}
console.log(table)
console.log("Number of rows "+count)
