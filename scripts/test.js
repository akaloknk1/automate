/*var Conversation = require('hubot-conversation');
module.exports = function (robot) {
    robot.hear(/whatsup/i, function (res){
    res.send ("good");
    });

    robot.hear(/date/i, function (res){
        console.log("getting date", new Date());
        res.send ("Today's Date: \n"+(new Date()).toString());
        });

    robot.hear(/test1/i, function (msg){
        var today = new Date();

    msg.send(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");        
    });

    var switchBoard = new Conversation(robot);
    robot.respond(/clean the house/, function (msg) {
        var dialog = switchBoard.startDialog(msg);

        msg.reply('Sure, where should I start? Kitchen or Bathroom');
        dialog.addChoice(/kitchen/i, function (msg2) {
            msg2.reply('On it boss!');
        });
        dialog.addChoice(/bathroom/i, function (msg2) {
            msg.reply('Do I really have to?');
            dialog.addChoice(/yes/, function (msg3) {
                msg3.reply('Fine, Mom!');
            })
        });
    });
           

   
 
        


   /* const
    norrisUrl = 'https://api.icndb.com/jokes/random',
    decode = require('decode-html');
    robot.hear(/Norris/i, (res) => {

        //wrap the HTTP get call as a Promise
        new Promise((resolve, reject) => 
            robot.http(norrisUrl).get()((err, response, body) =>
                err ? reject(err) : resolve(body)
            )
        )
        
        //parse to js object
        .then(body => JSON.parse(body))

        //get joke - jokes may have stuff like "
        .then(json => decode(json.value.joke))

        //reply joke
        .then(joke => res.reply(joke))

        //problems? Annoy the user with the problem
        .catch(err => res.reply('Not even Chuck Norris can deal with this one: ' + err));
    });


    /*const urltest = 'https://crudpi.io/c0de65/incidentid/3';
    
    robot.hear(/Norris/i, (res) => {

        //wrap the HTTP get call as a Promise
        new Promise((resolve, reject) => 
            robot.http(urltest).get()((err, response, body) =>
                err ? reject(err) : resolve(body)
            )
        )
        
        //parse to js object
        .then(body => JSON.parse(body))

        //get joke - jokes may have stuff like "
        .then(json => json.profession)

        //reply joke
        .then(profession => res.reply(profession))

        //problems? Annoy the user with the problem
        .catch(err => res.reply('Not even Chuck Norris can deal with this one: ' + err));
    }); */


   /* const urltest = 'https://crudpi.io/c0de65/incidentid/3';    
    robot.hear(/testupdate/i, (res) => {
        //wrap the HTTP get call as a Promise
        new Promise((resolve, reject) => 
            robot.http(urltest).get()((err, response, body) =>
                err ? reject(err) : resolve(body)
            )
        )        
        .then(body => JSON.parse(body))
        .then(json => json.profession)
        //reply bot
        .then(profession => res.reply(profession))
        //problems? Annoy the user with the problem
        .catch(err => res.reply('Not even Chuck Norris can deal with this one: ' + err));
    });  */
   /* const fetch = require('node-fetch');
    robot.hear(/testupdate/i, (res) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data)))
        .then(data => JSON.stringify(data))
        .then(json => json.data)
        .then(data => res.reply(data))
    }); */


    // Show ticket
    /*
    robot.respond(/Show Ticket/, function (msg) {
        var dialog = switchBoard.startDialog(msg, 180000);
 
        msg.reply('Sure, Please enter the ticket number.');

        dialog.addChoice(/\b(.*)/i, function (msg2) {
        //console.log("data fetched2..." + msg2.envelope.message.rawText);           
       // if (msg2.envelope.message.rawText == "INC0010024") {
        var urldata = msg2.envelope.message.rawText;
        var data;
        var request = require('request'),
        username = "admin",
        password = "QFhZy4ddKE9q",
        url = "https://dev99501.service-now.com/api/now/v1/table/incident?sysparm_query=number=" + urldata,
        auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
        
            request(
                {
                    url : url,
                    headers : {
                        "Authorization" : auth
                    }
                },
                function (error, response, body) {   
                    try{  data = JSON.parse(body);
                    //console.log(data);
                    var statusValue = data.result[0].state;
                    switch (statusValue) {

                                    case "1": statusDisplay = "New";
                                        break;
                                    case "2": statusDisplay = "In Progress";
                                        break;
                                    case "3": statusDisplay = "On Hold";
                                        break;
                                    case "6": statusDisplay = "Resolved";
                                        break;
                                    case "7": statusDisplay = "Closed";
                                        break;
                                    case "8": statusDisplay = "Cancelled";
                                        break;
                        
                                }                
                    msg2.reply("Ticket details are as follows."+"\nTicket Status : " +  statusDisplay  + "\n Incident Number : " + data.result[0].number + "\nShort Description : " + data.result[0].short_description + "\nSystem Updated By : " + data.result[0].sys_updated_by);                       
                    }   catch(error){
                        console.log(error);
                            msg2.reply("Please crosscheck your Incident Number"); 

                        }
                }            
            );
        /*} else {
            msg2.reply('Please recheck your ticket number.\n There is no incident log with given ticket number.');
        }  */
       /* }); 
    }); */






/*

}*/