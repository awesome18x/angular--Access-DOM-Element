import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'auth-message',
    template: `
    <div>You will be logged in {{ day }} days.</div>
`,
})
export class AuthMessageComponent implements OnInit {
    day: number = 7;
    constructor() { }

    ngOnInit(): void { }
}
