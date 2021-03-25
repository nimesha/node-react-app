import DomainError from './domainError.js';


class PhotoError extends DomainError{ 
    constructor(error, message) {
        super(error)
        this.error = error;
        this.message = message;
        
    }
}

export default PhotoError;