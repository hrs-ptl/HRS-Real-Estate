import { IpropertyBase } from "./ipropertybase";

export class Property implements IpropertyBase{
    [x: string]: any;
    Id: number;
    SellRent: number;
    Name: string;
    PType: string;
    FType: string;
    Price: number;
    BHK: number;
    BuiltArea: number;
    CarpetArea?: number;
    RTM: string;
    City: number;
    AOP?: string;
    Maintenance?: string;
    Address: string;
    Address2?: string;
    Image?: string;
    FloorNo?: string;
    TotalFloor?: string;
    MainEntrance?: string;
    Security?: number;
    Gated?: boolean;
    Possession?: string;
    Description?: string;
    PostedOn: string;
    PostedBy: number;
}