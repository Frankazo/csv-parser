// Make all the logic and Csv parsing functions in JavaScript
// Make a Function that receives the Csv file and turns it into a JSON object
// fs works on server side, look for a way to make it work here
export default function csvJSON(csv){
    console.log(csv);
    const lines=csv.split("\n");

    const result = [];

    const headers=lines[0].split(",");

    for(let i=1;i<lines.length;i++){

  	  const obj = {};
  	  const currentline=lines[i].split(",");

  	  for(let j=0;j<headers.length;j++){
  		  obj[headers[j]] = currentline[j];
  	  }

  	  result.push(obj);

    }

    //return result; //JavaScript object
    return JSON.stringify(result);
};


// Make a function that recieves the JSON object and checks for duplicates
// Creating two different arrays, one with non duplicates and another one with duplicates
// print the two arrays list
