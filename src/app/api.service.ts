import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Ammunition } from './models/ammunition';
import { Caliber } from './models/caliber';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public calibers: Caliber[] = [];
  public ammunitions: Ammunition[] = [];
  public $loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private readonly endpoint = 'https://api.tarkov.dev/graphql';

  constructor(private http: HttpClient) {
    this.fetchData()
      .subscribe(data => {
        for (const datum of data) {
          const caliberName = datum.caliber.substring('Caliber'.length);
          let caliber = this.calibers.find(caliber => caliber.name === caliberName);
          if (caliber === undefined) {
            caliber = {name: caliberName, ammunitions: []};
            this.calibers.push(caliber);
          }

          const item = datum.item;
          const ammunition = {
            name: item.shortName,
            caliber: caliber,
            imageUrl: item.image512pxLink,
          } as Ammunition;
          this.ammunitions.push(ammunition);
          caliber.ammunitions.push(ammunition);
        }
        this.$loaded.next(true)
      });
  }

  fetchData(): Observable<any> {
    const query = `
      {
        ammo {
          caliber
          ammoType
          item {
            name
            shortName
            image512pxLink
          }
        }
      }
    `;

    return this.http.post<any>(this.endpoint, JSON.stringify({query: query}))
      .pipe(map((value: any) => value.data.ammo));
  }
}
