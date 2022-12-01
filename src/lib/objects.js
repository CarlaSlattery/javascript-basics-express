const createPerson = (name, age) => {
  const personObject = { name, age };
  return personObject;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const allAges = people.map(user => user.age);
  return allAges;
};

const findByName = (name, people) => {
  const person = people.find(obj => obj.name === name);
  return person;
};

const findHondas = cars => {
  const hondas = cars.filter(object => object.manufacturer === 'Honda');
  return hondas;
};

const averageAge = people => {
  let totalAges = 0;
  for (let i = 0; i < people.length; i++) {
    totalAges += people[i].age;
  }
  return totalAges / people;
};

const createTalkingPerson = (name, age) => {
  const person = {name: name, age: age,}

   person.saysHello = function(newFriend) {
      `Hi ${newFriend}, my name is ${name} and I am ${age}!`;
    },
  }

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
