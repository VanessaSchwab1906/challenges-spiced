export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  const filteredPeople = people.filter((person) => person.age === age);
  const fullNamesWithAges = filteredPeople.map(
    (person) => `${person.firstName} ${person.lastName} (${person.age})`
  );
  return fullNamesWithAges;
}

export function getPeopleNamesOlderThan(people, age) {
  const olderPeople = people.filter((person) => person.age > age);
  const fullNamesWithAges = olderPeople.map(
    (person) => `${person.firstName} ${person.lastName})`
  );
  return fullNamesWithAges;
}

export function getPeopleByLastName(people, lastName) {
  const filteredPeople = people.filter(
    (person) => person.lastName === lastName
  );
  const fullNames = filteredPeople.map(
    (person) => `${person.firstName} ${person.lastName}`
  );
  return fullNames;
}

// Array.prototype.find
export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  const nameWithAge = people.map((person) => ({
    lastName: person.lastName,
    age: person.age,
  }));
  const namesSortedByAge = nameWithAge.sort((a, b) => a.age - b.age);
  return namesSortedByAge;
}
