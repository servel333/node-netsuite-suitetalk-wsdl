#!/usr/bin/env node

/* eslint-disable no-alert */
/* eslint-disable no-console */

const fs = require('fs');
const Handlebars = require('handlebars');
const yargs = require('yargs');

yargs // eslint-disable-line no-unused-expressions
  .command({
    command: '$0 <wsdlVersion> <source> <target>',
    builder: y => y
      .option('package-version', {})
      .positional('wsdlVersion', {})
      .positional('source', {})
      .positional('target', {}),
    handler: (argv) => {
      const regex = /(\d{4})_(\d)_(\d)/;
      const year = argv.wsdlVersion.match(regex)[1];
      const vMajor = argv.wsdlVersion.match(regex)[2];
      const vMinor = argv.wsdlVersion.match(regex)[3];
      // console.log({ year, vMajor, vMinor });

      const sourceData = fs.readFileSync(argv.source, 'utf8');

      const template = Handlebars.compile(sourceData);
      const context = {
        wsdl_year: year,
        wsdl_major: `${vMajor}`,
        wsdl_minor: `${vMinor}`,
        package_version: argv['package-version'],
      };

      const targetData = template(context);

      fs.writeFileSync(argv.target, targetData);
    },
  })
  .strict()
  .help()
  .argv;


// const argv = yargs
//   .usage('$0 --version <version> <source> <target>')
//   .option('version', { type: 'string' })
//   .argv;
