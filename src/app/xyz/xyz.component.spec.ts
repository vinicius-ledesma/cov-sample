import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";

import { XyzComponent } from "./xyz.component";

describe("XyzComponent", () => {
  let component: XyzComponent;
  let fixture: ComponentFixture<XyzComponent>;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XyzComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
    httpClient = TestBed.get(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get info from another service", () => {
    const spy = spyOn(component, "useLocalHttp").and.returnValue(false);
    component.getMultSourceInfo().subscribe((data) => {
      expect(data).toBe("Another info");
    });
  });

  it("should call http service", () => {
    const spyHttp = spyOn(httpClient, "get");
    component.getMultSourceInfo();
    expect(spyHttp).toHaveBeenCalled();
  });
});
