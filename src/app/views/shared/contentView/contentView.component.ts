import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CourseNodeModel } from "src/app/model/courseNode.model";
import { ExamsServerService } from "../../../services/examsServer.service";

@Component({
	templateUrl: "contentView.component.html",
	selector: "content-view"
})
export class ContentViewComponent {
	currentModal;
	@Input() content: CourseNodeModel;

	constructor(public modalController: ModalController, public examsService: ExamsServerService) {

	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: ContentViewComponent,
			componentProps: {
				"content": this.content.children[1]
			}
		});
		await modal.present();
		this.examsService.answarModal = modal;
	}
	dismissModal() {

		if (this.examsService.answarModal) {
			this.examsService.answarModal.dismiss().then(() => { this.examsService.answarModal = null; });
		}
	}
}
