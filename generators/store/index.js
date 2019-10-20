var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts)
    }

    writing() {
        const storeName = this.options.name || 'NewComp';

        // actions.js
        this.fs.copyTpl(
            this.templatePath('actions.js'),
            this.destinationPath(`${storeName}/actions.js`),
            {
                name: storeName,
            }
        );

        // reducer.js
        this.fs.copyTpl(
            this.templatePath('reducer.js'),
            this.destinationPath(`${storeName}/reducer.js`),
            {
                name: storeName,
            }
        );

        // selectors.js
        this.fs.copyTpl(
            this.templatePath('selectors.js'),
            this.destinationPath(`${storeName}/selectors.js`),
            {
                name: storeName,
            }
        );
    }
};
