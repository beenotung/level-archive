#!/usr/bin/env ts-node
import Level from '@beenotung/level-ts'
import { catchMain } from '@beenotung/tslib/node'

async function main() {
  let level = new Level('db')
  await level.put('a', 'apple')
  await level.put('b', 'banana')
  await level.put('c', 'cherry')
}

catchMain(main())
