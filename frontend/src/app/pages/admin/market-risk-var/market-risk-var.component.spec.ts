import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketRiskVarComponent } from './market-risk-var.component';

describe('MarketRiskVarComponent', () => {
  let component: MarketRiskVarComponent;
  let fixture: ComponentFixture<MarketRiskVarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketRiskVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketRiskVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
