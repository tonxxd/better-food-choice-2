import { h, render } from "preact";

import SurveyTemplate from './SurveyTemplate';
class Survey {

    constructor(country){
        this.country = country
    }

    render(callback){
        const parent = document.createElement('div');
        parent.id = "bfcSurveyEl"
        document.body.appendChild(parent);
        render(<SurveyTemplate callback={callback} country={this.country} />, parent)
    }

}

export default Survey;