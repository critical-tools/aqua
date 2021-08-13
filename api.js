const ReplitClient = require('repl.it-api')
const client = new ReplitClient()
function btnStart()
const result = await client.run({
  output: (output) => console.log('Output:', output.trim()),
  timedOut: () => console.log('Timed out!'),
  installStart: () => console.log('Install start'),
  installOutput: (output) => console.log('Install output:', output.trim()),
  installEnd: () => console.log('Install end'),
  listen: (port) => console.log('Listening on port', port)
})
