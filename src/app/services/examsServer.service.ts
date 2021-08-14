import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllExams } from '../model/examsDammyDataBase.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ExamsServerService {

	public readonly baseUrl = 'assets/exams/';
	public branch = '';
	public examName = '';

	constructor(private http: HttpClient,) {
		console.log(window.location.hostname);
	}

	public getAllExams(branch: string): string[] {
		return AllExams[branch];
	}
	public getExam(): Observable<any> {
		return this.http.get(this.baseUrl + this.branch + '/' + this.examName + '.json');
	}
}
