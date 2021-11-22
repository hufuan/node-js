
function test1(){
    console.log(this.name);
}

var Bob={
    name: 'Bob self!',
    friends:["Jack","Rose"],
    intr: function() {
        this.friends.forEach(function(ele){
        console.log(this.sname+" knows "+ele);});
        var fun3 = test1;
        test1(); //print undifined!
        fun3(); //print undifined!
        console.log(this.name); //print Bob
        var obj2 = {
            a: 3,
            name: "obj2 self",
            b: "hello",
            c: test1
        }
        obj2.c();//now this has its owner
    },
    fn1: test1,
    obj1: {
        name: "inner obj1 seflt",
        field1: 1,
        field2: 2,
         fn2: test1,
    }
}

Bob.intr();
Bob.obj1.fn2();