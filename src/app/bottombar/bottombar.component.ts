import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bottombar',
    template: `<div id="btmbar">
                <div id='section'>
                    <div id='one' class='border' (click)='openhome()'> Home </div>
                    <div id='two' class='border' (click)='openmap()'> Map </div>
                </div>
               </div>`,
               styleUrls:['./bottombar.component.css']
})
export class BottombarComponent {

    constructor(
        private _router: Router
    ) { }
    openmap() {
        this._router.navigate(['/map']);
    }
    openhome() {
        this._router.navigate(['/home']);

    }
}