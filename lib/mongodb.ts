import mongoose from "mongoose";

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cache = (globalThis.mongooseCache ??= {
  connection: null,
  promise: null,
});

export class DatabaseConnectionError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "DatabaseConnectionError";
  }
}

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new DatabaseConnectionError(
      "MONGODB_URI is not configured. Add it to the environment before using the blog.",
    );
  }

  if (cache.connection) {
    return cache.connection;
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri).catch((error: unknown) => {
      cache.promise = null;
      throw new DatabaseConnectionError("Could not connect to MongoDB.", {
        cause: error,
      });
    });
  }

  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.promise = null;
    throw error;
  }
}