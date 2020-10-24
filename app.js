var budgetController = (function () {
    var x = 23;

    var add = function (a) {
        return x + a;
    };
    return {
        publicTest: function (b) {
            return add(b);
        },
    };
})();

var UIController = (function () {
    //TODO: write some good codes
})();

var controller = (function (budgetCtrl, UICntrl) {
    var z = budgetCtrl.publicTest(5);
    return {
        anotherpublic: function () {
            console.log(z);
        },
    };
})(budgetController, UIController);
