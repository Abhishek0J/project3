import { LightningElement ,api} from 'lwc';

export default class Preview extends LightningElement {
    @api personalInfo = {};
    @api summary = '';
    @api skills = [];
    @api experience = [];
    @api education = [];

}