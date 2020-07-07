var Conversation = require('hubot-conversation');
module.exports = function (robot) {
    var switchBoard = new Conversation(robot);
    robot.respond(/hi|hello|Hi|Hello|Hey|hey/i, function (msg) {
    
        var dialog = switchBoard.startDialog(msg, 180000);
        msg.reply('Hello, and welcome! What can I do for you? \n Please write down your question or select option below. \n * Book Appointment \n * Open Hours \n * Our Doctors');
        dialog.addChoice(/\b(.*)/i, function (msg2) {
        if(msg2.envelope.message.rawText == "Book Appointment"  || msg2.envelope.message.rawText == "book appointment" || msg2.envelope.message.rawText == "Open Hours"  || msg2.envelope.message.rawText == "open hours" || msg2.envelope.message.rawText == "Our Doctors"  || msg2.envelope.message.rawText == "our doctors "  ){   
            if (msg2.envelope.message.rawText == "Book Appointment"  || msg2.envelope.message.rawText == "book appointment" ) {
                
                msg2.reply(" I will be happy to help you book an appointment.\n Could you help me with a few details about your sympotoms, so i can find you the right doctor? \n Please complete the steps below. \n It will take just a minute.\n Do you exercise routinely ? \n YES \ NO ");
                dialog.addChoice(/\b(.*)/i, function (ba) {
                    if (ba.envelope.message.rawText == "Yes"  || ba.envelope.message.rawText == "yes" ) {
                        ba.reply("Great");
                    }
                    else if (ba.envelope.message.rawText == "No"  || ba.envelope.message.rawText == "NO"){
                        ba.reply("Not great");
                    }
                    else{
                        ba.reply("You have entered wrong input, please select select correct one.");
                    }


                });

            }
            else if (msg2.envelope.message.rawText == "Open Hours"  || msg2.envelope.message.rawText == "open hours" ) {
                
                msg2.reply("open hours");

            }
            else if(msg2.envelope.message.rawText == "Our Doctors"  || msg2.envelope.message.rawText == "our doctors " ) {
                
                msg2.reply("our doctors");

            }
        }
        else {
            msg2.reply('Please recheck your input');
        }
    });

       
    });
}