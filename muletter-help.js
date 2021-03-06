'use strict';

const description = require('./package').description;
const version = require('./package').version;

module.exports.main = `
Usage: muletter [options] [command] [argument]
${description}

Commands 
  init              Check config.yml list.txt body.txt attachments
  test   <email>    Send letter to <email>
  send              Send letter to list.txt
  tail              Display last logs
  help   [command]  Output usage information of [command]

Options

  -h, --help        Output usage information
  -V, --version     Output the version number

Required files 
  
  config.yml
  body.(txt|html)
  list.txt

Optional attachments
  
  attachments/*
`;

module.exports.init = `
Usage: muletter init
Check if all parameters are defined in config.yml, if body.(txt|html), list.txt exist and get all attachments

Example of config.yml

smtp_auth:
  user: username
  pass: password
smtp_service: GoDaddy
letter_from: letter name <username@hostname.com>
letter_subject: subject letter
`;

module.exports.test = `
Usage: muletter test <email>
Send the letter to <email>
`

module.exports.send = `
Usage: muletter send
Send the letter test to list.txt
`

module.exports.tail = `
Usage: muletter tail
Display last logs
`

module.exports.version = version;
