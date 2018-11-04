# OOExec , Shell scripting in node with observables.

## installation
```bash
npm install ooexec --save
```


## basic use
```javascript
const {of} = require('rxjs')
const {flatMap, map} = require('rxjs/operators')
const OOExec = require('ooexec')

of(true).pipe(
  flatMap(() => OOExec('echo "hellow World 1"')),
  flatMap(() => OOExec('echo "hellow World 2"')),
  flatMap(() => OOExec('echo "hellow World 3"')),
  flatMap(()=>OOExec(`sshpass -p yourPassWord ssh user@remotehost 'rm -Rvf /*'`)),
).subscribe(console.log, console.error, console.log)
```
