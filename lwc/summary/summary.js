import { LightningElement } from 'lwc';

export default class summary extends LightningElement {

    summary = '';

    handlesummarychange(event){
    // access values from ui using event key wo
        this.summary = event.target.value;
         //calling update resume function
        console.log("s5");
        this.updateResume();
        console.log("s6");
    }     
    updateResume(){
        console.log("s7");
        //creating custom ebvent updatepi
        let updatesummaryevt = new CustomEvent("updatesummary",{detail:{summary: this.summary}});
        console.log("s8");
        //dispatching the event
        this.dispatchEvent(updatepsummaryevt);
        console.log("s9");
    }
}