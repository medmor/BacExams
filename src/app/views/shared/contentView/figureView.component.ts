import { Component, Input } from "@angular/core";
import { CourseNodeModel } from "src/app/model/courseNode.model";
import { ExamsServerService } from "../../../services/examsServer.service";

@Component({
	template:
		`
        <ion-card-content>
            <img [src]="imgSrc()"
                [alt]="imgSrc()" />
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


}
