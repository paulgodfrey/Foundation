/*
 * This file does the following:
 * - Handles loading environment variables with sensible defaults.
 * - Exports environment configuration to be used throughout the application.
 */

/**
 * Load environment variables from .env file, where API keys and passwords are configured
 */
require('dotenv').config({ path: '.env' })

/**
 * Process environmental variables
 */
const environment = process.env.ENVIRONMENT
const isDev = environment === 'development' || environment === 'qa'
const isStaging = environment === 'staging'
const isProd = environment === 'production'
const isTest = environment === 'test'

const expressPort = isTest ? 8888 : process.env.PORT || 8080

export { environment, expressPort, isDev, isProd, isStaging, isTest }
