import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    rating: number = 3;

    public rate(rating: number) {
        if (typeof(rating) !== 'number') { return; }
        this.rating = rating;
    }
}
