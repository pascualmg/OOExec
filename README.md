# OOExec , Shell scripting in node with observables.

## installation
```bash
npm install ooexec --save
```


## basic use
```javascript
const {of} = require('rxjs')
const {flatMap} = require('rxjs/operators')
var OOExec = require('ooexec')
of(true).pipe(
  flatMap(() => OOExec('echo hellow world')),
  flatMap(() => OOExec('docker-compose stop', {pwd:'/home/myuser/src/docker'})),
  flatMap(() => OOExec('do-amazing-stuff.sh', {env: {path:'/usr/local/bin/scripts'}})),
  flatMap(() => OOExec('reboot-the-system.sh', {env: {path:'/usr/local/bin/scripts'}})),
  flatMap(() => OOExec('cat file.txt', {pwd: '/tmp'})),
  map((output) => {console.log(output)})
).subscribe(console.log, console.error, console.log)
```
