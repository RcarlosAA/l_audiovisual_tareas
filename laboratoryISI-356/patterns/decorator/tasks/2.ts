/*class Computer {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

const myComputer = new Computer();
myComputer.addComponent('16GB RAM');
myComputer.addComponent('1TB SSD');
myComputer.addComponent('Intel i7 Processor');
myComputer.showConfiguration();

*/


interface ComputerDecorator {
    showConfiguration(): void;
}

class BasicComputer implements ComputerDecorator {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

class UpgradedComputer implements ComputerDecorator {
    private computer: ComputerDecorator;
    private upgrade: string;

    constructor(computer: ComputerDecorator, upgrade: string) {
        this.computer = computer;
        this.upgrade = upgrade;
    }

    showConfiguration() {
        this.computer.showConfiguration();
        console.log(`It is upgraded with: ${this.upgrade}`);
    }
}

// Uso del patrón decorador
const basicComputer = new BasicComputer();
basicComputer.addComponent('16GB RAM');
basicComputer.addComponent('1TB SSD');

const upgradedComputer = new UpgradedComputer(basicComputer, 'Intel i7 Processor');
upgradedComputer.showConfiguration();
