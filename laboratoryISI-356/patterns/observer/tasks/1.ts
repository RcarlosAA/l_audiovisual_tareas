/*class Journalist {
    name: string;
    articles: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
    }
}

class Reader {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    checkForNewArticles(journalist: Journalist) {
        const latestArticle = journalist.articles[journalist.articles.length - 1];
        console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.publishArticle("Los beneficios de la programación");
readerB.checkForNewArticles(journalistA);

*/


interface Observer {
    update(article: string): void;
}

class Publisher {
    private observers: Observer[] = [];
    private articles: string[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ha publicado un nuevo artículo: ${article}`);
        this.notifyObservers(article);
    }

    private notifyObservers(article: string) {
        for (const observer of this.observers) {
            observer.update(article);
        }
    }
}

class Reader implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(article: string) {
        console.log(`${this.name} ha leído el artículo: ${article}`);
    }
}

const journalistA = new Publisher(); // Cambio de Journalist a Publisher
const readerB = new Reader('Ana');

journalistA.addObserver(readerB); // El lector se registra como observador

journalistA.publishArticle("Los beneficios de la programación");
