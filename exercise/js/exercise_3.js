class Storage {
    constructor(...obj) {
        this.items = obj;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        if (this.items.includes(item)) {
            return `The storage already has ${item}`;
        }
        this.items.push(item);
    }

    removeItem(item) {
        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

console.log(storage.addItem('Дроид')); // The storage already has Дроид
