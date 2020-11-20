"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs");
const _ = require('underscore');
class ConfigurationSetup {
    constructor() {
        this.INITIALIZED = true;
        this.initConfigsByEvnironment = () => {
            this.retrieveConfigs((configs) => {
                this.domainUrlConfig(configs);
            });
            console.log('Configurations: ', configs_1.Configs);
        };
        this.domainUrlConfig = (configs) => {
            let config = _.find(configs, C => C.configName === 'DOMAIAN_INFO');
            if (config) {
                config = JSON.parse(config.configValue);
                console.log("Domain URL Intialized", config);
            }
            configs_1.Configs.domainUrl = (config.domainUrl);
        };
    }
    init(fn) {
    }
    retrieveConfigs(callback) {
    }
}
ConfigurationSetup.INIT_STATUS = false;
ConfigurationSetup.CONFIG_RECORDS = `[]`;
const ConfigInitialize = new ConfigurationSetup();
exports.default = ConfigInitialize;
//# sourceMappingURL=setups.config.server.js.map