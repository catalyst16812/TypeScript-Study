"use strict";
//let role:string[]|number[] = ["admin","manager",7,22]
//gives error cos of multitype array
let role = ["nikhil", 22, "delhi", true];
role.push(false);
role[1] = 44;
console.log(role[1]);
