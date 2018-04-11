import Controller from '@ember/controller';
import { inject as controller } from '@ember/controller';
import EmberObject, { computed } from '@ember/object';


export default Controller.extend({

    tilsArray: [{
        content: 'potato potato potato'
    }, {
        content: 'p0tat0 p0tat0',
    }, {
        content: 'pot@to pot@to',
    }, {
        content: 'po+a+o po+a+o',
    }],

    tils: computed('model.[]', function () {
        let tils = this.get('model');
        return tils;
    }),
    // value: null,
    placeholder: 'wut u lern 2day?',
    tilsController: controller('tils'),

    actions: {
        createNewTil(value) {
            let tilsModel = this.get('model');
            let newTil = EmberObject.create({content: value});
            tilsModel.push(newTil);
            this.set(value, null);
        }
    },
});
