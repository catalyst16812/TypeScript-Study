"use strict";
function apierror(msg, api) {
    throw { messege: msg, apicode: api };
}
console.log(apierror("server side error", 500));
