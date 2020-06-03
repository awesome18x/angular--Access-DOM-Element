import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'auth-remember',
    template: `
    <label>
        <input type="checkbox" (change)="onCheched($event.target.checked)">
        Remember me
    </label>
`,
})
export class AuthRememberComponent implements OnInit {
    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit(): void { }

    onCheched(value: boolean) {
        this.checked.emit(value);
    }
}
