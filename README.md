Compatibility
-------------
This project is compatible with the Node.js v6.9.3 and Protractor v4.0.4.

Getting Started
---------------
To get set up and running quickly:
 - [Install Node.js v6.9.3](https://nodejs.org/en/download/);
 - Run `npm install` command.

 Try the script then by running `npm test` command.

 To better understand how Protractor works follow [this link](https://www.npmjs.com/package/protractor) to see the Protractor Setup docs.

PhantomJs install
---------------
If you want things working, do the following steps as [Julio Napurí](https://gist.github.com/julionc) taught:

First, install or update to the latest system software.
- `sudo apt-get update`
- `sudo apt-get install -y build-essential chrpath libssl-dev libxft-dev`

Install these packages needed by PhantomJS to work correctly.
- `sudo apt-get install -y libfreetype6 libfreetype6-dev`
- `sudo apt-get install -y libfontconfig1 libfontconfig1-dev`

Get it from the PhantomJS website.
- `cd ~`
- `export PHANTOM_JS="phantomjs-2.1.1-linux-x86_64"`
- `wget https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2`
- `sudo tar xvjf $PHANTOM_JS.tar.bz2`

Once downloaded, move Phantomjs folder to /usr/local/share/ and create a symlink:
- `sudo mv $PHANTOM_JS /usr/local/share`
- `sudo ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin`

Now, It should have PhantomJS properly on your system.
- `phantomjs --version`