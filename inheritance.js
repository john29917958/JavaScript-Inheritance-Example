$(document).ready(function () {
    function extend(parent, child) {
        if (typeof parent === 'function' && typeof child === 'function') {
            child.prototype = Object.create(Parent.prototype);
            child.prototype.constructor = child;
            
            return child;
        }
        else {
            return null;
        }
    }

    function Parent() {
        
    };

    Parent.prototype.name = "Parent";

    Parent.prototype.hiccups = function () {
        return this.name + ": urrrrgh~";
    };

    Parent.prototype.say = function () {
        return this.name + ": I'm " + this.name + "!";
    };

    function Child() {

    }

    extend(Parent, Child);

    Child.prototype.name = "Child";

    Child.prototype.hiccups = function () {
        return this.name + ": rumble!";
    };

    var child = new Child(),
        parent = new Parent();

    $("#result").append(parent.say() + "<br>").append(child.say() + "<br>").append(parent.hiccups() + "<br>").append(child.hiccups());
});