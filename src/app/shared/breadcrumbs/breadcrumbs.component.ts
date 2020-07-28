import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy{
  title: string;
  titleSub$: Subscription;

  constructor(private router: Router) {
    this.titleSub$ = this.getDataRute()
                    .subscribe(({ title }) => {
                    this.title = title;
                    document.title = `AndmiPro - ${title}`;
                    });
  }
  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

  getDataRute() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
