import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { SignupComponent } from '../g/signup/signup.component';

export const unsavedDataGuardGuard: CanDeactivateFn<SignupComponent> = (
  component:SignupComponent,
  currentState:ActivatedRouteSnapshot,
  currentRoute:RouterStateSnapshot,
  nextState: RouterStateSnapshot,
) => {
  return component.checkUnsavedPageState? component.checkUnsavedPageState() : true;
};
