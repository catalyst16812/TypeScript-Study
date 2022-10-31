//let role:string[]|number[] = ["admin","manager",7,22]
//gives error cos of multitype array

let role:[string,number,string,boolean,boolean?]=["nikhil",22,"delhi",true];
role.push(false);
role[1]=44;
console.log(role[1]);
