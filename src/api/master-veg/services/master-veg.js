'use strict';

/**
 * master-veg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::master-veg.master-veg');
