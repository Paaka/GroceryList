class Note{
    constructor(title, description, color){
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.color = color;
        this.isSelected = false;
    }
}

export default Note;