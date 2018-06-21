const ScriptServer = require('scriptserver');
 
const server = new ScriptServer({
  core: {
    jar: 'spigot.jar',
    args: ['-Xmx2G'],
    rcon: {
      port: '25575',
      password: 'password'
    }
  }
});


const ssEssentials = require('scriptserver-essentials');
server.use(ssEssentials);


 server.on('console', line => {
    // Regex matches when a user types ~head in chat
    const result = line.match(/]: <([\w]+)> ~head (.*)/);
    if (result) {
        // Player that sent command
        console.log(result[1])
        // head user is requesting
        console.log(result[2]);
        // Give the user the player head!
        server.send(`give ${result[1]} minecraft:skull 1 3 {SkullOwner:"${result[2]}"}`)
    }
});

server.start();