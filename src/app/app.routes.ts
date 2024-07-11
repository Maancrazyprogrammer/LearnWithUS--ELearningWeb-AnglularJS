import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './g/page-not-found/page-not-found.component';
import { HomeComponent } from './g/home/home.component';
import { CoursePriceComponent } from './g/course-price/course-price.component';
import { LoginComponent } from './g/login/login.component';
import { ContactComponent } from './g/contact/contact.component';
import { SignupComponent } from './g/signup/signup.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { MainComponent } from './g/main/main.component';
import { CoursesComponent } from './user/courses/courses.component';
import { EmailVerificationComponent } from './g/email-verification/email-verification.component';
import { authGuardGuard } from './guard/auth-guard.guard';


export const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: '',
        redirectTo:'/home',
        pathMatch:'full',
        
      },
      {
        path: 'home',
        component:HomeComponent,
        title:'Learn With US!'
      },
      {
        path: 'course',
        component: CoursePriceComponent,
        title:'Courses'     
      },
      {
        path: 'login',
        component: LoginComponent       ,
        title:'Login'
      },
      {
        path: 'signup',
        component: SignupComponent     ,
        title:'SignUp'
      },
      {
        path: 'contact',
        component: ContactComponent      ,
        title:'ContactUs'
      },
      {
        path: 'verify_email/:email',
        component: EmailVerificationComponent      ,
        title:'verify_email'
      },
    
    ]
  },
  {
    path: 'd',
    component: DashboardComponent,
    title:'Dashboard',
    canActivate: [authGuardGuard],
    children:[
      {
        path: 'fcourses',
        component: CoursesComponent       ,
        title:'Free Courses'
      },
    ]
    }
  
    ];
