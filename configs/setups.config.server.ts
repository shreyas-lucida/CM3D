import { EnvConfig } from '../models';
import { Configs } from "../configs";
import { REST_CONSTANTS } from '../utils/constants';
const _ = require('underscore');

class ConfigurationSetup {
    static INIT_STATUS = false;
    INITIALIZED = true;
    static CONFIG_RECORDS = `[]`;

    public init(fn: any) {

    }

    initConfigsByEvnironment = () => {
        this.retrieveConfigs((configs: any) => {
            this.domainUrlConfig(configs);
        });

        console.log('Configurations: ', Configs);
    }

    retrieveConfigs(callback: any) {
    }

    domainUrlConfig = (configs: any): void => {
        let config = _.find(configs, C => C.configName === 'DOMAIAN_INFO');
        if (config) {

            config = JSON.parse(config.configValue);
            console.log("Domain URL Intialized",config)
        }
        Configs.domainUrl = (config.domainUrl);
        
    }

}

const ConfigInitialize = new ConfigurationSetup();
export default ConfigInitialize;