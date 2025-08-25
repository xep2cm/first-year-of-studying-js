// falsy - это значние, которое при использовании в логическом значении дают нам false
// например: при приведении к типу булиан или при сравнении в блоке if

function valueToBoolean(value) {
    console.log(Boolean(value))
}

valueToBoolean(false);
valueToBoolean("");
valueToBoolean(0);
valueToBoolean(null);
valueToBoolean(undefined);
valueToBoolean(NaN);
valueToBoolean(-0);
valueToBoolean(0n);

