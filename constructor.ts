class Members{
    private name ="";
    readonly mobile ;
    private address="";
    constructor(name:string,mobile:number,address:string)
    {
        this.name = name;
        this.mobile = mobile;
        this.address = address;
    }
display()
{
    console.log(this.name+" "+this.mobile+" "+this.address);
}
}

const nikhil = new Members("Nikhil",21,"delhi");
nikhil.display();