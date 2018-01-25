import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-map',
    template: `<div class='title page'>Maps</div>
                <div style="padding:15px 25px 0px;" *ngFor="let x of parsedata; let i = index">
                    <div [ngClass]="{'classy': myclass, 'classiest': mtclassy1}" (click)='boothclick(i)'>
                        {{x.id}} - {{x.name}} - {{x.detail}}
                    </div>
                </div>
                <div style='padding:25px;'>{{mydata}}</div>
     
    `
})
export class MapComponent implements OnInit {

    constructor(private _http: Http) {

    }
    ngOnInit() {
        this.myget();
        setInterval(() => {
            this.myget();
        }, 5000);

    }
    myclass = false;
    mtclassy1 = true;
    myjson = {}
    mydata;
    arrayfor;
    parsedata;
    boothclick(booth) {
        console.log('clicked: ' + booth);
    }
    myget() {
        //getHtml = this._http.get('https://d3800bkra8s324.cloudfront.net/multieventapp/interactive.html')
        const getHtml = this._http.get('http://beyondlogical.com/api/Sony')
            .subscribe(data => {
                this.mydata = data['_body'];
                // json file below
                const checkmydata = this.mydata.replace("GET: ", "");
                this.parsedata = JSON.parse(checkmydata);
                this.parsedata.forEach(element => {
                    //add map item for each element

                });
            }, error => {
                console.error(error);
            }, () => {
                // console.log('complete')
            }
            );
    }

}