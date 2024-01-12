let marks1=80
let marks2=10
let marks3=10

grade=(marks1+marks2+marks3)/3

if(grade>=90){
    console.log("A Grade")
}
else if(grade>=70 && grade <90){
    console.log("B grade")
}
else if(grade>=50 && grade<70){
    console.log("C grade")
}
else{
    console.log("F grade")
}