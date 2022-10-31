var Members = /** @class */ (function () {
    function Members(name, mobile, address) {
        this.name = "";
        this.address = "";
        this.name = name;
        this.mobile = mobile;
        this.address = address;
    }
    Members.prototype.display = function () {
        console.log(this.name + " " + this.mobile + " " + this.address);
    };
    return Members;
}());
var nikhil = new Members("Nikhil", 21, "delhi");
nikhil.display();
