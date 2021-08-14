import { Component, Input } from "@angular/core";
import { CourseNodeModel, courseNodeTypes } from "src/app/model/courseNode.model";

@Component({
	selector: "section-view",
	templateUrl: "sectionVeiw.component.html"
})
export class SectionViewComponent {

	public collapsed = false;
	@Input() section: CourseNodeModel;


	constructor() {
	}
	ngOnInit() {
	}


	onCollapsButtonClick() {
		this.collapsed = !this.collapsed;
	}
}
