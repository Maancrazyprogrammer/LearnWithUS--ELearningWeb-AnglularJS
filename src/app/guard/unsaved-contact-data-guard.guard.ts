import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { ContactComponent } from '../g/contact/contact.component';

export const unsavedContactDataGuardGuard: CanDeactivateFn<ContactComponent> = (
  component:ContactComponent, 
  currentRoute:ActivatedRouteSnapshot, 
  currentState:RouterStateSnapshot, 
  nextState:RouterStateSnapshot
) => {
  return component.checkUnSavedData? component.checkUnSavedData() :true;
};
