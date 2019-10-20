var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts)
    }

    writing() {
        const compnentName = this.options.name || 'NewComp';

        // index.js
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath(`${compnentName}/index.js`),
            {
                name: compnentName,
            }
        );

        // component.js
        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath(`${compnentName}/${compnentName}.js`),
            {
                name: compnentName,
            }
        );

        // component.styles.js
        this.fs.copyTpl(
            this.templatePath('component.styles.js'),
            this.destinationPath(`${compnentName}/${compnentName}.styles.js`),
            {
                name: compnentName,
            }
        );
    }
};
