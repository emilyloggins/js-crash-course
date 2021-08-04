import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Person } from '../shared/person.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  mockData = [
    {"id":1,"first_name":"Ginevra","last_name":"Joust","email":"gjoust0@google.fr","gender":"Female","ip_address":"66.0.38.213"} as unknown as Person,
    {"id":2,"first_name":"Tobiah","last_name":"Buzzing","email":"tbuzzing1@google.pl","gender":"Male","ip_address":"166.127.27.94"} as unknown as Person,
    {"id":3,"first_name":"Simone","last_name":"Garioch","email":"sgarioch2@nymag.com","gender":"Male","ip_address":"166.45.8.115"} as unknown as Person,
    {"id":4,"first_name":"Prent","last_name":"Borgnol","email":"pborgnol3@a8.net","gender":"Genderqueer","ip_address":"148.177.49.201"} as unknown as Person,
    {"id":5,"first_name":"Patrick","last_name":"Pentycross","email":"ppentycross4@jigsy.com","gender":"Genderqueer","ip_address":"14.125.245.175"} as unknown as Person,
    {"id":6,"first_name":"Reynard","last_name":"Fleg","email":"rfleg5@yahoo.com","gender":"Bigender","ip_address":"124.66.240.156"} as unknown as Person,
    {"id":7,"first_name":"Jenda","last_name":"Papachristophorou","email":"jpapachristophorou6@nsw.gov.au","gender":"Genderfluid","ip_address":"4.209.128.83"} as unknown as Person,
    {"id":8,"first_name":"Dene","last_name":"MacKey","email":"dmackey7@sina.com.cn","gender":"Non-binary","ip_address":"144.150.117.95"} as unknown as Person,
    {"id":9,"first_name":"Maressa","last_name":"Skyme","email":"mskyme8@cam.ac.uk","gender":"Agender","ip_address":"179.34.44.66"} as unknown as Person,
    {"id":10,"first_name":"Arlene","last_name":"Hame","email":"ahame9@sun.com","gender":"Female","ip_address":"221.249.22.82"} as unknown as Person,
    {"id":11,"first_name":"Jeremie","last_name":"Vazquez","email":"jvazqueza@marriott.com","gender":"Polygender","ip_address":"203.112.223.252"} as unknown as Person,
    {"id":12,"first_name":"Lorrayne","last_name":"Schubbert","email":"lschubbertb@google.it","gender":"Genderqueer","ip_address":"143.114.115.19"} as unknown as Person,
    {"id":13,"first_name":"Vita","last_name":"Kinnar","email":"vkinnarc@xrea.com","gender":"Genderqueer","ip_address":"146.51.110.161"} as unknown as Person,
    {"id":14,"first_name":"August","last_name":"Lumley","email":"alumleyd@yellowbook.com","gender":"Non-binary","ip_address":"150.105.28.133"} as unknown as Person,
    {"id":15,"first_name":"Kacy","last_name":"Snap","email":"ksnape@github.com","gender":"Polygender","ip_address":"189.100.130.61"} as unknown as Person 
  ]

  constructor() { }
  
  getData(): Observable<Person[]> {
    return of(this.mockData);
  }

}
