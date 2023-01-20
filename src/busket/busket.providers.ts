import { Busket } from "./entities/busket.entity";

export const BusketsProviders = [
    {
        provide: 'BUSKETS_REPOSITORY',
        useValue: Busket
    }
];