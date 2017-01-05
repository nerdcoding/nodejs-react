
This is a small sample web application consists of a client and a server 
application. The server application is implemented in Node.js with Express
and the client application uses React/Redux. 

## Server

The server application runs with Node.js and Express and provides some 
RESTful web services. 

### MongoDB

The server needs an MongoDB running on the same machine. Therefore it is
required that a MongoDB is installed an accessible on localhost at the default
port 47630.

### Build & Startup

Node.js and npm needs to be installed to build and start the server
application. Verify that you have at least node v4.x.x and  npm 3.x.x 
installed by running `node -v` and `npm -v` in a terminal. 

To install all required dependencies simply run:

```
npm install
```

The server start is done with:

```
npm start
```

The server application is accessible with at `http://127.0.0.1:8080`. 


## Client

The client is implemented in React.js using Redux. The server application 
is used as backend an therefore needs to be running on same machine.  
  
### Build & Startup

Node.js and npm needs to be installed to build and start the client
application. Verify that you have at least node v4.x.x and  npm 3.x.x 
installed by running `node -v` and `npm -v` in a terminal. 

To install all required dependencies simply run:

```
npm install
```

The client start is done with: 

```
npm run dev
```

The client application is accessible with at `http://127.0.0.1:3000`. 

## Licensing
The software of this repository is licensed under the GNU Lesser General 
Public License v3. See [LICENSE](https://github.com/nerdcoding/angular2-spring-boot/blob/master/LICENSE) 
for the full license text.