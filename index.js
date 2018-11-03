/**
 * Devuelve un Observable de un exec de la child_process. Aka system command.
 * onNext -> stdout
 * onError -> stderr
 *
 * @param cmdStr
 * @param environmentOptions
 * @returns {never}
 * @constructor
 */
function OOExec (cmdStr, environmentOptions, verbose = true) {
  return Observable.create(function (observer) {
    exec(cmdStr, environmentOptions, (error, stdout, stderr) => {
      if (verbose) {//collaterals but who cares.
        console.log('execuing ( ', cmdStr, ' )')
        console.log('with Environment Options :', environmentOptions)
        console.log('error-->', error)
        console.log('stdout-->', stdout)
        console.log('stderr-->', stderr)
      }
      if (error) {
        observer.error(stderr)
      }

      observer.next(stdout)
      observer.complete()
    })
    return {
      unsubscribe: function () {
        if (verbose) {console.log('completed OOexec :P ', cmdStr) }
      },
    }
  })
}
var module = module || {};//ES5 retro-compatibility
module.exports = OOExec;
