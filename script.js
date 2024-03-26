//task 1
//Display the country flags in given URL.

var flags=new XMLHttpRequest();
flags.open("GET","https://restcountries.com/v3.1/all")
flags.send();
flags.onload=function(){
    var data=flags.response;
    //console.log(data);
    var result=JSON.parse(data)
    //console.log(result);
    for(i=0;i<result.length;i++){
        console.log(result[i].flags.png);
    }
}


//task 2
//display the country names,regions,subregion and population.

var nrsp=new XMLHttpRequest();
nrsp.open("GET","https://restcountries.com/v3.1/all")
nrsp.send();
nrsp.onload=function(){
    var data1=nrsp.response;
    var result1=JSON.parse(data1)
    for(i=0;i<result1.length;i++){
        console.log("COUNTY NAME: "+""+result1[i].name.common,"REGION:"+""+ result1[i].region,"SUBREGION:"+""+ result1[i].subregion,"POPULATION:"+""+ result1[i].population);
    }
}


//task 3
//How to compare two JSON have the same properties without order?
//let obj1={name:"person1",age:5}
//let obj2={age:5,name:"person1"}

let obj1={Name:"vijay",age:30}
let obj2={age:30,Name:"vijay"}
let str1=JSON.stringify(obj1,Object.keys)
let str2=JSON.stringify(obj2,Object.keys)
if(str1===str2){
   console.log("The JSON object is equal");
}else{
    console.log("The JSON object is not equal");
}