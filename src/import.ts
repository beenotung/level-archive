import Level from '@beenotung/level-ts'
import { iterateFileByLine } from '@beenotung/tslib/fs'

async function main() {
  const db = process.argv[2]
  const file = process.argv[3] || '-'
  const level = new Level(db)

  for (const line of iterateFileByLine(file)) {
    if (line.startsWith('[')) {
      const [key, value] = JSON.parse(line)
      await level.put(key, value)
    }
  }
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
