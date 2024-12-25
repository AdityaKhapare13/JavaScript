let result = prompt("Enter your score(0-100):");
if(result <= 100 && result >= 90){
    console.log("your grade is A");
}else if(result <= 89 && result >= 70){ 
    console.log("your grade is B");
}else if(result <= 69 && result >= 60){
    console.log("your grade is C");
}else if(result <= 59 && result >= 50){
    console.log("your grade is D");
}else if(result <= 49 && result >= 0){
    console.log("your grade is F");
}
else{
    console.log("Enter a valid number");
}