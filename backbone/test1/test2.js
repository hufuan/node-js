/////////////header
var Backbone = require('backbone'); 


console.log( search_view ); // 输出为 [song1, song2, song3]

////////////////////////


function Person(str){ 
    this.hello = str;
    this.sayHello = function(){ 
      alert(this.hello); 
    } 
    } 
    
    
    function Child(word){ 
    this.word = word
    this.sayWorld = function(){ 
      alert(this.world); 
    } 
    
    Child.prototype = new Person("kitty");
    
    var c = new Child("world"); 
    c.sayHello(); 
    c.sayWorld();

