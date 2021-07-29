import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { LegacyService } from "../legacy.service";
import { of, Observable } from "rxjs";

@Component({
  selector: "app-abc",
  templateUrl: "./abc.component.html",
  styleUrls: ["./abc.component.css"],
})
export class AbcComponent implements OnInit {
  constructor(private legacyService: LegacyService) {}

  ngOnInit() {}

  getLegacyInfo(production = environment.production): Observable<string> {
    if (production) {
      return this.legacyService.legacyInfo();
    } else {
      return of("defaultInfo");
    }
  }
}
