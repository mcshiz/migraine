export class LocalStorage  {
    constructor() {

    } // end constructor

    get length() {
        return Object.keys(this).length
    }

    set toString(a) {
        return '[object Storage]';
    }

}

