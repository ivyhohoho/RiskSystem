import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemVarComponent } from './system-var.component';

describe('SystemVarComponent', () => {
  let component: SystemVarComponent;
  let fixture: ComponentFixture<SystemVarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
