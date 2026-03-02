import { TestBed } from '@angular/core/testing';
import { CourcesService } from './cources.service';

describe('CourcesService', () => {
  let service: CourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourcesService]
    });
    service = TestBed.inject(CourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of courses', () => {
    const cources = service.getCources();
    expect(cources).toBeTruthy();
    expect(Array.isArray(cources)).toBe(true);
    expect(cources.length).toBeGreaterThan(0);
  });

  it('should return three courses', () => {
    const cources = service.getCources();
    expect(cources.length).toBe(3);
  });

  it('should return courses with expected values', () => {
    const cources = service.getCources();
    expect(cources[0]).toBe('Cources1');
    expect(cources[1]).toBe('Cources1');
    expect(cources[2]).toBe('Cources1');
  });
});
