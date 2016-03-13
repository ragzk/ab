var ormObject = [];

function orm() {

    if (ormObject) {
        return ormObject[0];
    }
    else {

        var sequelize = new Sequelize('abproperties', 'root', 'MyNewPass', {
            host: 'localhost',
            dialect: 'mysql',

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
        ormObject.push(sequelize);
        return ormObject[0];
    }
}

