/*class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    constructor() {
        this.deliveryMethod = new BikeDelivery();
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}
*/


class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    constructor(deliveryMethod: BikeDelivery) {
        this.deliveryMethod = deliveryMethod;
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}

// Uso:
const bikeDelivery = new BikeDelivery();
const packageService = new PackageService(bikeDelivery);

// Luego, puedes llamar a sendPackage en packageService
packageService.sendPackage("123456", "123 Main St");


