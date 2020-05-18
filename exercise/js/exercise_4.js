class StringBuilder {
    constructor(val) {
        this.$value = val;
    }

    get value() {
        return this.$value;
    }

    append(str) {
        this.$value += str;
    }

    prepend(str) {
        this.$value = str + this.$value;
    }

    pad(str) {
        this.$value = str + this.$value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
