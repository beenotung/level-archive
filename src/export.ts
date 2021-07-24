#!/usr/bin/env node
import Level from '@beenotung/level-ts'
import * as fs from 'fs'

const levelFiles = ['CURRENT', 'LOCK', 'LOG']

async function main() {
  const db = process.argv[2]
  const file = process.argv[3] || '-'

  if (db === '-h' || db === '--help') {
    help()
    process.exit()
  }
  if (!db) {
    console.error('Error: missing path of db in argument')
    die()
  }
  if (!fs.existsSync(db)) {
    console.error(`Error: "${db}" does not exists`)
    die()
  }
  if (!fs.statSync(db).isDirectory()) {
    console.error(`Error: ${JSON.stringify(db)} is not a directory`)
    die()
  }
  const files = fs.readdirSync(db)
  if (!levelFiles.every(file => files.includes(file))) {
    console.error(`Error: ${JSON.stringify(db)} is not a leveldb directory`)
    die()
  }

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

function help() {
  console.log(`export-level-archive <db> <file>`)
}

function die() {
  help()
  process.exit(1)
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
