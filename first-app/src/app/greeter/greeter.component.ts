import { Component } from '@angular/core';
@Component({
    selector: 'app-greeter',
    templateUrl: 'greeter.component.html'
})
export class GreeterComponent {
    userName: String = 'ABCD';
    greetMessage: String = 'Hello';

    onGreetClick() {
        this.userName = 'StormRaider2495',
        this.greetMessage = 'Welcome';
    }

    onTextChange(value) {
        this.userName = value;
        this.greetMessage = `Welcome, ${value}`;
    }

}
