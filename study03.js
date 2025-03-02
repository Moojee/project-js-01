// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = 'aaa'
let bb = "bbb"
let cc = `ccc ${10 * 5}`

// console.log(aa, bb, cc)

// number
let dd = 111
let ee = 222.345

// boolean
let ff = true
let gg = false


// object
let hh = {
    //key : value
    name: 'jan',
    age: 30,
    major: 'DTI',
    uni: `SAU $(10*20)`
}
console.log(hh)
console.log(hh)


// array
let ii = [10, 20, 30, 40]
console.log(ii)
console.log(ii[1])
console.log(ii[0] * ii[3])

// undefined
let jj 
let kk = undefined
console.log(jj)
console.log(kk)


// null
let ll = null
console.log(ll)


// type checking การตรวจสอบชนิดข้อมูล
console.log( typeof kk )
console.log( typeof ll )
console.log( typeof hh )
