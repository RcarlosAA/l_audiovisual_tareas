/*class AirportSystem {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}


*/

class AirportSystem {
    private flights: Flight[] = [];
    private passengers: Passenger[] = [];
    private crews: Crew[] = [];
    private planesMaintenance: PlaneMaintenance[] = [];
    private financialRecords: FinancialRecord[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: Flight) {
        this.flights.push(flight);
    }

    getFlights(): Flight[] {
        return this.flights;
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    getPassengers(): Passenger[] {
        return this.passengers;
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: Crew, flightID: string) {
        this.crews.push({ ...crew, flightID });
    }

    getCrews(): Crew[] {
        return this.crews;
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: PlaneMaintenance) {
        this.planesMaintenance.push({ planeID, ...maintenance });
    }

    getMaintenanceRecords(): PlaneMaintenance[] {
        return this.planesMaintenance;
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: FinancialRecord) {
        this.financialRecords.push(transaction);
    }

    getFinancialRecords(): FinancialRecord[] {
        return this.financialRecords;
    }
}

class Flight {
    constructor(public flightID: string, public destination: string, public departureTime: Date) {}
}

class Passenger {
    constructor(public passengerID: string, public name: string) {}
}

class Crew {
    constructor(public crewID: string, public name: string) {}
}

class PlaneMaintenance {
    constructor(public planeID: string, public maintenanceDetails: string) {}
}

class FinancialRecord {
    constructor(public transactionID: string, public amount: number, public description: string) {}
}
