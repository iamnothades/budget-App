//NOTE: Budget Controller
var budgetController = (function () {
    //TODO: write some good codes
})();

//NOTE: UI Controller
var UIController = (function () {
    //TODO: write some good codes

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                //NOTE: Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription)
                    .value,
                value: document.querySelector(DOMStrings.inputValue).value,
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        },
    };
})();

//NOTE: Global App Controller
var controller = (function (budgetCtrl, UICntrl) {
    var ctrlAddItem = function () {
        //TODO:
        //1. Get the filled input data
        var input = UICntrl.getInput();
        console.log(input);
        //2. Add the item to budget controller
        //3.Add new item to UI
        //4. Calc budget
        //5.Disp budget
    };

    var DOM = UICntrl.DOMStrings();

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);
