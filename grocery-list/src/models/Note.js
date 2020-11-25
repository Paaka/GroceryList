class Note{
    constructor(title, description){
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.isSelected = false;
    }
}

export default Note;