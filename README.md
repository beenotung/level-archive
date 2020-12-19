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
export-level-archive ./db ./data/db.txt
```

Import from file to leveldb:
```bash
import-level-archive ./db ./data/db.txt
```

More details see: [example](./example)
