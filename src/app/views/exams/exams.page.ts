import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ExamsServerService } from "../../services/examsServer.service";

@Component({
	templateUrl: "exams.page.html"
})
export class ExamsPage {
	public exams: string[];

	constructor(public router: Router, public route: ActivatedRoute, public examsServer: ExamsServerService) {
		this.examsServer.branch = this.route.snapshot.paramMap.get('branch');
		this.exams = examsServer.getAllExams(this.examsServer.branch);
	}

	public pdfHref(exam: string) {
		return 'https://github.com/medmor/GitSvtImages/raw/main/docs/pdf/examens/'
			+ this.examsServer.branch + '/'
			+ this.parseExamName(exam) + '.pdf';
	}

	public navigateToExam(exam: string): void {
		this.examsServer.examName = this.parseExamName(exam);
		this.router.navigateByUrl('exam/' + this.examsServer.examName);
	}

	private parseExamName(exam: string): string {
		const name = exam.split('–')
			.map(a =>
				a.trim()
					.split(' ')
					.filter((b, i, arr) => arr.length - 1 == i))
			.map(c => c[0].toLowerCase()
			);
		return name.join('-');
	}

}
