
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        theia.window.showInformationMessage('Hello World!');
        theia.commands.executeCommand('file-search.openFile', 'file:///projects/theia/README.md')
            .then(() => {
                theia.window.showInformationMessage('open file looks ok');
            }, e => {
                theia.window.showErrorMessage(`Could not open file: ${e.message}`);
                console.log(`Could not open file `, e);
            });
    }));

}

export function stop() {

}
