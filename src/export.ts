import Level from '@beenotung/level-ts'
import * as fs from 'fs'

async function main() {
  const db = process.argv[2]
  const file = process.argv[3] || '-'
  const level = new Level(db)
  const write = makeWrite()

  await level.eachSync({
    eachFn: data => {
      const text = JSON.stringify([data.key, data.value])
      write(text + '\n')
    },
  })

  function makeWrite() {
    if (file === '-') {
      return function write(chunk: string) {
        process.stdout.write(chunk)
      }
    }
    fs.writeFileSync(file, '')
    return function write(chunk: string) {
      fs.appendFileSync(file, chunk)
    }
  }
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
