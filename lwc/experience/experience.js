import { LightningElement, track } from 'lwc';

export default class Experience extends LightningElement {
    @track experience = [{
        id: 0,
        title: '',
        name: '',
        startdate: '',
        enddate: ''
    }];

    handleexperiencechange(event) {
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        let value = event.target.value;

        // Creating a copy of the experience array to ensure reactivity
        let updatedexperience= [...this.experience];
        updatedexperience[index][field] = value;
        this.experience= updatedexperience; // Update the experiencearray

        this.updateResume();
    }

    updateResume() {
        console.log("ed7");
        // Creating custom event updatepi
        let updateexperienceevt = new CustomEvent("updateexperience", { detail: this.experience});
        console.log("ed8");
        // Dispatching the event
        this.dispatchEvent(updateexperienceevt);
        console.log("ed9");
    }

    addexperience() {
        console.log('sk1');
        let nextIndex = this.experience.length;
        console.log('sk2');
        let newexperience= {
            id: nextIndex,
            degree: '',
            year: '',
            institute: ''
        };

        // Creating a copy of the array with the new item
        this.experience= [...this.experience, newexperience];
        console.log('sk3');
    }
}
