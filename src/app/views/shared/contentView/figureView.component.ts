import { Component, Input } from "@angular/core";
import { CourseNodeModel } from "src/app/model/courseNode.model";

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
	constructor() {
	}

	public imgSrc() {
		return undefined;
	}


}
