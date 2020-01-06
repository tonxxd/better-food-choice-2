import { h, render } from "preact";

import SurveyTemplate from './SurveyTemplate';
class Survey {

    constructor(lang){
        this.lang = lang
    }

    render(callback){
        const parent = document.createElement('div');
        parent.id = "bfcSurveyEl"
        document.body.appendChild(parent);
        render(<SurveyTemplate callback={callback} lang={this.lang} />, parent)
    }

}

export default Survey;