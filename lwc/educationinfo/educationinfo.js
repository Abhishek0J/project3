import { LightningElement, track } from 'lwc';

export default class Educationinfo extends LightningElement {
        @track education = [{
        id: 0,
        degree: '',
        year: '',
        institute: ''
    }];

    handleeducationchange(event) {
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        let value = event.target.value;

        // Creating a copy of the education array to ensure reactivity
        let updatedEducation = [...this.education];
        updatedEducation[index][field] = value;
        this.education = updatedEducation; // Update the education array

        this.updateResume();
    }

    updateResume() {
        console.log("ed7");
        // Creating custom event updatepi
        let updateeducationevt = new CustomEvent("updateeducation", { detail: this.education });
        console.log("ed8");
        // Dispatching the event
        this.dispatchEvent(updateeducationevt);
        console.log("ed9");
    }

    addeducation() {
        console.log('sk1');
        let nextIndex = this.education.length;
        console.log('sk2');
        let newEducation = {
            id: nextIndex,
            degree: '',
            year: '',
            institute: ''
        };

        // Creating a copy of the array with the new item
        this.education = [...this.education, newEducation];
        console.log('sk3');
    }
}
