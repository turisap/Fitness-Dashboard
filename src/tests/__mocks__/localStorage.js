/**
 * Created by HP on 07-Jan-18.
 */
class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        if(key === 'token') {
            return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTUxMzAwOWM5OWNiMDExZTg3OWU5ZGQiLCJpYXQiOjE1MTUyNzAxNTM2NzJ9.AfATHTfPvE1448_14bI2UO2oiGQjyOpOZ7b8AOZDHSE";
        }
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
};

global.localStorage = new LocalStorageMock;