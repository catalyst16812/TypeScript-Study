function apierror(msg:string,api:number):never
{
    throw{messege:msg,apicode:api};
}

console.log(apierror("server side error",500));