import { Component } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './to-live-to-pay-app.component.html',
  styleUrls: ['./to-live-to-pay-app.component.css']
})
export class ToLiveToPayApp {
  title = environment.appName;
}
