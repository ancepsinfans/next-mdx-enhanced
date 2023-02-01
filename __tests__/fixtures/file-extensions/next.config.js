/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const withMdxEnhanced = require('../../..')

module.exports = withMdxEnhanced({
  fileExtensions: ['mdx', 'md'],
})()
