function getQueryParameters(query) {
    const parameters = [];
    for (let key of Object.keys(query)) {
        parameters.push(`${key}=${query[key]}`);
    }
    return parameters.join('&');
}
function setQueryParameter(query, parameter, value) {
    const data = { ...query };
    data[parameter] = value;
    return getQueryParameters(data);
}
function toggleQueryParameter(query, parameter) {
    const data = { ...query };
    if (parameter in data) {
        delete data[parameter];
        return getQueryParameters(data);
    }
    return setQueryParameter(data, parameter, '1');
}

export { toggleQueryParameter as t };
//# sourceMappingURL=helpers.js.map
