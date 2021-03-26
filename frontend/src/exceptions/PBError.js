export default class PBError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}