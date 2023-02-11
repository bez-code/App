import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostCreateComponent } from './admin/dashboard/posts/admin/dashboard/posts/post-create/post-create.component';

const routes: Routes = [
  {path: '', component: AdminComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'posts', component: PostCreateComponent},

  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
