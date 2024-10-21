/*import { LightningElement } from 'lwc';

export default class Personalinfo extends LightningElement {
    personalInfo = {};
    handlePIChange(event) {
        console.log("P1");
        // Access values from UI using event keyword
        let fieldName = event.target.dataset.field; // Corrected the access to dataset
        console.log("P2");
        let fieldValue = event.target.value; // Changed to retrieve the value
        console.log("P3");

        // Update the property for a particular field
        console.log("P4");
        this.personalInfo[fieldName] = fieldValue; // Corrected variable name
        // Calling update resume function
        console.log("P5");
        this.updateResume();
        console.log("P6");
    }

    updateResume() {
        console.log("P7");
        // Creating custom event updatepi
        let updatepievt = new CustomEvent("updatepi", { detail: this.personalInfo });
        console.log("P8");
        // Dispatching the event
        this.dispatchEvent(updatepievt); // Corrected variable name
        console.log("P9");
    }
}
*/
import { LightningElement, track } from 'lwc';

export default class PersonalInfoComponent extends LightningElement {
    @track personalInformation = [{
        fullName: '',
        email: '',
        phone: '',
        address: ''
    }];

    handlePIChange(event) {
        const field = event.target.name;
        this.personalInformation[0][field] = event.target.value;
    }
}
