# Openmouse Proxy

read more about the [openmouse suite]('https://github.com/rockitbaby/openmouse').

---

The proxy is helpful if you can not create an openmouse http**s** server. Chrome does not allow extensions to establish unsecure http connection to another server than localhost. The openmouse proxy runs on your local machine and proxies all traffic from the extension to the openmouse server. The extension talks to the proxy on localhost and everything is fine.  
Yap, thats kind of hackish.

## Prerequisites

[nodejs](http://nodejs.org/)

## Installation

```
npm install
```

## Start

```
node proxy.js
```