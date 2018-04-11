import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model() {
        return [
            EmberObject.create({ content: 'potato potato potato' }),
            EmberObject.create({ content: 'p0tat0 p0tat0 p0tat0' }),
            EmberObject.create({ content: 'pot@to pot@to pot@to' }),
            EmberObject.create({ content: 'po+a+o po+a+o po+a+o' })
        ];
    },
});
