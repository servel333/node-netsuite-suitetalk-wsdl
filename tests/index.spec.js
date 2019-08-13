#!/usr/bin/env mocha

/* eslint-env node, mocha */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

// const _ = require('lodash');
const chai = require('chai');
// const moment = require('moment');
// const Promise = require('bluebird');
// const sinon = require('sinon');
const index = require('../.build/tests/index.js');

const expect = chai.expect;
// const assert = chai.assert;
// chai.should();

describe('netsuite-suitetalk-wsdl', function () {
  describe('index.js', function () {
    it('.version', function () {
      expect(index.version).to.equal('0000_0_0');
    });
  });
});
