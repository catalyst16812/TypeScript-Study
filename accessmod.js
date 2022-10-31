var Data = /** @class */ (function () {
    function Data() {
        this.name = "";
    }
    Data.prototype.setName = function (name) {
        this.name = name;
    };
    Data.prototype.displayName = function () {
        console.log("name is " + this.name);
        console.log("lenght is " + this.namelen());
    };
    Data.prototype.namelen = function () {
        return this.name.length;
    };
    return Data;
}());
var user1 = new Data;
user1.setName("Nikhil Vishwakarma");
user1.displayName();
console.log("hi");
