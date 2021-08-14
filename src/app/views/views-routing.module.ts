import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPage } from './exam/exam.page';
import { ExamsPage } from './exams/exams.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
	{ path: 'home', component: HomePage },
	{ path: 'exams/:branch', component: ExamsPage },
	{ path: 'exam/:title', component: ExamPage },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ViewsRoutingModule { }
