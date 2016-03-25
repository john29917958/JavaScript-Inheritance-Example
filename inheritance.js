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

    Parent.prototype.say = function () {
        console.log("Parent: I'm Parent!");
        return "Parent: I'm Parent!";
    };

    function Child() {

    }

    extend(Parent, Child);

    Child.prototype.say = function () {
        console.log("Child: I'm Child!");
        return "Child: I'm Child!";
    };

    Child.prototype.jump = function () {
        console.log("Child: jump!");
        return "Child: jump!";
    };

    var child = new Child(),
        parent = new Parent();

    $("#result").append(parent.say() + "<br>").append(child.say() + "<br>").append(child.jump());
});