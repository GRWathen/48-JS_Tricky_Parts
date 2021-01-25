function curriedAdd(total = 0) {
    if (total === undefined) {
        return (0);
    };

    return function addNumber(number) {
        if (number === undefined) {
            return (total);
        };

        total += number;
        return (addNumber);
    };
}

let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

firstAdder(); // 0
secondAdder(1)(2)(); // 3
thirdAdder(2)(8)(5)(1)(); // 16

module.exports = { curriedAdd };
