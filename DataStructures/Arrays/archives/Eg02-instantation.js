class Emp {
  constructor(name, type) {
    console.log('Emp Class', this);
    this.name = name;
    this.type = type;
  }
  introduce = () => console.log(`Hi, ${this.name} - ${this.type}`);
}

class Dev extends Emp {
  constructor(name, type) {
    super(name, type)
    console.log('Dev Class', this);
  }
  getInfo = () => console.log(`${this.name} - 0.2`);
}

const Dev1 = new Dev('khang', 'fe');

// Emp Class Dev { introduce: [λ: introduce] }

/*
Dev Class Dev {
  introduce: [λ: introduce], 
  name: 'khang', 
  type: 'fe', 
  getInfo: [λ: getInfo]
} 
*/

Dev1.getInfo();   // khang - 0.2 
Dev1.introduce(); // Hi, khang - fe 