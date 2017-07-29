/**
 * 对象是什么
 * JavaScript 对象是拥有属性和方法的数据。
 * 
 * 	
 * 
 */

 //1创建对象
// var bike = {
//     name:"ofo",
//     color:"yellow",
//     start:function(client){
//         console.log(client+"扫码骑车")
//     }
// }

// // 访问对象属性

// console.log(bike.name,bike['color'])
// //访问对象方法
// bike.start("zhifubao")

// // //更改对象值
// bike.name = "mobike"
// console.log(bike.name)


// // 2构造器来声明对象

function mobike(name,color,price){
    this.name = name 
    this.color = color
    this.price = price
    this.changePrice = changePrice
    function changePrice(rmb){
        this.price = rmb
    }
}

var mblite=  new mobike("mobike-lite","ornage","1RMB/h")
console.log(mblite.color,mblite['name'])

console.log("before",mblite.price)
mblite.changePrice("free")

console.log("after",mblite.price)


// //创建一个新对象
// var mobike1 = new mobike ("mobkie","orange",'1rmb/h')
// console.log(mobike1.color,mobike1['name'])
// console.log(mobike1.price)
// mobike1.changePrice("free")
// console.log(mobike1.price)

