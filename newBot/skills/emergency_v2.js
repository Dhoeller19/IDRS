/*

Botkit Studio Skill module to enhance the "Emergency_v2" script

*/

var severity_pers, severity_others;
var nr_others = 0;

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

        console.log('VALIDATE: Emergency_v2 VARIABLE: isinjured');

        next();

    });

    // Validate user input: nr_others
    controller.studio.validate('Emergency_v2','nr_others', function(convo, next) {

        var value = convo.extractResponse('nr_others');
        console.log(!isNaN(value))
        if (!isNaN(value)) {
          nr_others = parseInt(value, 10)
        } else {
          convo.gotoThread('others_nobreath')
          //nr_others = 1
        }

        console.log('NR_OTHERS');
        console.log(nr_others);

        next();

    });

    // Validate user input: others_unc
    controller.studio.validate('Emergency_v2','others_unc', function(convo, next) {

        var value = convo.extractResponse('others_unc');

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_unc');

        next();

    });

    // Validate user input: others_y
    controller.studio.validate('Emergency_v2','others_y', function(convo, next) {

        var value = convo.extractResponse('others_y');

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_y');

        next();

    });

    // Validate user input: others_nb
    controller.studio.validate('Emergency_v2','others_nb', function(convo, next) {

        var value = convo.extractResponse('others_nb');

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_nb');

        next();

    });

    // Validate user input: children
    controller.studio.validate('Emergency_v2','children', function(convo, next) {

        var value = convo.extractResponse('children');

        console.log('VALIDATE: Emergency_v2 VARIABLE: children');

        next();

    });

    // Validate user input: injury_types
    controller.studio.validate('Emergency_v2','injury_types', function(convo, next) {

        var value = convo.extractResponse('injury_types');

        console.log('VALIDATE: Emergency_v2 VARIABLE: injury_types');

        next();

    });

    // Validate user input: others_unconscious
    controller.studio.validate('Emergency_v2','others_unconscious', function(convo, next) {

        var value = convo.extractResponse('others_unconscious');

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_unconscious');

        next();

    });

    // Validate user input: others_not_breathing
    controller.studio.validate('Emergency_v2','others_not_breathing', function(convo, next) {

        var value = convo.extractResponse('others_not_breathing');

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_not_breathing');

        next();

    });

    // Validate user input: others_bleeding
    controller.studio.validate('Emergency_v2','others_bleeding', function(convo, next) {

        var value = convo.extractResponse('others_bleeding');

        console.log('VALIDATE: Emergency_v2 VARIABLE: others_bleeding');

        next();

    });

    // Validate user input: others
    controller.studio.validate('Emergency_v2','others', function(convo, next) {

        var value = convo.extractResponse('others');

        console.log('VALIDATE: Emergency_v2 VARIABLE: others');

        next();

    });

    // Validate user input: walking
    controller.studio.validate('Emergency_v2','walking', function(convo, next) {

        var value = convo.extractResponse('walking');

        console.log('VALIDATE: Emergency_v2 VARIABLE: walking');

        next();

    });

    // Validate user input: bleeding
    controller.studio.validate('Emergency_v2','bleeding', function(convo, next) {

        var value = convo.extractResponse('bleeding');

        console.log('VALIDATE: Emergency_v2 VARIABLE: bleeding');

        next();

    });

    // Validate user input: injured
    controller.studio.validate('Emergency_v2','injured', function(convo, next) {

        var value = convo.extractResponse('injured');

        console.log('VALIDATE: Emergency_v2 VARIABLE: injured');

        next();

    });

    // Validate user input: question_1
    controller.studio.validate('Emergency_v2','question_1', function(convo, next) {

        var value = convo.extractResponse('question_1');

        console.log('VALIDATE: Emergency_v2 VARIABLE: question_1');

        next();

    });

    // Validate user input: question_2
    controller.studio.validate('Emergency_v2','question_2', function(convo, next) {

        var value = convo.extractResponse('question_2');

        console.log('VALIDATE: Emergency_v2 VARIABLE: question_2');

        next();

    });

    // Validate user input: question_3
    controller.studio.validate('Emergency_v2','question_3', function(convo, next) {

        var value = convo.extractResponse('question_3');

        console.log('VALIDATE: Emergency_v2 VARIABLE: question_3');

        next();

    });

    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Before the default thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','default', function(convo, next) {


        console.log('In the script *Emergency_v2*, about to start the thread *default*');

        next();
    });

    // Before the on_timeout thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','on_timeout', function(convo, next) {


        console.log('In the script *Emergency_v2*, about to start the thread *on_timeout*');

        next();
    });

    // Before the is_injured thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','is_injured', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *is_injured*');

        next();
    });

    // Before the others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *others*');

        next();
    });

    // Before the injured thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','injured', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *injured*');

        next();
    });

    // Before the severity_8_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_8_pers', function(convo, next) {

        severity_pers = 8

        console.log('In the script *Emergency_v2*, about to start the thread *severity_8_pers*');

        next();
    });

    // Before the severity_6_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_6_pers', function(convo, next) {

        severity_pers = 6

        console.log('In the script *Emergency_v2*, about to start the thread *severity_6_pers*');

        next();
    });

    // Before the exit thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','exit', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *exit*');

        next();
    });

    // Before the not_bleeding thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','not_bleeding', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *not_bleeding*');

        next();
    });

    // Before the severity_2_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_2_pers', function(convo, next) {

        severity_pers = 2

        console.log('In the script *Emergency_v2*, about to start the thread *severity_2_pers*');

        next();
    });

    // Before the others_bleeding thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others_bleeding', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *others_bleeding*');

        next();
    });

    // Before the others_unconscious thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others_unconscious', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *others_unconscious*');

        next();
    });

    // Before the type_of_injuries thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','type_of_injuries', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *type_of_injuries*');

        next();
    });

    // Before the severity_2_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_2_others', function(convo, next) {

        severity_others = 2

        console.log('In the script *Emergency_v2*, about to start the thread *severity_2_others*');

        next();
    });

    // Before the severity_10_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_10_others', function(convo, next) {

        severity_others = 10

        console.log('In the script *Emergency_v2*, about to start the thread *severity_10_others*');

        next();
    });

    // Before the severity_8_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_8_others', function(convo, next) {

        severity_others = 8

        console.log('In the script *Emergency_v2*, about to start the thread *severity_8_others*');

        next();
    });

    // Before the severity_6_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_6_others', function(convo, next) {

        severity_others = 6

        console.log('In the script *Emergency_v2*, about to start the thread *severity_6_others*');

        next();
    });

    // Before the severity_4_others thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_4_others', function(convo, next) {

        severity_others = 4

        console.log('In the script *Emergency_v2*, about to start the thread *severity_4_others*');

        next();
    });

    // Before the severity_4_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_4_pers', function(convo, next) {

        severity_pers = 4

        console.log('In the script *Emergency_v2*, about to start the thread *severity_4_pers*');

        next();
    });

    // Before the others_nobreath thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','others_nobreath', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *others_nobreath*');

        next();
    });

    // Before the dummy thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','dummy', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *dummy*');

        next();
    });

    // Before the dummy2 thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','dummy2', function(convo, next) {

        console.log('In the script *Emergency_v2*, about to start the thread *dummy2*');

        next();
    });

    // Before the severity_1_pers thread starts, run this:
    controller.studio.beforeThread('Emergency_v2','severity_1_pers', function(convo, next) {

        severity_pers = 1

        console.log('In the script *Emergency_v2*, about to start the thread *severity_1_pers*');

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
          
          
            console.log('SEVERITY_PERS');
            console.log(severity_pers);

            console.log('SEVERITY_OTHERS');
            console.log(severity_others);
          
          // Pass data to main server

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}
