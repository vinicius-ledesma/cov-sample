import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AnotherCommunicationService {
  constructor() {}

  get() {
    return of("Another info");
  }
}
