"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["READONLY"] = 2] = "READONLY";
})(Role || (Role = {}));
console.warn(Role);
console.warn(Role.ADMIN);
