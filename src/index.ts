let person;
// eslint-disable-next-line prefer-const
person = 'Rory';

const buildPerson = (person: string) => {
	return `Your person is ${person}`;
};

console.log(buildPerson(person));
