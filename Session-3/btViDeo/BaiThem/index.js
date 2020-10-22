let menu= prompt('nhập vào dãy số n');
let x = [];
for(let i =0; i<menu;i++){
    x.push(prompt(`Number ${i+1} ${i}`));
}
x.sort((a,b)=> a-b);
alert(x);

let odd=[];
let even=[];
for (let i=0; i<menu.length; i++)
{
    if( array[i] % 2 == 0)
    {
        even.push(menu[i]);
    }
    else odd.push(menu[i]);
}
alert(`Even number : ${even} .`);
alert(`Odd number : ${odd} .`);

let checkEven=[];
for (let x=0; x<even.length; x++)
{
    if (!checkEven.includes(even[x]))
    {
        checkEven.push(even[x]);
    }
}
alert(`deleted duplicate even number: ${checkEven}`);
let checkOdd=[];
let y;
for (let y=0; y<odd.length; y++)
{
    if (!checkOdd.includes(odd[y]))
    {
        checkOdd.push(odd[y]);
    }
}
alert(`deleted duplicate odd number: ${checkOdd}`);
