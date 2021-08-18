import { Component, OnInit } from '@angular/core';

import { CourseNodeModel } from "../../model/courseNode.model";
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from "flatted";

import { ExamsServerService } from '../../services/examsServer.service';


@Component({
	selector: 'app-home',
	templateUrl: 'exam.page.html'
})
export class ExamPage implements OnInit {

	course: CourseNodeModel;
	figuresCount = 0;
	answersFiguresCount = 0;

	constructor(private router: Router, private route: ActivatedRoute, public examServer: ExamsServerService) { }

	ngOnInit() {
		this.parseRoute();
		this.examServer.getExam().subscribe(data => {
			this.course = parse(JSON.stringify(data));
			this.examServer.exam = this.course;
			this.correctQuestionAnsers(this.course);
			this.figuresCount = 0;
			this.answersFiguresCount = 0;
			this.countFigures(this.course);
		}, err => {
			console.log(err);
			this.router.navigateByUrl('/home');
		});
	}
	parseRoute() {
		if (!this.examServer.branch) {
			this.examServer.examName = this.route.snapshot.params['title'];
			this.examServer.branch = this.route.snapshot.params['title'].split('-')[1];
		}
	}
	countFigures(obj: CourseNodeModel) {
		for (let child of obj.children) {
			if (child.type === 'Figure') {
				if (obj.type === 'ActivityAnswer') {
					this.answersFiguresCount++;
					child.content = 'answer' + this.answersFiguresCount;
				} else {

					this.figuresCount++;
					child.content = 'figure' + this.figuresCount;
				}
			}
			else {
				this.countFigures(child);
			}
		}
	}

	correctQuestionAnsers(obj: CourseNodeModel) {
		for (let child of obj.children) {
			if (child.type === 'ActivityQuestion') {
				let answer = child.children[1];
				if (answer) {
					let answerSimpleContent = answer.children[0];
					if (answerSimpleContent) {
						if (answerSimpleContent.type == 'SimpleContent' && answerSimpleContent.content == '')
							answerSimpleContent.type = 'Figure';
					}
					else {
						answer.children.push(new CourseNodeModel(0, 'Figure', '', child, [], ''));
					}
				} else {
					answer = new CourseNodeModel(1, 'ActivityAnswer', '', child, [], '');
					child.children[1] = answer;
					answer.children.push(new CourseNodeModel(0, 'Figure', '', child, [], ''));
				}
			}
			else {
				this.correctQuestionAnsers(child);
			}
		}
	}

}
