const fs = require('fs');
const execSync = require('child_process').execSync;
const os = require('os'); 


fs.stat('./build/ezhttp', function(err, stat) {
    if(err) {
        return console.error('First run "npm run build-<platform>" to build EzHTTP, then run this script again to integrate EzHTTP with your system.')
    }

    if(os.platform() == "linux") {
        console.log('Creating root directory...')
        fs.mkdirSync('/opt/ezhttp', { recursive: true })
        console.log("Copying binary...")
        fs.copyFileSync('./build/ezhttp', '/opt/ezhttp/ezhttp')
        console.log("Creating symlink and setting permissions...")
        fs.symlinkSync('/opt/ezhttp/ezhttp', '/usr/bin/ezhttp')
        //fs.chmodSync('/usr/bin/ezhttp', "+x")
        console.log("Done!")
    } else if(os.platform() == "macos") {
        console.log("Sorry, MacOS and darwin based operating systems are not officially supported by integration yet.")
    } else {
        console.log(`Your operating system ${os.platform()} is not officially supported yet, however you can run and use EzHTTP using "npm start"`)
    }
})

fs.stat('./build/ezhttp.exe', function(err, stat) {
    if(err) {
        return console.error('First run "npm run build-<platform>" to build EzHTTP, then run this script again to integrate EzHTTP with your system.')
    }

    console.log("Creating root directory")
    fs.mkdirSync('C://Program Files/ezhttp', { recursive: true })
    console.log("Copying binary...")
    fs.copyFileSync('./build/ezhttp', 'C://Program Files/ezhttp/ezhttp')
    console.log("Adding root to path...")
    var out = execSync('SET "PATH=C:\\Program Files\\ezhttp;%PATH%"')

    console.log("Done!")
})