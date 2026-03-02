import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctordirComponent } from './doctordir.component';

describe('DoctordirComponent', () => {
  let component: DoctordirComponent;
  let fixture: ComponentFixture<DoctordirComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DoctordirComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctordirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "doctordir works!" in the template', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('doctordir works!');
  });

  it('ngOnInit should be callable', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
