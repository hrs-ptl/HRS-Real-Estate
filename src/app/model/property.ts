import { IpropertyBase } from "./ipropertybase";

export class Property implements IpropertyBase{
    id: number;
    sellRent: number;
    name: string;
    propertyType: string;
    furnishingType: string;
    price: number;
    bhk: number;
    builtArea: number;
    carpetArea?: number;
    readyToMove: string;
    city: string;
    age: string;
    maintenance?: string;
    address: string;
    address2?: string;
    image?: string;
    floorNo?: string;
    totalFloors?: string;
    mainEntrance?: string;
    security?: number;
    gated?: boolean;
    estPossessionOn?: Date;
    description?: string;
}
