import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserappComponent } from './userapp.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { convertToParamMap } from '@angular/router';

describe('UserappComponent', () => {
  let component: UserappComponent;
  let fixture: ComponentFixture<UserappComponent>;

  const mockActivatedRoute = {
    paramMap: of(convertToParamMap({ username: 'testuser' }))
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserappComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "userapp works!" in the template', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('userapp works!');
  });

  it('should subscribe to route paramMap on init', () => {
    spyOn(console, 'log');
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });
});
