import { LightningElement } from 'lwc';

export default class Resumebuild extends LightningElement {
    personalInfo = {};
    summary = '';
    skills = []; // Changed 'skill' to 'skills' for consistency
    experience = [];
    educations = [];

    handleUpdatePI(event) {
        console.log('resume builder - updating personal info');
        this.personalInfo =  event.detail ; // Directly assign the object
        console.log("Updated personalInfo:", this.personalInfo);
    }

    handleUpdatesummary(event) {
        console.log('resume builder - updating summary');
        this.summary = event.detail.summary; // Ensure 'summary' is part of event.detail
        console.log("Updated summary:", this.summary);
    }

    handleUpdateskills(event) {
        console.log('resume builder - updating skills');
        this.skills = event.detail.skills; // Ensure you're accessing the correct data structure
        console.log("Updated skills:", this.skills);
    }

    handleUpdateeducation(event) {
        console.log('resume builder - updating education');
        this.educations = event.detail.educations; // Ensure 'educations' is part of event.detail
        console.log("Updated educations:", this.educations);
    }

    handleUpdateexperience(event) {
        console.log('resume builder - updating experience');
        this.experience = event.detail.experience; // Ensure 'experience' is part of event.detail
        console.log("Updated experience:", this.experience);
    }
}
