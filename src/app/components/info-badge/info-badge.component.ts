import { Component, Input } from '@angular/core';
import { OverallLeft } from '../../models/overallInfo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'info-badge',
  templateUrl: './info-badge.component.html',
  styleUrls: ['./info-badge.component.css']
})
export class InfoBadgeComponent<Type> {
  @Input() name = 'Default Badge Name';
  @Input() value$ = new Observable<OverallLeft<Type>>();

  constructor() { }

}
