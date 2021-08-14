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
	constructor(private router: Router, private route: ActivatedRoute, public examServer: ExamsServerService) { }

	ngOnInit() {
		this.parseRoute();
		this.examServer.getExam().subscribe(data => {
			this.course = parse(JSON.stringify(data));
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

}
