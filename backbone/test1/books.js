
var Backbone = require('backbone'); 

var Book = Backbone.Model.extend();  

// 创建一系列模型对象  
var book1 = new Book({  
    name : 'Effective Java中文版(第2版)'  
});  
var book2 = new Book({  
    name : 'JAVA核心技术卷II：高级特性（原书第8版）'  
});  

// 定义集合类  
var BookList = Backbone.Collection.extend({  
    model : Book  
});  
/*
var book3 = new Book({  
    name : '精通Hibernate：Java对象持久化技术详解（第2版）'  
}); 
*/
// 创建集合对象  
var books = new BookList([book1, book2]); 


console.log(book1);
console.log("fuhu")
//console.log(books);