import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { Ammunition } from './models/ammunition';
import { Caliber, caliberNiceNames } from './models/caliber';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public calibers: Caliber[] = [];
  public ammunitions: Ammunition[] = [];
  public $loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private readonly endpoint = 'https://api.tarkov.dev/graphql';
  private readonly localApiDataKey = 'local_api_data';
  private readonly cacheValidity = 24 * 60 * 60;

  constructor(private http: HttpClient) {
    this.fetchData()
      .subscribe(data => {
        for (const datum of data) {
          let caliberName = datum.caliber.substring('Caliber'.length);
          const caliberNiceName = caliberNiceNames.find(niceName => niceName.name === caliberName)
          if (caliberNiceName) {
            caliberName = caliberNiceName.niceName;
          }

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

  private fetchData(): Observable<any> {
    const localData = this.getLocalData();
    if (localData) {
      return of(localData);
    }

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
      .pipe(
        map((value: any) => value.data.ammo),
        tap(data => {
          const json = {
            lastUpdate: Math.floor(Date.now() / 1000),
            data: data,
          };
          localStorage.setItem(this.localApiDataKey, JSON.stringify(json));
        }),
      );
  }


  private getLocalData(): {} | null {
    const localData = localStorage.getItem(this.localApiDataKey);
    if (localData) {
      const parsedLocalData = JSON.parse(localData);
      const limit = Math.floor(Date.now() / 1000) - this.cacheValidity;

      if (!parsedLocalData.lastUpdate || !parsedLocalData.data) {
        return null;
      }

      if (parsedLocalData.lastUpdate < limit) {
        return null;
      }

      return parsedLocalData.data;
    }

    return null;
  }
}
