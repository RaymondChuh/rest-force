import { SF_API_VERSION, SF_ENV, SF_API_TYPE } from './constants';

const connection = attr => {
  return new Connection(attr);
};

const RestForce = {
  connection: connection
};

export default RestForce;

class Connection {
  constructor({
    accessToken,
    refreshToken,
    instanceUrl,
    env = SF_ENV.PRODUCTION,
    apiVersion = SF_API_VERSION
  }) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.instanceUrl = instanceUrl;
    this.apiVersion = apiVersion;
    this.env = env;
  }

  sobject(sobjectType) {
    return new SObject(sobjectType, this);
  }
}

const constructEndpoint = (instanceUrl, version, apiType, sobjectType) => {
  return (
    instanceUrl +
    '/services/data/' +
    version +
    '/' +
    apiType +
    '/' +
    sobjectType
  );
};

class SObject {
  constructor(sobjectType, connection) {
    this.sobjectType = sobjectType;
    this.connection = connection;
  }

  retrieve(id) {
    const init = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.connection.accessToken,
        'Content-Type': 'application/json'
      },
      cache: 'default'
    };
    const url =
      constructEndpoint(
        this.connection.instanceUrl,
        this.connection.apiVersion,
        SF_API_TYPE.SOBJECTS,
        this.sobjectType
      ) +
      '/' +
      id;
    return fetch(url, init);
  }
}
