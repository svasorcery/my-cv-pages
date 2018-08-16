import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

export enum RatingRate {
    poor = 1,
    fair = 2,
    average = 3,
    good = 4,
    excellent = 5
}

@Component({
    selector: 'rating-bar',
    template: `
        <div class="rating-bar">
            <rating-star *ngFor="let star of stars"
                [factor]="star"
                [ratingTotal]="ratingTotal"
                (click)="rate($event)">
            </rating-star>
        </div>
    `,
    styles: [`
        .rating-bar {
            color: goldenrod;
            margin: 10px;
        }
    `]
})

export class RatingBarComponent implements OnInit {
    @Input() ratingTotal: number;
    @Input() count: number;
    @Input() readonly: boolean;
    @Output('rate') onRate: EventEmitter<RatingRate>;

    stars: number[] = [];

    constructor() {
        this.onRate = new EventEmitter();
    }

    ngOnInit() {
        for (let star = 1; star <= this.count; star++) {
            this.stars.push(star);
        }
    }

    rate(rating: RatingRate) {
        if (!rating) { return; }
        this.onRate.emit(rating);
    }
}


@Component({
    selector: 'rating-star',
    template: `
        <i (click)="click()"
            class="star fa"
            [class.fa-circle-o]="fill==='none'"
            [class.fa-circle-half-o]="fill==='half'"
            [class.fa-circle]="fill==='full'">
        </i>
    `,
    styles: [`
        .star {
            cursor: pointer;
            margin: 1px;
        }
    `]
})
export class RatingStarComponent implements OnChanges {
    @Input() factor: number;
    @Input() ratingTotal: number;
    @Output('click') onClick: EventEmitter<number>;

    fill: 'none' | 'half' | 'full';

    constructor() {
        this.onClick = new EventEmitter();
    }

    ngOnChanges() {
        this.fill = this.ratingTotal >= this.factor ?
            'full' : this.factor - this.ratingTotal < 1 ?
                'half' : 'none';
    }

    click() {
        if (!this.factor) { return; }
        this.onClick.emit(this.factor);
    }
}
