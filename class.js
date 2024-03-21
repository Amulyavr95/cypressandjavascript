class person{

    age=40

    get location(){
        return "banglore"
    }
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }

    fullname(){
     console.log(this.fname+this.lname)
    }
}

let per=new person('hello','world')
console.log(per.age)
console.log(per.location)
console.log(per.fullname())
