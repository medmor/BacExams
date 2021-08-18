import { Component, Input } from "@angular/core";
import { CourseNodeModel } from "src/app/model/courseNode.model";
import { ExamsServerService } from "../../../services/examsServer.service";

@Component({
	template:
		`
        <ion-card-content class='figure'>
			<a [href]="imgSrc()" target="_blank">
				<img [src]="imgSrc()" [alt]="alt()"/>
			</a>
        </ion-card-content>
    `,
	selector: "figure-view"
})
export class FigureViewComponent {

	@Input() content: CourseNodeModel;
	constructor(public examServerService: ExamsServerService) {
	}

	public imgSrc() {
		return this.examServerService.baseUrl
			+ this.examServerService.branch
			+ '/figures/' + this.examServerService.examName
			+ '/' + this.content.content + '.png';
	}
	public alt() {
		const title = this.examServerService.exam.title;
		return title.substr(4, title.length - 9) + ' ' + this.content.content;
	}


}
