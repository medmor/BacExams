import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ALL_EXAMS } from '../model/examsDammyDataBase.model';
import { Observable } from 'rxjs';
import { CourseNodeModel } from '../model/courseNode.model';

@Injectable({
    providedIn: 'root',
})
export class ExamsServerService {
    public readonly baseUrl = 'assets/exams/';
    public exam: CourseNodeModel;
    public branch = '';
    public examName = '';
    public answerModal: HTMLIonModalElement;

    constructor(private http: HttpClient) {}

    public getAllExams(branch: string): string[] {
        return ALL_EXAMS[branch];
    }
    public getExam(): Observable<any> {
        return this.http.get(
            this.baseUrl + this.branch + '/' + this.examName + '.json'
        );
    }
}
