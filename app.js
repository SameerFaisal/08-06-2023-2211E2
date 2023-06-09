class Statement{
    name
    balance=0
    constructor(name){
        this.name=name
    }
    income=[{
        description:"Salary",
        amount:10000
    },
    {
        description:"Profit",
        amount:2500
    }
]
expenses=[{
    description:"Clothes",
    amount:8500
}

]

viewBalance(){
    let result=0
    for(let i=0;i<this.income.length;i++){
        result+=this.income[i].amount
    }
    let totalExpense=0
    for(let j=0;j<this.expenses.length;j++){
totalExpense+=this.expenses[j].amount
    }
    document.getElementById("output").innerHTML=((this.balance+result)-totalExpense)
}
viewIncome(){
    let result=0
    for(let i=0;i<this.income.length;i++){
        result+=this.income[i].amount
    }
    document.getElementById("output").innerHTML=result

}
viewExpense(){
    let totalExpense=0
    for(let j=0;j<this.expenses.length;j++){
totalExpense+=this.expenses[j].amount
    }
    document.getElementById("output").innerHTML=totalExpense
}
addIncome(){
    let des=prompt("Enter source of income")
    let am=+prompt("Enter amount")
    this.income.push({
        description:des,
        amount:am
    })
    alert(`${des} added with Rs.${am} successfully`)
}
addExpense(){
    let des=prompt("Enter source of income")
    let am=+prompt("Enter amount")
    let result=0
    for(let i=0;i<this.income.length;i++){
        result+=this.income[i].amount
    }
    let totalExpense=0
    for(let j=0;j<this.expenses.length;j++){
totalExpense+=this.expenses[j].amount
    }
let total=(this.balance+result)-totalExpense
if(am>total){
    alert("You don't have enough balance")
}
else{
    this.expenses.push({
        description:des,
        amount:am
    })
    alert(`${des} added with Rs.${am} successfully`)
}
}
viewExpenseLog(){
    for(let i=0;i<this.expenses.length;i++){
        console.log(this.expenses[i].description+this.expenses[i].amount)
    }
}
}


const p1=new Statement()
