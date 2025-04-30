export class GraphQLRequestError extends Error {
  public status?: number;
  public originalError?: any;

  constructor(message: string, status?: number, originalError?: any) {
    const finalMessage =
      status === 503
        ? "⏳ This portfolio uses free-tier hosting. Please retry in a few seconds... or fund the project with your CB 😄"
        : message;
    super(finalMessage);
    this.name = "GraphQLRequestError";
    this.status = status;
    this.originalError = originalError;
  }
}
