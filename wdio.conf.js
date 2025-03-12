// wdio.conf.js
exports.config = {
    // Runner settings
    runner: 'local',
    
    // Specify test files
    specs: [
        './test.js'
    ],
    
    // Define capabilities
    capabilities: [{
        maxInstances: 1,
        browserName: "chrome",
        browserVersion: '133',
        acceptInsecureCerts: true,
        "goog:chromeOptions": {args: ['headless', 'disable-gpu']},
    }],
    
    // Test configurations
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    // Test framework
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
