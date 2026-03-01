import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a nav element with sidebar class', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav.sidebar')).toBeTruthy();
  });

  it('should render navigation links', () => {
    const compiled = fixture.debugElement.nativeElement;
    const links = compiled.querySelectorAll('a.list-group-item');
    expect(links.length).toBe(3);
  });

  it('should have a link to doctor route', () => {
    const compiled = fixture.debugElement.nativeElement;
    const links = compiled.querySelectorAll('a.list-group-item');
    const doctorLink = Array.from(links).find((l: any) =>
      l.textContent.trim() === 'doctor'
    );
    expect(doctorLink).toBeTruthy();
  });

  it('ngOnInit should be callable', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
