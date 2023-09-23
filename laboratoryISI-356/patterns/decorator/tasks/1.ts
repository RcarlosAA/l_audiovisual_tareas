/*class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    applyDesign(design: string) {
        this.design += design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

const myRoom = new Room('blue');
myRoom.applyDesign('stripe');
myRoom.showRoom();

*/


interface RoomDecorator {
    showRoom(): void;
}

class BasicRoom implements RoomDecorator {
    paint: string;

    constructor(paint: string) {
        this.paint = paint;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint}.`);
    }
}

class DecoratedRoom implements RoomDecorator {
    private room: RoomDecorator;
    private design: string;

    constructor(room: RoomDecorator, design: string) {
        this.room = room;
        this.design = design;
    }

    showRoom() {
        this.room.showRoom();
        console.log(`It has a ${this.design} design.`);
    }
}

// Uso del patrón decorador
const basicRoom = new BasicRoom('blue');
const decoratedRoom = new DecoratedRoom(basicRoom, 'stripe');
decoratedRoom.showRoom();




