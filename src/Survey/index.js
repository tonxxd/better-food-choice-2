import { h, render } from "preact";
import $ from 'jquery';
import SurveyTemplate from './SurveyTemplate';
import BetterFoodChoice from "../BetterChoices/App";

class Survey {

    constructor(country){
        this.country = country;

        window.BFCSurvey = this;
    }

    renderBadge(){
        const el = $('<div id="bfcCartButtonEl" class="bfcSurveyBadge">?</div>')
        el.on("click", ()=>{
            BetterFoodChoice.showTaskDesc(0, ()=>{

                BetterFoodChoice.showTaskDesc(1, ()=>{
                    BetterFoodChoice.showTaskDesc(2, ()=>{
                    
                    })
                })
                
            })
        })
        $("body").prepend(el)
    }

    render(callback){
        const parent = document.createElement('div');
        parent.id = "bfcSurveyEl"
        document.body.appendChild(parent);
        render(<SurveyTemplate callback={callback} country={this.country} />, parent)
    }

}

export default Survey;