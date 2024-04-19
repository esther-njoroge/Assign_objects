// NO1
const people =[
    {name: 'Alice', age: 17},
    {name: 'Eunice', age: 22},
    {name: 'Charlie', age: 14},
    {name: 'Max', age: 19},
];
function arrObjects(){
     newarr =[]
    people.forEach(item => {
        if(item[age]>=18){
            newarr.push(item)
        }
    })

}
console.log(arrObjects(newarr))





// // N02
const products = [
    {name: 'Laptop', price: 1200, category: 'Electronics'},
    {name: 'Shirt', price: 25, category: 'Clothing'},
    {name: 'Headphones', price:80,  category: 'Electronics'},
    {name: 'Shoes', price: 80, category: 'Clothing'},
];

function arrCategory(){
    var objectTemplate = Object.groupBy( products,item =>{
        return item.category
    })
    console.log(objectTemplate);
}
arrCategory()

// NO3
const students= [
    {name: 'John', scores: [90,80,85]},
    {name: 'Jane', scores: [95,92,88]},
    {name: 'Jim', scores: [70,80,75]},
    {name: 'Jil', scores: [85,90,84]},
];

function averageMarks(marks){
    const score = (marks)=> {
        return marks.reduce((total,marks)=> total+marks,0)/marks.length;
    }
    const answer = students.filter(students =>
        averageMarks(students.marks)>=85)
        const names =answer.map(students=>students.name);
        console.log(names)
}
averageMarks(marks)

// NO4
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },

};

function carInfo(){
    car.age = function(){
        let currentYear = 2024
        return currentYear - car.year
    }
    console.log(car.age())
}
carInfo()