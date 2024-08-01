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
import { ProfileComponent } from './user/profile/profile.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { EnrolledCoursesComponent } from './user/enrolled-courses/enrolled-courses.component';
import { FreecoursesComponent } from './user/freecourses/freecourses.component';
import { ErrorPageComponent } from './user/error-page/error-page.component';
import { NotFoundError } from 'rxjs';
import { NotFoundErrorComponent } from './admin/not-found-error/not-found-error.component';
import { StatisticsComponent } from './g/statistics/statistics.component';
import { unsavedDataGuardGuard } from './guard/unsaved-data-guard.guard';
import { unsavedContactDataGuardGuard } from './guard/unsaved-contact-data-guard.guard';
import { checkUserRoleGuardGuard } from './guard/check-user-role-guard.guard';



export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./g/main/main.component').then((m)=>m.MainComponent),
    children:[
      {
        path: '',
        redirectTo:'/home',
        pathMatch:'full',
        
      },
      {
        path: 'home',
        loadComponent: () => import('./g/home/home.component').then((h)=>h.HomeComponent),
        title:'Learn With US!'
      },
      {
        path: 'course',
        loadComponent: () => import('./g/course-price/course-price.component').then((m)=>m.CoursePriceComponent),
        title:'Courses'     
      },
      {
        path: 'login',
        loadComponent: () => import('./g/login/login.component').then((m)=>m.LoginComponent)       ,
        title:'Login'
      },
      {
        path: 'signup',
        loadComponent: () => import('./g/signup/signup.component').then((m)=>m.SignupComponent),
        title:'SignUp',
        canDeactivate:[unsavedDataGuardGuard]
      },
      {
        path: 'contact',
        loadComponent: () => import('./g/contact/contact.component').then((m)=>m.ContactComponent),
        title:'Contact Us!',
        canDeactivate:[unsavedContactDataGuardGuard]
      },
      {
        path: 'verify_email/:email',
        loadComponent: () => import('./g/email-verification/email-verification.component').then((m)=>m.EmailVerificationComponent),
        title:'verify_email'
      },
     
    
    ]
    
  },
  {
    path: 'd',
    loadComponent: () => import('./user/dashboard/dashboard.component').then((m)=>m.DashboardComponent),
    title:'Dashboard',
    canActivate: [authGuardGuard],
    children:[
      {
        path: '',
        redirectTo:'p',
        pathMatch:"full",
        
      },
      {
        path: 'p',
        loadComponent: () => import('./user/profile/profile.component').then((m)=>m.ProfileComponent),
        title:'Profile'
      },
      {
        path: 'buyCourses',
        loadComponent: () => import('./user/buy-courses/buy-courses.component').then((m)=>m.BuyCoursesComponent),
        title:'Buy Courses'
      },
      {
        path: 'courses',
        loadComponent: () => import('./user/courses/courses.component').then((m)=>m.CoursesComponent),
        title:'New Courses',
        children:[
          {
            path:'cdesc',
            loadComponent: () => import('./user/courses/course-desc/course-desc.component').then((m)=>m.CourseDescComponent),
            title:'Course Detail'

          }
        ]
      },
      {
        path: 'EnCourses',
        loadComponent: () => import('./user/enrolled-courses/enrolled-courses.component').then((m)=>m.EnrolledCoursesComponent),
        title:'Enrolled Courses'
      },
      {
        path: 'fcourses',
        loadComponent: () => import('./user/freecourses/freecourses.component').then((m)=>m.FreecoursesComponent),
        title:'Free Courses'
      },
      {
        path: '**',
        loadComponent: () => import('./user/error-page/error-page.component').then((m)=>m.ErrorPageComponent),
        title:'404 Error'
      }
    ]
    },
    {
      path: 'a',
      loadComponent: () => import('./admin/admin/admin.component').then((m)=>m.AdminComponent),
      title:'Admin',
      canMatch:[checkUserRoleGuardGuard],
      canActivate: [authGuardGuard],
      children:[
        {
          path: '',
          redirectTo:'analytics',
          pathMatch:"full",
          
        },
        {
          path: 'analytics',
          loadComponent: () => import('./admin/analytics/analytics.component').then((m)=>m.AnalyticsComponent),
          title:'Analytics'
        },
        {
          path: '**',
          loadComponent: () => import('./admin/not-found-error/not-found-error.component').then((m)=>m.NotFoundErrorComponent),
          title:'404 Error'
        }
      ]
      },
      {
        path: '**',
        loadComponent: () => import('./g/page-not-found/page-not-found.component').then((m)=>m.PageNotFoundComponent),
        title:'404 Error'
      }
    ];
