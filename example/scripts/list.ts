#!/usr/bin/env ts-node
import Level from '@beenotung/level-ts'
import { catchMain } from '@beenotung/tslib/node'

async function main() {
  let level = new Level('db')
  await level.eachSync({ eachFn: data => console.log(data) })
}

catchMain(main())
