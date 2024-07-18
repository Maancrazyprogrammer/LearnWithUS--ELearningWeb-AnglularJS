import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

export const checkUserRoleGuardGuard: CanMatchFn = (
  route:Route, segments:UrlSegment[]) => {
  const role=inject(AuthServiceService).getUserRole();
  const router = inject(Router);
  // get data from parameters that is assiged in the routes.ts file or htmlfile of admin dashboard
  // const segmentRole=segments[0].parameters?.['role'];
  if(role=='admin'){
    return true;
  }else{
  router.navigate(['/login']); 
  return false;
}
};
