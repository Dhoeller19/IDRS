/*

Botkit Studio Skill module to enhance the "Emergency" script

*/


module.exports = function(controller) {
    // define a before hook
    // you may define multiple before hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobefore
    controller.studio.before('Emergency', function(convo, next) {

        // do some preparation before the conversation starts...
        // for example, set variables to be used in the message templates
        // convo.setVar('foo','bar');

        console.log('BEFORE: Emergency');
        // don't forget to call next, or your conversation will never continue.
        next();

    });

    /* Validators */
    // Fire a function whenever a variable is set because of user input
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiovalidate
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Validate user input: walking_yn
    controller.studio.validate('Emergency','walking_yn', function(convo, next) {

        var value = convo.extractResponse('walking_yn');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: walking_yn');

        // always call next!
        next();

    });

    // Validate user input: bleeding_yn
    controller.studio.validate('Emergency','bleeding_yn', function(convo, next) {

        var value = convo.extractResponse('bleeding_yn');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: bleeding_yn');

        // always call next!
        next();

    });

    // Validate user input: injured_yn
    controller.studio.validate('Emergency','injured_yn', function(convo, next) {

        var value = convo.extractResponse('injured_yn');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: injured_yn');

        // always call next!
        next();

    });

    // Validate user input: unconscious_no
    controller.studio.validate('Emergency','unconscious_no', function(convo, next) {

        var value = convo.extractResponse('unconscious_no');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: unconscious_no');

        // always call next!
        next();

    });

    // Validate user input: unconscious_yn
    controller.studio.validate('Emergency','unconscious_yn', function(convo, next) {

        var value = convo.extractResponse('unconscious_yn');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: unconscious_yn');

        // always call next!
        next();

    });

    // Validate user input: question_1
    controller.studio.validate('Emergency','question_1', function(convo, next) {

        var value = convo.extractResponse('question_1');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: question_1');

        // always call next!
        next();

    });

    // Validate user input: question_2
    controller.studio.validate('Emergency','question_2', function(convo, next) {

        var value = convo.extractResponse('question_2');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: question_2');

        // always call next!
        next();

    });

    // Validate user input: question_3
    controller.studio.validate('Emergency','question_3', function(convo, next) {

        var value = convo.extractResponse('question_3');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: Emergency VARIABLE: question_3');

        // always call next!
        next();

    });

    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Before the default thread starts, run this:
    controller.studio.beforeThread('Emergency','default', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *default*');

        // always call next!
        next();
    });

    // Before the on_timeout thread starts, run this:
    controller.studio.beforeThread('Emergency','on_timeout', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *on_timeout*');

        // always call next!
        next();
    });

    // Before the Unconscious_Y thread starts, run this:
    controller.studio.beforeThread('Emergency','Unconscious_Y', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *Unconscious_Y*');

        // always call next!
        next();
    });

    // Before the personal_condition thread starts, run this:
    controller.studio.beforeThread('Emergency','personal_condition', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *personal_condition*');

        // always call next!
        next();
    });

    // Before the fallback thread starts, run this:
    controller.studio.beforeThread('Emergency','fallback', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *fallback*');

        // always call next!
        next();
    });

    // Before the injury_type thread starts, run this:
    controller.studio.beforeThread('Emergency','injury_type', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *injury_type*');

        // always call next!
        next();
    });

    // Before the not_understood thread starts, run this:
    controller.studio.beforeThread('Emergency','not_understood', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *not_understood*');

        // always call next!
        next();
    });

    // Before the injury_type_2 thread starts, run this:
    controller.studio.beforeThread('Emergency','injury_type_2', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *injury_type_2*');

        // always call next!
        next();
    });

    // Before the severity_10 thread starts, run this:
    controller.studio.beforeThread('Emergency','severity_10', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *severity_10*');

        // always call next!
        next();
    });

    // Before the severity_1 thread starts, run this:
    controller.studio.beforeThread('Emergency','severity_1', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *severity_1*');

        // always call next!
        next();
    });

    // Before the severity_8 thread starts, run this:
    controller.studio.beforeThread('Emergency','severity_8', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *severity_8*');

        // always call next!
        next();
    });

    // Before the severity_4 thread starts, run this:
    controller.studio.beforeThread('Emergency','severity_4', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *severity_4*');

        // always call next!
        next();
    });

    // Before the severity_6 thread starts, run this:
    controller.studio.beforeThread('Emergency','severity_6', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *Emergency*, about to start the thread *severity_6*');

        // always call next!
        next();
    });


    // define an after hook
    // you may define multiple after hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudioafter
    controller.studio.after('Emergency', function(convo, next) {

        console.log('AFTER: Emergency');

        // handle the outcome of the convo
        if (convo.successful()) {

            var responses = convo.extractResponses();
            // do something with the responses

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}
