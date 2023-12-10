const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}

// Create a dog using the dogFactory
const myDog = dogFactory('Buddy', 'Golden Retriever', 25);

// Access properties
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
console.log(myDog.weight); // Output: 25

// Use methods
console.log(myDog.bark()); // Output: ruff! ruff!

// Modify properties
myDog.eatTooManyTreats();
console.log(myDog.weight); // Output: 26