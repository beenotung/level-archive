# level-archive cli

Cli tool to import/export leveldb into txt file for archiving and transmission.

[![npm Package Version](https://img.shields.io/npm/v/level-archive.svg?maxAge=3600)](https://www.npmjs.com/package/level-archive)

Support read from file/stdin, and write to file/stdout. Which can be piped to/from gzip

## Installation
```bash
npm install --global level-archive
```

## Usage
Export from leveldb to file:
```bash
# export as plain text
export-level-archive ./db ./data/db.txt

# export as compressed binary
export-level-archive ./db | gzip > ./data/db.txt.gz
```

Import from file to leveldb:
```bash
# import from plain text
import-level-archive ./db ./data/db.txt

# import from compressed binary
cat ./data/db.txt.gz | gzip -d | export-level-archive ./db
```

More details see: [example](./example)
