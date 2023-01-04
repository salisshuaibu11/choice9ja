import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProviderComponent } from './auth-provider.component';

describe('AuthProviderComponent', () => {
  let component: AuthProviderComponent;
  let fixture: ComponentFixture<AuthProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthProviderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
