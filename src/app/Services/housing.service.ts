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

  getAllProperties(SellRent:number): Observable<IProperty[]> {
    return this.http.get<any>('data/properties.json').pipe(
      map(data =>
        {
        const propertiesArray: Array<IProperty> = [];
        const localproperties = JSON.parse(localStorage.getItem('newProp'));
        if (localproperties){
          for (const id in localproperties)
          {
            if (localproperties.hasOwnProperty(id) && localproperties[id].SellRent === SellRent)
              {
              propertiesArray.push(localproperties[id]);
              }
          }
        }


        for (const id in data)
          {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent)
              {
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


