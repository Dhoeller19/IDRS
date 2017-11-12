/*

Botkit Studio Skill module to enhance the "Emergency_v2" script

*/


module.exports = function(controller) {
    // define a before hook
    // you may define multiple before hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobefore
    controller.studio.before('Emergency_v2', function(convo, next) {

        // do some preparation before the conversation starts...
        // for example, set variables to be used in the message templates
        // convo.setVar('foo','bar');

        console.log('BEFORE: Emergency_v2');
        // don't forget to call next, or your conversation will never continue.
        next();

    });

    /* Validators */
    // Fire a function whenever a variable is set because of user input
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiovalidate
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Validate user input: isinjured
    controller.studio.validate('Emergency_v2','isinjured', function(convo, next) {

        var value = convo.extractResponse('isinjured');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: isinjured');

        // always call next!
        next();

    });

    // Validate user input: nr_others
    controller.studio.validate('Emergency_v2','nr_others', function(convo, next) {

        var value = convo.extractResponse('nr_others');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: nr_others');

        // always call next!
        next();

    });

    // Validate user input: others_unc
    controller.studio.validate('Emergency_v2','others_unc', function(convo, next) {

        var value = convo.extractResponse('others_unc');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_unc');

        // always call next!
        next();

    });

    // Validate user input: others_y
    controller.studio.validate('Emergency_v2','others_y', function(convo, next) {

        var value = convo.extractResponse('others_y');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_y');

        // always call next!
        next();

    });

    // Validate user input: others_nb
    controller.studio.validate('Emergency_v2','others_nb', function(convo, next) {

        var value = convo.extractResponse('others_nb');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_nb');

        // always call next!
        next();

    });

    // Validate user input: children
    controller.studio.validate('Emergency_v2','children', function(convo, next) {

        var value = convo.extractResponse('children');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: children');

        // always call next!
        next();

    });

    // Validate user input: injury_types
    controller.studio.validate('Emergency_v2','injury_types', function(convo, next) {

        var value = convo.extractResponse('injury_types');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: injury_types');

        // always call next!
        next();

    });

    // Validate user input: others_unconscious
    controller.studio.validate('Emergency_v2','others_unconscious', function(convo, next) {

        var value = convo.extractResponse('others_unconscious');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_unconscious');

        // always call next!
        next();

    });

    // Validate user input: others_not_breathing
    controller.studio.validate('Emergency_v2','others_not_breathing', function(convo, next) {

        var value = convo.extractResponse('others_not_breathing');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_not_breathing');

        // always call next!
        next();

    });

    // Validate user input: others_bleeding
    controller.studio.validate('Emergency_v2','others_bleeding', function(convo, next) {

        var value = convo.extractResponse('others_bleeding');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_bleeding');

        // always call next!
        next();

    });

    // Validate user input: others
    controller.studio.validate('Emergency_v2','others', function(convo, next) {

        var value = convo.extractResponse('others');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: others');

        // always call next!
        next();

    });

    // Validate user input: walking
    controller.studio.validate('Emergency_v2','walking', function(convo, next) {

        var value = convo.extractResponse('walking');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: walking');

        // always call next!
        next();

    });

    // Validate user input: bleeding
    controller.studio.validate('Emergency_v2','bleeding', function(convo, next) {

        var value = convo.extractResponse('bleeding');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: bleeding');

        // always call next!
        next();

    });

    // Validate user input: injured
    controller.studio.validate('Emergency_v2','injured', function(convo, next) {

        var value = convo.extractResponse('injured');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: injured');

        // always call next!
        next();

    });

    // Validate user input: question_1
    controller.studio.validate('Emergency_v2','question_1', function(convo, next) {

        var value = convo.extractResponse('question_1');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: question_1');

        // always call next!
        next();

    });

    // Validate user input: question_2
    controller.studio.validate('Emergency_v2','question_2', function(convo, next) {

        var value = convo.extractResponse('question_2');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: question_2');

        // always call next!
        next();

    });

    // Validate user input: question_3
    controller.studio.validate('Emergency_v2','question_3', function(convo, next) {

        var value = convo.extractResponse('question_3');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency_v2 VARIABLE: question_3');

        // always call next!
        next();

    });

    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Before the default thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','default', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *default*');

        // always call next!
        next();
    });

    // Before the on_timeout thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','on_timeout', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *on_timeout*');

        // always call next!
        next();
    });

    // Before the is_injured thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','is_injured', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *is_injured*');

        // always call next!
        next();
    });

    // Before the others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *others*');

        // always call next!
        next();
    });

    // Before the injured thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','injured', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *injured*');

        // always call next!
        next();
    });

    // Before the severity_8_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_8_pers', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_8_pers*');

        // always call next!
        next();
    });

    // Before the severity_6_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_6_pers', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_6_pers*');

        // always call next!
        next();
    });

    // Before the exit thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','exit', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *exit*');

        // always call next!
        next();
    });

    // Before the not_bleeding thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','not_bleeding', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *not_bleeding*');

        // always call next!
        next();
    });

    // Before the severity_2_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_2_pers', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_2_pers*');

        // always call next!
        next();
    });

    // Before the others_bleeding thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others_bleeding', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *others_bleeding*');

        // always call next!
        next();
    });

    // Before the others_unconscious thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others_unconscious', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *others_unconscious*');

        // always call next!
        next();
    });

    // Before the type_of_injuries thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','type_of_injuries', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *type_of_injuries*');

        // always call next!
        next();
    });

    // Before the severity_2_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_2_others', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_2_others*');

        // always call next!
        next();
    });

    // Before the severity_10_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_10_others', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_10_others*');

        // always call next!
        next();
    });

    // Before the severity_8_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_8_others', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_8_others*');

        // always call next!
        next();
    });

    // Before the severity_6_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_6_others', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_6_others*');

        // always call next!
        next();
    });

    // Before the severity_4_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_4_others', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_4_others*');

        // always call next!
        next();
    });

    // Before the severity_4_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_4_pers', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *severity_4_pers*');

        // always call next!
        next();
    });

    // Before the others_nobreath thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others_nobreath', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *others_nobreath*');

        // always call next!
        next();
    });

    // Before the dummy thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','dummy', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *dummy*');

        // always call next!
        next();
    });

    // Before the dummy2 thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','dummy2', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency_v2*, about to start the thread *dummy2*');

        // always call next!
        next();
    });


    // define an after hook
    // you may define multiple after hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudioafter
    controller.studio.after('Emergency_v2', function(convo, next) {

        console.log('AFTER: Emergency_v2');

        // handle the outcome of the convo
        if (convo.successful()) {

            var responses = convo.extractResponses();
            // do something with the responses

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}