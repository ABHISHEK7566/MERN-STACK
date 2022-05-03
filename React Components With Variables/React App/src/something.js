const getUser = (firstname, lastname, title, skills) => {
    return `${firstname} ${lastname}, A ${title} Developer .He Knows ${skills}`
  }
  
  const skills = ['HTML','CSS','JAVASCRIPT'];
  console.log(getUser("Abhishek","Yadav",'Frontend',skills));
  // 'Abhishek Yadav, a Frontend Developer. He knowns HTML,CSS,JAVASCRIPT
  
  class Parent {
    constructor(firstname, lastname, country, title){
      this.firstname = firstname
      this.lastname  = lastname
      this.country   = country
      this.title     = title
  
    }
    getInfo(){
      return `${this.firstname} ${this.lastname}, A ${this.title} Developer .He Is From ${this.country}`
    }
  }
  
  const p1 = new Parent('Abhsihek', 'Yadav', 'India', 'PUBG Player');
  
  class Child extends Parent {
    constructor(firstname, lastname, country, title, skills){
      super(firstname, lastname, country, title)
      this.skills = skills
    }
    getChildInfo(){
      return `${this.firstname} ${this.lastname}, A ${this.title} Developer .He Is From ${this.country}. He Knows ${this.skills}`
    }
  }
  
  const c1 = new Child('Abhishek', 'Yadav', 'India', 'Developer', 'ReactJs')