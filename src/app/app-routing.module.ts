import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookComponent } from './components/pages/book/book.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { MemberComponent } from './components/pages/member/member.component';
import { StaffComponent } from './components/pages/staff/staff.component';

const routes: Routes = [
  { path : "", component: MainComponent},
  { path : "login", component: LoginComponent},
  { path : "book", component: BookComponent},
  { path : "book/add", component: BookAddComponent},
  { path : "member", component: MemberComponent},
  { path : "staff", component: StaffComponent},
  { path : "borrow", component: BorrowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
