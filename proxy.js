var httpProxy = require('http-proxy')
    openmouseServer = 'openmouse.wekickit.com'
    ;


httpProxy.createProxyServer({
  target:'http://' + openmouseServer,
  headers: {
    host: openmouseServer
  }
}).listen(8080);