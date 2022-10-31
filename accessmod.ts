class Data{
    private name = "";

    setName(name:string)
    {
        this.name=name;
    }

    displayName()
    {
        console.log("name is "+this.name)
        console.log("lenght is "+this.namelen())
    }
    private namelen()
    {
        return this.name.length;
    }
}

const user1 = new Data;
user1.setName("Nikhil Vishwakarma");
user1.displayName(); 
console.log("hi")