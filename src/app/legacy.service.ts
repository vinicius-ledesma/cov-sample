import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LegacyService {
  constructor() {}
  legacyInfo() {
    return of("Info");
  }
}
