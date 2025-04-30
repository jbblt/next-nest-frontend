export class GraphQLRequestError extends Error {
  public status?: number;
  public originalError?: any;

  constructor(message: string, status?: number, originalError?: any) {
    super(message);
    this.name = "GraphQLRequestError";
    this.status = status;
    this.originalError = originalError;
  }
}
