import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            content: 'potato potato potato'
        }, {
        content: 'p0tat0 p0tat0',
        }, {
            content: 'pot@to pot@to',
        }, {
            content: 'po+a+o po+a+o',
        }];
    },
});
