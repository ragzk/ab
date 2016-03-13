
var configs = [];

export class dbConfig {
    database: string;
    user: string;
    password: string;

    
    constructor() {
        this.config();
    }
    //constructor(database: string, user: string, password: string) {
    //}

    public config() {
        if (configs) {
            this.database = "abproperties";
            this.user = "root";
            this.password = "MyNewPass";
            configs.push(dbConfig);
        }
        return configs[0];

    }
}

//export var dbConfigInstance = new dbConfig();
//export var instance = new dbConfig();