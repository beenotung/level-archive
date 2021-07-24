#!/usr/bin/env node
import Level from '@beenotung/level-ts'
import { iterateFileByLine } from '@beenotung/tslib/fs'

async function main() {
  const db = process.argv[2]
  const file = process.argv[3] || '/dev/stdin'

  if (db === '-h' || db === '--help') {
    help()
    process.exit()
  }
  if (!db) {
    console.error(`Error: missing path of db in argument`)
    die()
  }

  const level = new Level(db)

  for (const line of iterateFileByLine(file)) {
    if (line.startsWith('[')) {
      const [key, value] = JSON.parse(line)
      await level.put(key, value)
    }
  }
}

function help() {
  console.log(`import-level-archive <db> <file>`)
}

function die() {
  help()
  process.exit(1)
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
