let { execSync } = require('child_process')

function run(file) {
  try {
    execSync(`chmod +x "${file}"`)
  } catch (e) {
    // when chmod is not supported, e.g. on windows
    console.log(e)
  }
}

run('dist/export.js')
run('dist/import.js')
