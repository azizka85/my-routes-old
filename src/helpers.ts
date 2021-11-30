export function condition(expect: boolean, trueValue: string, falseValue: string) {
  return expect ? trueValue : falseValue;
}

export function getQueryParameters(
  query: {[key: string]: any}
) {
  const parameters: string[] = [];

  for(let key of Object.keys(query)) {
    parameters.push(`${key}=${query[key]}`);
  }

  return parameters.join('&');  
}

export function setQueryParameter(
  query: {[key: string]: any}, 
  parameter: string, 
  value: string
) {
  const data = {...query};

  data[parameter] = value;

  return getQueryParameters(data);
}

export function toggleQueryParameter(
  query: {[key: string]: any}, 
  parameter: string
) {
  const data = {...query};

  if(parameter in data) {
    delete data[parameter];

    return getQueryParameters(data);
  }

  return setQueryParameter(data, parameter, '1');
}
