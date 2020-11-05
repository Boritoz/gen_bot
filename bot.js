const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');
console.clear();
console.log('___________________________________')
console.log('> Nitro Gen par ! Λnonymous.')
console.log('> Nitro Gen : https://discord.gg/HBfEt28eY6')
console.log(`> Info Login : Préfix : Aucun`)
console.log('> Bonne amusement :D')
console.log('___________________________________')

client.on('message', message => {
	if (message.content === "gen") {
  		var i = 0;
    	while (i < 2) { //Nombre de Messages
			var password = generator.generate({
		    	length: 16,
		    	numbers: true
   			});
			message.author.send("https://discord.gift/" + password); //Channel ID
			message.reply("Look tes dm!");
		 	i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "drop") {
		var i = 0;
	    while (i < 10) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('Id de ton channel de gen');
		 	message.channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "spam") {
		var i = 0;
	    while (i < 100) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('Id de ton channel de gen');
		 	channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "spamlots") {
		var i = 0;
	    while (i < 1000) { //Nombre de messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('Id de ton channel de gen');
		 	channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});
 
client.login('NzcxNjk3NjEwODM3OTgzMjQy.X5v5Zw.-RnTZFiBDyygnfDjC-xI7D0dcQA'); //Ton token
