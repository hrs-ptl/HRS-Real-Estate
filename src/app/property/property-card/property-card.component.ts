import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-property-card',
    //template: `<h1> I am a card</h1>`,
    templateUrl: './property-card.component.html',
    //styles: ['h1{font-size: 100;}']
    styleUrls: ['./property-card.component.scss']
}
)
export class PropertyCardComponent{
@Input() property: any 
@Input() hideIcons: boolean
}