import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BacBranche, ALLBRANCHES } from "../../model/bacBranches.model";
import { ExamsServerService } from "../../services/examsServer.service";

@Component({
	templateUrl: 'home.page.html'
})
export class HomePage {
	allBranches: BacBranche[] = ALLBRANCHES;

	constructor(public router: Router, public examService: ExamsServerService) { }

	public navigateTo(branch: string): void {
		this.examService.branch = branch;
		this.router.navigateByUrl('exams/' + branch);
	}
}
