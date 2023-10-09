import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ map } from 'rxjs/operators';
import { IProperty } from 'src/app/model/iproperty';
import { Observable } from 'rxjs/internal/Observable';
import { Property } from '../model/property';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class HousingService {


  baseUrl = environment.baseurl;


  constructor(private http:HttpClient) {  }

  getAllCities(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:5136/api/city')
  }

  getProperty(id:number){
    return this.http.get<Property>(this.baseUrl + '/property/detail/'+ id.toString());
  }

  getAllProperties(SellRent?:number): Observable<Property[]> {

    return this.http.get<Property[]>(this.baseUrl + '/property/list/' + SellRent.toString());
    // return this.http.get<any>('data/properties.json').pipe(
    //   map(data =>
    //     {
    //     const propertiesArray: Array<Property> = [];
    //     const localproperties = JSON.parse(localStorage.getItem('newProp'));
    //     if (localproperties){
    //       for (const id in localproperties)
    //       {
    //         if(SellRent){
    //         if (localproperties.hasOwnProperty(id) && localproperties[id].SellRent === SellRent)
    //           {
    //           propertiesArray.push(localproperties[id]);
    //           }
    //         } else{
    //           propertiesArray.push(localproperties[id]);
    //         }
    //       }
    //     }


    //     for (const id in data)
    //       {
    //         if(SellRent){
    //         if (data.hasOwnProperty(id) && data[id].SellRent === SellRent)
    //           {
    //           propertiesArray.push(data[id]);
    //           }
    //         } else{
    //           propertiesArray.push(data[id]);
    //           }
    //       }
    //     return propertiesArray;
    //     }
    //   )
    // )
  }
  addProperty(property : Property){
    let newProp = [property];

    // Add new property  in an array if newProp already exist in local storage
    if(localStorage.getItem('newProp')){
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID')+ 1));
      return +localStorage.getItem('PID');
    }else{
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

  getPropertyAge(dateofEstablishment: Date): string
  {
    const today = new Date();
    const estDate = new Date(dateofEstablishment);

    let age = today.getFullYear() - estDate.getFullYear();
    const m = today.getMonth() - estDate.getMonth();


    if(m<0 || (m===0 && today.getDate() < estDate.getDate())){
      age--;
    }

    if(today < estDate){
      return '0';
    }

    if(age ===0){
      return 'Less than a Year';
    }
    return age.toString();
  }
}


