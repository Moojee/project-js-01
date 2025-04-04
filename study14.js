
// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter
function myFunc1(xx, yy = 200, zz = 100){
    console.log(xx)
    console.log(yy)
    console.log(zz)
   }
   
   myFunc1(10,20,30)
   console.log('-------------')
   myFunc1(11,22)
   console.log('-------------')
   myFunc1(13)
   
   // function for return mulitple value
   // return array value
   function myFunc2(){
       let aa =  [10, 20, 30]
       return aa
   }
   
   // return object value
   function myFunc3(){
       let bb = {  
           name: 'John',
           age: 30,
       }
       return bb
   }
   
   // use destruction to get value from object and array
   console.log('-------------')
   let [n1, n2, n3] = myFunc2()
   console.log(n1, n2, n3)
   console.log('-------------')
   let {name, age} = myFunc3()
   console.log(name, age)
   