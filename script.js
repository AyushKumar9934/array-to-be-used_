/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    let newarr=arr.map((item)=>{
     if( item.profession=="developer"){
      return item;
     }
     else return null;
    }).filter((item)=>item!=null);
    
   newarr.map((item)=>{
    console.log(item);
   })


}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
 arr.forEach((item)=>{
  if(item.profession=="developer")console.log(item);
 })
}

function addData() {
  //Write your code here, just console.log
 let newobj= { id: 4, name: "Ayush", age: "20", profession: "student" }
 arr.push(newobj);
 console.log(arr.filter((item)=>item.id==4)[0])
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((item,index)=>{
    if(item.profession=="admin")arr.splice(index,1);
  })
  console.log(arr);

}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 7, name: "Govind", age: "21", profession: "developer" },
    { id: 8, name: "Murari", age: "22", profession: "developer" },
    { id: 9, name: "Krishna", age: "23", profession: "admin" },
  ];
  arr.push(...arr2);
  console.log(arr);
}
