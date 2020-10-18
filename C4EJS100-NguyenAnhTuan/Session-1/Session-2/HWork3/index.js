console.log("a,");
for (let i = 0; i < 7; i++)
{
    console.log(i);
}
console.log("\n");
  
console.log("b,");
{
let n = prompt ("enter the final number in your loop");
for (let i=0; i<n; i++)
{
    console.log(i);
}
}
console.log("\n");
console.log("c,");
{
let n = prompt("enter the final number in your loop (begin with 3)");
for (let i=3; i<n; i++)
{
    console.log(i);
}
}
console.log("\n");
{
    console.log("d,");
    let c = prompt("Enter the start number");
    let n = prompt("Enter the final number in your loop");
    for (let i=c; i<n; i++)
    {
        console.log(i);
    }
    }
    console.log("\n");
    {
        console.log("e,");
        let c = Number(prompt("Enter the start number"));
        let n = Number(prompt("Enter the final number in your loop"));
        for (let i=c; i<n; i+=3)
        {
            console.log(i);
        }
    }
    console.log("\n");
    {
        console.log("f,");
        let c = Number(prompt("Enter the start number"));
        let n = Number(prompt("Enter the final number in your loop"));
        let s = Number(prompt("Enter your step"));
        for (let i=c; i<n; i+=s)
        {
            console.log(i);
        }
    }
    console.log("\n");
