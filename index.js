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
      server.send(`say ${line}`)

});

server.start();
