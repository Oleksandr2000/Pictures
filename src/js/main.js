import modals from './modules/modals';
import sliders from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calculator from './modules/calculator';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scroling from './modules/scroling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms();
    mask('[name = "phone"]');
    // checkTextInputs('[name="name"]');
    // checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calculator('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scroling('.pageup');
});