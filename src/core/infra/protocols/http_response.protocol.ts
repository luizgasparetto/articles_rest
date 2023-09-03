export type HttpResponseProtocol = {
  statusCode: number
  body: any
}

export function ok<T>(dto?: T): HttpResponseProtocol {
  return {
    statusCode: 200,
    body: dto,
  }
}

export function created(): HttpResponseProtocol {
  return {
    statusCode: 201,
    body: undefined,
  }
}

export function clientError(error: Error): HttpResponseProtocol {
  return {
    statusCode: 400,
    body: {
      error: error.message,
    },
  }
}

export function unauthorized(error: Error): HttpResponseProtocol {
  return {
    statusCode: 401,
    body: {
      error: error.message,
    },
  }
}

export function forbidden(error: Error): HttpResponseProtocol {
  return {
    statusCode: 403,
    body: {
      error: error.message,
    },
  }
}

export function notFound(error: Error): HttpResponseProtocol {
  return {
    statusCode: 404,
    body: {
      error: error.message,
    },
  }
}

export function conflict(error: Error): HttpResponseProtocol {
  return {
    statusCode: 409,
    body: {
      error: error.message,
    },
  }
}

export function tooMany(error: Error): HttpResponseProtocol {
  return {
    statusCode: 429,
    body: {
      error: error.message,
    },
  }
}

export function fail(error: Error) {
  console.log(error)

  return {
    statusCode: 500,
    body: {
      error: error.message,
    },
  }
}