var configs = [];
var dbConfig = (function () {
    function dbConfig() {
        this.config();
    }
    //constructor(database: string, user: string, password: string) {
    //}
    dbConfig.prototype.config = function () {
        if (configs) {
            this.database = "abproperties";
            this.user = "root";
            this.password = "MyNewPass";
            configs.push(dbConfig);
        }
        return configs[0];
    };
    return dbConfig;
})();
exports.dbConfig = dbConfig;
//export var dbConfigInstance = new dbConfig();
//export var instance = new dbConfig(); 
//# sourceMappingURL=dbConfig.js.map