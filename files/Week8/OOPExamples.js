// function in object -- method
// run method like function
// function.methodname ()
// myMethod.call(object1) -- makes this into myMethod

// ex 1:

var parent = {
    get: function fn() {
        return this.val;
    } ,
    val: 42
};

var child = object.create(parent);
child.var = 3.14519;

var grandchild = Object.create(child);

parent.get(); // 42
child.get() // 3.14519
grandchild.get() // 3.14519

// ex: 2

var answer = {
    get: function fn() {
        return this.val;
    } ,
    val: 42
};

var firmAnswer = object.create(answer);
firmAnswer.get = function fn2() {
    return this.val + '!!';
};

answer.get(); // 42
firmAnswer.get(); // 42!!
// issue is that this.val is used 2x

// ex: 3

var answer = {
    get: function fn() {
        return this.val;
    } ,
    val: 42
};

var firmAnswer = object.create(answer);
firmAnswer.get = function fn2() {
    return answer.get.call() + '!!';
};

firmAnswer.val = 3.14159
firmAnswer.get(); // 3.14159

// ex: 4

/* 
lifeAnswer
val 42
* prototype

dessertAnswer
val 3.14159
* prototype

children of AnswerPrototype
get fn1[]
* object

luckyAnswer
val 7
* prototype

magicAnswer
val 3
* prototype

children of FirmAnswerPrototype (which is child of AnswerPrototype)
get fn2[]
* prototype
*/

var AnswerPrototype = {
    get: function fn1() {
        return this.val;
    }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
lifeAnswer.get(); // 42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14159;
dessertAnswer.get(); // 3.14159

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + '!!';
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
luckyAnswer.get(); // 7!!

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.val = 3;
magicAnswer.get(); // 3!!

// duplicated logic and violates encapsulation
// or

class Answer {
    constructor(value) {
        this._val = value;
    }
    get() {
        return this._val;
    }
};

var lifeAnswer = new Answer(42);
lifeAnswer.get(); // 42

var dessertAnswer = new Answer (3.14159);
dessertAnswer.get();

class FirmAnswer extends Answer {
    constructor(value) {
        super(value);
    }
    get() {(
        return super() + '!!';
    }
};

var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get(); // 7!!

var magicAnswer = new FirmAnswer(3);
magicAnswer.get(); // 3!!