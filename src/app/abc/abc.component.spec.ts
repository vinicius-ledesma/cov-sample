import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AbcComponent } from "./abc.component";

describe("AbcComponent", () => {
  let component: AbcComponent;
  let fixture: ComponentFixture<AbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AbcComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get legacy info", () => {
    component.getLegacyInfo(true).subscribe((info: string) => {
      expect(info).toBe("Info");
    });
  });

  it("should get default info", () => {
    component.getLegacyInfo().subscribe((info: string) => {
      expect(info).toBe("defaultInfo");
    });
  });
});
