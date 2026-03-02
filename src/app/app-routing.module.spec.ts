import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourcesComponent } from './cources/cources.component';
import { DoctordirComponent } from './doctordir/doctordir.component';
import { UserappComponent } from './userapp/userapp.component';
import { CourcesService } from './cources.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { convertToParamMap } from '@angular/router';

describe('AppRoutingModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        CourcesComponent,
        DoctordirComponent,
        UserappComponent
      ],
      providers: [
        CourcesService,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({})) }
        }
      ]
    }).compileComponents();
  }));

  it('should create the routing module', () => {
    const routingModule = TestBed.inject(RouterTestingModule);
    expect(routingModule).toBeDefined();
  });
});
