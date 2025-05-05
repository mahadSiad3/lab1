const vehicle = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2,
        company:{
            maker: "toyota",
            locale: 12,
            def: "japan"
        }
	}
    
}
// const arr =[];
// for( const key in vehicle.engine){
//     arr.push(key)
// }

// console.log(arr);
let arr = [];

let arrObj = {
      title: "Introduction to JavaScript",
      author: "Geek123",
      views: 1000,
};
console.log("Array before pushing:", arr);
for (let i = 0; i < 1; i++) {
      arr.push(arrObj);
}
console.log("Array after pushing:", arr);