import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    tils: computed('model', function () {
        let tils = this.get('model');
        return tils;
    }),
});
