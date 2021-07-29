import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { AnotherCommunicationService } from "../another-communication.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-xyz",
  templateUrl: "./xyz.component.html",
  styleUrls: ["./xyz.component.css"],
})
export class XyzComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private anotherCommunicationService: AnotherCommunicationService
  ) {}

  ngOnInit() {}

  getMultSourceInfo(): Observable<string> {
    if (this.useLocalHttp()) {
      return this.http.get<string>("sample/info");
    } else {
      return this.anotherCommunicationService.get();
    }
  }

  useLocalHttp(): boolean {
    return environment.localHttp;
  }
}
