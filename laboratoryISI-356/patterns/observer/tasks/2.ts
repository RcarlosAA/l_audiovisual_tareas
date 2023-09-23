/*class Auction {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

const auctionItem = new Auction("Cuadro famoso");
auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);

*/




// Interfaz para los observadores (postores)
interface Observer {
    update(bidderName: string, amount: number): void;
}

// Clase que representa el sujeto observado (la subasta)
class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(bidderName: string, amount: number) {
        for (const observer of this.observers) {
            observer.update(bidderName, amount);
        }
    }
}

// Clase que representa la subasta
class Auction extends Subject {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        super();
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
            this.notifyObservers(bidderName, amount); // Notificar a los observadores
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

// Clase que representa a los postores (observadores)
class Bidder implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(bidderName: string, amount: number) {
        if (bidderName === this.name) {
            console.log(`¡Soy ${this.name} y soy el máximo postor con una oferta de ${amount}!`);
        } else {
            console.log(`${this.name} ha realizado una oferta de ${amount}.`);
        }
    }
}

// Uso del patrón Observer
const auctionItem = new Auction("Cuadro famoso");
const bidderCarlos = new Bidder("Carlos");
const bidderAna = new Bidder("Ana");

auctionItem.addObserver(bidderCarlos);
auctionItem.addObserver(bidderAna);

auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);
