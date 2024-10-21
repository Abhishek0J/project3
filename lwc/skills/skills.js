import { LightningElement, track } from 'lwc';

export default class Skills extends LightningElement {
    @track skills = [{
        id: 0,
        name:''
    }]

    handleskillchange(event) {
        let index = event.target.dataset.index; // Corrected to dataset
        let value = event.target.value;

        // Create a copy of the skills array to ensure reactivity
        let updatedSkills = [...this.skills];
        updatedSkills[index].name = value; 
        this.skills = updatedSkills; // Update the skills array

        this.updateResume();
    }

    updateResume() {
        console.log("P7");
        // Creating custom event updatepi
        let updateskillsevt = new CustomEvent("updateskills", { detail: this.skills });
        console.log("P8");
        // Dispatching the event
        this.dispatchEvent(updateskillsevt); // Corrected variable name
        console.log("P9");
    }

    addskill() {
        console.log('ak1');
        let nextIndex = this.skills.length;
        console.log('ak2');
        // Create a copy of the skills array to ensure reactivity
        this.skills .push({ id: nextIndex, name: '' })
        console.log('ak3');
    }
}
