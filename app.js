//NOTE: Budget Controller
var budgetController = (function () {
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            inc: [],
            exp: [],
        },
        totals: {
            inc: 0,
            exp: 0,
        },
    };
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //NOTE: Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //NOTE: Create new item based on 'inc' or 'exp' type
            if (type === 'inc') {
                newItem = new Income(ID, des, val);
            } else if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            //NOTE: Push into new data structure
            data.allItems[type].push(newItem);
            //NOTE: Return new element
            return newItem;
        },
        testing: function () {
            console.log(data);
        },
    };
})();

//NOTE: UI Controller
var UIController = (function () {
    //TODO: write some good codes

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
imp        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
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

        addListItem: function (obj, type) {
            var html, newHtml, element;
            //TODO:

            //1)Create html string with placeholder text

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html =
                    '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html =
                    '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //2)Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            //3)Insert HTML into Doc
            document
                .querySelector(element)
                .insertAdjacentHTML('beforeend', newHtml);
        },
    };
})();

//NOTE: Global App Controller

var controller = (function (budgetCtrl, UICntrl) {
    var setupEventListeners = function () {
        var DOM = UICntrl.getDOMStrings();
        document
            .querySelector(DOM.inputBtn)
            .addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var input, newItem;
        //TODO:
        //1. Get the filled input data
        input = UICntrl.getInput();
        //2. Add the item to budget controller
        newItem = budgetCtrl.addItem(
            input.type,
            input.description,
            input.value
        );
        //3.Add new item to UI
        UICntrl.addListItem(newItem, input.type);
        //4. Calc budget
        //5.Disp budget
    };
    return {
        init: function () {
            console.log('Application has started');
            setupEventListeners();
        },
    };
})(budgetController, UIController);

controller.init();
