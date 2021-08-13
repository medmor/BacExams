import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamPage } from './exam/exam.page';
import { ViewsRoutingModule } from './views-routing.module';
import { IonicModule } from '@ionic/angular';
import { SectionViewComponent } from './shared/sectionView/sectionView.component';
import { ExamsPage } from './exams/exams.page';
import { HomePage } from './home/home.page';
import { ContentViewComponent } from './shared/contentView/contentView.component';
import { SimpleContentViewComponent } from './shared/contentView/simpleContentView.component';
import { FigureViewComponent } from './shared/contentView/figureView.component';

@NgModule({
	declarations: [
		ExamPage,
		SectionViewComponent,
		ExamsPage,
		HomePage,
		ContentViewComponent,
		SimpleContentViewComponent,
		FigureViewComponent
	],
	imports: [IonicModule, CommonModule, ViewsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ViewsModule { }
