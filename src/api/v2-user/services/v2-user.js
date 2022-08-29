'use strict';

/**
 * v2-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::v2-user.v2-user');
