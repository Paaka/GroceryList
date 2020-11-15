class Note{
    constructor(title, description){
        this.id = Date.now();
        this.title = title;
        this.description = description;
    }
}

export default Note;