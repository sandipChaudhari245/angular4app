import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourcesComponent } from './cources.component';
import { CourcesService } from '../cources.service';

describe('CourcesComponent', () => {
  let component: CourcesComponent;
  let fixture: ComponentFixture<CourcesComponent>;
  let mockCourcesService: jasmine.SpyObj<CourcesService>;

  beforeEach(async(() => {
    mockCourcesService = jasmine.createSpyObj('CourcesService', ['getCources']);
    mockCourcesService.getCources.and.returnValue(['Cources1', 'Cources2', 'Cources3']);

    TestBed.configureTestingModule({
      declarations: [CourcesComponent],
      providers: [
        { provide: CourcesService, useValue: mockCourcesService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default title of "List of cources"', () => {
    expect(component.title).toBe('List of cources');
  });

  it('should call getCources on the service during construction', () => {
    expect(mockCourcesService.getCources).toHaveBeenCalled();
  });

  it('should populate the cources array from the service', () => {
    expect(component.cources).toEqual(['Cources1', 'Cources2', 'Cources3']);
  });

  it('should render the title in a paragraph', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('List of cources');
  });

  it('should render a list of courses in the template', () => {
    const compiled = fixture.debugElement.nativeElement;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(3);
  });

  it('ngOnInit should be callable', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
