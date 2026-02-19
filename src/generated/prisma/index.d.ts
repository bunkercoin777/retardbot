
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RbTrade
 * 
 */
export type RbTrade = $Result.DefaultSelection<Prisma.$RbTradePayload>
/**
 * Model RbThinking
 * 
 */
export type RbThinking = $Result.DefaultSelection<Prisma.$RbThinkingPayload>
/**
 * Model RbStrategy
 * 
 */
export type RbStrategy = $Result.DefaultSelection<Prisma.$RbStrategyPayload>
/**
 * Model RbBotState
 * 
 */
export type RbBotState = $Result.DefaultSelection<Prisma.$RbBotStatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RbTrades
 * const rbTrades = await prisma.rbTrade.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more RbTrades
   * const rbTrades = await prisma.rbTrade.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rbTrade`: Exposes CRUD operations for the **RbTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RbTrades
    * const rbTrades = await prisma.rbTrade.findMany()
    * ```
    */
  get rbTrade(): Prisma.RbTradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rbThinking`: Exposes CRUD operations for the **RbThinking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RbThinkings
    * const rbThinkings = await prisma.rbThinking.findMany()
    * ```
    */
  get rbThinking(): Prisma.RbThinkingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rbStrategy`: Exposes CRUD operations for the **RbStrategy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RbStrategies
    * const rbStrategies = await prisma.rbStrategy.findMany()
    * ```
    */
  get rbStrategy(): Prisma.RbStrategyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rbBotState`: Exposes CRUD operations for the **RbBotState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RbBotStates
    * const rbBotStates = await prisma.rbBotState.findMany()
    * ```
    */
  get rbBotState(): Prisma.RbBotStateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RbTrade: 'RbTrade',
    RbThinking: 'RbThinking',
    RbStrategy: 'RbStrategy',
    RbBotState: 'RbBotState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rbTrade" | "rbThinking" | "rbStrategy" | "rbBotState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RbTrade: {
        payload: Prisma.$RbTradePayload<ExtArgs>
        fields: Prisma.RbTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RbTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RbTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>
          }
          findFirst: {
            args: Prisma.RbTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RbTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>
          }
          findMany: {
            args: Prisma.RbTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>[]
          }
          create: {
            args: Prisma.RbTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>
          }
          createMany: {
            args: Prisma.RbTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RbTradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>[]
          }
          delete: {
            args: Prisma.RbTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>
          }
          update: {
            args: Prisma.RbTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>
          }
          deleteMany: {
            args: Prisma.RbTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RbTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RbTradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>[]
          }
          upsert: {
            args: Prisma.RbTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbTradePayload>
          }
          aggregate: {
            args: Prisma.RbTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRbTrade>
          }
          groupBy: {
            args: Prisma.RbTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RbTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RbTradeCountArgs<ExtArgs>
            result: $Utils.Optional<RbTradeCountAggregateOutputType> | number
          }
        }
      }
      RbThinking: {
        payload: Prisma.$RbThinkingPayload<ExtArgs>
        fields: Prisma.RbThinkingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RbThinkingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RbThinkingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>
          }
          findFirst: {
            args: Prisma.RbThinkingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RbThinkingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>
          }
          findMany: {
            args: Prisma.RbThinkingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>[]
          }
          create: {
            args: Prisma.RbThinkingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>
          }
          createMany: {
            args: Prisma.RbThinkingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RbThinkingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>[]
          }
          delete: {
            args: Prisma.RbThinkingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>
          }
          update: {
            args: Prisma.RbThinkingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>
          }
          deleteMany: {
            args: Prisma.RbThinkingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RbThinkingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RbThinkingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>[]
          }
          upsert: {
            args: Prisma.RbThinkingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbThinkingPayload>
          }
          aggregate: {
            args: Prisma.RbThinkingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRbThinking>
          }
          groupBy: {
            args: Prisma.RbThinkingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RbThinkingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RbThinkingCountArgs<ExtArgs>
            result: $Utils.Optional<RbThinkingCountAggregateOutputType> | number
          }
        }
      }
      RbStrategy: {
        payload: Prisma.$RbStrategyPayload<ExtArgs>
        fields: Prisma.RbStrategyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RbStrategyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RbStrategyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>
          }
          findFirst: {
            args: Prisma.RbStrategyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RbStrategyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>
          }
          findMany: {
            args: Prisma.RbStrategyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>[]
          }
          create: {
            args: Prisma.RbStrategyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>
          }
          createMany: {
            args: Prisma.RbStrategyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RbStrategyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>[]
          }
          delete: {
            args: Prisma.RbStrategyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>
          }
          update: {
            args: Prisma.RbStrategyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>
          }
          deleteMany: {
            args: Prisma.RbStrategyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RbStrategyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RbStrategyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>[]
          }
          upsert: {
            args: Prisma.RbStrategyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbStrategyPayload>
          }
          aggregate: {
            args: Prisma.RbStrategyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRbStrategy>
          }
          groupBy: {
            args: Prisma.RbStrategyGroupByArgs<ExtArgs>
            result: $Utils.Optional<RbStrategyGroupByOutputType>[]
          }
          count: {
            args: Prisma.RbStrategyCountArgs<ExtArgs>
            result: $Utils.Optional<RbStrategyCountAggregateOutputType> | number
          }
        }
      }
      RbBotState: {
        payload: Prisma.$RbBotStatePayload<ExtArgs>
        fields: Prisma.RbBotStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RbBotStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RbBotStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>
          }
          findFirst: {
            args: Prisma.RbBotStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RbBotStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>
          }
          findMany: {
            args: Prisma.RbBotStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>[]
          }
          create: {
            args: Prisma.RbBotStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>
          }
          createMany: {
            args: Prisma.RbBotStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RbBotStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>[]
          }
          delete: {
            args: Prisma.RbBotStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>
          }
          update: {
            args: Prisma.RbBotStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>
          }
          deleteMany: {
            args: Prisma.RbBotStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RbBotStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RbBotStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>[]
          }
          upsert: {
            args: Prisma.RbBotStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RbBotStatePayload>
          }
          aggregate: {
            args: Prisma.RbBotStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRbBotState>
          }
          groupBy: {
            args: Prisma.RbBotStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RbBotStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RbBotStateCountArgs<ExtArgs>
            result: $Utils.Optional<RbBotStateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    rbTrade?: RbTradeOmit
    rbThinking?: RbThinkingOmit
    rbStrategy?: RbStrategyOmit
    rbBotState?: RbBotStateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model RbTrade
   */

  export type AggregateRbTrade = {
    _count: RbTradeCountAggregateOutputType | null
    _avg: RbTradeAvgAggregateOutputType | null
    _sum: RbTradeSumAggregateOutputType | null
    _min: RbTradeMinAggregateOutputType | null
    _max: RbTradeMaxAggregateOutputType | null
  }

  export type RbTradeAvgAggregateOutputType = {
    amountSol: number | null
    bondingProgress: number | null
    marketCap: number | null
    replies: number | null
    pnl: number | null
    pnlPercent: number | null
  }

  export type RbTradeSumAggregateOutputType = {
    amountSol: number | null
    bondingProgress: number | null
    marketCap: number | null
    replies: number | null
    pnl: number | null
    pnlPercent: number | null
  }

  export type RbTradeMinAggregateOutputType = {
    id: string | null
    action: string | null
    tokenMint: string | null
    tokenSymbol: string | null
    tokenName: string | null
    amountSol: number | null
    tokenAmount: string | null
    bondingProgress: number | null
    marketCap: number | null
    replies: number | null
    pnl: number | null
    pnlPercent: number | null
    txSignature: string | null
    reasoning: string | null
    createdAt: Date | null
  }

  export type RbTradeMaxAggregateOutputType = {
    id: string | null
    action: string | null
    tokenMint: string | null
    tokenSymbol: string | null
    tokenName: string | null
    amountSol: number | null
    tokenAmount: string | null
    bondingProgress: number | null
    marketCap: number | null
    replies: number | null
    pnl: number | null
    pnlPercent: number | null
    txSignature: string | null
    reasoning: string | null
    createdAt: Date | null
  }

  export type RbTradeCountAggregateOutputType = {
    id: number
    action: number
    tokenMint: number
    tokenSymbol: number
    tokenName: number
    amountSol: number
    tokenAmount: number
    bondingProgress: number
    marketCap: number
    replies: number
    pnl: number
    pnlPercent: number
    txSignature: number
    reasoning: number
    createdAt: number
    _all: number
  }


  export type RbTradeAvgAggregateInputType = {
    amountSol?: true
    bondingProgress?: true
    marketCap?: true
    replies?: true
    pnl?: true
    pnlPercent?: true
  }

  export type RbTradeSumAggregateInputType = {
    amountSol?: true
    bondingProgress?: true
    marketCap?: true
    replies?: true
    pnl?: true
    pnlPercent?: true
  }

  export type RbTradeMinAggregateInputType = {
    id?: true
    action?: true
    tokenMint?: true
    tokenSymbol?: true
    tokenName?: true
    amountSol?: true
    tokenAmount?: true
    bondingProgress?: true
    marketCap?: true
    replies?: true
    pnl?: true
    pnlPercent?: true
    txSignature?: true
    reasoning?: true
    createdAt?: true
  }

  export type RbTradeMaxAggregateInputType = {
    id?: true
    action?: true
    tokenMint?: true
    tokenSymbol?: true
    tokenName?: true
    amountSol?: true
    tokenAmount?: true
    bondingProgress?: true
    marketCap?: true
    replies?: true
    pnl?: true
    pnlPercent?: true
    txSignature?: true
    reasoning?: true
    createdAt?: true
  }

  export type RbTradeCountAggregateInputType = {
    id?: true
    action?: true
    tokenMint?: true
    tokenSymbol?: true
    tokenName?: true
    amountSol?: true
    tokenAmount?: true
    bondingProgress?: true
    marketCap?: true
    replies?: true
    pnl?: true
    pnlPercent?: true
    txSignature?: true
    reasoning?: true
    createdAt?: true
    _all?: true
  }

  export type RbTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbTrade to aggregate.
     */
    where?: RbTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbTrades to fetch.
     */
    orderBy?: RbTradeOrderByWithRelationInput | RbTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RbTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RbTrades
    **/
    _count?: true | RbTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RbTradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RbTradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RbTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RbTradeMaxAggregateInputType
  }

  export type GetRbTradeAggregateType<T extends RbTradeAggregateArgs> = {
        [P in keyof T & keyof AggregateRbTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRbTrade[P]>
      : GetScalarType<T[P], AggregateRbTrade[P]>
  }




  export type RbTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RbTradeWhereInput
    orderBy?: RbTradeOrderByWithAggregationInput | RbTradeOrderByWithAggregationInput[]
    by: RbTradeScalarFieldEnum[] | RbTradeScalarFieldEnum
    having?: RbTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RbTradeCountAggregateInputType | true
    _avg?: RbTradeAvgAggregateInputType
    _sum?: RbTradeSumAggregateInputType
    _min?: RbTradeMinAggregateInputType
    _max?: RbTradeMaxAggregateInputType
  }

  export type RbTradeGroupByOutputType = {
    id: string
    action: string
    tokenMint: string
    tokenSymbol: string
    tokenName: string
    amountSol: number
    tokenAmount: string
    bondingProgress: number | null
    marketCap: number | null
    replies: number | null
    pnl: number | null
    pnlPercent: number | null
    txSignature: string | null
    reasoning: string | null
    createdAt: Date
    _count: RbTradeCountAggregateOutputType | null
    _avg: RbTradeAvgAggregateOutputType | null
    _sum: RbTradeSumAggregateOutputType | null
    _min: RbTradeMinAggregateOutputType | null
    _max: RbTradeMaxAggregateOutputType | null
  }

  type GetRbTradeGroupByPayload<T extends RbTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RbTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RbTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RbTradeGroupByOutputType[P]>
            : GetScalarType<T[P], RbTradeGroupByOutputType[P]>
        }
      >
    >


  export type RbTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    tokenMint?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    amountSol?: boolean
    tokenAmount?: boolean
    bondingProgress?: boolean
    marketCap?: boolean
    replies?: boolean
    pnl?: boolean
    pnlPercent?: boolean
    txSignature?: boolean
    reasoning?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbTrade"]>

  export type RbTradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    tokenMint?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    amountSol?: boolean
    tokenAmount?: boolean
    bondingProgress?: boolean
    marketCap?: boolean
    replies?: boolean
    pnl?: boolean
    pnlPercent?: boolean
    txSignature?: boolean
    reasoning?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbTrade"]>

  export type RbTradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    tokenMint?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    amountSol?: boolean
    tokenAmount?: boolean
    bondingProgress?: boolean
    marketCap?: boolean
    replies?: boolean
    pnl?: boolean
    pnlPercent?: boolean
    txSignature?: boolean
    reasoning?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbTrade"]>

  export type RbTradeSelectScalar = {
    id?: boolean
    action?: boolean
    tokenMint?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    amountSol?: boolean
    tokenAmount?: boolean
    bondingProgress?: boolean
    marketCap?: boolean
    replies?: boolean
    pnl?: boolean
    pnlPercent?: boolean
    txSignature?: boolean
    reasoning?: boolean
    createdAt?: boolean
  }

  export type RbTradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "tokenMint" | "tokenSymbol" | "tokenName" | "amountSol" | "tokenAmount" | "bondingProgress" | "marketCap" | "replies" | "pnl" | "pnlPercent" | "txSignature" | "reasoning" | "createdAt", ExtArgs["result"]["rbTrade"]>

  export type $RbTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RbTrade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      tokenMint: string
      tokenSymbol: string
      tokenName: string
      amountSol: number
      tokenAmount: string
      bondingProgress: number | null
      marketCap: number | null
      replies: number | null
      pnl: number | null
      pnlPercent: number | null
      txSignature: string | null
      reasoning: string | null
      createdAt: Date
    }, ExtArgs["result"]["rbTrade"]>
    composites: {}
  }

  type RbTradeGetPayload<S extends boolean | null | undefined | RbTradeDefaultArgs> = $Result.GetResult<Prisma.$RbTradePayload, S>

  type RbTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RbTradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RbTradeCountAggregateInputType | true
    }

  export interface RbTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RbTrade'], meta: { name: 'RbTrade' } }
    /**
     * Find zero or one RbTrade that matches the filter.
     * @param {RbTradeFindUniqueArgs} args - Arguments to find a RbTrade
     * @example
     * // Get one RbTrade
     * const rbTrade = await prisma.rbTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RbTradeFindUniqueArgs>(args: SelectSubset<T, RbTradeFindUniqueArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RbTrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RbTradeFindUniqueOrThrowArgs} args - Arguments to find a RbTrade
     * @example
     * // Get one RbTrade
     * const rbTrade = await prisma.rbTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RbTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, RbTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbTradeFindFirstArgs} args - Arguments to find a RbTrade
     * @example
     * // Get one RbTrade
     * const rbTrade = await prisma.rbTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RbTradeFindFirstArgs>(args?: SelectSubset<T, RbTradeFindFirstArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbTradeFindFirstOrThrowArgs} args - Arguments to find a RbTrade
     * @example
     * // Get one RbTrade
     * const rbTrade = await prisma.rbTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RbTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, RbTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RbTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RbTrades
     * const rbTrades = await prisma.rbTrade.findMany()
     * 
     * // Get first 10 RbTrades
     * const rbTrades = await prisma.rbTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rbTradeWithIdOnly = await prisma.rbTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RbTradeFindManyArgs>(args?: SelectSubset<T, RbTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RbTrade.
     * @param {RbTradeCreateArgs} args - Arguments to create a RbTrade.
     * @example
     * // Create one RbTrade
     * const RbTrade = await prisma.rbTrade.create({
     *   data: {
     *     // ... data to create a RbTrade
     *   }
     * })
     * 
     */
    create<T extends RbTradeCreateArgs>(args: SelectSubset<T, RbTradeCreateArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RbTrades.
     * @param {RbTradeCreateManyArgs} args - Arguments to create many RbTrades.
     * @example
     * // Create many RbTrades
     * const rbTrade = await prisma.rbTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RbTradeCreateManyArgs>(args?: SelectSubset<T, RbTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RbTrades and returns the data saved in the database.
     * @param {RbTradeCreateManyAndReturnArgs} args - Arguments to create many RbTrades.
     * @example
     * // Create many RbTrades
     * const rbTrade = await prisma.rbTrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RbTrades and only return the `id`
     * const rbTradeWithIdOnly = await prisma.rbTrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RbTradeCreateManyAndReturnArgs>(args?: SelectSubset<T, RbTradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RbTrade.
     * @param {RbTradeDeleteArgs} args - Arguments to delete one RbTrade.
     * @example
     * // Delete one RbTrade
     * const RbTrade = await prisma.rbTrade.delete({
     *   where: {
     *     // ... filter to delete one RbTrade
     *   }
     * })
     * 
     */
    delete<T extends RbTradeDeleteArgs>(args: SelectSubset<T, RbTradeDeleteArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RbTrade.
     * @param {RbTradeUpdateArgs} args - Arguments to update one RbTrade.
     * @example
     * // Update one RbTrade
     * const rbTrade = await prisma.rbTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RbTradeUpdateArgs>(args: SelectSubset<T, RbTradeUpdateArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RbTrades.
     * @param {RbTradeDeleteManyArgs} args - Arguments to filter RbTrades to delete.
     * @example
     * // Delete a few RbTrades
     * const { count } = await prisma.rbTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RbTradeDeleteManyArgs>(args?: SelectSubset<T, RbTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RbTrades
     * const rbTrade = await prisma.rbTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RbTradeUpdateManyArgs>(args: SelectSubset<T, RbTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbTrades and returns the data updated in the database.
     * @param {RbTradeUpdateManyAndReturnArgs} args - Arguments to update many RbTrades.
     * @example
     * // Update many RbTrades
     * const rbTrade = await prisma.rbTrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RbTrades and only return the `id`
     * const rbTradeWithIdOnly = await prisma.rbTrade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RbTradeUpdateManyAndReturnArgs>(args: SelectSubset<T, RbTradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RbTrade.
     * @param {RbTradeUpsertArgs} args - Arguments to update or create a RbTrade.
     * @example
     * // Update or create a RbTrade
     * const rbTrade = await prisma.rbTrade.upsert({
     *   create: {
     *     // ... data to create a RbTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RbTrade we want to update
     *   }
     * })
     */
    upsert<T extends RbTradeUpsertArgs>(args: SelectSubset<T, RbTradeUpsertArgs<ExtArgs>>): Prisma__RbTradeClient<$Result.GetResult<Prisma.$RbTradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RbTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbTradeCountArgs} args - Arguments to filter RbTrades to count.
     * @example
     * // Count the number of RbTrades
     * const count = await prisma.rbTrade.count({
     *   where: {
     *     // ... the filter for the RbTrades we want to count
     *   }
     * })
    **/
    count<T extends RbTradeCountArgs>(
      args?: Subset<T, RbTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RbTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RbTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RbTradeAggregateArgs>(args: Subset<T, RbTradeAggregateArgs>): Prisma.PrismaPromise<GetRbTradeAggregateType<T>>

    /**
     * Group by RbTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbTradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RbTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RbTradeGroupByArgs['orderBy'] }
        : { orderBy?: RbTradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RbTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRbTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RbTrade model
   */
  readonly fields: RbTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RbTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RbTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RbTrade model
   */
  interface RbTradeFieldRefs {
    readonly id: FieldRef<"RbTrade", 'String'>
    readonly action: FieldRef<"RbTrade", 'String'>
    readonly tokenMint: FieldRef<"RbTrade", 'String'>
    readonly tokenSymbol: FieldRef<"RbTrade", 'String'>
    readonly tokenName: FieldRef<"RbTrade", 'String'>
    readonly amountSol: FieldRef<"RbTrade", 'Float'>
    readonly tokenAmount: FieldRef<"RbTrade", 'String'>
    readonly bondingProgress: FieldRef<"RbTrade", 'Float'>
    readonly marketCap: FieldRef<"RbTrade", 'Float'>
    readonly replies: FieldRef<"RbTrade", 'Int'>
    readonly pnl: FieldRef<"RbTrade", 'Float'>
    readonly pnlPercent: FieldRef<"RbTrade", 'Float'>
    readonly txSignature: FieldRef<"RbTrade", 'String'>
    readonly reasoning: FieldRef<"RbTrade", 'String'>
    readonly createdAt: FieldRef<"RbTrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RbTrade findUnique
   */
  export type RbTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * Filter, which RbTrade to fetch.
     */
    where: RbTradeWhereUniqueInput
  }

  /**
   * RbTrade findUniqueOrThrow
   */
  export type RbTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * Filter, which RbTrade to fetch.
     */
    where: RbTradeWhereUniqueInput
  }

  /**
   * RbTrade findFirst
   */
  export type RbTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * Filter, which RbTrade to fetch.
     */
    where?: RbTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbTrades to fetch.
     */
    orderBy?: RbTradeOrderByWithRelationInput | RbTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbTrades.
     */
    cursor?: RbTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbTrades.
     */
    distinct?: RbTradeScalarFieldEnum | RbTradeScalarFieldEnum[]
  }

  /**
   * RbTrade findFirstOrThrow
   */
  export type RbTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * Filter, which RbTrade to fetch.
     */
    where?: RbTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbTrades to fetch.
     */
    orderBy?: RbTradeOrderByWithRelationInput | RbTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbTrades.
     */
    cursor?: RbTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbTrades.
     */
    distinct?: RbTradeScalarFieldEnum | RbTradeScalarFieldEnum[]
  }

  /**
   * RbTrade findMany
   */
  export type RbTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * Filter, which RbTrades to fetch.
     */
    where?: RbTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbTrades to fetch.
     */
    orderBy?: RbTradeOrderByWithRelationInput | RbTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RbTrades.
     */
    cursor?: RbTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbTrades.
     */
    skip?: number
    distinct?: RbTradeScalarFieldEnum | RbTradeScalarFieldEnum[]
  }

  /**
   * RbTrade create
   */
  export type RbTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * The data needed to create a RbTrade.
     */
    data: XOR<RbTradeCreateInput, RbTradeUncheckedCreateInput>
  }

  /**
   * RbTrade createMany
   */
  export type RbTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RbTrades.
     */
    data: RbTradeCreateManyInput | RbTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbTrade createManyAndReturn
   */
  export type RbTradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * The data used to create many RbTrades.
     */
    data: RbTradeCreateManyInput | RbTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbTrade update
   */
  export type RbTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * The data needed to update a RbTrade.
     */
    data: XOR<RbTradeUpdateInput, RbTradeUncheckedUpdateInput>
    /**
     * Choose, which RbTrade to update.
     */
    where: RbTradeWhereUniqueInput
  }

  /**
   * RbTrade updateMany
   */
  export type RbTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RbTrades.
     */
    data: XOR<RbTradeUpdateManyMutationInput, RbTradeUncheckedUpdateManyInput>
    /**
     * Filter which RbTrades to update
     */
    where?: RbTradeWhereInput
    /**
     * Limit how many RbTrades to update.
     */
    limit?: number
  }

  /**
   * RbTrade updateManyAndReturn
   */
  export type RbTradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * The data used to update RbTrades.
     */
    data: XOR<RbTradeUpdateManyMutationInput, RbTradeUncheckedUpdateManyInput>
    /**
     * Filter which RbTrades to update
     */
    where?: RbTradeWhereInput
    /**
     * Limit how many RbTrades to update.
     */
    limit?: number
  }

  /**
   * RbTrade upsert
   */
  export type RbTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * The filter to search for the RbTrade to update in case it exists.
     */
    where: RbTradeWhereUniqueInput
    /**
     * In case the RbTrade found by the `where` argument doesn't exist, create a new RbTrade with this data.
     */
    create: XOR<RbTradeCreateInput, RbTradeUncheckedCreateInput>
    /**
     * In case the RbTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RbTradeUpdateInput, RbTradeUncheckedUpdateInput>
  }

  /**
   * RbTrade delete
   */
  export type RbTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
    /**
     * Filter which RbTrade to delete.
     */
    where: RbTradeWhereUniqueInput
  }

  /**
   * RbTrade deleteMany
   */
  export type RbTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbTrades to delete
     */
    where?: RbTradeWhereInput
    /**
     * Limit how many RbTrades to delete.
     */
    limit?: number
  }

  /**
   * RbTrade without action
   */
  export type RbTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbTrade
     */
    select?: RbTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbTrade
     */
    omit?: RbTradeOmit<ExtArgs> | null
  }


  /**
   * Model RbThinking
   */

  export type AggregateRbThinking = {
    _count: RbThinkingCountAggregateOutputType | null
    _min: RbThinkingMinAggregateOutputType | null
    _max: RbThinkingMaxAggregateOutputType | null
  }

  export type RbThinkingMinAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    createdAt: Date | null
  }

  export type RbThinkingMaxAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    createdAt: Date | null
  }

  export type RbThinkingCountAggregateOutputType = {
    id: number
    type: number
    message: number
    createdAt: number
    _all: number
  }


  export type RbThinkingMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    createdAt?: true
  }

  export type RbThinkingMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    createdAt?: true
  }

  export type RbThinkingCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type RbThinkingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbThinking to aggregate.
     */
    where?: RbThinkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbThinkings to fetch.
     */
    orderBy?: RbThinkingOrderByWithRelationInput | RbThinkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RbThinkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbThinkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbThinkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RbThinkings
    **/
    _count?: true | RbThinkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RbThinkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RbThinkingMaxAggregateInputType
  }

  export type GetRbThinkingAggregateType<T extends RbThinkingAggregateArgs> = {
        [P in keyof T & keyof AggregateRbThinking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRbThinking[P]>
      : GetScalarType<T[P], AggregateRbThinking[P]>
  }




  export type RbThinkingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RbThinkingWhereInput
    orderBy?: RbThinkingOrderByWithAggregationInput | RbThinkingOrderByWithAggregationInput[]
    by: RbThinkingScalarFieldEnum[] | RbThinkingScalarFieldEnum
    having?: RbThinkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RbThinkingCountAggregateInputType | true
    _min?: RbThinkingMinAggregateInputType
    _max?: RbThinkingMaxAggregateInputType
  }

  export type RbThinkingGroupByOutputType = {
    id: string
    type: string
    message: string
    createdAt: Date
    _count: RbThinkingCountAggregateOutputType | null
    _min: RbThinkingMinAggregateOutputType | null
    _max: RbThinkingMaxAggregateOutputType | null
  }

  type GetRbThinkingGroupByPayload<T extends RbThinkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RbThinkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RbThinkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RbThinkingGroupByOutputType[P]>
            : GetScalarType<T[P], RbThinkingGroupByOutputType[P]>
        }
      >
    >


  export type RbThinkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbThinking"]>

  export type RbThinkingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbThinking"]>

  export type RbThinkingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbThinking"]>

  export type RbThinkingSelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type RbThinkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "message" | "createdAt", ExtArgs["result"]["rbThinking"]>

  export type $RbThinkingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RbThinking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["rbThinking"]>
    composites: {}
  }

  type RbThinkingGetPayload<S extends boolean | null | undefined | RbThinkingDefaultArgs> = $Result.GetResult<Prisma.$RbThinkingPayload, S>

  type RbThinkingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RbThinkingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RbThinkingCountAggregateInputType | true
    }

  export interface RbThinkingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RbThinking'], meta: { name: 'RbThinking' } }
    /**
     * Find zero or one RbThinking that matches the filter.
     * @param {RbThinkingFindUniqueArgs} args - Arguments to find a RbThinking
     * @example
     * // Get one RbThinking
     * const rbThinking = await prisma.rbThinking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RbThinkingFindUniqueArgs>(args: SelectSubset<T, RbThinkingFindUniqueArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RbThinking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RbThinkingFindUniqueOrThrowArgs} args - Arguments to find a RbThinking
     * @example
     * // Get one RbThinking
     * const rbThinking = await prisma.rbThinking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RbThinkingFindUniqueOrThrowArgs>(args: SelectSubset<T, RbThinkingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbThinking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbThinkingFindFirstArgs} args - Arguments to find a RbThinking
     * @example
     * // Get one RbThinking
     * const rbThinking = await prisma.rbThinking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RbThinkingFindFirstArgs>(args?: SelectSubset<T, RbThinkingFindFirstArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbThinking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbThinkingFindFirstOrThrowArgs} args - Arguments to find a RbThinking
     * @example
     * // Get one RbThinking
     * const rbThinking = await prisma.rbThinking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RbThinkingFindFirstOrThrowArgs>(args?: SelectSubset<T, RbThinkingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RbThinkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbThinkingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RbThinkings
     * const rbThinkings = await prisma.rbThinking.findMany()
     * 
     * // Get first 10 RbThinkings
     * const rbThinkings = await prisma.rbThinking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rbThinkingWithIdOnly = await prisma.rbThinking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RbThinkingFindManyArgs>(args?: SelectSubset<T, RbThinkingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RbThinking.
     * @param {RbThinkingCreateArgs} args - Arguments to create a RbThinking.
     * @example
     * // Create one RbThinking
     * const RbThinking = await prisma.rbThinking.create({
     *   data: {
     *     // ... data to create a RbThinking
     *   }
     * })
     * 
     */
    create<T extends RbThinkingCreateArgs>(args: SelectSubset<T, RbThinkingCreateArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RbThinkings.
     * @param {RbThinkingCreateManyArgs} args - Arguments to create many RbThinkings.
     * @example
     * // Create many RbThinkings
     * const rbThinking = await prisma.rbThinking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RbThinkingCreateManyArgs>(args?: SelectSubset<T, RbThinkingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RbThinkings and returns the data saved in the database.
     * @param {RbThinkingCreateManyAndReturnArgs} args - Arguments to create many RbThinkings.
     * @example
     * // Create many RbThinkings
     * const rbThinking = await prisma.rbThinking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RbThinkings and only return the `id`
     * const rbThinkingWithIdOnly = await prisma.rbThinking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RbThinkingCreateManyAndReturnArgs>(args?: SelectSubset<T, RbThinkingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RbThinking.
     * @param {RbThinkingDeleteArgs} args - Arguments to delete one RbThinking.
     * @example
     * // Delete one RbThinking
     * const RbThinking = await prisma.rbThinking.delete({
     *   where: {
     *     // ... filter to delete one RbThinking
     *   }
     * })
     * 
     */
    delete<T extends RbThinkingDeleteArgs>(args: SelectSubset<T, RbThinkingDeleteArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RbThinking.
     * @param {RbThinkingUpdateArgs} args - Arguments to update one RbThinking.
     * @example
     * // Update one RbThinking
     * const rbThinking = await prisma.rbThinking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RbThinkingUpdateArgs>(args: SelectSubset<T, RbThinkingUpdateArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RbThinkings.
     * @param {RbThinkingDeleteManyArgs} args - Arguments to filter RbThinkings to delete.
     * @example
     * // Delete a few RbThinkings
     * const { count } = await prisma.rbThinking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RbThinkingDeleteManyArgs>(args?: SelectSubset<T, RbThinkingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbThinkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbThinkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RbThinkings
     * const rbThinking = await prisma.rbThinking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RbThinkingUpdateManyArgs>(args: SelectSubset<T, RbThinkingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbThinkings and returns the data updated in the database.
     * @param {RbThinkingUpdateManyAndReturnArgs} args - Arguments to update many RbThinkings.
     * @example
     * // Update many RbThinkings
     * const rbThinking = await prisma.rbThinking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RbThinkings and only return the `id`
     * const rbThinkingWithIdOnly = await prisma.rbThinking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RbThinkingUpdateManyAndReturnArgs>(args: SelectSubset<T, RbThinkingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RbThinking.
     * @param {RbThinkingUpsertArgs} args - Arguments to update or create a RbThinking.
     * @example
     * // Update or create a RbThinking
     * const rbThinking = await prisma.rbThinking.upsert({
     *   create: {
     *     // ... data to create a RbThinking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RbThinking we want to update
     *   }
     * })
     */
    upsert<T extends RbThinkingUpsertArgs>(args: SelectSubset<T, RbThinkingUpsertArgs<ExtArgs>>): Prisma__RbThinkingClient<$Result.GetResult<Prisma.$RbThinkingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RbThinkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbThinkingCountArgs} args - Arguments to filter RbThinkings to count.
     * @example
     * // Count the number of RbThinkings
     * const count = await prisma.rbThinking.count({
     *   where: {
     *     // ... the filter for the RbThinkings we want to count
     *   }
     * })
    **/
    count<T extends RbThinkingCountArgs>(
      args?: Subset<T, RbThinkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RbThinkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RbThinking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbThinkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RbThinkingAggregateArgs>(args: Subset<T, RbThinkingAggregateArgs>): Prisma.PrismaPromise<GetRbThinkingAggregateType<T>>

    /**
     * Group by RbThinking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbThinkingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RbThinkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RbThinkingGroupByArgs['orderBy'] }
        : { orderBy?: RbThinkingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RbThinkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRbThinkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RbThinking model
   */
  readonly fields: RbThinkingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RbThinking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RbThinkingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RbThinking model
   */
  interface RbThinkingFieldRefs {
    readonly id: FieldRef<"RbThinking", 'String'>
    readonly type: FieldRef<"RbThinking", 'String'>
    readonly message: FieldRef<"RbThinking", 'String'>
    readonly createdAt: FieldRef<"RbThinking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RbThinking findUnique
   */
  export type RbThinkingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * Filter, which RbThinking to fetch.
     */
    where: RbThinkingWhereUniqueInput
  }

  /**
   * RbThinking findUniqueOrThrow
   */
  export type RbThinkingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * Filter, which RbThinking to fetch.
     */
    where: RbThinkingWhereUniqueInput
  }

  /**
   * RbThinking findFirst
   */
  export type RbThinkingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * Filter, which RbThinking to fetch.
     */
    where?: RbThinkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbThinkings to fetch.
     */
    orderBy?: RbThinkingOrderByWithRelationInput | RbThinkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbThinkings.
     */
    cursor?: RbThinkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbThinkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbThinkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbThinkings.
     */
    distinct?: RbThinkingScalarFieldEnum | RbThinkingScalarFieldEnum[]
  }

  /**
   * RbThinking findFirstOrThrow
   */
  export type RbThinkingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * Filter, which RbThinking to fetch.
     */
    where?: RbThinkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbThinkings to fetch.
     */
    orderBy?: RbThinkingOrderByWithRelationInput | RbThinkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbThinkings.
     */
    cursor?: RbThinkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbThinkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbThinkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbThinkings.
     */
    distinct?: RbThinkingScalarFieldEnum | RbThinkingScalarFieldEnum[]
  }

  /**
   * RbThinking findMany
   */
  export type RbThinkingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * Filter, which RbThinkings to fetch.
     */
    where?: RbThinkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbThinkings to fetch.
     */
    orderBy?: RbThinkingOrderByWithRelationInput | RbThinkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RbThinkings.
     */
    cursor?: RbThinkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbThinkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbThinkings.
     */
    skip?: number
    distinct?: RbThinkingScalarFieldEnum | RbThinkingScalarFieldEnum[]
  }

  /**
   * RbThinking create
   */
  export type RbThinkingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * The data needed to create a RbThinking.
     */
    data: XOR<RbThinkingCreateInput, RbThinkingUncheckedCreateInput>
  }

  /**
   * RbThinking createMany
   */
  export type RbThinkingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RbThinkings.
     */
    data: RbThinkingCreateManyInput | RbThinkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbThinking createManyAndReturn
   */
  export type RbThinkingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * The data used to create many RbThinkings.
     */
    data: RbThinkingCreateManyInput | RbThinkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbThinking update
   */
  export type RbThinkingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * The data needed to update a RbThinking.
     */
    data: XOR<RbThinkingUpdateInput, RbThinkingUncheckedUpdateInput>
    /**
     * Choose, which RbThinking to update.
     */
    where: RbThinkingWhereUniqueInput
  }

  /**
   * RbThinking updateMany
   */
  export type RbThinkingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RbThinkings.
     */
    data: XOR<RbThinkingUpdateManyMutationInput, RbThinkingUncheckedUpdateManyInput>
    /**
     * Filter which RbThinkings to update
     */
    where?: RbThinkingWhereInput
    /**
     * Limit how many RbThinkings to update.
     */
    limit?: number
  }

  /**
   * RbThinking updateManyAndReturn
   */
  export type RbThinkingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * The data used to update RbThinkings.
     */
    data: XOR<RbThinkingUpdateManyMutationInput, RbThinkingUncheckedUpdateManyInput>
    /**
     * Filter which RbThinkings to update
     */
    where?: RbThinkingWhereInput
    /**
     * Limit how many RbThinkings to update.
     */
    limit?: number
  }

  /**
   * RbThinking upsert
   */
  export type RbThinkingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * The filter to search for the RbThinking to update in case it exists.
     */
    where: RbThinkingWhereUniqueInput
    /**
     * In case the RbThinking found by the `where` argument doesn't exist, create a new RbThinking with this data.
     */
    create: XOR<RbThinkingCreateInput, RbThinkingUncheckedCreateInput>
    /**
     * In case the RbThinking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RbThinkingUpdateInput, RbThinkingUncheckedUpdateInput>
  }

  /**
   * RbThinking delete
   */
  export type RbThinkingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
    /**
     * Filter which RbThinking to delete.
     */
    where: RbThinkingWhereUniqueInput
  }

  /**
   * RbThinking deleteMany
   */
  export type RbThinkingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbThinkings to delete
     */
    where?: RbThinkingWhereInput
    /**
     * Limit how many RbThinkings to delete.
     */
    limit?: number
  }

  /**
   * RbThinking without action
   */
  export type RbThinkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbThinking
     */
    select?: RbThinkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbThinking
     */
    omit?: RbThinkingOmit<ExtArgs> | null
  }


  /**
   * Model RbStrategy
   */

  export type AggregateRbStrategy = {
    _count: RbStrategyCountAggregateOutputType | null
    _avg: RbStrategyAvgAggregateOutputType | null
    _sum: RbStrategySumAggregateOutputType | null
    _min: RbStrategyMinAggregateOutputType | null
    _max: RbStrategyMaxAggregateOutputType | null
  }

  export type RbStrategyAvgAggregateOutputType = {
    winRate: number | null
  }

  export type RbStrategySumAggregateOutputType = {
    winRate: number | null
  }

  export type RbStrategyMinAggregateOutputType = {
    id: string | null
    rule: string | null
    source: string | null
    winRate: number | null
    createdAt: Date | null
  }

  export type RbStrategyMaxAggregateOutputType = {
    id: string | null
    rule: string | null
    source: string | null
    winRate: number | null
    createdAt: Date | null
  }

  export type RbStrategyCountAggregateOutputType = {
    id: number
    rule: number
    source: number
    winRate: number
    createdAt: number
    _all: number
  }


  export type RbStrategyAvgAggregateInputType = {
    winRate?: true
  }

  export type RbStrategySumAggregateInputType = {
    winRate?: true
  }

  export type RbStrategyMinAggregateInputType = {
    id?: true
    rule?: true
    source?: true
    winRate?: true
    createdAt?: true
  }

  export type RbStrategyMaxAggregateInputType = {
    id?: true
    rule?: true
    source?: true
    winRate?: true
    createdAt?: true
  }

  export type RbStrategyCountAggregateInputType = {
    id?: true
    rule?: true
    source?: true
    winRate?: true
    createdAt?: true
    _all?: true
  }

  export type RbStrategyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbStrategy to aggregate.
     */
    where?: RbStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbStrategies to fetch.
     */
    orderBy?: RbStrategyOrderByWithRelationInput | RbStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RbStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RbStrategies
    **/
    _count?: true | RbStrategyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RbStrategyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RbStrategySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RbStrategyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RbStrategyMaxAggregateInputType
  }

  export type GetRbStrategyAggregateType<T extends RbStrategyAggregateArgs> = {
        [P in keyof T & keyof AggregateRbStrategy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRbStrategy[P]>
      : GetScalarType<T[P], AggregateRbStrategy[P]>
  }




  export type RbStrategyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RbStrategyWhereInput
    orderBy?: RbStrategyOrderByWithAggregationInput | RbStrategyOrderByWithAggregationInput[]
    by: RbStrategyScalarFieldEnum[] | RbStrategyScalarFieldEnum
    having?: RbStrategyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RbStrategyCountAggregateInputType | true
    _avg?: RbStrategyAvgAggregateInputType
    _sum?: RbStrategySumAggregateInputType
    _min?: RbStrategyMinAggregateInputType
    _max?: RbStrategyMaxAggregateInputType
  }

  export type RbStrategyGroupByOutputType = {
    id: string
    rule: string
    source: string
    winRate: number | null
    createdAt: Date
    _count: RbStrategyCountAggregateOutputType | null
    _avg: RbStrategyAvgAggregateOutputType | null
    _sum: RbStrategySumAggregateOutputType | null
    _min: RbStrategyMinAggregateOutputType | null
    _max: RbStrategyMaxAggregateOutputType | null
  }

  type GetRbStrategyGroupByPayload<T extends RbStrategyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RbStrategyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RbStrategyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RbStrategyGroupByOutputType[P]>
            : GetScalarType<T[P], RbStrategyGroupByOutputType[P]>
        }
      >
    >


  export type RbStrategySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rule?: boolean
    source?: boolean
    winRate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbStrategy"]>

  export type RbStrategySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rule?: boolean
    source?: boolean
    winRate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbStrategy"]>

  export type RbStrategySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rule?: boolean
    source?: boolean
    winRate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rbStrategy"]>

  export type RbStrategySelectScalar = {
    id?: boolean
    rule?: boolean
    source?: boolean
    winRate?: boolean
    createdAt?: boolean
  }

  export type RbStrategyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rule" | "source" | "winRate" | "createdAt", ExtArgs["result"]["rbStrategy"]>

  export type $RbStrategyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RbStrategy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rule: string
      source: string
      winRate: number | null
      createdAt: Date
    }, ExtArgs["result"]["rbStrategy"]>
    composites: {}
  }

  type RbStrategyGetPayload<S extends boolean | null | undefined | RbStrategyDefaultArgs> = $Result.GetResult<Prisma.$RbStrategyPayload, S>

  type RbStrategyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RbStrategyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RbStrategyCountAggregateInputType | true
    }

  export interface RbStrategyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RbStrategy'], meta: { name: 'RbStrategy' } }
    /**
     * Find zero or one RbStrategy that matches the filter.
     * @param {RbStrategyFindUniqueArgs} args - Arguments to find a RbStrategy
     * @example
     * // Get one RbStrategy
     * const rbStrategy = await prisma.rbStrategy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RbStrategyFindUniqueArgs>(args: SelectSubset<T, RbStrategyFindUniqueArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RbStrategy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RbStrategyFindUniqueOrThrowArgs} args - Arguments to find a RbStrategy
     * @example
     * // Get one RbStrategy
     * const rbStrategy = await prisma.rbStrategy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RbStrategyFindUniqueOrThrowArgs>(args: SelectSubset<T, RbStrategyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbStrategy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbStrategyFindFirstArgs} args - Arguments to find a RbStrategy
     * @example
     * // Get one RbStrategy
     * const rbStrategy = await prisma.rbStrategy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RbStrategyFindFirstArgs>(args?: SelectSubset<T, RbStrategyFindFirstArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbStrategy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbStrategyFindFirstOrThrowArgs} args - Arguments to find a RbStrategy
     * @example
     * // Get one RbStrategy
     * const rbStrategy = await prisma.rbStrategy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RbStrategyFindFirstOrThrowArgs>(args?: SelectSubset<T, RbStrategyFindFirstOrThrowArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RbStrategies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbStrategyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RbStrategies
     * const rbStrategies = await prisma.rbStrategy.findMany()
     * 
     * // Get first 10 RbStrategies
     * const rbStrategies = await prisma.rbStrategy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rbStrategyWithIdOnly = await prisma.rbStrategy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RbStrategyFindManyArgs>(args?: SelectSubset<T, RbStrategyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RbStrategy.
     * @param {RbStrategyCreateArgs} args - Arguments to create a RbStrategy.
     * @example
     * // Create one RbStrategy
     * const RbStrategy = await prisma.rbStrategy.create({
     *   data: {
     *     // ... data to create a RbStrategy
     *   }
     * })
     * 
     */
    create<T extends RbStrategyCreateArgs>(args: SelectSubset<T, RbStrategyCreateArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RbStrategies.
     * @param {RbStrategyCreateManyArgs} args - Arguments to create many RbStrategies.
     * @example
     * // Create many RbStrategies
     * const rbStrategy = await prisma.rbStrategy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RbStrategyCreateManyArgs>(args?: SelectSubset<T, RbStrategyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RbStrategies and returns the data saved in the database.
     * @param {RbStrategyCreateManyAndReturnArgs} args - Arguments to create many RbStrategies.
     * @example
     * // Create many RbStrategies
     * const rbStrategy = await prisma.rbStrategy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RbStrategies and only return the `id`
     * const rbStrategyWithIdOnly = await prisma.rbStrategy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RbStrategyCreateManyAndReturnArgs>(args?: SelectSubset<T, RbStrategyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RbStrategy.
     * @param {RbStrategyDeleteArgs} args - Arguments to delete one RbStrategy.
     * @example
     * // Delete one RbStrategy
     * const RbStrategy = await prisma.rbStrategy.delete({
     *   where: {
     *     // ... filter to delete one RbStrategy
     *   }
     * })
     * 
     */
    delete<T extends RbStrategyDeleteArgs>(args: SelectSubset<T, RbStrategyDeleteArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RbStrategy.
     * @param {RbStrategyUpdateArgs} args - Arguments to update one RbStrategy.
     * @example
     * // Update one RbStrategy
     * const rbStrategy = await prisma.rbStrategy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RbStrategyUpdateArgs>(args: SelectSubset<T, RbStrategyUpdateArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RbStrategies.
     * @param {RbStrategyDeleteManyArgs} args - Arguments to filter RbStrategies to delete.
     * @example
     * // Delete a few RbStrategies
     * const { count } = await prisma.rbStrategy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RbStrategyDeleteManyArgs>(args?: SelectSubset<T, RbStrategyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbStrategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbStrategyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RbStrategies
     * const rbStrategy = await prisma.rbStrategy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RbStrategyUpdateManyArgs>(args: SelectSubset<T, RbStrategyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbStrategies and returns the data updated in the database.
     * @param {RbStrategyUpdateManyAndReturnArgs} args - Arguments to update many RbStrategies.
     * @example
     * // Update many RbStrategies
     * const rbStrategy = await prisma.rbStrategy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RbStrategies and only return the `id`
     * const rbStrategyWithIdOnly = await prisma.rbStrategy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RbStrategyUpdateManyAndReturnArgs>(args: SelectSubset<T, RbStrategyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RbStrategy.
     * @param {RbStrategyUpsertArgs} args - Arguments to update or create a RbStrategy.
     * @example
     * // Update or create a RbStrategy
     * const rbStrategy = await prisma.rbStrategy.upsert({
     *   create: {
     *     // ... data to create a RbStrategy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RbStrategy we want to update
     *   }
     * })
     */
    upsert<T extends RbStrategyUpsertArgs>(args: SelectSubset<T, RbStrategyUpsertArgs<ExtArgs>>): Prisma__RbStrategyClient<$Result.GetResult<Prisma.$RbStrategyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RbStrategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbStrategyCountArgs} args - Arguments to filter RbStrategies to count.
     * @example
     * // Count the number of RbStrategies
     * const count = await prisma.rbStrategy.count({
     *   where: {
     *     // ... the filter for the RbStrategies we want to count
     *   }
     * })
    **/
    count<T extends RbStrategyCountArgs>(
      args?: Subset<T, RbStrategyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RbStrategyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RbStrategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbStrategyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RbStrategyAggregateArgs>(args: Subset<T, RbStrategyAggregateArgs>): Prisma.PrismaPromise<GetRbStrategyAggregateType<T>>

    /**
     * Group by RbStrategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbStrategyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RbStrategyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RbStrategyGroupByArgs['orderBy'] }
        : { orderBy?: RbStrategyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RbStrategyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRbStrategyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RbStrategy model
   */
  readonly fields: RbStrategyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RbStrategy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RbStrategyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RbStrategy model
   */
  interface RbStrategyFieldRefs {
    readonly id: FieldRef<"RbStrategy", 'String'>
    readonly rule: FieldRef<"RbStrategy", 'String'>
    readonly source: FieldRef<"RbStrategy", 'String'>
    readonly winRate: FieldRef<"RbStrategy", 'Float'>
    readonly createdAt: FieldRef<"RbStrategy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RbStrategy findUnique
   */
  export type RbStrategyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * Filter, which RbStrategy to fetch.
     */
    where: RbStrategyWhereUniqueInput
  }

  /**
   * RbStrategy findUniqueOrThrow
   */
  export type RbStrategyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * Filter, which RbStrategy to fetch.
     */
    where: RbStrategyWhereUniqueInput
  }

  /**
   * RbStrategy findFirst
   */
  export type RbStrategyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * Filter, which RbStrategy to fetch.
     */
    where?: RbStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbStrategies to fetch.
     */
    orderBy?: RbStrategyOrderByWithRelationInput | RbStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbStrategies.
     */
    cursor?: RbStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbStrategies.
     */
    distinct?: RbStrategyScalarFieldEnum | RbStrategyScalarFieldEnum[]
  }

  /**
   * RbStrategy findFirstOrThrow
   */
  export type RbStrategyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * Filter, which RbStrategy to fetch.
     */
    where?: RbStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbStrategies to fetch.
     */
    orderBy?: RbStrategyOrderByWithRelationInput | RbStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbStrategies.
     */
    cursor?: RbStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbStrategies.
     */
    distinct?: RbStrategyScalarFieldEnum | RbStrategyScalarFieldEnum[]
  }

  /**
   * RbStrategy findMany
   */
  export type RbStrategyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * Filter, which RbStrategies to fetch.
     */
    where?: RbStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbStrategies to fetch.
     */
    orderBy?: RbStrategyOrderByWithRelationInput | RbStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RbStrategies.
     */
    cursor?: RbStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbStrategies.
     */
    skip?: number
    distinct?: RbStrategyScalarFieldEnum | RbStrategyScalarFieldEnum[]
  }

  /**
   * RbStrategy create
   */
  export type RbStrategyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * The data needed to create a RbStrategy.
     */
    data: XOR<RbStrategyCreateInput, RbStrategyUncheckedCreateInput>
  }

  /**
   * RbStrategy createMany
   */
  export type RbStrategyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RbStrategies.
     */
    data: RbStrategyCreateManyInput | RbStrategyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbStrategy createManyAndReturn
   */
  export type RbStrategyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * The data used to create many RbStrategies.
     */
    data: RbStrategyCreateManyInput | RbStrategyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbStrategy update
   */
  export type RbStrategyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * The data needed to update a RbStrategy.
     */
    data: XOR<RbStrategyUpdateInput, RbStrategyUncheckedUpdateInput>
    /**
     * Choose, which RbStrategy to update.
     */
    where: RbStrategyWhereUniqueInput
  }

  /**
   * RbStrategy updateMany
   */
  export type RbStrategyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RbStrategies.
     */
    data: XOR<RbStrategyUpdateManyMutationInput, RbStrategyUncheckedUpdateManyInput>
    /**
     * Filter which RbStrategies to update
     */
    where?: RbStrategyWhereInput
    /**
     * Limit how many RbStrategies to update.
     */
    limit?: number
  }

  /**
   * RbStrategy updateManyAndReturn
   */
  export type RbStrategyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * The data used to update RbStrategies.
     */
    data: XOR<RbStrategyUpdateManyMutationInput, RbStrategyUncheckedUpdateManyInput>
    /**
     * Filter which RbStrategies to update
     */
    where?: RbStrategyWhereInput
    /**
     * Limit how many RbStrategies to update.
     */
    limit?: number
  }

  /**
   * RbStrategy upsert
   */
  export type RbStrategyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * The filter to search for the RbStrategy to update in case it exists.
     */
    where: RbStrategyWhereUniqueInput
    /**
     * In case the RbStrategy found by the `where` argument doesn't exist, create a new RbStrategy with this data.
     */
    create: XOR<RbStrategyCreateInput, RbStrategyUncheckedCreateInput>
    /**
     * In case the RbStrategy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RbStrategyUpdateInput, RbStrategyUncheckedUpdateInput>
  }

  /**
   * RbStrategy delete
   */
  export type RbStrategyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
    /**
     * Filter which RbStrategy to delete.
     */
    where: RbStrategyWhereUniqueInput
  }

  /**
   * RbStrategy deleteMany
   */
  export type RbStrategyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbStrategies to delete
     */
    where?: RbStrategyWhereInput
    /**
     * Limit how many RbStrategies to delete.
     */
    limit?: number
  }

  /**
   * RbStrategy without action
   */
  export type RbStrategyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbStrategy
     */
    select?: RbStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbStrategy
     */
    omit?: RbStrategyOmit<ExtArgs> | null
  }


  /**
   * Model RbBotState
   */

  export type AggregateRbBotState = {
    _count: RbBotStateCountAggregateOutputType | null
    _avg: RbBotStateAvgAggregateOutputType | null
    _sum: RbBotStateSumAggregateOutputType | null
    _min: RbBotStateMinAggregateOutputType | null
    _max: RbBotStateMaxAggregateOutputType | null
  }

  export type RbBotStateAvgAggregateOutputType = {
    balance: number | null
  }

  export type RbBotStateSumAggregateOutputType = {
    balance: number | null
  }

  export type RbBotStateMinAggregateOutputType = {
    id: string | null
    wallet: string | null
    balance: number | null
    isLive: boolean | null
    updatedAt: Date | null
  }

  export type RbBotStateMaxAggregateOutputType = {
    id: string | null
    wallet: string | null
    balance: number | null
    isLive: boolean | null
    updatedAt: Date | null
  }

  export type RbBotStateCountAggregateOutputType = {
    id: number
    wallet: number
    balance: number
    isLive: number
    updatedAt: number
    _all: number
  }


  export type RbBotStateAvgAggregateInputType = {
    balance?: true
  }

  export type RbBotStateSumAggregateInputType = {
    balance?: true
  }

  export type RbBotStateMinAggregateInputType = {
    id?: true
    wallet?: true
    balance?: true
    isLive?: true
    updatedAt?: true
  }

  export type RbBotStateMaxAggregateInputType = {
    id?: true
    wallet?: true
    balance?: true
    isLive?: true
    updatedAt?: true
  }

  export type RbBotStateCountAggregateInputType = {
    id?: true
    wallet?: true
    balance?: true
    isLive?: true
    updatedAt?: true
    _all?: true
  }

  export type RbBotStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbBotState to aggregate.
     */
    where?: RbBotStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbBotStates to fetch.
     */
    orderBy?: RbBotStateOrderByWithRelationInput | RbBotStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RbBotStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbBotStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbBotStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RbBotStates
    **/
    _count?: true | RbBotStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RbBotStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RbBotStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RbBotStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RbBotStateMaxAggregateInputType
  }

  export type GetRbBotStateAggregateType<T extends RbBotStateAggregateArgs> = {
        [P in keyof T & keyof AggregateRbBotState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRbBotState[P]>
      : GetScalarType<T[P], AggregateRbBotState[P]>
  }




  export type RbBotStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RbBotStateWhereInput
    orderBy?: RbBotStateOrderByWithAggregationInput | RbBotStateOrderByWithAggregationInput[]
    by: RbBotStateScalarFieldEnum[] | RbBotStateScalarFieldEnum
    having?: RbBotStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RbBotStateCountAggregateInputType | true
    _avg?: RbBotStateAvgAggregateInputType
    _sum?: RbBotStateSumAggregateInputType
    _min?: RbBotStateMinAggregateInputType
    _max?: RbBotStateMaxAggregateInputType
  }

  export type RbBotStateGroupByOutputType = {
    id: string
    wallet: string
    balance: number
    isLive: boolean
    updatedAt: Date
    _count: RbBotStateCountAggregateOutputType | null
    _avg: RbBotStateAvgAggregateOutputType | null
    _sum: RbBotStateSumAggregateOutputType | null
    _min: RbBotStateMinAggregateOutputType | null
    _max: RbBotStateMaxAggregateOutputType | null
  }

  type GetRbBotStateGroupByPayload<T extends RbBotStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RbBotStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RbBotStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RbBotStateGroupByOutputType[P]>
            : GetScalarType<T[P], RbBotStateGroupByOutputType[P]>
        }
      >
    >


  export type RbBotStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallet?: boolean
    balance?: boolean
    isLive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rbBotState"]>

  export type RbBotStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallet?: boolean
    balance?: boolean
    isLive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rbBotState"]>

  export type RbBotStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallet?: boolean
    balance?: boolean
    isLive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rbBotState"]>

  export type RbBotStateSelectScalar = {
    id?: boolean
    wallet?: boolean
    balance?: boolean
    isLive?: boolean
    updatedAt?: boolean
  }

  export type RbBotStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wallet" | "balance" | "isLive" | "updatedAt", ExtArgs["result"]["rbBotState"]>

  export type $RbBotStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RbBotState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wallet: string
      balance: number
      isLive: boolean
      updatedAt: Date
    }, ExtArgs["result"]["rbBotState"]>
    composites: {}
  }

  type RbBotStateGetPayload<S extends boolean | null | undefined | RbBotStateDefaultArgs> = $Result.GetResult<Prisma.$RbBotStatePayload, S>

  type RbBotStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RbBotStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RbBotStateCountAggregateInputType | true
    }

  export interface RbBotStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RbBotState'], meta: { name: 'RbBotState' } }
    /**
     * Find zero or one RbBotState that matches the filter.
     * @param {RbBotStateFindUniqueArgs} args - Arguments to find a RbBotState
     * @example
     * // Get one RbBotState
     * const rbBotState = await prisma.rbBotState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RbBotStateFindUniqueArgs>(args: SelectSubset<T, RbBotStateFindUniqueArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RbBotState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RbBotStateFindUniqueOrThrowArgs} args - Arguments to find a RbBotState
     * @example
     * // Get one RbBotState
     * const rbBotState = await prisma.rbBotState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RbBotStateFindUniqueOrThrowArgs>(args: SelectSubset<T, RbBotStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbBotState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbBotStateFindFirstArgs} args - Arguments to find a RbBotState
     * @example
     * // Get one RbBotState
     * const rbBotState = await prisma.rbBotState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RbBotStateFindFirstArgs>(args?: SelectSubset<T, RbBotStateFindFirstArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RbBotState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbBotStateFindFirstOrThrowArgs} args - Arguments to find a RbBotState
     * @example
     * // Get one RbBotState
     * const rbBotState = await prisma.rbBotState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RbBotStateFindFirstOrThrowArgs>(args?: SelectSubset<T, RbBotStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RbBotStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbBotStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RbBotStates
     * const rbBotStates = await prisma.rbBotState.findMany()
     * 
     * // Get first 10 RbBotStates
     * const rbBotStates = await prisma.rbBotState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rbBotStateWithIdOnly = await prisma.rbBotState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RbBotStateFindManyArgs>(args?: SelectSubset<T, RbBotStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RbBotState.
     * @param {RbBotStateCreateArgs} args - Arguments to create a RbBotState.
     * @example
     * // Create one RbBotState
     * const RbBotState = await prisma.rbBotState.create({
     *   data: {
     *     // ... data to create a RbBotState
     *   }
     * })
     * 
     */
    create<T extends RbBotStateCreateArgs>(args: SelectSubset<T, RbBotStateCreateArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RbBotStates.
     * @param {RbBotStateCreateManyArgs} args - Arguments to create many RbBotStates.
     * @example
     * // Create many RbBotStates
     * const rbBotState = await prisma.rbBotState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RbBotStateCreateManyArgs>(args?: SelectSubset<T, RbBotStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RbBotStates and returns the data saved in the database.
     * @param {RbBotStateCreateManyAndReturnArgs} args - Arguments to create many RbBotStates.
     * @example
     * // Create many RbBotStates
     * const rbBotState = await prisma.rbBotState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RbBotStates and only return the `id`
     * const rbBotStateWithIdOnly = await prisma.rbBotState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RbBotStateCreateManyAndReturnArgs>(args?: SelectSubset<T, RbBotStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RbBotState.
     * @param {RbBotStateDeleteArgs} args - Arguments to delete one RbBotState.
     * @example
     * // Delete one RbBotState
     * const RbBotState = await prisma.rbBotState.delete({
     *   where: {
     *     // ... filter to delete one RbBotState
     *   }
     * })
     * 
     */
    delete<T extends RbBotStateDeleteArgs>(args: SelectSubset<T, RbBotStateDeleteArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RbBotState.
     * @param {RbBotStateUpdateArgs} args - Arguments to update one RbBotState.
     * @example
     * // Update one RbBotState
     * const rbBotState = await prisma.rbBotState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RbBotStateUpdateArgs>(args: SelectSubset<T, RbBotStateUpdateArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RbBotStates.
     * @param {RbBotStateDeleteManyArgs} args - Arguments to filter RbBotStates to delete.
     * @example
     * // Delete a few RbBotStates
     * const { count } = await prisma.rbBotState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RbBotStateDeleteManyArgs>(args?: SelectSubset<T, RbBotStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbBotStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbBotStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RbBotStates
     * const rbBotState = await prisma.rbBotState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RbBotStateUpdateManyArgs>(args: SelectSubset<T, RbBotStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RbBotStates and returns the data updated in the database.
     * @param {RbBotStateUpdateManyAndReturnArgs} args - Arguments to update many RbBotStates.
     * @example
     * // Update many RbBotStates
     * const rbBotState = await prisma.rbBotState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RbBotStates and only return the `id`
     * const rbBotStateWithIdOnly = await prisma.rbBotState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RbBotStateUpdateManyAndReturnArgs>(args: SelectSubset<T, RbBotStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RbBotState.
     * @param {RbBotStateUpsertArgs} args - Arguments to update or create a RbBotState.
     * @example
     * // Update or create a RbBotState
     * const rbBotState = await prisma.rbBotState.upsert({
     *   create: {
     *     // ... data to create a RbBotState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RbBotState we want to update
     *   }
     * })
     */
    upsert<T extends RbBotStateUpsertArgs>(args: SelectSubset<T, RbBotStateUpsertArgs<ExtArgs>>): Prisma__RbBotStateClient<$Result.GetResult<Prisma.$RbBotStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RbBotStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbBotStateCountArgs} args - Arguments to filter RbBotStates to count.
     * @example
     * // Count the number of RbBotStates
     * const count = await prisma.rbBotState.count({
     *   where: {
     *     // ... the filter for the RbBotStates we want to count
     *   }
     * })
    **/
    count<T extends RbBotStateCountArgs>(
      args?: Subset<T, RbBotStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RbBotStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RbBotState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbBotStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RbBotStateAggregateArgs>(args: Subset<T, RbBotStateAggregateArgs>): Prisma.PrismaPromise<GetRbBotStateAggregateType<T>>

    /**
     * Group by RbBotState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RbBotStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RbBotStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RbBotStateGroupByArgs['orderBy'] }
        : { orderBy?: RbBotStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RbBotStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRbBotStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RbBotState model
   */
  readonly fields: RbBotStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RbBotState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RbBotStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RbBotState model
   */
  interface RbBotStateFieldRefs {
    readonly id: FieldRef<"RbBotState", 'String'>
    readonly wallet: FieldRef<"RbBotState", 'String'>
    readonly balance: FieldRef<"RbBotState", 'Float'>
    readonly isLive: FieldRef<"RbBotState", 'Boolean'>
    readonly updatedAt: FieldRef<"RbBotState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RbBotState findUnique
   */
  export type RbBotStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * Filter, which RbBotState to fetch.
     */
    where: RbBotStateWhereUniqueInput
  }

  /**
   * RbBotState findUniqueOrThrow
   */
  export type RbBotStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * Filter, which RbBotState to fetch.
     */
    where: RbBotStateWhereUniqueInput
  }

  /**
   * RbBotState findFirst
   */
  export type RbBotStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * Filter, which RbBotState to fetch.
     */
    where?: RbBotStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbBotStates to fetch.
     */
    orderBy?: RbBotStateOrderByWithRelationInput | RbBotStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbBotStates.
     */
    cursor?: RbBotStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbBotStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbBotStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbBotStates.
     */
    distinct?: RbBotStateScalarFieldEnum | RbBotStateScalarFieldEnum[]
  }

  /**
   * RbBotState findFirstOrThrow
   */
  export type RbBotStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * Filter, which RbBotState to fetch.
     */
    where?: RbBotStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbBotStates to fetch.
     */
    orderBy?: RbBotStateOrderByWithRelationInput | RbBotStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RbBotStates.
     */
    cursor?: RbBotStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbBotStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbBotStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RbBotStates.
     */
    distinct?: RbBotStateScalarFieldEnum | RbBotStateScalarFieldEnum[]
  }

  /**
   * RbBotState findMany
   */
  export type RbBotStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * Filter, which RbBotStates to fetch.
     */
    where?: RbBotStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RbBotStates to fetch.
     */
    orderBy?: RbBotStateOrderByWithRelationInput | RbBotStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RbBotStates.
     */
    cursor?: RbBotStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RbBotStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RbBotStates.
     */
    skip?: number
    distinct?: RbBotStateScalarFieldEnum | RbBotStateScalarFieldEnum[]
  }

  /**
   * RbBotState create
   */
  export type RbBotStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * The data needed to create a RbBotState.
     */
    data: XOR<RbBotStateCreateInput, RbBotStateUncheckedCreateInput>
  }

  /**
   * RbBotState createMany
   */
  export type RbBotStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RbBotStates.
     */
    data: RbBotStateCreateManyInput | RbBotStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbBotState createManyAndReturn
   */
  export type RbBotStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * The data used to create many RbBotStates.
     */
    data: RbBotStateCreateManyInput | RbBotStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RbBotState update
   */
  export type RbBotStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * The data needed to update a RbBotState.
     */
    data: XOR<RbBotStateUpdateInput, RbBotStateUncheckedUpdateInput>
    /**
     * Choose, which RbBotState to update.
     */
    where: RbBotStateWhereUniqueInput
  }

  /**
   * RbBotState updateMany
   */
  export type RbBotStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RbBotStates.
     */
    data: XOR<RbBotStateUpdateManyMutationInput, RbBotStateUncheckedUpdateManyInput>
    /**
     * Filter which RbBotStates to update
     */
    where?: RbBotStateWhereInput
    /**
     * Limit how many RbBotStates to update.
     */
    limit?: number
  }

  /**
   * RbBotState updateManyAndReturn
   */
  export type RbBotStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * The data used to update RbBotStates.
     */
    data: XOR<RbBotStateUpdateManyMutationInput, RbBotStateUncheckedUpdateManyInput>
    /**
     * Filter which RbBotStates to update
     */
    where?: RbBotStateWhereInput
    /**
     * Limit how many RbBotStates to update.
     */
    limit?: number
  }

  /**
   * RbBotState upsert
   */
  export type RbBotStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * The filter to search for the RbBotState to update in case it exists.
     */
    where: RbBotStateWhereUniqueInput
    /**
     * In case the RbBotState found by the `where` argument doesn't exist, create a new RbBotState with this data.
     */
    create: XOR<RbBotStateCreateInput, RbBotStateUncheckedCreateInput>
    /**
     * In case the RbBotState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RbBotStateUpdateInput, RbBotStateUncheckedUpdateInput>
  }

  /**
   * RbBotState delete
   */
  export type RbBotStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
    /**
     * Filter which RbBotState to delete.
     */
    where: RbBotStateWhereUniqueInput
  }

  /**
   * RbBotState deleteMany
   */
  export type RbBotStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RbBotStates to delete
     */
    where?: RbBotStateWhereInput
    /**
     * Limit how many RbBotStates to delete.
     */
    limit?: number
  }

  /**
   * RbBotState without action
   */
  export type RbBotStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RbBotState
     */
    select?: RbBotStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RbBotState
     */
    omit?: RbBotStateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RbTradeScalarFieldEnum: {
    id: 'id',
    action: 'action',
    tokenMint: 'tokenMint',
    tokenSymbol: 'tokenSymbol',
    tokenName: 'tokenName',
    amountSol: 'amountSol',
    tokenAmount: 'tokenAmount',
    bondingProgress: 'bondingProgress',
    marketCap: 'marketCap',
    replies: 'replies',
    pnl: 'pnl',
    pnlPercent: 'pnlPercent',
    txSignature: 'txSignature',
    reasoning: 'reasoning',
    createdAt: 'createdAt'
  };

  export type RbTradeScalarFieldEnum = (typeof RbTradeScalarFieldEnum)[keyof typeof RbTradeScalarFieldEnum]


  export const RbThinkingScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type RbThinkingScalarFieldEnum = (typeof RbThinkingScalarFieldEnum)[keyof typeof RbThinkingScalarFieldEnum]


  export const RbStrategyScalarFieldEnum: {
    id: 'id',
    rule: 'rule',
    source: 'source',
    winRate: 'winRate',
    createdAt: 'createdAt'
  };

  export type RbStrategyScalarFieldEnum = (typeof RbStrategyScalarFieldEnum)[keyof typeof RbStrategyScalarFieldEnum]


  export const RbBotStateScalarFieldEnum: {
    id: 'id',
    wallet: 'wallet',
    balance: 'balance',
    isLive: 'isLive',
    updatedAt: 'updatedAt'
  };

  export type RbBotStateScalarFieldEnum = (typeof RbBotStateScalarFieldEnum)[keyof typeof RbBotStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type RbTradeWhereInput = {
    AND?: RbTradeWhereInput | RbTradeWhereInput[]
    OR?: RbTradeWhereInput[]
    NOT?: RbTradeWhereInput | RbTradeWhereInput[]
    id?: StringFilter<"RbTrade"> | string
    action?: StringFilter<"RbTrade"> | string
    tokenMint?: StringFilter<"RbTrade"> | string
    tokenSymbol?: StringFilter<"RbTrade"> | string
    tokenName?: StringFilter<"RbTrade"> | string
    amountSol?: FloatFilter<"RbTrade"> | number
    tokenAmount?: StringFilter<"RbTrade"> | string
    bondingProgress?: FloatNullableFilter<"RbTrade"> | number | null
    marketCap?: FloatNullableFilter<"RbTrade"> | number | null
    replies?: IntNullableFilter<"RbTrade"> | number | null
    pnl?: FloatNullableFilter<"RbTrade"> | number | null
    pnlPercent?: FloatNullableFilter<"RbTrade"> | number | null
    txSignature?: StringNullableFilter<"RbTrade"> | string | null
    reasoning?: StringNullableFilter<"RbTrade"> | string | null
    createdAt?: DateTimeFilter<"RbTrade"> | Date | string
  }

  export type RbTradeOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    tokenMint?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    amountSol?: SortOrder
    tokenAmount?: SortOrder
    bondingProgress?: SortOrderInput | SortOrder
    marketCap?: SortOrderInput | SortOrder
    replies?: SortOrderInput | SortOrder
    pnl?: SortOrderInput | SortOrder
    pnlPercent?: SortOrderInput | SortOrder
    txSignature?: SortOrderInput | SortOrder
    reasoning?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type RbTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RbTradeWhereInput | RbTradeWhereInput[]
    OR?: RbTradeWhereInput[]
    NOT?: RbTradeWhereInput | RbTradeWhereInput[]
    action?: StringFilter<"RbTrade"> | string
    tokenMint?: StringFilter<"RbTrade"> | string
    tokenSymbol?: StringFilter<"RbTrade"> | string
    tokenName?: StringFilter<"RbTrade"> | string
    amountSol?: FloatFilter<"RbTrade"> | number
    tokenAmount?: StringFilter<"RbTrade"> | string
    bondingProgress?: FloatNullableFilter<"RbTrade"> | number | null
    marketCap?: FloatNullableFilter<"RbTrade"> | number | null
    replies?: IntNullableFilter<"RbTrade"> | number | null
    pnl?: FloatNullableFilter<"RbTrade"> | number | null
    pnlPercent?: FloatNullableFilter<"RbTrade"> | number | null
    txSignature?: StringNullableFilter<"RbTrade"> | string | null
    reasoning?: StringNullableFilter<"RbTrade"> | string | null
    createdAt?: DateTimeFilter<"RbTrade"> | Date | string
  }, "id">

  export type RbTradeOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    tokenMint?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    amountSol?: SortOrder
    tokenAmount?: SortOrder
    bondingProgress?: SortOrderInput | SortOrder
    marketCap?: SortOrderInput | SortOrder
    replies?: SortOrderInput | SortOrder
    pnl?: SortOrderInput | SortOrder
    pnlPercent?: SortOrderInput | SortOrder
    txSignature?: SortOrderInput | SortOrder
    reasoning?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RbTradeCountOrderByAggregateInput
    _avg?: RbTradeAvgOrderByAggregateInput
    _max?: RbTradeMaxOrderByAggregateInput
    _min?: RbTradeMinOrderByAggregateInput
    _sum?: RbTradeSumOrderByAggregateInput
  }

  export type RbTradeScalarWhereWithAggregatesInput = {
    AND?: RbTradeScalarWhereWithAggregatesInput | RbTradeScalarWhereWithAggregatesInput[]
    OR?: RbTradeScalarWhereWithAggregatesInput[]
    NOT?: RbTradeScalarWhereWithAggregatesInput | RbTradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RbTrade"> | string
    action?: StringWithAggregatesFilter<"RbTrade"> | string
    tokenMint?: StringWithAggregatesFilter<"RbTrade"> | string
    tokenSymbol?: StringWithAggregatesFilter<"RbTrade"> | string
    tokenName?: StringWithAggregatesFilter<"RbTrade"> | string
    amountSol?: FloatWithAggregatesFilter<"RbTrade"> | number
    tokenAmount?: StringWithAggregatesFilter<"RbTrade"> | string
    bondingProgress?: FloatNullableWithAggregatesFilter<"RbTrade"> | number | null
    marketCap?: FloatNullableWithAggregatesFilter<"RbTrade"> | number | null
    replies?: IntNullableWithAggregatesFilter<"RbTrade"> | number | null
    pnl?: FloatNullableWithAggregatesFilter<"RbTrade"> | number | null
    pnlPercent?: FloatNullableWithAggregatesFilter<"RbTrade"> | number | null
    txSignature?: StringNullableWithAggregatesFilter<"RbTrade"> | string | null
    reasoning?: StringNullableWithAggregatesFilter<"RbTrade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RbTrade"> | Date | string
  }

  export type RbThinkingWhereInput = {
    AND?: RbThinkingWhereInput | RbThinkingWhereInput[]
    OR?: RbThinkingWhereInput[]
    NOT?: RbThinkingWhereInput | RbThinkingWhereInput[]
    id?: StringFilter<"RbThinking"> | string
    type?: StringFilter<"RbThinking"> | string
    message?: StringFilter<"RbThinking"> | string
    createdAt?: DateTimeFilter<"RbThinking"> | Date | string
  }

  export type RbThinkingOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RbThinkingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RbThinkingWhereInput | RbThinkingWhereInput[]
    OR?: RbThinkingWhereInput[]
    NOT?: RbThinkingWhereInput | RbThinkingWhereInput[]
    type?: StringFilter<"RbThinking"> | string
    message?: StringFilter<"RbThinking"> | string
    createdAt?: DateTimeFilter<"RbThinking"> | Date | string
  }, "id">

  export type RbThinkingOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: RbThinkingCountOrderByAggregateInput
    _max?: RbThinkingMaxOrderByAggregateInput
    _min?: RbThinkingMinOrderByAggregateInput
  }

  export type RbThinkingScalarWhereWithAggregatesInput = {
    AND?: RbThinkingScalarWhereWithAggregatesInput | RbThinkingScalarWhereWithAggregatesInput[]
    OR?: RbThinkingScalarWhereWithAggregatesInput[]
    NOT?: RbThinkingScalarWhereWithAggregatesInput | RbThinkingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RbThinking"> | string
    type?: StringWithAggregatesFilter<"RbThinking"> | string
    message?: StringWithAggregatesFilter<"RbThinking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RbThinking"> | Date | string
  }

  export type RbStrategyWhereInput = {
    AND?: RbStrategyWhereInput | RbStrategyWhereInput[]
    OR?: RbStrategyWhereInput[]
    NOT?: RbStrategyWhereInput | RbStrategyWhereInput[]
    id?: StringFilter<"RbStrategy"> | string
    rule?: StringFilter<"RbStrategy"> | string
    source?: StringFilter<"RbStrategy"> | string
    winRate?: FloatNullableFilter<"RbStrategy"> | number | null
    createdAt?: DateTimeFilter<"RbStrategy"> | Date | string
  }

  export type RbStrategyOrderByWithRelationInput = {
    id?: SortOrder
    rule?: SortOrder
    source?: SortOrder
    winRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type RbStrategyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RbStrategyWhereInput | RbStrategyWhereInput[]
    OR?: RbStrategyWhereInput[]
    NOT?: RbStrategyWhereInput | RbStrategyWhereInput[]
    rule?: StringFilter<"RbStrategy"> | string
    source?: StringFilter<"RbStrategy"> | string
    winRate?: FloatNullableFilter<"RbStrategy"> | number | null
    createdAt?: DateTimeFilter<"RbStrategy"> | Date | string
  }, "id">

  export type RbStrategyOrderByWithAggregationInput = {
    id?: SortOrder
    rule?: SortOrder
    source?: SortOrder
    winRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RbStrategyCountOrderByAggregateInput
    _avg?: RbStrategyAvgOrderByAggregateInput
    _max?: RbStrategyMaxOrderByAggregateInput
    _min?: RbStrategyMinOrderByAggregateInput
    _sum?: RbStrategySumOrderByAggregateInput
  }

  export type RbStrategyScalarWhereWithAggregatesInput = {
    AND?: RbStrategyScalarWhereWithAggregatesInput | RbStrategyScalarWhereWithAggregatesInput[]
    OR?: RbStrategyScalarWhereWithAggregatesInput[]
    NOT?: RbStrategyScalarWhereWithAggregatesInput | RbStrategyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RbStrategy"> | string
    rule?: StringWithAggregatesFilter<"RbStrategy"> | string
    source?: StringWithAggregatesFilter<"RbStrategy"> | string
    winRate?: FloatNullableWithAggregatesFilter<"RbStrategy"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RbStrategy"> | Date | string
  }

  export type RbBotStateWhereInput = {
    AND?: RbBotStateWhereInput | RbBotStateWhereInput[]
    OR?: RbBotStateWhereInput[]
    NOT?: RbBotStateWhereInput | RbBotStateWhereInput[]
    id?: StringFilter<"RbBotState"> | string
    wallet?: StringFilter<"RbBotState"> | string
    balance?: FloatFilter<"RbBotState"> | number
    isLive?: BoolFilter<"RbBotState"> | boolean
    updatedAt?: DateTimeFilter<"RbBotState"> | Date | string
  }

  export type RbBotStateOrderByWithRelationInput = {
    id?: SortOrder
    wallet?: SortOrder
    balance?: SortOrder
    isLive?: SortOrder
    updatedAt?: SortOrder
  }

  export type RbBotStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RbBotStateWhereInput | RbBotStateWhereInput[]
    OR?: RbBotStateWhereInput[]
    NOT?: RbBotStateWhereInput | RbBotStateWhereInput[]
    wallet?: StringFilter<"RbBotState"> | string
    balance?: FloatFilter<"RbBotState"> | number
    isLive?: BoolFilter<"RbBotState"> | boolean
    updatedAt?: DateTimeFilter<"RbBotState"> | Date | string
  }, "id">

  export type RbBotStateOrderByWithAggregationInput = {
    id?: SortOrder
    wallet?: SortOrder
    balance?: SortOrder
    isLive?: SortOrder
    updatedAt?: SortOrder
    _count?: RbBotStateCountOrderByAggregateInput
    _avg?: RbBotStateAvgOrderByAggregateInput
    _max?: RbBotStateMaxOrderByAggregateInput
    _min?: RbBotStateMinOrderByAggregateInput
    _sum?: RbBotStateSumOrderByAggregateInput
  }

  export type RbBotStateScalarWhereWithAggregatesInput = {
    AND?: RbBotStateScalarWhereWithAggregatesInput | RbBotStateScalarWhereWithAggregatesInput[]
    OR?: RbBotStateScalarWhereWithAggregatesInput[]
    NOT?: RbBotStateScalarWhereWithAggregatesInput | RbBotStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RbBotState"> | string
    wallet?: StringWithAggregatesFilter<"RbBotState"> | string
    balance?: FloatWithAggregatesFilter<"RbBotState"> | number
    isLive?: BoolWithAggregatesFilter<"RbBotState"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"RbBotState"> | Date | string
  }

  export type RbTradeCreateInput = {
    id?: string
    action: string
    tokenMint: string
    tokenSymbol: string
    tokenName: string
    amountSol: number
    tokenAmount: string
    bondingProgress?: number | null
    marketCap?: number | null
    replies?: number | null
    pnl?: number | null
    pnlPercent?: number | null
    txSignature?: string | null
    reasoning?: string | null
    createdAt?: Date | string
  }

  export type RbTradeUncheckedCreateInput = {
    id?: string
    action: string
    tokenMint: string
    tokenSymbol: string
    tokenName: string
    amountSol: number
    tokenAmount: string
    bondingProgress?: number | null
    marketCap?: number | null
    replies?: number | null
    pnl?: number | null
    pnlPercent?: number | null
    txSignature?: string | null
    reasoning?: string | null
    createdAt?: Date | string
  }

  export type RbTradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tokenMint?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    amountSol?: FloatFieldUpdateOperationsInput | number
    tokenAmount?: StringFieldUpdateOperationsInput | string
    bondingProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    marketCap?: NullableFloatFieldUpdateOperationsInput | number | null
    replies?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableFloatFieldUpdateOperationsInput | number | null
    pnlPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbTradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tokenMint?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    amountSol?: FloatFieldUpdateOperationsInput | number
    tokenAmount?: StringFieldUpdateOperationsInput | string
    bondingProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    marketCap?: NullableFloatFieldUpdateOperationsInput | number | null
    replies?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableFloatFieldUpdateOperationsInput | number | null
    pnlPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbTradeCreateManyInput = {
    id?: string
    action: string
    tokenMint: string
    tokenSymbol: string
    tokenName: string
    amountSol: number
    tokenAmount: string
    bondingProgress?: number | null
    marketCap?: number | null
    replies?: number | null
    pnl?: number | null
    pnlPercent?: number | null
    txSignature?: string | null
    reasoning?: string | null
    createdAt?: Date | string
  }

  export type RbTradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tokenMint?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    amountSol?: FloatFieldUpdateOperationsInput | number
    tokenAmount?: StringFieldUpdateOperationsInput | string
    bondingProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    marketCap?: NullableFloatFieldUpdateOperationsInput | number | null
    replies?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableFloatFieldUpdateOperationsInput | number | null
    pnlPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbTradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tokenMint?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    amountSol?: FloatFieldUpdateOperationsInput | number
    tokenAmount?: StringFieldUpdateOperationsInput | string
    bondingProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    marketCap?: NullableFloatFieldUpdateOperationsInput | number | null
    replies?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableFloatFieldUpdateOperationsInput | number | null
    pnlPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbThinkingCreateInput = {
    id?: string
    type: string
    message: string
    createdAt?: Date | string
  }

  export type RbThinkingUncheckedCreateInput = {
    id?: string
    type: string
    message: string
    createdAt?: Date | string
  }

  export type RbThinkingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbThinkingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbThinkingCreateManyInput = {
    id?: string
    type: string
    message: string
    createdAt?: Date | string
  }

  export type RbThinkingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbThinkingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbStrategyCreateInput = {
    id?: string
    rule: string
    source: string
    winRate?: number | null
    createdAt?: Date | string
  }

  export type RbStrategyUncheckedCreateInput = {
    id?: string
    rule: string
    source: string
    winRate?: number | null
    createdAt?: Date | string
  }

  export type RbStrategyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rule?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbStrategyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rule?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbStrategyCreateManyInput = {
    id?: string
    rule: string
    source: string
    winRate?: number | null
    createdAt?: Date | string
  }

  export type RbStrategyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rule?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbStrategyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rule?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbBotStateCreateInput = {
    id?: string
    wallet: string
    balance?: number
    isLive?: boolean
    updatedAt?: Date | string
  }

  export type RbBotStateUncheckedCreateInput = {
    id?: string
    wallet: string
    balance?: number
    isLive?: boolean
    updatedAt?: Date | string
  }

  export type RbBotStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbBotStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbBotStateCreateManyInput = {
    id?: string
    wallet: string
    balance?: number
    isLive?: boolean
    updatedAt?: Date | string
  }

  export type RbBotStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RbBotStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    isLive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RbTradeCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    tokenMint?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    amountSol?: SortOrder
    tokenAmount?: SortOrder
    bondingProgress?: SortOrder
    marketCap?: SortOrder
    replies?: SortOrder
    pnl?: SortOrder
    pnlPercent?: SortOrder
    txSignature?: SortOrder
    reasoning?: SortOrder
    createdAt?: SortOrder
  }

  export type RbTradeAvgOrderByAggregateInput = {
    amountSol?: SortOrder
    bondingProgress?: SortOrder
    marketCap?: SortOrder
    replies?: SortOrder
    pnl?: SortOrder
    pnlPercent?: SortOrder
  }

  export type RbTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    tokenMint?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    amountSol?: SortOrder
    tokenAmount?: SortOrder
    bondingProgress?: SortOrder
    marketCap?: SortOrder
    replies?: SortOrder
    pnl?: SortOrder
    pnlPercent?: SortOrder
    txSignature?: SortOrder
    reasoning?: SortOrder
    createdAt?: SortOrder
  }

  export type RbTradeMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    tokenMint?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    amountSol?: SortOrder
    tokenAmount?: SortOrder
    bondingProgress?: SortOrder
    marketCap?: SortOrder
    replies?: SortOrder
    pnl?: SortOrder
    pnlPercent?: SortOrder
    txSignature?: SortOrder
    reasoning?: SortOrder
    createdAt?: SortOrder
  }

  export type RbTradeSumOrderByAggregateInput = {
    amountSol?: SortOrder
    bondingProgress?: SortOrder
    marketCap?: SortOrder
    replies?: SortOrder
    pnl?: SortOrder
    pnlPercent?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RbThinkingCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RbThinkingMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RbThinkingMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RbStrategyCountOrderByAggregateInput = {
    id?: SortOrder
    rule?: SortOrder
    source?: SortOrder
    winRate?: SortOrder
    createdAt?: SortOrder
  }

  export type RbStrategyAvgOrderByAggregateInput = {
    winRate?: SortOrder
  }

  export type RbStrategyMaxOrderByAggregateInput = {
    id?: SortOrder
    rule?: SortOrder
    source?: SortOrder
    winRate?: SortOrder
    createdAt?: SortOrder
  }

  export type RbStrategyMinOrderByAggregateInput = {
    id?: SortOrder
    rule?: SortOrder
    source?: SortOrder
    winRate?: SortOrder
    createdAt?: SortOrder
  }

  export type RbStrategySumOrderByAggregateInput = {
    winRate?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RbBotStateCountOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
    balance?: SortOrder
    isLive?: SortOrder
    updatedAt?: SortOrder
  }

  export type RbBotStateAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type RbBotStateMaxOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
    balance?: SortOrder
    isLive?: SortOrder
    updatedAt?: SortOrder
  }

  export type RbBotStateMinOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
    balance?: SortOrder
    isLive?: SortOrder
    updatedAt?: SortOrder
  }

  export type RbBotStateSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}