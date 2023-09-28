import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ map } from 'rxjs/operators';
import { IProperty } from 'src/app/model/iproperty';
import { Observable } from 'rxjs/internal/Observable';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) {  }

  getAllCities(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:5136/api/city')
  }

  getProperty(id:number){
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        // throw new Error('Some Error');
        return propertiesArray.find(p => p.Id === id)
      })
    )
  }

  getAllProperties(SellRent?:number): Observable<Property[]> {
    return this.http.get<any>('data/properties.json').pipe(
      map(data =>
        {
        const propertiesArray: Array<Property> = [];
        const localproperties = JSON.parse(localStorage.getItem('newProp'));
        if (localproperties){
          for (const id in localproperties)
          {
            if(SellRent){
            if (localproperties.hasOwnProperty(id) && localproperties[id].SellRent === SellRent)
              {
              propertiesArray.push(localproperties[id]);
              }
            } else{
              propertiesArray.push(localproperties[id]);
            }
          }
        }


        for (const id in data)
          {
            if(SellRent){
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent)
              {
              propertiesArray.push(data[id]);
              }
            } else{
              propertiesArray.push(data[id]);
              }
          }
        return propertiesArray;
        }
      )
    )
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
}


