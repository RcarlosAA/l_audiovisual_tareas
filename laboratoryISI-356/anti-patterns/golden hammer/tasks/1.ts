/*class TodoManager {
    private todos: string[] = [];

    add(todo: string) {
        this.todos.push(todo);
        this.save();
        this.render();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }

    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
    }

    private render() {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}

*/


class TodoManager {
    private todos: string[] = [];

    constructor() {
        this.load();
    }

    add(todo: string) {
        this.todos.push(todo);
        this.save();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
    }

    getAllTodos(): string[] {
        return this.todos;
    }

    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
        // Esto debería ser la única responsabilidad de este método
    }

    private load() {
        console.log("Loading todos from local storage...");
        // Código para cargar todos desde el almacenamiento local
        // Esto debería ser la única responsabilidad de este método
    }
}



