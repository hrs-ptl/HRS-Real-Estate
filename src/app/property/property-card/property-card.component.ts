import { Component, Input } from '@angular/core';
import { IpropertyBase } from 'src/app/model/ipropertybase';


@Component({
    selector: 'app-property-card',
    //template: `<h1> I am a card</h1>`,
    templateUrl: './property-card.component.html',
    //styles: ['h1{font-size: 100;}']
    styleUrls: ['./property-card.component.scss']
}
)
export class PropertyCardComponent{
@Input() property: IpropertyBase;
@Input() hideIcons: boolean;
}