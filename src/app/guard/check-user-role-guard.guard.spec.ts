import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { checkUserRoleGuardGuard } from './check-user-role-guard.guard';

describe('checkUserRoleGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkUserRoleGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
