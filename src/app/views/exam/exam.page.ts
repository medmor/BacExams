import { Component, OnInit } from '@angular/core';

import { CourseNodeModel } from "../../model/courseNode.model";
import { Router } from '@angular/router';
import { parse } from "flatted";

import { ExamsServerService } from '../../services/examsServer.service';


@Component({
	selector: 'app-home',
	templateUrl: 'exam.page.html'
})
export class ExamPage implements OnInit {

	course: CourseNodeModel;
	constructor(private router: Router, public examServer: ExamsServerService) {
		this.examServer.getExam().subscribe(data => {
			this.course = parse(JSON.stringify(data));
		}, err => {
			console.log(err);
			this.router.navigateByUrl('/home');
		});
	}

	ngOnInit() {

	}


}
