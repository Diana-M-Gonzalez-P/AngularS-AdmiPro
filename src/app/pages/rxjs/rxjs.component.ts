import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSusbs: Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //       retry(2)
    //     ).subscribe(
    //     valor => console.log('Subs:', valor),
    //     error => console.warn( 'Error', error),
    //     () => console.info('OBS terminado')
    // )
  
    this.intervalSusbs = this.retornaIntervalo()
        .subscribe( (valor) => console.log(valor) )
    
   }
  ngOnDestroy(): void {
    this.intervalSusbs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaIntervalo(): Observable<number>{

    return interval(100)
          .pipe(
            // take(10),
            map( valor => valor+1),
            filter( valor => (valor % 2 === 0) ? true : false ),
          );

  }

  retornaObservable():  Observable<number> {
    
    let i = -1;
    return new Observable<number>( observer => {
      
      const intervalo = setInterval(() => {
        
        i++;
        observer.next(i) 

        if( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if( i === 2) {
          observer.error('I llego al 2');
        }

      }, 1000)
    });

  }

}
