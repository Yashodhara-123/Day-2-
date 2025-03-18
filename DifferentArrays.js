//javaScript Array
console.log('javaScript Array')

let NumArray = [2,4,6,8]
let LetterArray = ["A","B","C","D"]
let WordArray = ["Apple","Orange","Banana"]

console.log (NumArray);
console.log(LetterArray);
console.log(WordArray);
console.log()

//get the element into down
//Method 1
console.log('get the element into down')
for(let i=0;i<NumArray.length;i++)
{
	console.log(NumArray[i])
}

//Method 2
NumArray.forEach((n)=>{
	console.log(n)
})
console.log()



//Find the maximum number in the array using forEach
console.log('Find the maximum number in the array using forEach')
let max = 0;
NumArray.forEach((n)=>{
	
	/*if(max){
		max = n
	}*/
	
	(max<n)?max=n:n=n
	//(max<n)&&(max=n)
})
console.log("Max is "+max)
console.log()



//print the nested array [1,2,3],[5,6],[8,5,3]
console.log('print the nested array')
let arr2=[[1,2,3],[5,6],[8,5,2]]
arr2.forEach((n)=>{
	n.forEach((i)=>{
		console.log(i)
	})
})
console.log()

/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common elements between a and b
*/
console.log('find the common elements')
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]

for(let i=0;i<a.length;i++)
{
	for(let j=0;j<b.length;j++)
	{
		if(a[i]==b[j])
		{
			console.log(a[i]);
		}
	}
}
console.log()

/*arr = [1,2,3,4,5,6]
target = 7
write a code find the all pairs that sum up to the target*/
console.log('find the all pairs that sum up to the target')
let arr = [1,2,3,4,5,6]
var target=7
let sum=0;
let x;
let y;
for(let i=0;i<arr.length;i++)
{
	for(let j=0;j<arr.length;j++)
	{
		x=arr[i];
		y=arr[j];
	}
	sum=x+y;
	if(sum>target)
	{
		console.log(x,y)
		
		
	}
}
console.log()



//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array




//Array Operation
//push and pop
console.log('push and pop')
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the array using push and pop
//a b c d -> d c b a
console.log('reverse the array using push and pop');
let E = ['a', 'b', 'c', 'd'];
let reversedArr = [];

while (E.length > 0) {
    reversedArr.push(E.pop());
}

console.log(reversedArr); 


