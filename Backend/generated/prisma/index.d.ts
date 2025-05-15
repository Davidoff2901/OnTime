
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Festivals
 * 
 */
export type Festivals = $Result.DefaultSelection<Prisma.$FestivalsPayload>
/**
 * Model Stages
 * 
 */
export type Stages = $Result.DefaultSelection<Prisma.$StagesPayload>
/**
 * Model ArtistPerformance
 * 
 */
export type ArtistPerformance = $Result.DefaultSelection<Prisma.$ArtistPerformancePayload>
/**
 * Model Artists
 * 
 */
export type Artists = $Result.DefaultSelection<Prisma.$ArtistsPayload>
/**
 * Model UserLineup
 * 
 */
export type UserLineup = $Result.DefaultSelection<Prisma.$UserLineupPayload>
/**
 * Model UserLineupItem
 * 
 */
export type UserLineupItem = $Result.DefaultSelection<Prisma.$UserLineupItemPayload>
/**
 * Model Tickets
 * 
 */
export type Tickets = $Result.DefaultSelection<Prisma.$TicketsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.festivals`: Exposes CRUD operations for the **Festivals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Festivals
    * const festivals = await prisma.festivals.findMany()
    * ```
    */
  get festivals(): Prisma.FestivalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stages`: Exposes CRUD operations for the **Stages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stages.findMany()
    * ```
    */
  get stages(): Prisma.StagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistPerformance`: Exposes CRUD operations for the **ArtistPerformance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistPerformances
    * const artistPerformances = await prisma.artistPerformance.findMany()
    * ```
    */
  get artistPerformance(): Prisma.ArtistPerformanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artists`: Exposes CRUD operations for the **Artists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artists.findMany()
    * ```
    */
  get artists(): Prisma.ArtistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLineup`: Exposes CRUD operations for the **UserLineup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLineups
    * const userLineups = await prisma.userLineup.findMany()
    * ```
    */
  get userLineup(): Prisma.UserLineupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLineupItem`: Exposes CRUD operations for the **UserLineupItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLineupItems
    * const userLineupItems = await prisma.userLineupItem.findMany()
    * ```
    */
  get userLineupItem(): Prisma.UserLineupItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **Tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.TicketsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Users: 'Users',
    Festivals: 'Festivals',
    Stages: 'Stages',
    ArtistPerformance: 'ArtistPerformance',
    Artists: 'Artists',
    UserLineup: 'UserLineup',
    UserLineupItem: 'UserLineupItem',
    Tickets: 'Tickets'
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
      modelProps: "users" | "festivals" | "stages" | "artistPerformance" | "artists" | "userLineup" | "userLineupItem" | "tickets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Festivals: {
        payload: Prisma.$FestivalsPayload<ExtArgs>
        fields: Prisma.FestivalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FestivalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FestivalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>
          }
          findFirst: {
            args: Prisma.FestivalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FestivalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>
          }
          findMany: {
            args: Prisma.FestivalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>[]
          }
          create: {
            args: Prisma.FestivalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>
          }
          createMany: {
            args: Prisma.FestivalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FestivalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>[]
          }
          delete: {
            args: Prisma.FestivalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>
          }
          update: {
            args: Prisma.FestivalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>
          }
          deleteMany: {
            args: Prisma.FestivalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FestivalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FestivalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>[]
          }
          upsert: {
            args: Prisma.FestivalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalsPayload>
          }
          aggregate: {
            args: Prisma.FestivalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFestivals>
          }
          groupBy: {
            args: Prisma.FestivalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FestivalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FestivalsCountArgs<ExtArgs>
            result: $Utils.Optional<FestivalsCountAggregateOutputType> | number
          }
        }
      }
      Stages: {
        payload: Prisma.$StagesPayload<ExtArgs>
        fields: Prisma.StagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>
          }
          findFirst: {
            args: Prisma.StagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>
          }
          findMany: {
            args: Prisma.StagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>[]
          }
          create: {
            args: Prisma.StagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>
          }
          createMany: {
            args: Prisma.StagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>[]
          }
          delete: {
            args: Prisma.StagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>
          }
          update: {
            args: Prisma.StagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>
          }
          deleteMany: {
            args: Prisma.StagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>[]
          }
          upsert: {
            args: Prisma.StagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagesPayload>
          }
          aggregate: {
            args: Prisma.StagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStages>
          }
          groupBy: {
            args: Prisma.StagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.StagesCountArgs<ExtArgs>
            result: $Utils.Optional<StagesCountAggregateOutputType> | number
          }
        }
      }
      ArtistPerformance: {
        payload: Prisma.$ArtistPerformancePayload<ExtArgs>
        fields: Prisma.ArtistPerformanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistPerformanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistPerformanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>
          }
          findFirst: {
            args: Prisma.ArtistPerformanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistPerformanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>
          }
          findMany: {
            args: Prisma.ArtistPerformanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>[]
          }
          create: {
            args: Prisma.ArtistPerformanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>
          }
          createMany: {
            args: Prisma.ArtistPerformanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistPerformanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>[]
          }
          delete: {
            args: Prisma.ArtistPerformanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>
          }
          update: {
            args: Prisma.ArtistPerformanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>
          }
          deleteMany: {
            args: Prisma.ArtistPerformanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistPerformanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistPerformanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>[]
          }
          upsert: {
            args: Prisma.ArtistPerformanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPerformancePayload>
          }
          aggregate: {
            args: Prisma.ArtistPerformanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistPerformance>
          }
          groupBy: {
            args: Prisma.ArtistPerformanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistPerformanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistPerformanceCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistPerformanceCountAggregateOutputType> | number
          }
        }
      }
      Artists: {
        payload: Prisma.$ArtistsPayload<ExtArgs>
        fields: Prisma.ArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findMany: {
            args: Prisma.ArtistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          create: {
            args: Prisma.ArtistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          createMany: {
            args: Prisma.ArtistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          delete: {
            args: Prisma.ArtistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          update: {
            args: Prisma.ArtistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          upsert: {
            args: Prisma.ArtistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtists>
          }
          groupBy: {
            args: Prisma.ArtistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistsCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistsCountAggregateOutputType> | number
          }
        }
      }
      UserLineup: {
        payload: Prisma.$UserLineupPayload<ExtArgs>
        fields: Prisma.UserLineupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLineupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLineupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>
          }
          findFirst: {
            args: Prisma.UserLineupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLineupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>
          }
          findMany: {
            args: Prisma.UserLineupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>[]
          }
          create: {
            args: Prisma.UserLineupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>
          }
          createMany: {
            args: Prisma.UserLineupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLineupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>[]
          }
          delete: {
            args: Prisma.UserLineupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>
          }
          update: {
            args: Prisma.UserLineupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>
          }
          deleteMany: {
            args: Prisma.UserLineupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLineupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLineupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>[]
          }
          upsert: {
            args: Prisma.UserLineupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupPayload>
          }
          aggregate: {
            args: Prisma.UserLineupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLineup>
          }
          groupBy: {
            args: Prisma.UserLineupGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLineupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLineupCountArgs<ExtArgs>
            result: $Utils.Optional<UserLineupCountAggregateOutputType> | number
          }
        }
      }
      UserLineupItem: {
        payload: Prisma.$UserLineupItemPayload<ExtArgs>
        fields: Prisma.UserLineupItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLineupItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLineupItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>
          }
          findFirst: {
            args: Prisma.UserLineupItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLineupItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>
          }
          findMany: {
            args: Prisma.UserLineupItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>[]
          }
          create: {
            args: Prisma.UserLineupItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>
          }
          createMany: {
            args: Prisma.UserLineupItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLineupItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>[]
          }
          delete: {
            args: Prisma.UserLineupItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>
          }
          update: {
            args: Prisma.UserLineupItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>
          }
          deleteMany: {
            args: Prisma.UserLineupItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLineupItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLineupItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>[]
          }
          upsert: {
            args: Prisma.UserLineupItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLineupItemPayload>
          }
          aggregate: {
            args: Prisma.UserLineupItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLineupItem>
          }
          groupBy: {
            args: Prisma.UserLineupItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLineupItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLineupItemCountArgs<ExtArgs>
            result: $Utils.Optional<UserLineupItemCountAggregateOutputType> | number
          }
        }
      }
      Tickets: {
        payload: Prisma.$TicketsPayload<ExtArgs>
        fields: Prisma.TicketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findFirst: {
            args: Prisma.TicketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findMany: {
            args: Prisma.TicketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          create: {
            args: Prisma.TicketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          createMany: {
            args: Prisma.TicketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          delete: {
            args: Prisma.TicketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          update: {
            args: Prisma.TicketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          deleteMany: {
            args: Prisma.TicketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          upsert: {
            args: Prisma.TicketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.TicketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    users?: UsersOmit
    festivals?: FestivalsOmit
    stages?: StagesOmit
    artistPerformance?: ArtistPerformanceOmit
    artists?: ArtistsOmit
    userLineup?: UserLineupOmit
    userLineupItem?: UserLineupItemOmit
    tickets?: TicketsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    festivals: number
    tickets: number
    userLineups: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festivals?: boolean | UsersCountOutputTypeCountFestivalsArgs
    tickets?: boolean | UsersCountOutputTypeCountTicketsArgs
    userLineups?: boolean | UsersCountOutputTypeCountUserLineupsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFestivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserLineupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLineupWhereInput
  }


  /**
   * Count Type FestivalsCountOutputType
   */

  export type FestivalsCountOutputType = {
    stages: number
    tickets: number
    userLineups: number
  }

  export type FestivalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | FestivalsCountOutputTypeCountStagesArgs
    tickets?: boolean | FestivalsCountOutputTypeCountTicketsArgs
    userLineups?: boolean | FestivalsCountOutputTypeCountUserLineupsArgs
  }

  // Custom InputTypes
  /**
   * FestivalsCountOutputType without action
   */
  export type FestivalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalsCountOutputType
     */
    select?: FestivalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FestivalsCountOutputType without action
   */
  export type FestivalsCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StagesWhereInput
  }

  /**
   * FestivalsCountOutputType without action
   */
  export type FestivalsCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
  }

  /**
   * FestivalsCountOutputType without action
   */
  export type FestivalsCountOutputTypeCountUserLineupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLineupWhereInput
  }


  /**
   * Count Type StagesCountOutputType
   */

  export type StagesCountOutputType = {
    performances: number
  }

  export type StagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performances?: boolean | StagesCountOutputTypeCountPerformancesArgs
  }

  // Custom InputTypes
  /**
   * StagesCountOutputType without action
   */
  export type StagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagesCountOutputType
     */
    select?: StagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StagesCountOutputType without action
   */
  export type StagesCountOutputTypeCountPerformancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistPerformanceWhereInput
  }


  /**
   * Count Type ArtistsCountOutputType
   */

  export type ArtistsCountOutputType = {
    performances: number
    lineupItems: number
  }

  export type ArtistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performances?: boolean | ArtistsCountOutputTypeCountPerformancesArgs
    lineupItems?: boolean | ArtistsCountOutputTypeCountLineupItemsArgs
  }

  // Custom InputTypes
  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsCountOutputType
     */
    select?: ArtistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountPerformancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistPerformanceWhereInput
  }

  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountLineupItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLineupItemWhereInput
  }


  /**
   * Count Type UserLineupCountOutputType
   */

  export type UserLineupCountOutputType = {
    items: number
  }

  export type UserLineupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | UserLineupCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * UserLineupCountOutputType without action
   */
  export type UserLineupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupCountOutputType
     */
    select?: UserLineupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserLineupCountOutputType without action
   */
  export type UserLineupCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLineupItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    role: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    festivals?: boolean | Users$festivalsArgs<ExtArgs>
    tickets?: boolean | Users$ticketsArgs<ExtArgs>
    userLineups?: boolean | Users$userLineupsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "role", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festivals?: boolean | Users$festivalsArgs<ExtArgs>
    tickets?: boolean | Users$ticketsArgs<ExtArgs>
    userLineups?: boolean | Users$userLineupsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      festivals: Prisma.$FestivalsPayload<ExtArgs>[]
      tickets: Prisma.$TicketsPayload<ExtArgs>[]
      userLineups: Prisma.$UserLineupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festivals<T extends Users$festivalsArgs<ExtArgs> = {}>(args?: Subset<T, Users$festivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Users$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLineups<T extends Users$userLineupsArgs<ExtArgs> = {}>(args?: Subset<T, Users$userLineupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.festivals
   */
  export type Users$festivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    where?: FestivalsWhereInput
    orderBy?: FestivalsOrderByWithRelationInput | FestivalsOrderByWithRelationInput[]
    cursor?: FestivalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FestivalsScalarFieldEnum | FestivalsScalarFieldEnum[]
  }

  /**
   * Users.tickets
   */
  export type Users$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    cursor?: TicketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Users.userLineups
   */
  export type Users$userLineupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    where?: UserLineupWhereInput
    orderBy?: UserLineupOrderByWithRelationInput | UserLineupOrderByWithRelationInput[]
    cursor?: UserLineupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLineupScalarFieldEnum | UserLineupScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Festivals
   */

  export type AggregateFestivals = {
    _count: FestivalsCountAggregateOutputType | null
    _avg: FestivalsAvgAggregateOutputType | null
    _sum: FestivalsSumAggregateOutputType | null
    _min: FestivalsMinAggregateOutputType | null
    _max: FestivalsMaxAggregateOutputType | null
  }

  export type FestivalsAvgAggregateOutputType = {
    location: number | null
  }

  export type FestivalsSumAggregateOutputType = {
    location: number[]
  }

  export type FestivalsMinAggregateOutputType = {
    id: string | null
    organiserId: string | null
    name: string | null
    created_at: Date | null
    start_date: Date | null
    end_date: Date | null
  }

  export type FestivalsMaxAggregateOutputType = {
    id: string | null
    organiserId: string | null
    name: string | null
    created_at: Date | null
    start_date: Date | null
    end_date: Date | null
  }

  export type FestivalsCountAggregateOutputType = {
    id: number
    organiserId: number
    name: number
    location: number
    created_at: number
    start_date: number
    end_date: number
    _all: number
  }


  export type FestivalsAvgAggregateInputType = {
    location?: true
  }

  export type FestivalsSumAggregateInputType = {
    location?: true
  }

  export type FestivalsMinAggregateInputType = {
    id?: true
    organiserId?: true
    name?: true
    created_at?: true
    start_date?: true
    end_date?: true
  }

  export type FestivalsMaxAggregateInputType = {
    id?: true
    organiserId?: true
    name?: true
    created_at?: true
    start_date?: true
    end_date?: true
  }

  export type FestivalsCountAggregateInputType = {
    id?: true
    organiserId?: true
    name?: true
    location?: true
    created_at?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type FestivalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festivals to aggregate.
     */
    where?: FestivalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalsOrderByWithRelationInput | FestivalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FestivalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Festivals
    **/
    _count?: true | FestivalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FestivalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FestivalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FestivalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FestivalsMaxAggregateInputType
  }

  export type GetFestivalsAggregateType<T extends FestivalsAggregateArgs> = {
        [P in keyof T & keyof AggregateFestivals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFestivals[P]>
      : GetScalarType<T[P], AggregateFestivals[P]>
  }




  export type FestivalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalsWhereInput
    orderBy?: FestivalsOrderByWithAggregationInput | FestivalsOrderByWithAggregationInput[]
    by: FestivalsScalarFieldEnum[] | FestivalsScalarFieldEnum
    having?: FestivalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FestivalsCountAggregateInputType | true
    _avg?: FestivalsAvgAggregateInputType
    _sum?: FestivalsSumAggregateInputType
    _min?: FestivalsMinAggregateInputType
    _max?: FestivalsMaxAggregateInputType
  }

  export type FestivalsGroupByOutputType = {
    id: string
    organiserId: string
    name: string
    location: number[]
    created_at: Date
    start_date: Date
    end_date: Date
    _count: FestivalsCountAggregateOutputType | null
    _avg: FestivalsAvgAggregateOutputType | null
    _sum: FestivalsSumAggregateOutputType | null
    _min: FestivalsMinAggregateOutputType | null
    _max: FestivalsMaxAggregateOutputType | null
  }

  type GetFestivalsGroupByPayload<T extends FestivalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FestivalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FestivalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FestivalsGroupByOutputType[P]>
            : GetScalarType<T[P], FestivalsGroupByOutputType[P]>
        }
      >
    >


  export type FestivalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organiserId?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    start_date?: boolean
    end_date?: boolean
    organiser?: boolean | UsersDefaultArgs<ExtArgs>
    stages?: boolean | Festivals$stagesArgs<ExtArgs>
    tickets?: boolean | Festivals$ticketsArgs<ExtArgs>
    userLineups?: boolean | Festivals$userLineupsArgs<ExtArgs>
    _count?: boolean | FestivalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festivals"]>

  export type FestivalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organiserId?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    start_date?: boolean
    end_date?: boolean
    organiser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festivals"]>

  export type FestivalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organiserId?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    start_date?: boolean
    end_date?: boolean
    organiser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festivals"]>

  export type FestivalsSelectScalar = {
    id?: boolean
    organiserId?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type FestivalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organiserId" | "name" | "location" | "created_at" | "start_date" | "end_date", ExtArgs["result"]["festivals"]>
  export type FestivalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organiser?: boolean | UsersDefaultArgs<ExtArgs>
    stages?: boolean | Festivals$stagesArgs<ExtArgs>
    tickets?: boolean | Festivals$ticketsArgs<ExtArgs>
    userLineups?: boolean | Festivals$userLineupsArgs<ExtArgs>
    _count?: boolean | FestivalsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FestivalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organiser?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type FestivalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organiser?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $FestivalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Festivals"
    objects: {
      organiser: Prisma.$UsersPayload<ExtArgs>
      stages: Prisma.$StagesPayload<ExtArgs>[]
      tickets: Prisma.$TicketsPayload<ExtArgs>[]
      userLineups: Prisma.$UserLineupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organiserId: string
      name: string
      location: number[]
      created_at: Date
      start_date: Date
      end_date: Date
    }, ExtArgs["result"]["festivals"]>
    composites: {}
  }

  type FestivalsGetPayload<S extends boolean | null | undefined | FestivalsDefaultArgs> = $Result.GetResult<Prisma.$FestivalsPayload, S>

  type FestivalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FestivalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FestivalsCountAggregateInputType | true
    }

  export interface FestivalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Festivals'], meta: { name: 'Festivals' } }
    /**
     * Find zero or one Festivals that matches the filter.
     * @param {FestivalsFindUniqueArgs} args - Arguments to find a Festivals
     * @example
     * // Get one Festivals
     * const festivals = await prisma.festivals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FestivalsFindUniqueArgs>(args: SelectSubset<T, FestivalsFindUniqueArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Festivals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FestivalsFindUniqueOrThrowArgs} args - Arguments to find a Festivals
     * @example
     * // Get one Festivals
     * const festivals = await prisma.festivals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FestivalsFindUniqueOrThrowArgs>(args: SelectSubset<T, FestivalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalsFindFirstArgs} args - Arguments to find a Festivals
     * @example
     * // Get one Festivals
     * const festivals = await prisma.festivals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FestivalsFindFirstArgs>(args?: SelectSubset<T, FestivalsFindFirstArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festivals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalsFindFirstOrThrowArgs} args - Arguments to find a Festivals
     * @example
     * // Get one Festivals
     * const festivals = await prisma.festivals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FestivalsFindFirstOrThrowArgs>(args?: SelectSubset<T, FestivalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Festivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Festivals
     * const festivals = await prisma.festivals.findMany()
     * 
     * // Get first 10 Festivals
     * const festivals = await prisma.festivals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const festivalsWithIdOnly = await prisma.festivals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FestivalsFindManyArgs>(args?: SelectSubset<T, FestivalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Festivals.
     * @param {FestivalsCreateArgs} args - Arguments to create a Festivals.
     * @example
     * // Create one Festivals
     * const Festivals = await prisma.festivals.create({
     *   data: {
     *     // ... data to create a Festivals
     *   }
     * })
     * 
     */
    create<T extends FestivalsCreateArgs>(args: SelectSubset<T, FestivalsCreateArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Festivals.
     * @param {FestivalsCreateManyArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festivals = await prisma.festivals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FestivalsCreateManyArgs>(args?: SelectSubset<T, FestivalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Festivals and returns the data saved in the database.
     * @param {FestivalsCreateManyAndReturnArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festivals = await prisma.festivals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Festivals and only return the `id`
     * const festivalsWithIdOnly = await prisma.festivals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FestivalsCreateManyAndReturnArgs>(args?: SelectSubset<T, FestivalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Festivals.
     * @param {FestivalsDeleteArgs} args - Arguments to delete one Festivals.
     * @example
     * // Delete one Festivals
     * const Festivals = await prisma.festivals.delete({
     *   where: {
     *     // ... filter to delete one Festivals
     *   }
     * })
     * 
     */
    delete<T extends FestivalsDeleteArgs>(args: SelectSubset<T, FestivalsDeleteArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Festivals.
     * @param {FestivalsUpdateArgs} args - Arguments to update one Festivals.
     * @example
     * // Update one Festivals
     * const festivals = await prisma.festivals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FestivalsUpdateArgs>(args: SelectSubset<T, FestivalsUpdateArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Festivals.
     * @param {FestivalsDeleteManyArgs} args - Arguments to filter Festivals to delete.
     * @example
     * // Delete a few Festivals
     * const { count } = await prisma.festivals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FestivalsDeleteManyArgs>(args?: SelectSubset<T, FestivalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Festivals
     * const festivals = await prisma.festivals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FestivalsUpdateManyArgs>(args: SelectSubset<T, FestivalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals and returns the data updated in the database.
     * @param {FestivalsUpdateManyAndReturnArgs} args - Arguments to update many Festivals.
     * @example
     * // Update many Festivals
     * const festivals = await prisma.festivals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Festivals and only return the `id`
     * const festivalsWithIdOnly = await prisma.festivals.updateManyAndReturn({
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
    updateManyAndReturn<T extends FestivalsUpdateManyAndReturnArgs>(args: SelectSubset<T, FestivalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Festivals.
     * @param {FestivalsUpsertArgs} args - Arguments to update or create a Festivals.
     * @example
     * // Update or create a Festivals
     * const festivals = await prisma.festivals.upsert({
     *   create: {
     *     // ... data to create a Festivals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Festivals we want to update
     *   }
     * })
     */
    upsert<T extends FestivalsUpsertArgs>(args: SelectSubset<T, FestivalsUpsertArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalsCountArgs} args - Arguments to filter Festivals to count.
     * @example
     * // Count the number of Festivals
     * const count = await prisma.festivals.count({
     *   where: {
     *     // ... the filter for the Festivals we want to count
     *   }
     * })
    **/
    count<T extends FestivalsCountArgs>(
      args?: Subset<T, FestivalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FestivalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FestivalsAggregateArgs>(args: Subset<T, FestivalsAggregateArgs>): Prisma.PrismaPromise<GetFestivalsAggregateType<T>>

    /**
     * Group by Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalsGroupByArgs} args - Group by arguments.
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
      T extends FestivalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FestivalsGroupByArgs['orderBy'] }
        : { orderBy?: FestivalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FestivalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFestivalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Festivals model
   */
  readonly fields: FestivalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Festivals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FestivalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organiser<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stages<T extends Festivals$stagesArgs<ExtArgs> = {}>(args?: Subset<T, Festivals$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Festivals$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Festivals$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLineups<T extends Festivals$userLineupsArgs<ExtArgs> = {}>(args?: Subset<T, Festivals$userLineupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Festivals model
   */
  interface FestivalsFieldRefs {
    readonly id: FieldRef<"Festivals", 'String'>
    readonly organiserId: FieldRef<"Festivals", 'String'>
    readonly name: FieldRef<"Festivals", 'String'>
    readonly location: FieldRef<"Festivals", 'Float[]'>
    readonly created_at: FieldRef<"Festivals", 'DateTime'>
    readonly start_date: FieldRef<"Festivals", 'DateTime'>
    readonly end_date: FieldRef<"Festivals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Festivals findUnique
   */
  export type FestivalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where: FestivalsWhereUniqueInput
  }

  /**
   * Festivals findUniqueOrThrow
   */
  export type FestivalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where: FestivalsWhereUniqueInput
  }

  /**
   * Festivals findFirst
   */
  export type FestivalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where?: FestivalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalsOrderByWithRelationInput | FestivalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalsScalarFieldEnum | FestivalsScalarFieldEnum[]
  }

  /**
   * Festivals findFirstOrThrow
   */
  export type FestivalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where?: FestivalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalsOrderByWithRelationInput | FestivalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalsScalarFieldEnum | FestivalsScalarFieldEnum[]
  }

  /**
   * Festivals findMany
   */
  export type FestivalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where?: FestivalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalsOrderByWithRelationInput | FestivalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Festivals.
     */
    cursor?: FestivalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    distinct?: FestivalsScalarFieldEnum | FestivalsScalarFieldEnum[]
  }

  /**
   * Festivals create
   */
  export type FestivalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * The data needed to create a Festivals.
     */
    data: XOR<FestivalsCreateInput, FestivalsUncheckedCreateInput>
  }

  /**
   * Festivals createMany
   */
  export type FestivalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Festivals.
     */
    data: FestivalsCreateManyInput | FestivalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Festivals createManyAndReturn
   */
  export type FestivalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * The data used to create many Festivals.
     */
    data: FestivalsCreateManyInput | FestivalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Festivals update
   */
  export type FestivalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * The data needed to update a Festivals.
     */
    data: XOR<FestivalsUpdateInput, FestivalsUncheckedUpdateInput>
    /**
     * Choose, which Festivals to update.
     */
    where: FestivalsWhereUniqueInput
  }

  /**
   * Festivals updateMany
   */
  export type FestivalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalsUpdateManyMutationInput, FestivalsUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalsWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
  }

  /**
   * Festivals updateManyAndReturn
   */
  export type FestivalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalsUpdateManyMutationInput, FestivalsUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalsWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Festivals upsert
   */
  export type FestivalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * The filter to search for the Festivals to update in case it exists.
     */
    where: FestivalsWhereUniqueInput
    /**
     * In case the Festivals found by the `where` argument doesn't exist, create a new Festivals with this data.
     */
    create: XOR<FestivalsCreateInput, FestivalsUncheckedCreateInput>
    /**
     * In case the Festivals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FestivalsUpdateInput, FestivalsUncheckedUpdateInput>
  }

  /**
   * Festivals delete
   */
  export type FestivalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
    /**
     * Filter which Festivals to delete.
     */
    where: FestivalsWhereUniqueInput
  }

  /**
   * Festivals deleteMany
   */
  export type FestivalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festivals to delete
     */
    where?: FestivalsWhereInput
    /**
     * Limit how many Festivals to delete.
     */
    limit?: number
  }

  /**
   * Festivals.stages
   */
  export type Festivals$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    where?: StagesWhereInput
    orderBy?: StagesOrderByWithRelationInput | StagesOrderByWithRelationInput[]
    cursor?: StagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * Festivals.tickets
   */
  export type Festivals$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    cursor?: TicketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Festivals.userLineups
   */
  export type Festivals$userLineupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    where?: UserLineupWhereInput
    orderBy?: UserLineupOrderByWithRelationInput | UserLineupOrderByWithRelationInput[]
    cursor?: UserLineupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLineupScalarFieldEnum | UserLineupScalarFieldEnum[]
  }

  /**
   * Festivals without action
   */
  export type FestivalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festivals
     */
    select?: FestivalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festivals
     */
    omit?: FestivalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalsInclude<ExtArgs> | null
  }


  /**
   * Model Stages
   */

  export type AggregateStages = {
    _count: StagesCountAggregateOutputType | null
    _min: StagesMinAggregateOutputType | null
    _max: StagesMaxAggregateOutputType | null
  }

  export type StagesMinAggregateOutputType = {
    id: string | null
    festivalId: string | null
    name: string | null
  }

  export type StagesMaxAggregateOutputType = {
    id: string | null
    festivalId: string | null
    name: string | null
  }

  export type StagesCountAggregateOutputType = {
    id: number
    festivalId: number
    name: number
    _all: number
  }


  export type StagesMinAggregateInputType = {
    id?: true
    festivalId?: true
    name?: true
  }

  export type StagesMaxAggregateInputType = {
    id?: true
    festivalId?: true
    name?: true
  }

  export type StagesCountAggregateInputType = {
    id?: true
    festivalId?: true
    name?: true
    _all?: true
  }

  export type StagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to aggregate.
     */
    where?: StagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StagesOrderByWithRelationInput | StagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StagesMaxAggregateInputType
  }

  export type GetStagesAggregateType<T extends StagesAggregateArgs> = {
        [P in keyof T & keyof AggregateStages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStages[P]>
      : GetScalarType<T[P], AggregateStages[P]>
  }




  export type StagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StagesWhereInput
    orderBy?: StagesOrderByWithAggregationInput | StagesOrderByWithAggregationInput[]
    by: StagesScalarFieldEnum[] | StagesScalarFieldEnum
    having?: StagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StagesCountAggregateInputType | true
    _min?: StagesMinAggregateInputType
    _max?: StagesMaxAggregateInputType
  }

  export type StagesGroupByOutputType = {
    id: string
    festivalId: string
    name: string
    _count: StagesCountAggregateOutputType | null
    _min: StagesMinAggregateOutputType | null
    _max: StagesMaxAggregateOutputType | null
  }

  type GetStagesGroupByPayload<T extends StagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StagesGroupByOutputType[P]>
            : GetScalarType<T[P], StagesGroupByOutputType[P]>
        }
      >
    >


  export type StagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    name?: boolean
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
    performances?: boolean | Stages$performancesArgs<ExtArgs>
    _count?: boolean | StagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stages"]>

  export type StagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    name?: boolean
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stages"]>

  export type StagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    name?: boolean
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stages"]>

  export type StagesSelectScalar = {
    id?: boolean
    festivalId?: boolean
    name?: boolean
  }

  export type StagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "festivalId" | "name", ExtArgs["result"]["stages"]>
  export type StagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
    performances?: boolean | Stages$performancesArgs<ExtArgs>
    _count?: boolean | StagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }
  export type StagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }

  export type $StagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stages"
    objects: {
      festival: Prisma.$FestivalsPayload<ExtArgs>
      performances: Prisma.$ArtistPerformancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      festivalId: string
      name: string
    }, ExtArgs["result"]["stages"]>
    composites: {}
  }

  type StagesGetPayload<S extends boolean | null | undefined | StagesDefaultArgs> = $Result.GetResult<Prisma.$StagesPayload, S>

  type StagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StagesCountAggregateInputType | true
    }

  export interface StagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stages'], meta: { name: 'Stages' } }
    /**
     * Find zero or one Stages that matches the filter.
     * @param {StagesFindUniqueArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StagesFindUniqueArgs>(args: SelectSubset<T, StagesFindUniqueArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StagesFindUniqueOrThrowArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StagesFindUniqueOrThrowArgs>(args: SelectSubset<T, StagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesFindFirstArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StagesFindFirstArgs>(args?: SelectSubset<T, StagesFindFirstArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesFindFirstOrThrowArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StagesFindFirstOrThrowArgs>(args?: SelectSubset<T, StagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stages.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stagesWithIdOnly = await prisma.stages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StagesFindManyArgs>(args?: SelectSubset<T, StagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stages.
     * @param {StagesCreateArgs} args - Arguments to create a Stages.
     * @example
     * // Create one Stages
     * const Stages = await prisma.stages.create({
     *   data: {
     *     // ... data to create a Stages
     *   }
     * })
     * 
     */
    create<T extends StagesCreateArgs>(args: SelectSubset<T, StagesCreateArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stages.
     * @param {StagesCreateManyArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stages = await prisma.stages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StagesCreateManyArgs>(args?: SelectSubset<T, StagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stages and returns the data saved in the database.
     * @param {StagesCreateManyAndReturnArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stages = await prisma.stages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stages and only return the `id`
     * const stagesWithIdOnly = await prisma.stages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StagesCreateManyAndReturnArgs>(args?: SelectSubset<T, StagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stages.
     * @param {StagesDeleteArgs} args - Arguments to delete one Stages.
     * @example
     * // Delete one Stages
     * const Stages = await prisma.stages.delete({
     *   where: {
     *     // ... filter to delete one Stages
     *   }
     * })
     * 
     */
    delete<T extends StagesDeleteArgs>(args: SelectSubset<T, StagesDeleteArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stages.
     * @param {StagesUpdateArgs} args - Arguments to update one Stages.
     * @example
     * // Update one Stages
     * const stages = await prisma.stages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StagesUpdateArgs>(args: SelectSubset<T, StagesUpdateArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stages.
     * @param {StagesDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StagesDeleteManyArgs>(args?: SelectSubset<T, StagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stages = await prisma.stages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StagesUpdateManyArgs>(args: SelectSubset<T, StagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages and returns the data updated in the database.
     * @param {StagesUpdateManyAndReturnArgs} args - Arguments to update many Stages.
     * @example
     * // Update many Stages
     * const stages = await prisma.stages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stages and only return the `id`
     * const stagesWithIdOnly = await prisma.stages.updateManyAndReturn({
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
    updateManyAndReturn<T extends StagesUpdateManyAndReturnArgs>(args: SelectSubset<T, StagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stages.
     * @param {StagesUpsertArgs} args - Arguments to update or create a Stages.
     * @example
     * // Update or create a Stages
     * const stages = await prisma.stages.upsert({
     *   create: {
     *     // ... data to create a Stages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stages we want to update
     *   }
     * })
     */
    upsert<T extends StagesUpsertArgs>(args: SelectSubset<T, StagesUpsertArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stages.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StagesCountArgs>(
      args?: Subset<T, StagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StagesAggregateArgs>(args: Subset<T, StagesAggregateArgs>): Prisma.PrismaPromise<GetStagesAggregateType<T>>

    /**
     * Group by Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesGroupByArgs} args - Group by arguments.
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
      T extends StagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StagesGroupByArgs['orderBy'] }
        : { orderBy?: StagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stages model
   */
  readonly fields: StagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalsDefaultArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    performances<T extends Stages$performancesArgs<ExtArgs> = {}>(args?: Subset<T, Stages$performancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Stages model
   */
  interface StagesFieldRefs {
    readonly id: FieldRef<"Stages", 'String'>
    readonly festivalId: FieldRef<"Stages", 'String'>
    readonly name: FieldRef<"Stages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stages findUnique
   */
  export type StagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where: StagesWhereUniqueInput
  }

  /**
   * Stages findUniqueOrThrow
   */
  export type StagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where: StagesWhereUniqueInput
  }

  /**
   * Stages findFirst
   */
  export type StagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StagesOrderByWithRelationInput | StagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * Stages findFirstOrThrow
   */
  export type StagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StagesOrderByWithRelationInput | StagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * Stages findMany
   */
  export type StagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StagesOrderByWithRelationInput | StagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     */
    cursor?: StagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * Stages create
   */
  export type StagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Stages.
     */
    data: XOR<StagesCreateInput, StagesUncheckedCreateInput>
  }

  /**
   * Stages createMany
   */
  export type StagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stages.
     */
    data: StagesCreateManyInput | StagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stages createManyAndReturn
   */
  export type StagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * The data used to create many Stages.
     */
    data: StagesCreateManyInput | StagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stages update
   */
  export type StagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Stages.
     */
    data: XOR<StagesUpdateInput, StagesUncheckedUpdateInput>
    /**
     * Choose, which Stages to update.
     */
    where: StagesWhereUniqueInput
  }

  /**
   * Stages updateMany
   */
  export type StagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stages.
     */
    data: XOR<StagesUpdateManyMutationInput, StagesUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StagesWhereInput
    /**
     * Limit how many Stages to update.
     */
    limit?: number
  }

  /**
   * Stages updateManyAndReturn
   */
  export type StagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * The data used to update Stages.
     */
    data: XOR<StagesUpdateManyMutationInput, StagesUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StagesWhereInput
    /**
     * Limit how many Stages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stages upsert
   */
  export type StagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Stages to update in case it exists.
     */
    where: StagesWhereUniqueInput
    /**
     * In case the Stages found by the `where` argument doesn't exist, create a new Stages with this data.
     */
    create: XOR<StagesCreateInput, StagesUncheckedCreateInput>
    /**
     * In case the Stages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StagesUpdateInput, StagesUncheckedUpdateInput>
  }

  /**
   * Stages delete
   */
  export type StagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
    /**
     * Filter which Stages to delete.
     */
    where: StagesWhereUniqueInput
  }

  /**
   * Stages deleteMany
   */
  export type StagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to delete
     */
    where?: StagesWhereInput
    /**
     * Limit how many Stages to delete.
     */
    limit?: number
  }

  /**
   * Stages.performances
   */
  export type Stages$performancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    where?: ArtistPerformanceWhereInput
    orderBy?: ArtistPerformanceOrderByWithRelationInput | ArtistPerformanceOrderByWithRelationInput[]
    cursor?: ArtistPerformanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistPerformanceScalarFieldEnum | ArtistPerformanceScalarFieldEnum[]
  }

  /**
   * Stages without action
   */
  export type StagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stages
     */
    select?: StagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stages
     */
    omit?: StagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StagesInclude<ExtArgs> | null
  }


  /**
   * Model ArtistPerformance
   */

  export type AggregateArtistPerformance = {
    _count: ArtistPerformanceCountAggregateOutputType | null
    _min: ArtistPerformanceMinAggregateOutputType | null
    _max: ArtistPerformanceMaxAggregateOutputType | null
  }

  export type ArtistPerformanceMinAggregateOutputType = {
    artistId: string | null
    stageId: string | null
    day: Date | null
    start_time: Date | null
    end_time: Date | null
  }

  export type ArtistPerformanceMaxAggregateOutputType = {
    artistId: string | null
    stageId: string | null
    day: Date | null
    start_time: Date | null
    end_time: Date | null
  }

  export type ArtistPerformanceCountAggregateOutputType = {
    artistId: number
    stageId: number
    day: number
    start_time: number
    end_time: number
    _all: number
  }


  export type ArtistPerformanceMinAggregateInputType = {
    artistId?: true
    stageId?: true
    day?: true
    start_time?: true
    end_time?: true
  }

  export type ArtistPerformanceMaxAggregateInputType = {
    artistId?: true
    stageId?: true
    day?: true
    start_time?: true
    end_time?: true
  }

  export type ArtistPerformanceCountAggregateInputType = {
    artistId?: true
    stageId?: true
    day?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type ArtistPerformanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistPerformance to aggregate.
     */
    where?: ArtistPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistPerformances to fetch.
     */
    orderBy?: ArtistPerformanceOrderByWithRelationInput | ArtistPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistPerformances
    **/
    _count?: true | ArtistPerformanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistPerformanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistPerformanceMaxAggregateInputType
  }

  export type GetArtistPerformanceAggregateType<T extends ArtistPerformanceAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistPerformance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistPerformance[P]>
      : GetScalarType<T[P], AggregateArtistPerformance[P]>
  }




  export type ArtistPerformanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistPerformanceWhereInput
    orderBy?: ArtistPerformanceOrderByWithAggregationInput | ArtistPerformanceOrderByWithAggregationInput[]
    by: ArtistPerformanceScalarFieldEnum[] | ArtistPerformanceScalarFieldEnum
    having?: ArtistPerformanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistPerformanceCountAggregateInputType | true
    _min?: ArtistPerformanceMinAggregateInputType
    _max?: ArtistPerformanceMaxAggregateInputType
  }

  export type ArtistPerformanceGroupByOutputType = {
    artistId: string
    stageId: string
    day: Date
    start_time: Date
    end_time: Date
    _count: ArtistPerformanceCountAggregateOutputType | null
    _min: ArtistPerformanceMinAggregateOutputType | null
    _max: ArtistPerformanceMaxAggregateOutputType | null
  }

  type GetArtistPerformanceGroupByPayload<T extends ArtistPerformanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistPerformanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistPerformanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistPerformanceGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistPerformanceGroupByOutputType[P]>
        }
      >
    >


  export type ArtistPerformanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistId?: boolean
    stageId?: boolean
    day?: boolean
    start_time?: boolean
    end_time?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    stage?: boolean | StagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistPerformance"]>

  export type ArtistPerformanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistId?: boolean
    stageId?: boolean
    day?: boolean
    start_time?: boolean
    end_time?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    stage?: boolean | StagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistPerformance"]>

  export type ArtistPerformanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistId?: boolean
    stageId?: boolean
    day?: boolean
    start_time?: boolean
    end_time?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    stage?: boolean | StagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistPerformance"]>

  export type ArtistPerformanceSelectScalar = {
    artistId?: boolean
    stageId?: boolean
    day?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type ArtistPerformanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artistId" | "stageId" | "day" | "start_time" | "end_time", ExtArgs["result"]["artistPerformance"]>
  export type ArtistPerformanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    stage?: boolean | StagesDefaultArgs<ExtArgs>
  }
  export type ArtistPerformanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    stage?: boolean | StagesDefaultArgs<ExtArgs>
  }
  export type ArtistPerformanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    stage?: boolean | StagesDefaultArgs<ExtArgs>
  }

  export type $ArtistPerformancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistPerformance"
    objects: {
      artist: Prisma.$ArtistsPayload<ExtArgs>
      stage: Prisma.$StagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      artistId: string
      stageId: string
      day: Date
      start_time: Date
      end_time: Date
    }, ExtArgs["result"]["artistPerformance"]>
    composites: {}
  }

  type ArtistPerformanceGetPayload<S extends boolean | null | undefined | ArtistPerformanceDefaultArgs> = $Result.GetResult<Prisma.$ArtistPerformancePayload, S>

  type ArtistPerformanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistPerformanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistPerformanceCountAggregateInputType | true
    }

  export interface ArtistPerformanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistPerformance'], meta: { name: 'ArtistPerformance' } }
    /**
     * Find zero or one ArtistPerformance that matches the filter.
     * @param {ArtistPerformanceFindUniqueArgs} args - Arguments to find a ArtistPerformance
     * @example
     * // Get one ArtistPerformance
     * const artistPerformance = await prisma.artistPerformance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistPerformanceFindUniqueArgs>(args: SelectSubset<T, ArtistPerformanceFindUniqueArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistPerformance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistPerformanceFindUniqueOrThrowArgs} args - Arguments to find a ArtistPerformance
     * @example
     * // Get one ArtistPerformance
     * const artistPerformance = await prisma.artistPerformance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistPerformanceFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistPerformanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistPerformance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistPerformanceFindFirstArgs} args - Arguments to find a ArtistPerformance
     * @example
     * // Get one ArtistPerformance
     * const artistPerformance = await prisma.artistPerformance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistPerformanceFindFirstArgs>(args?: SelectSubset<T, ArtistPerformanceFindFirstArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistPerformance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistPerformanceFindFirstOrThrowArgs} args - Arguments to find a ArtistPerformance
     * @example
     * // Get one ArtistPerformance
     * const artistPerformance = await prisma.artistPerformance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistPerformanceFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistPerformanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistPerformances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistPerformanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistPerformances
     * const artistPerformances = await prisma.artistPerformance.findMany()
     * 
     * // Get first 10 ArtistPerformances
     * const artistPerformances = await prisma.artistPerformance.findMany({ take: 10 })
     * 
     * // Only select the `artistId`
     * const artistPerformanceWithArtistIdOnly = await prisma.artistPerformance.findMany({ select: { artistId: true } })
     * 
     */
    findMany<T extends ArtistPerformanceFindManyArgs>(args?: SelectSubset<T, ArtistPerformanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistPerformance.
     * @param {ArtistPerformanceCreateArgs} args - Arguments to create a ArtistPerformance.
     * @example
     * // Create one ArtistPerformance
     * const ArtistPerformance = await prisma.artistPerformance.create({
     *   data: {
     *     // ... data to create a ArtistPerformance
     *   }
     * })
     * 
     */
    create<T extends ArtistPerformanceCreateArgs>(args: SelectSubset<T, ArtistPerformanceCreateArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistPerformances.
     * @param {ArtistPerformanceCreateManyArgs} args - Arguments to create many ArtistPerformances.
     * @example
     * // Create many ArtistPerformances
     * const artistPerformance = await prisma.artistPerformance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistPerformanceCreateManyArgs>(args?: SelectSubset<T, ArtistPerformanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtistPerformances and returns the data saved in the database.
     * @param {ArtistPerformanceCreateManyAndReturnArgs} args - Arguments to create many ArtistPerformances.
     * @example
     * // Create many ArtistPerformances
     * const artistPerformance = await prisma.artistPerformance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtistPerformances and only return the `artistId`
     * const artistPerformanceWithArtistIdOnly = await prisma.artistPerformance.createManyAndReturn({
     *   select: { artistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistPerformanceCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistPerformanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtistPerformance.
     * @param {ArtistPerformanceDeleteArgs} args - Arguments to delete one ArtistPerformance.
     * @example
     * // Delete one ArtistPerformance
     * const ArtistPerformance = await prisma.artistPerformance.delete({
     *   where: {
     *     // ... filter to delete one ArtistPerformance
     *   }
     * })
     * 
     */
    delete<T extends ArtistPerformanceDeleteArgs>(args: SelectSubset<T, ArtistPerformanceDeleteArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistPerformance.
     * @param {ArtistPerformanceUpdateArgs} args - Arguments to update one ArtistPerformance.
     * @example
     * // Update one ArtistPerformance
     * const artistPerformance = await prisma.artistPerformance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistPerformanceUpdateArgs>(args: SelectSubset<T, ArtistPerformanceUpdateArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistPerformances.
     * @param {ArtistPerformanceDeleteManyArgs} args - Arguments to filter ArtistPerformances to delete.
     * @example
     * // Delete a few ArtistPerformances
     * const { count } = await prisma.artistPerformance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistPerformanceDeleteManyArgs>(args?: SelectSubset<T, ArtistPerformanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistPerformanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistPerformances
     * const artistPerformance = await prisma.artistPerformance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistPerformanceUpdateManyArgs>(args: SelectSubset<T, ArtistPerformanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistPerformances and returns the data updated in the database.
     * @param {ArtistPerformanceUpdateManyAndReturnArgs} args - Arguments to update many ArtistPerformances.
     * @example
     * // Update many ArtistPerformances
     * const artistPerformance = await prisma.artistPerformance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtistPerformances and only return the `artistId`
     * const artistPerformanceWithArtistIdOnly = await prisma.artistPerformance.updateManyAndReturn({
     *   select: { artistId: true },
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
    updateManyAndReturn<T extends ArtistPerformanceUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistPerformanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtistPerformance.
     * @param {ArtistPerformanceUpsertArgs} args - Arguments to update or create a ArtistPerformance.
     * @example
     * // Update or create a ArtistPerformance
     * const artistPerformance = await prisma.artistPerformance.upsert({
     *   create: {
     *     // ... data to create a ArtistPerformance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistPerformance we want to update
     *   }
     * })
     */
    upsert<T extends ArtistPerformanceUpsertArgs>(args: SelectSubset<T, ArtistPerformanceUpsertArgs<ExtArgs>>): Prisma__ArtistPerformanceClient<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistPerformanceCountArgs} args - Arguments to filter ArtistPerformances to count.
     * @example
     * // Count the number of ArtistPerformances
     * const count = await prisma.artistPerformance.count({
     *   where: {
     *     // ... the filter for the ArtistPerformances we want to count
     *   }
     * })
    **/
    count<T extends ArtistPerformanceCountArgs>(
      args?: Subset<T, ArtistPerformanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistPerformanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistPerformanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistPerformanceAggregateArgs>(args: Subset<T, ArtistPerformanceAggregateArgs>): Prisma.PrismaPromise<GetArtistPerformanceAggregateType<T>>

    /**
     * Group by ArtistPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistPerformanceGroupByArgs} args - Group by arguments.
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
      T extends ArtistPerformanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistPerformanceGroupByArgs['orderBy'] }
        : { orderBy?: ArtistPerformanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistPerformanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistPerformanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistPerformance model
   */
  readonly fields: ArtistPerformanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistPerformance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistPerformanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stage<T extends StagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StagesDefaultArgs<ExtArgs>>): Prisma__StagesClient<$Result.GetResult<Prisma.$StagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArtistPerformance model
   */
  interface ArtistPerformanceFieldRefs {
    readonly artistId: FieldRef<"ArtistPerformance", 'String'>
    readonly stageId: FieldRef<"ArtistPerformance", 'String'>
    readonly day: FieldRef<"ArtistPerformance", 'DateTime'>
    readonly start_time: FieldRef<"ArtistPerformance", 'DateTime'>
    readonly end_time: FieldRef<"ArtistPerformance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArtistPerformance findUnique
   */
  export type ArtistPerformanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which ArtistPerformance to fetch.
     */
    where: ArtistPerformanceWhereUniqueInput
  }

  /**
   * ArtistPerformance findUniqueOrThrow
   */
  export type ArtistPerformanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which ArtistPerformance to fetch.
     */
    where: ArtistPerformanceWhereUniqueInput
  }

  /**
   * ArtistPerformance findFirst
   */
  export type ArtistPerformanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which ArtistPerformance to fetch.
     */
    where?: ArtistPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistPerformances to fetch.
     */
    orderBy?: ArtistPerformanceOrderByWithRelationInput | ArtistPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistPerformances.
     */
    cursor?: ArtistPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistPerformances.
     */
    distinct?: ArtistPerformanceScalarFieldEnum | ArtistPerformanceScalarFieldEnum[]
  }

  /**
   * ArtistPerformance findFirstOrThrow
   */
  export type ArtistPerformanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which ArtistPerformance to fetch.
     */
    where?: ArtistPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistPerformances to fetch.
     */
    orderBy?: ArtistPerformanceOrderByWithRelationInput | ArtistPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistPerformances.
     */
    cursor?: ArtistPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistPerformances.
     */
    distinct?: ArtistPerformanceScalarFieldEnum | ArtistPerformanceScalarFieldEnum[]
  }

  /**
   * ArtistPerformance findMany
   */
  export type ArtistPerformanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which ArtistPerformances to fetch.
     */
    where?: ArtistPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistPerformances to fetch.
     */
    orderBy?: ArtistPerformanceOrderByWithRelationInput | ArtistPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistPerformances.
     */
    cursor?: ArtistPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistPerformances.
     */
    skip?: number
    distinct?: ArtistPerformanceScalarFieldEnum | ArtistPerformanceScalarFieldEnum[]
  }

  /**
   * ArtistPerformance create
   */
  export type ArtistPerformanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistPerformance.
     */
    data: XOR<ArtistPerformanceCreateInput, ArtistPerformanceUncheckedCreateInput>
  }

  /**
   * ArtistPerformance createMany
   */
  export type ArtistPerformanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistPerformances.
     */
    data: ArtistPerformanceCreateManyInput | ArtistPerformanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistPerformance createManyAndReturn
   */
  export type ArtistPerformanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * The data used to create many ArtistPerformances.
     */
    data: ArtistPerformanceCreateManyInput | ArtistPerformanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistPerformance update
   */
  export type ArtistPerformanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistPerformance.
     */
    data: XOR<ArtistPerformanceUpdateInput, ArtistPerformanceUncheckedUpdateInput>
    /**
     * Choose, which ArtistPerformance to update.
     */
    where: ArtistPerformanceWhereUniqueInput
  }

  /**
   * ArtistPerformance updateMany
   */
  export type ArtistPerformanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistPerformances.
     */
    data: XOR<ArtistPerformanceUpdateManyMutationInput, ArtistPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which ArtistPerformances to update
     */
    where?: ArtistPerformanceWhereInput
    /**
     * Limit how many ArtistPerformances to update.
     */
    limit?: number
  }

  /**
   * ArtistPerformance updateManyAndReturn
   */
  export type ArtistPerformanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * The data used to update ArtistPerformances.
     */
    data: XOR<ArtistPerformanceUpdateManyMutationInput, ArtistPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which ArtistPerformances to update
     */
    where?: ArtistPerformanceWhereInput
    /**
     * Limit how many ArtistPerformances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistPerformance upsert
   */
  export type ArtistPerformanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistPerformance to update in case it exists.
     */
    where: ArtistPerformanceWhereUniqueInput
    /**
     * In case the ArtistPerformance found by the `where` argument doesn't exist, create a new ArtistPerformance with this data.
     */
    create: XOR<ArtistPerformanceCreateInput, ArtistPerformanceUncheckedCreateInput>
    /**
     * In case the ArtistPerformance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistPerformanceUpdateInput, ArtistPerformanceUncheckedUpdateInput>
  }

  /**
   * ArtistPerformance delete
   */
  export type ArtistPerformanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    /**
     * Filter which ArtistPerformance to delete.
     */
    where: ArtistPerformanceWhereUniqueInput
  }

  /**
   * ArtistPerformance deleteMany
   */
  export type ArtistPerformanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistPerformances to delete
     */
    where?: ArtistPerformanceWhereInput
    /**
     * Limit how many ArtistPerformances to delete.
     */
    limit?: number
  }

  /**
   * ArtistPerformance without action
   */
  export type ArtistPerformanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
  }


  /**
   * Model Artists
   */

  export type AggregateArtists = {
    _count: ArtistsCountAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  export type ArtistsMinAggregateOutputType = {
    id: string | null
    name: string | null
    genre: string | null
  }

  export type ArtistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    genre: string | null
  }

  export type ArtistsCountAggregateOutputType = {
    id: number
    name: number
    genre: number
    _all: number
  }


  export type ArtistsMinAggregateInputType = {
    id?: true
    name?: true
    genre?: true
  }

  export type ArtistsMaxAggregateInputType = {
    id?: true
    name?: true
    genre?: true
  }

  export type ArtistsCountAggregateInputType = {
    id?: true
    name?: true
    genre?: true
    _all?: true
  }

  export type ArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to aggregate.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsMaxAggregateInputType
  }

  export type GetArtistsAggregateType<T extends ArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtists[P]>
      : GetScalarType<T[P], AggregateArtists[P]>
  }




  export type ArtistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithAggregationInput | ArtistsOrderByWithAggregationInput[]
    by: ArtistsScalarFieldEnum[] | ArtistsScalarFieldEnum
    having?: ArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsCountAggregateInputType | true
    _min?: ArtistsMinAggregateInputType
    _max?: ArtistsMaxAggregateInputType
  }

  export type ArtistsGroupByOutputType = {
    id: string
    name: string
    genre: string
    _count: ArtistsCountAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  type GetArtistsGroupByPayload<T extends ArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genre?: boolean
    performances?: boolean | Artists$performancesArgs<ExtArgs>
    lineupItems?: boolean | Artists$lineupItemsArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genre?: boolean
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genre?: boolean
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectScalar = {
    id?: boolean
    name?: boolean
    genre?: boolean
  }

  export type ArtistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "genre", ExtArgs["result"]["artists"]>
  export type ArtistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performances?: boolean | Artists$performancesArgs<ExtArgs>
    lineupItems?: boolean | Artists$lineupItemsArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artists"
    objects: {
      performances: Prisma.$ArtistPerformancePayload<ExtArgs>[]
      lineupItems: Prisma.$UserLineupItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      genre: string
    }, ExtArgs["result"]["artists"]>
    composites: {}
  }

  type ArtistsGetPayload<S extends boolean | null | undefined | ArtistsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsPayload, S>

  type ArtistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistsCountAggregateInputType | true
    }

  export interface ArtistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artists'], meta: { name: 'Artists' } }
    /**
     * Find zero or one Artists that matches the filter.
     * @param {ArtistsFindUniqueArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistsFindUniqueArgs>(args: SelectSubset<T, ArtistsFindUniqueArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistsFindUniqueOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistsFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistsFindFirstArgs>(args?: SelectSubset<T, ArtistsFindFirstArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistsFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artists.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistsWithIdOnly = await prisma.artists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistsFindManyArgs>(args?: SelectSubset<T, ArtistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artists.
     * @param {ArtistsCreateArgs} args - Arguments to create a Artists.
     * @example
     * // Create one Artists
     * const Artists = await prisma.artists.create({
     *   data: {
     *     // ... data to create a Artists
     *   }
     * })
     * 
     */
    create<T extends ArtistsCreateArgs>(args: SelectSubset<T, ArtistsCreateArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistsCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artists = await prisma.artists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistsCreateManyArgs>(args?: SelectSubset<T, ArtistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistsCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artists = await prisma.artists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistsWithIdOnly = await prisma.artists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistsCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artists.
     * @param {ArtistsDeleteArgs} args - Arguments to delete one Artists.
     * @example
     * // Delete one Artists
     * const Artists = await prisma.artists.delete({
     *   where: {
     *     // ... filter to delete one Artists
     *   }
     * })
     * 
     */
    delete<T extends ArtistsDeleteArgs>(args: SelectSubset<T, ArtistsDeleteArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artists.
     * @param {ArtistsUpdateArgs} args - Arguments to update one Artists.
     * @example
     * // Update one Artists
     * const artists = await prisma.artists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistsUpdateArgs>(args: SelectSubset<T, ArtistsUpdateArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistsDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistsDeleteManyArgs>(args?: SelectSubset<T, ArtistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistsUpdateManyArgs>(args: SelectSubset<T, ArtistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistsUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistsWithIdOnly = await prisma.artists.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistsUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artists.
     * @param {ArtistsUpsertArgs} args - Arguments to update or create a Artists.
     * @example
     * // Update or create a Artists
     * const artists = await prisma.artists.upsert({
     *   create: {
     *     // ... data to create a Artists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artists we want to update
     *   }
     * })
     */
    upsert<T extends ArtistsUpsertArgs>(args: SelectSubset<T, ArtistsUpsertArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artists.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistsCountArgs>(
      args?: Subset<T, ArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistsAggregateArgs>(args: Subset<T, ArtistsAggregateArgs>): Prisma.PrismaPromise<GetArtistsAggregateType<T>>

    /**
     * Group by Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsGroupByArgs} args - Group by arguments.
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
      T extends ArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artists model
   */
  readonly fields: ArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performances<T extends Artists$performancesArgs<ExtArgs> = {}>(args?: Subset<T, Artists$performancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lineupItems<T extends Artists$lineupItemsArgs<ExtArgs> = {}>(args?: Subset<T, Artists$lineupItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artists model
   */
  interface ArtistsFieldRefs {
    readonly id: FieldRef<"Artists", 'String'>
    readonly name: FieldRef<"Artists", 'String'>
    readonly genre: FieldRef<"Artists", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artists findUnique
   */
  export type ArtistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists findUniqueOrThrow
   */
  export type ArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists findFirst
   */
  export type ArtistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists findFirstOrThrow
   */
  export type ArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists findMany
   */
  export type ArtistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists create
   */
  export type ArtistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to create a Artists.
     */
    data: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
  }

  /**
   * Artists createMany
   */
  export type ArtistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artists createManyAndReturn
   */
  export type ArtistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artists update
   */
  export type ArtistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to update a Artists.
     */
    data: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
    /**
     * Choose, which Artists to update.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists updateMany
   */
  export type ArtistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artists updateManyAndReturn
   */
  export type ArtistsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artists upsert
   */
  export type ArtistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The filter to search for the Artists to update in case it exists.
     */
    where: ArtistsWhereUniqueInput
    /**
     * In case the Artists found by the `where` argument doesn't exist, create a new Artists with this data.
     */
    create: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
    /**
     * In case the Artists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
  }

  /**
   * Artists delete
   */
  export type ArtistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter which Artists to delete.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists deleteMany
   */
  export type ArtistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artists.performances
   */
  export type Artists$performancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistPerformance
     */
    select?: ArtistPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistPerformance
     */
    omit?: ArtistPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistPerformanceInclude<ExtArgs> | null
    where?: ArtistPerformanceWhereInput
    orderBy?: ArtistPerformanceOrderByWithRelationInput | ArtistPerformanceOrderByWithRelationInput[]
    cursor?: ArtistPerformanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistPerformanceScalarFieldEnum | ArtistPerformanceScalarFieldEnum[]
  }

  /**
   * Artists.lineupItems
   */
  export type Artists$lineupItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    where?: UserLineupItemWhereInput
    orderBy?: UserLineupItemOrderByWithRelationInput | UserLineupItemOrderByWithRelationInput[]
    cursor?: UserLineupItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLineupItemScalarFieldEnum | UserLineupItemScalarFieldEnum[]
  }

  /**
   * Artists without action
   */
  export type ArtistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
  }


  /**
   * Model UserLineup
   */

  export type AggregateUserLineup = {
    _count: UserLineupCountAggregateOutputType | null
    _min: UserLineupMinAggregateOutputType | null
    _max: UserLineupMaxAggregateOutputType | null
  }

  export type UserLineupMinAggregateOutputType = {
    id: string | null
    userId: string | null
    festivalId: string | null
  }

  export type UserLineupMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    festivalId: string | null
  }

  export type UserLineupCountAggregateOutputType = {
    id: number
    userId: number
    festivalId: number
    _all: number
  }


  export type UserLineupMinAggregateInputType = {
    id?: true
    userId?: true
    festivalId?: true
  }

  export type UserLineupMaxAggregateInputType = {
    id?: true
    userId?: true
    festivalId?: true
  }

  export type UserLineupCountAggregateInputType = {
    id?: true
    userId?: true
    festivalId?: true
    _all?: true
  }

  export type UserLineupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLineup to aggregate.
     */
    where?: UserLineupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineups to fetch.
     */
    orderBy?: UserLineupOrderByWithRelationInput | UserLineupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLineupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLineups
    **/
    _count?: true | UserLineupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLineupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLineupMaxAggregateInputType
  }

  export type GetUserLineupAggregateType<T extends UserLineupAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLineup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLineup[P]>
      : GetScalarType<T[P], AggregateUserLineup[P]>
  }




  export type UserLineupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLineupWhereInput
    orderBy?: UserLineupOrderByWithAggregationInput | UserLineupOrderByWithAggregationInput[]
    by: UserLineupScalarFieldEnum[] | UserLineupScalarFieldEnum
    having?: UserLineupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLineupCountAggregateInputType | true
    _min?: UserLineupMinAggregateInputType
    _max?: UserLineupMaxAggregateInputType
  }

  export type UserLineupGroupByOutputType = {
    id: string
    userId: string
    festivalId: string
    _count: UserLineupCountAggregateOutputType | null
    _min: UserLineupMinAggregateOutputType | null
    _max: UserLineupMaxAggregateOutputType | null
  }

  type GetUserLineupGroupByPayload<T extends UserLineupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLineupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLineupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLineupGroupByOutputType[P]>
            : GetScalarType<T[P], UserLineupGroupByOutputType[P]>
        }
      >
    >


  export type UserLineupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    festivalId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
    items?: boolean | UserLineup$itemsArgs<ExtArgs>
    _count?: boolean | UserLineupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLineup"]>

  export type UserLineupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    festivalId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLineup"]>

  export type UserLineupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    festivalId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLineup"]>

  export type UserLineupSelectScalar = {
    id?: boolean
    userId?: boolean
    festivalId?: boolean
  }

  export type UserLineupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "festivalId", ExtArgs["result"]["userLineup"]>
  export type UserLineupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
    items?: boolean | UserLineup$itemsArgs<ExtArgs>
    _count?: boolean | UserLineupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserLineupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }
  export type UserLineupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }

  export type $UserLineupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLineup"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      festival: Prisma.$FestivalsPayload<ExtArgs>
      items: Prisma.$UserLineupItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      festivalId: string
    }, ExtArgs["result"]["userLineup"]>
    composites: {}
  }

  type UserLineupGetPayload<S extends boolean | null | undefined | UserLineupDefaultArgs> = $Result.GetResult<Prisma.$UserLineupPayload, S>

  type UserLineupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLineupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLineupCountAggregateInputType | true
    }

  export interface UserLineupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLineup'], meta: { name: 'UserLineup' } }
    /**
     * Find zero or one UserLineup that matches the filter.
     * @param {UserLineupFindUniqueArgs} args - Arguments to find a UserLineup
     * @example
     * // Get one UserLineup
     * const userLineup = await prisma.userLineup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLineupFindUniqueArgs>(args: SelectSubset<T, UserLineupFindUniqueArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLineup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLineupFindUniqueOrThrowArgs} args - Arguments to find a UserLineup
     * @example
     * // Get one UserLineup
     * const userLineup = await prisma.userLineup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLineupFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLineupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLineup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupFindFirstArgs} args - Arguments to find a UserLineup
     * @example
     * // Get one UserLineup
     * const userLineup = await prisma.userLineup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLineupFindFirstArgs>(args?: SelectSubset<T, UserLineupFindFirstArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLineup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupFindFirstOrThrowArgs} args - Arguments to find a UserLineup
     * @example
     * // Get one UserLineup
     * const userLineup = await prisma.userLineup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLineupFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLineupFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLineups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLineups
     * const userLineups = await prisma.userLineup.findMany()
     * 
     * // Get first 10 UserLineups
     * const userLineups = await prisma.userLineup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLineupWithIdOnly = await prisma.userLineup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLineupFindManyArgs>(args?: SelectSubset<T, UserLineupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLineup.
     * @param {UserLineupCreateArgs} args - Arguments to create a UserLineup.
     * @example
     * // Create one UserLineup
     * const UserLineup = await prisma.userLineup.create({
     *   data: {
     *     // ... data to create a UserLineup
     *   }
     * })
     * 
     */
    create<T extends UserLineupCreateArgs>(args: SelectSubset<T, UserLineupCreateArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLineups.
     * @param {UserLineupCreateManyArgs} args - Arguments to create many UserLineups.
     * @example
     * // Create many UserLineups
     * const userLineup = await prisma.userLineup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLineupCreateManyArgs>(args?: SelectSubset<T, UserLineupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLineups and returns the data saved in the database.
     * @param {UserLineupCreateManyAndReturnArgs} args - Arguments to create many UserLineups.
     * @example
     * // Create many UserLineups
     * const userLineup = await prisma.userLineup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLineups and only return the `id`
     * const userLineupWithIdOnly = await prisma.userLineup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLineupCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLineupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLineup.
     * @param {UserLineupDeleteArgs} args - Arguments to delete one UserLineup.
     * @example
     * // Delete one UserLineup
     * const UserLineup = await prisma.userLineup.delete({
     *   where: {
     *     // ... filter to delete one UserLineup
     *   }
     * })
     * 
     */
    delete<T extends UserLineupDeleteArgs>(args: SelectSubset<T, UserLineupDeleteArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLineup.
     * @param {UserLineupUpdateArgs} args - Arguments to update one UserLineup.
     * @example
     * // Update one UserLineup
     * const userLineup = await prisma.userLineup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLineupUpdateArgs>(args: SelectSubset<T, UserLineupUpdateArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLineups.
     * @param {UserLineupDeleteManyArgs} args - Arguments to filter UserLineups to delete.
     * @example
     * // Delete a few UserLineups
     * const { count } = await prisma.userLineup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLineupDeleteManyArgs>(args?: SelectSubset<T, UserLineupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLineups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLineups
     * const userLineup = await prisma.userLineup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLineupUpdateManyArgs>(args: SelectSubset<T, UserLineupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLineups and returns the data updated in the database.
     * @param {UserLineupUpdateManyAndReturnArgs} args - Arguments to update many UserLineups.
     * @example
     * // Update many UserLineups
     * const userLineup = await prisma.userLineup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLineups and only return the `id`
     * const userLineupWithIdOnly = await prisma.userLineup.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserLineupUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLineupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLineup.
     * @param {UserLineupUpsertArgs} args - Arguments to update or create a UserLineup.
     * @example
     * // Update or create a UserLineup
     * const userLineup = await prisma.userLineup.upsert({
     *   create: {
     *     // ... data to create a UserLineup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLineup we want to update
     *   }
     * })
     */
    upsert<T extends UserLineupUpsertArgs>(args: SelectSubset<T, UserLineupUpsertArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLineups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupCountArgs} args - Arguments to filter UserLineups to count.
     * @example
     * // Count the number of UserLineups
     * const count = await prisma.userLineup.count({
     *   where: {
     *     // ... the filter for the UserLineups we want to count
     *   }
     * })
    **/
    count<T extends UserLineupCountArgs>(
      args?: Subset<T, UserLineupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLineupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLineup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLineupAggregateArgs>(args: Subset<T, UserLineupAggregateArgs>): Prisma.PrismaPromise<GetUserLineupAggregateType<T>>

    /**
     * Group by UserLineup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupGroupByArgs} args - Group by arguments.
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
      T extends UserLineupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLineupGroupByArgs['orderBy'] }
        : { orderBy?: UserLineupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLineupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLineupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLineup model
   */
  readonly fields: UserLineupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLineup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLineupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    festival<T extends FestivalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalsDefaultArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends UserLineup$itemsArgs<ExtArgs> = {}>(args?: Subset<T, UserLineup$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserLineup model
   */
  interface UserLineupFieldRefs {
    readonly id: FieldRef<"UserLineup", 'String'>
    readonly userId: FieldRef<"UserLineup", 'String'>
    readonly festivalId: FieldRef<"UserLineup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLineup findUnique
   */
  export type UserLineupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * Filter, which UserLineup to fetch.
     */
    where: UserLineupWhereUniqueInput
  }

  /**
   * UserLineup findUniqueOrThrow
   */
  export type UserLineupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * Filter, which UserLineup to fetch.
     */
    where: UserLineupWhereUniqueInput
  }

  /**
   * UserLineup findFirst
   */
  export type UserLineupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * Filter, which UserLineup to fetch.
     */
    where?: UserLineupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineups to fetch.
     */
    orderBy?: UserLineupOrderByWithRelationInput | UserLineupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLineups.
     */
    cursor?: UserLineupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLineups.
     */
    distinct?: UserLineupScalarFieldEnum | UserLineupScalarFieldEnum[]
  }

  /**
   * UserLineup findFirstOrThrow
   */
  export type UserLineupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * Filter, which UserLineup to fetch.
     */
    where?: UserLineupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineups to fetch.
     */
    orderBy?: UserLineupOrderByWithRelationInput | UserLineupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLineups.
     */
    cursor?: UserLineupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLineups.
     */
    distinct?: UserLineupScalarFieldEnum | UserLineupScalarFieldEnum[]
  }

  /**
   * UserLineup findMany
   */
  export type UserLineupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * Filter, which UserLineups to fetch.
     */
    where?: UserLineupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineups to fetch.
     */
    orderBy?: UserLineupOrderByWithRelationInput | UserLineupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLineups.
     */
    cursor?: UserLineupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineups.
     */
    skip?: number
    distinct?: UserLineupScalarFieldEnum | UserLineupScalarFieldEnum[]
  }

  /**
   * UserLineup create
   */
  export type UserLineupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLineup.
     */
    data: XOR<UserLineupCreateInput, UserLineupUncheckedCreateInput>
  }

  /**
   * UserLineup createMany
   */
  export type UserLineupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLineups.
     */
    data: UserLineupCreateManyInput | UserLineupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLineup createManyAndReturn
   */
  export type UserLineupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * The data used to create many UserLineups.
     */
    data: UserLineupCreateManyInput | UserLineupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLineup update
   */
  export type UserLineupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLineup.
     */
    data: XOR<UserLineupUpdateInput, UserLineupUncheckedUpdateInput>
    /**
     * Choose, which UserLineup to update.
     */
    where: UserLineupWhereUniqueInput
  }

  /**
   * UserLineup updateMany
   */
  export type UserLineupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLineups.
     */
    data: XOR<UserLineupUpdateManyMutationInput, UserLineupUncheckedUpdateManyInput>
    /**
     * Filter which UserLineups to update
     */
    where?: UserLineupWhereInput
    /**
     * Limit how many UserLineups to update.
     */
    limit?: number
  }

  /**
   * UserLineup updateManyAndReturn
   */
  export type UserLineupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * The data used to update UserLineups.
     */
    data: XOR<UserLineupUpdateManyMutationInput, UserLineupUncheckedUpdateManyInput>
    /**
     * Filter which UserLineups to update
     */
    where?: UserLineupWhereInput
    /**
     * Limit how many UserLineups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLineup upsert
   */
  export type UserLineupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLineup to update in case it exists.
     */
    where: UserLineupWhereUniqueInput
    /**
     * In case the UserLineup found by the `where` argument doesn't exist, create a new UserLineup with this data.
     */
    create: XOR<UserLineupCreateInput, UserLineupUncheckedCreateInput>
    /**
     * In case the UserLineup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLineupUpdateInput, UserLineupUncheckedUpdateInput>
  }

  /**
   * UserLineup delete
   */
  export type UserLineupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
    /**
     * Filter which UserLineup to delete.
     */
    where: UserLineupWhereUniqueInput
  }

  /**
   * UserLineup deleteMany
   */
  export type UserLineupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLineups to delete
     */
    where?: UserLineupWhereInput
    /**
     * Limit how many UserLineups to delete.
     */
    limit?: number
  }

  /**
   * UserLineup.items
   */
  export type UserLineup$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    where?: UserLineupItemWhereInput
    orderBy?: UserLineupItemOrderByWithRelationInput | UserLineupItemOrderByWithRelationInput[]
    cursor?: UserLineupItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLineupItemScalarFieldEnum | UserLineupItemScalarFieldEnum[]
  }

  /**
   * UserLineup without action
   */
  export type UserLineupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineup
     */
    select?: UserLineupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineup
     */
    omit?: UserLineupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupInclude<ExtArgs> | null
  }


  /**
   * Model UserLineupItem
   */

  export type AggregateUserLineupItem = {
    _count: UserLineupItemCountAggregateOutputType | null
    _min: UserLineupItemMinAggregateOutputType | null
    _max: UserLineupItemMaxAggregateOutputType | null
  }

  export type UserLineupItemMinAggregateOutputType = {
    userLineupId: string | null
    artistsId: string | null
  }

  export type UserLineupItemMaxAggregateOutputType = {
    userLineupId: string | null
    artistsId: string | null
  }

  export type UserLineupItemCountAggregateOutputType = {
    userLineupId: number
    artistsId: number
    _all: number
  }


  export type UserLineupItemMinAggregateInputType = {
    userLineupId?: true
    artistsId?: true
  }

  export type UserLineupItemMaxAggregateInputType = {
    userLineupId?: true
    artistsId?: true
  }

  export type UserLineupItemCountAggregateInputType = {
    userLineupId?: true
    artistsId?: true
    _all?: true
  }

  export type UserLineupItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLineupItem to aggregate.
     */
    where?: UserLineupItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineupItems to fetch.
     */
    orderBy?: UserLineupItemOrderByWithRelationInput | UserLineupItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLineupItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineupItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineupItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLineupItems
    **/
    _count?: true | UserLineupItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLineupItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLineupItemMaxAggregateInputType
  }

  export type GetUserLineupItemAggregateType<T extends UserLineupItemAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLineupItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLineupItem[P]>
      : GetScalarType<T[P], AggregateUserLineupItem[P]>
  }




  export type UserLineupItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLineupItemWhereInput
    orderBy?: UserLineupItemOrderByWithAggregationInput | UserLineupItemOrderByWithAggregationInput[]
    by: UserLineupItemScalarFieldEnum[] | UserLineupItemScalarFieldEnum
    having?: UserLineupItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLineupItemCountAggregateInputType | true
    _min?: UserLineupItemMinAggregateInputType
    _max?: UserLineupItemMaxAggregateInputType
  }

  export type UserLineupItemGroupByOutputType = {
    userLineupId: string
    artistsId: string
    _count: UserLineupItemCountAggregateOutputType | null
    _min: UserLineupItemMinAggregateOutputType | null
    _max: UserLineupItemMaxAggregateOutputType | null
  }

  type GetUserLineupItemGroupByPayload<T extends UserLineupItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLineupItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLineupItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLineupItemGroupByOutputType[P]>
            : GetScalarType<T[P], UserLineupItemGroupByOutputType[P]>
        }
      >
    >


  export type UserLineupItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userLineupId?: boolean
    artistsId?: boolean
    lineup?: boolean | UserLineupDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLineupItem"]>

  export type UserLineupItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userLineupId?: boolean
    artistsId?: boolean
    lineup?: boolean | UserLineupDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLineupItem"]>

  export type UserLineupItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userLineupId?: boolean
    artistsId?: boolean
    lineup?: boolean | UserLineupDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLineupItem"]>

  export type UserLineupItemSelectScalar = {
    userLineupId?: boolean
    artistsId?: boolean
  }

  export type UserLineupItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userLineupId" | "artistsId", ExtArgs["result"]["userLineupItem"]>
  export type UserLineupItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineup?: boolean | UserLineupDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }
  export type UserLineupItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineup?: boolean | UserLineupDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }
  export type UserLineupItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineup?: boolean | UserLineupDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }

  export type $UserLineupItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLineupItem"
    objects: {
      lineup: Prisma.$UserLineupPayload<ExtArgs>
      artist: Prisma.$ArtistsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userLineupId: string
      artistsId: string
    }, ExtArgs["result"]["userLineupItem"]>
    composites: {}
  }

  type UserLineupItemGetPayload<S extends boolean | null | undefined | UserLineupItemDefaultArgs> = $Result.GetResult<Prisma.$UserLineupItemPayload, S>

  type UserLineupItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLineupItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLineupItemCountAggregateInputType | true
    }

  export interface UserLineupItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLineupItem'], meta: { name: 'UserLineupItem' } }
    /**
     * Find zero or one UserLineupItem that matches the filter.
     * @param {UserLineupItemFindUniqueArgs} args - Arguments to find a UserLineupItem
     * @example
     * // Get one UserLineupItem
     * const userLineupItem = await prisma.userLineupItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLineupItemFindUniqueArgs>(args: SelectSubset<T, UserLineupItemFindUniqueArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLineupItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLineupItemFindUniqueOrThrowArgs} args - Arguments to find a UserLineupItem
     * @example
     * // Get one UserLineupItem
     * const userLineupItem = await prisma.userLineupItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLineupItemFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLineupItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLineupItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupItemFindFirstArgs} args - Arguments to find a UserLineupItem
     * @example
     * // Get one UserLineupItem
     * const userLineupItem = await prisma.userLineupItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLineupItemFindFirstArgs>(args?: SelectSubset<T, UserLineupItemFindFirstArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLineupItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupItemFindFirstOrThrowArgs} args - Arguments to find a UserLineupItem
     * @example
     * // Get one UserLineupItem
     * const userLineupItem = await prisma.userLineupItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLineupItemFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLineupItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLineupItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLineupItems
     * const userLineupItems = await prisma.userLineupItem.findMany()
     * 
     * // Get first 10 UserLineupItems
     * const userLineupItems = await prisma.userLineupItem.findMany({ take: 10 })
     * 
     * // Only select the `userLineupId`
     * const userLineupItemWithUserLineupIdOnly = await prisma.userLineupItem.findMany({ select: { userLineupId: true } })
     * 
     */
    findMany<T extends UserLineupItemFindManyArgs>(args?: SelectSubset<T, UserLineupItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLineupItem.
     * @param {UserLineupItemCreateArgs} args - Arguments to create a UserLineupItem.
     * @example
     * // Create one UserLineupItem
     * const UserLineupItem = await prisma.userLineupItem.create({
     *   data: {
     *     // ... data to create a UserLineupItem
     *   }
     * })
     * 
     */
    create<T extends UserLineupItemCreateArgs>(args: SelectSubset<T, UserLineupItemCreateArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLineupItems.
     * @param {UserLineupItemCreateManyArgs} args - Arguments to create many UserLineupItems.
     * @example
     * // Create many UserLineupItems
     * const userLineupItem = await prisma.userLineupItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLineupItemCreateManyArgs>(args?: SelectSubset<T, UserLineupItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLineupItems and returns the data saved in the database.
     * @param {UserLineupItemCreateManyAndReturnArgs} args - Arguments to create many UserLineupItems.
     * @example
     * // Create many UserLineupItems
     * const userLineupItem = await prisma.userLineupItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLineupItems and only return the `userLineupId`
     * const userLineupItemWithUserLineupIdOnly = await prisma.userLineupItem.createManyAndReturn({
     *   select: { userLineupId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLineupItemCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLineupItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLineupItem.
     * @param {UserLineupItemDeleteArgs} args - Arguments to delete one UserLineupItem.
     * @example
     * // Delete one UserLineupItem
     * const UserLineupItem = await prisma.userLineupItem.delete({
     *   where: {
     *     // ... filter to delete one UserLineupItem
     *   }
     * })
     * 
     */
    delete<T extends UserLineupItemDeleteArgs>(args: SelectSubset<T, UserLineupItemDeleteArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLineupItem.
     * @param {UserLineupItemUpdateArgs} args - Arguments to update one UserLineupItem.
     * @example
     * // Update one UserLineupItem
     * const userLineupItem = await prisma.userLineupItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLineupItemUpdateArgs>(args: SelectSubset<T, UserLineupItemUpdateArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLineupItems.
     * @param {UserLineupItemDeleteManyArgs} args - Arguments to filter UserLineupItems to delete.
     * @example
     * // Delete a few UserLineupItems
     * const { count } = await prisma.userLineupItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLineupItemDeleteManyArgs>(args?: SelectSubset<T, UserLineupItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLineupItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLineupItems
     * const userLineupItem = await prisma.userLineupItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLineupItemUpdateManyArgs>(args: SelectSubset<T, UserLineupItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLineupItems and returns the data updated in the database.
     * @param {UserLineupItemUpdateManyAndReturnArgs} args - Arguments to update many UserLineupItems.
     * @example
     * // Update many UserLineupItems
     * const userLineupItem = await prisma.userLineupItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLineupItems and only return the `userLineupId`
     * const userLineupItemWithUserLineupIdOnly = await prisma.userLineupItem.updateManyAndReturn({
     *   select: { userLineupId: true },
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
    updateManyAndReturn<T extends UserLineupItemUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLineupItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLineupItem.
     * @param {UserLineupItemUpsertArgs} args - Arguments to update or create a UserLineupItem.
     * @example
     * // Update or create a UserLineupItem
     * const userLineupItem = await prisma.userLineupItem.upsert({
     *   create: {
     *     // ... data to create a UserLineupItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLineupItem we want to update
     *   }
     * })
     */
    upsert<T extends UserLineupItemUpsertArgs>(args: SelectSubset<T, UserLineupItemUpsertArgs<ExtArgs>>): Prisma__UserLineupItemClient<$Result.GetResult<Prisma.$UserLineupItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLineupItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupItemCountArgs} args - Arguments to filter UserLineupItems to count.
     * @example
     * // Count the number of UserLineupItems
     * const count = await prisma.userLineupItem.count({
     *   where: {
     *     // ... the filter for the UserLineupItems we want to count
     *   }
     * })
    **/
    count<T extends UserLineupItemCountArgs>(
      args?: Subset<T, UserLineupItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLineupItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLineupItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLineupItemAggregateArgs>(args: Subset<T, UserLineupItemAggregateArgs>): Prisma.PrismaPromise<GetUserLineupItemAggregateType<T>>

    /**
     * Group by UserLineupItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLineupItemGroupByArgs} args - Group by arguments.
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
      T extends UserLineupItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLineupItemGroupByArgs['orderBy'] }
        : { orderBy?: UserLineupItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLineupItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLineupItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLineupItem model
   */
  readonly fields: UserLineupItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLineupItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLineupItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lineup<T extends UserLineupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLineupDefaultArgs<ExtArgs>>): Prisma__UserLineupClient<$Result.GetResult<Prisma.$UserLineupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artist<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLineupItem model
   */
  interface UserLineupItemFieldRefs {
    readonly userLineupId: FieldRef<"UserLineupItem", 'String'>
    readonly artistsId: FieldRef<"UserLineupItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLineupItem findUnique
   */
  export type UserLineupItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * Filter, which UserLineupItem to fetch.
     */
    where: UserLineupItemWhereUniqueInput
  }

  /**
   * UserLineupItem findUniqueOrThrow
   */
  export type UserLineupItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * Filter, which UserLineupItem to fetch.
     */
    where: UserLineupItemWhereUniqueInput
  }

  /**
   * UserLineupItem findFirst
   */
  export type UserLineupItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * Filter, which UserLineupItem to fetch.
     */
    where?: UserLineupItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineupItems to fetch.
     */
    orderBy?: UserLineupItemOrderByWithRelationInput | UserLineupItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLineupItems.
     */
    cursor?: UserLineupItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineupItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineupItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLineupItems.
     */
    distinct?: UserLineupItemScalarFieldEnum | UserLineupItemScalarFieldEnum[]
  }

  /**
   * UserLineupItem findFirstOrThrow
   */
  export type UserLineupItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * Filter, which UserLineupItem to fetch.
     */
    where?: UserLineupItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineupItems to fetch.
     */
    orderBy?: UserLineupItemOrderByWithRelationInput | UserLineupItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLineupItems.
     */
    cursor?: UserLineupItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineupItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineupItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLineupItems.
     */
    distinct?: UserLineupItemScalarFieldEnum | UserLineupItemScalarFieldEnum[]
  }

  /**
   * UserLineupItem findMany
   */
  export type UserLineupItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * Filter, which UserLineupItems to fetch.
     */
    where?: UserLineupItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLineupItems to fetch.
     */
    orderBy?: UserLineupItemOrderByWithRelationInput | UserLineupItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLineupItems.
     */
    cursor?: UserLineupItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLineupItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLineupItems.
     */
    skip?: number
    distinct?: UserLineupItemScalarFieldEnum | UserLineupItemScalarFieldEnum[]
  }

  /**
   * UserLineupItem create
   */
  export type UserLineupItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLineupItem.
     */
    data: XOR<UserLineupItemCreateInput, UserLineupItemUncheckedCreateInput>
  }

  /**
   * UserLineupItem createMany
   */
  export type UserLineupItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLineupItems.
     */
    data: UserLineupItemCreateManyInput | UserLineupItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLineupItem createManyAndReturn
   */
  export type UserLineupItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * The data used to create many UserLineupItems.
     */
    data: UserLineupItemCreateManyInput | UserLineupItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLineupItem update
   */
  export type UserLineupItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLineupItem.
     */
    data: XOR<UserLineupItemUpdateInput, UserLineupItemUncheckedUpdateInput>
    /**
     * Choose, which UserLineupItem to update.
     */
    where: UserLineupItemWhereUniqueInput
  }

  /**
   * UserLineupItem updateMany
   */
  export type UserLineupItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLineupItems.
     */
    data: XOR<UserLineupItemUpdateManyMutationInput, UserLineupItemUncheckedUpdateManyInput>
    /**
     * Filter which UserLineupItems to update
     */
    where?: UserLineupItemWhereInput
    /**
     * Limit how many UserLineupItems to update.
     */
    limit?: number
  }

  /**
   * UserLineupItem updateManyAndReturn
   */
  export type UserLineupItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * The data used to update UserLineupItems.
     */
    data: XOR<UserLineupItemUpdateManyMutationInput, UserLineupItemUncheckedUpdateManyInput>
    /**
     * Filter which UserLineupItems to update
     */
    where?: UserLineupItemWhereInput
    /**
     * Limit how many UserLineupItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLineupItem upsert
   */
  export type UserLineupItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLineupItem to update in case it exists.
     */
    where: UserLineupItemWhereUniqueInput
    /**
     * In case the UserLineupItem found by the `where` argument doesn't exist, create a new UserLineupItem with this data.
     */
    create: XOR<UserLineupItemCreateInput, UserLineupItemUncheckedCreateInput>
    /**
     * In case the UserLineupItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLineupItemUpdateInput, UserLineupItemUncheckedUpdateInput>
  }

  /**
   * UserLineupItem delete
   */
  export type UserLineupItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
    /**
     * Filter which UserLineupItem to delete.
     */
    where: UserLineupItemWhereUniqueInput
  }

  /**
   * UserLineupItem deleteMany
   */
  export type UserLineupItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLineupItems to delete
     */
    where?: UserLineupItemWhereInput
    /**
     * Limit how many UserLineupItems to delete.
     */
    limit?: number
  }

  /**
   * UserLineupItem without action
   */
  export type UserLineupItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLineupItem
     */
    select?: UserLineupItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLineupItem
     */
    omit?: UserLineupItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLineupItemInclude<ExtArgs> | null
  }


  /**
   * Model Tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    festivalId: string | null
  }

  export type TicketsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    festivalId: string | null
  }

  export type TicketsCountAggregateOutputType = {
    id: number
    userId: number
    festivalId: number
    _all: number
  }


  export type TicketsMinAggregateInputType = {
    id?: true
    userId?: true
    festivalId?: true
  }

  export type TicketsMaxAggregateInputType = {
    id?: true
    userId?: true
    festivalId?: true
  }

  export type TicketsCountAggregateInputType = {
    id?: true
    userId?: true
    festivalId?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to aggregate.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type TicketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithAggregationInput | TicketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: TicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    id: string
    userId: string
    festivalId: string
    _count: TicketsCountAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends TicketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type TicketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    festivalId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    festivalId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    festivalId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectScalar = {
    id?: boolean
    userId?: boolean
    festivalId?: boolean
  }

  export type TicketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "festivalId", ExtArgs["result"]["tickets"]>
  export type TicketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }
  export type TicketsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }
  export type TicketsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    festival?: boolean | FestivalsDefaultArgs<ExtArgs>
  }

  export type $TicketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tickets"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      festival: Prisma.$FestivalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      festivalId: string
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type TicketsGetPayload<S extends boolean | null | undefined | TicketsDefaultArgs> = $Result.GetResult<Prisma.$TicketsPayload, S>

  type TicketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface TicketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tickets'], meta: { name: 'Tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {TicketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketsFindUniqueArgs>(args: SelectSubset<T, TicketsFindUniqueArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketsFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketsFindFirstArgs>(args?: SelectSubset<T, TicketsFindFirstArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketsFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketsWithIdOnly = await prisma.tickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketsFindManyArgs>(args?: SelectSubset<T, TicketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {TicketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends TicketsCreateArgs>(args: SelectSubset<T, TicketsCreateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketsCreateManyArgs>(args?: SelectSubset<T, TicketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketsCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketsCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickets.
     * @param {TicketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends TicketsDeleteArgs>(args: SelectSubset<T, TicketsDeleteArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {TicketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketsUpdateArgs>(args: SelectSubset<T, TicketsUpdateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketsDeleteManyArgs>(args?: SelectSubset<T, TicketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketsUpdateManyArgs>(args: SelectSubset<T, TicketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketsUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketsUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickets.
     * @param {TicketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends TicketsUpsertArgs>(args: SelectSubset<T, TicketsUpsertArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketsCountArgs>(
      args?: Subset<T, TicketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsGroupByArgs} args - Group by arguments.
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
      T extends TicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketsGroupByArgs['orderBy'] }
        : { orderBy?: TicketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tickets model
   */
  readonly fields: TicketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    festival<T extends FestivalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalsDefaultArgs<ExtArgs>>): Prisma__FestivalsClient<$Result.GetResult<Prisma.$FestivalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tickets model
   */
  interface TicketsFieldRefs {
    readonly id: FieldRef<"Tickets", 'String'>
    readonly userId: FieldRef<"Tickets", 'String'>
    readonly festivalId: FieldRef<"Tickets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tickets findUnique
   */
  export type TicketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findUniqueOrThrow
   */
  export type TicketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findFirst
   */
  export type TicketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findFirstOrThrow
   */
  export type TicketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findMany
   */
  export type TicketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets create
   */
  export type TicketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tickets.
     */
    data: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
  }

  /**
   * Tickets createMany
   */
  export type TicketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketsCreateManyInput | TicketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickets createManyAndReturn
   */
  export type TicketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketsCreateManyInput | TicketsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tickets update
   */
  export type TicketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tickets.
     */
    data: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
    /**
     * Choose, which Tickets to update.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets updateMany
   */
  export type TicketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Tickets updateManyAndReturn
   */
  export type TicketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tickets upsert
   */
  export type TicketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tickets to update in case it exists.
     */
    where: TicketsWhereUniqueInput
    /**
     * In case the Tickets found by the `where` argument doesn't exist, create a new Tickets with this data.
     */
    create: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
    /**
     * In case the Tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
  }

  /**
   * Tickets delete
   */
  export type TicketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter which Tickets to delete.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets deleteMany
   */
  export type TicketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Tickets without action
   */
  export type TicketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FestivalsScalarFieldEnum: {
    id: 'id',
    organiserId: 'organiserId',
    name: 'name',
    location: 'location',
    created_at: 'created_at',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type FestivalsScalarFieldEnum = (typeof FestivalsScalarFieldEnum)[keyof typeof FestivalsScalarFieldEnum]


  export const StagesScalarFieldEnum: {
    id: 'id',
    festivalId: 'festivalId',
    name: 'name'
  };

  export type StagesScalarFieldEnum = (typeof StagesScalarFieldEnum)[keyof typeof StagesScalarFieldEnum]


  export const ArtistPerformanceScalarFieldEnum: {
    artistId: 'artistId',
    stageId: 'stageId',
    day: 'day',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type ArtistPerformanceScalarFieldEnum = (typeof ArtistPerformanceScalarFieldEnum)[keyof typeof ArtistPerformanceScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    genre: 'genre'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const UserLineupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    festivalId: 'festivalId'
  };

  export type UserLineupScalarFieldEnum = (typeof UserLineupScalarFieldEnum)[keyof typeof UserLineupScalarFieldEnum]


  export const UserLineupItemScalarFieldEnum: {
    userLineupId: 'userLineupId',
    artistsId: 'artistsId'
  };

  export type UserLineupItemScalarFieldEnum = (typeof UserLineupItemScalarFieldEnum)[keyof typeof UserLineupItemScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    festivalId: 'festivalId'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


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
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    festivals?: FestivalsListRelationFilter
    tickets?: TicketsListRelationFilter
    userLineups?: UserLineupListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    festivals?: FestivalsOrderByRelationAggregateInput
    tickets?: TicketsOrderByRelationAggregateInput
    userLineups?: UserLineupOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    festivals?: FestivalsListRelationFilter
    tickets?: TicketsListRelationFilter
    userLineups?: UserLineupListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
  }

  export type FestivalsWhereInput = {
    AND?: FestivalsWhereInput | FestivalsWhereInput[]
    OR?: FestivalsWhereInput[]
    NOT?: FestivalsWhereInput | FestivalsWhereInput[]
    id?: StringFilter<"Festivals"> | string
    organiserId?: StringFilter<"Festivals"> | string
    name?: StringFilter<"Festivals"> | string
    location?: FloatNullableListFilter<"Festivals">
    created_at?: DateTimeFilter<"Festivals"> | Date | string
    start_date?: DateTimeFilter<"Festivals"> | Date | string
    end_date?: DateTimeFilter<"Festivals"> | Date | string
    organiser?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    stages?: StagesListRelationFilter
    tickets?: TicketsListRelationFilter
    userLineups?: UserLineupListRelationFilter
  }

  export type FestivalsOrderByWithRelationInput = {
    id?: SortOrder
    organiserId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    organiser?: UsersOrderByWithRelationInput
    stages?: StagesOrderByRelationAggregateInput
    tickets?: TicketsOrderByRelationAggregateInput
    userLineups?: UserLineupOrderByRelationAggregateInput
  }

  export type FestivalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FestivalsWhereInput | FestivalsWhereInput[]
    OR?: FestivalsWhereInput[]
    NOT?: FestivalsWhereInput | FestivalsWhereInput[]
    organiserId?: StringFilter<"Festivals"> | string
    name?: StringFilter<"Festivals"> | string
    location?: FloatNullableListFilter<"Festivals">
    created_at?: DateTimeFilter<"Festivals"> | Date | string
    start_date?: DateTimeFilter<"Festivals"> | Date | string
    end_date?: DateTimeFilter<"Festivals"> | Date | string
    organiser?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    stages?: StagesListRelationFilter
    tickets?: TicketsListRelationFilter
    userLineups?: UserLineupListRelationFilter
  }, "id">

  export type FestivalsOrderByWithAggregationInput = {
    id?: SortOrder
    organiserId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    _count?: FestivalsCountOrderByAggregateInput
    _avg?: FestivalsAvgOrderByAggregateInput
    _max?: FestivalsMaxOrderByAggregateInput
    _min?: FestivalsMinOrderByAggregateInput
    _sum?: FestivalsSumOrderByAggregateInput
  }

  export type FestivalsScalarWhereWithAggregatesInput = {
    AND?: FestivalsScalarWhereWithAggregatesInput | FestivalsScalarWhereWithAggregatesInput[]
    OR?: FestivalsScalarWhereWithAggregatesInput[]
    NOT?: FestivalsScalarWhereWithAggregatesInput | FestivalsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Festivals"> | string
    organiserId?: StringWithAggregatesFilter<"Festivals"> | string
    name?: StringWithAggregatesFilter<"Festivals"> | string
    location?: FloatNullableListFilter<"Festivals">
    created_at?: DateTimeWithAggregatesFilter<"Festivals"> | Date | string
    start_date?: DateTimeWithAggregatesFilter<"Festivals"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Festivals"> | Date | string
  }

  export type StagesWhereInput = {
    AND?: StagesWhereInput | StagesWhereInput[]
    OR?: StagesWhereInput[]
    NOT?: StagesWhereInput | StagesWhereInput[]
    id?: StringFilter<"Stages"> | string
    festivalId?: StringFilter<"Stages"> | string
    name?: StringFilter<"Stages"> | string
    festival?: XOR<FestivalsScalarRelationFilter, FestivalsWhereInput>
    performances?: ArtistPerformanceListRelationFilter
  }

  export type StagesOrderByWithRelationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    name?: SortOrder
    festival?: FestivalsOrderByWithRelationInput
    performances?: ArtistPerformanceOrderByRelationAggregateInput
  }

  export type StagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StagesWhereInput | StagesWhereInput[]
    OR?: StagesWhereInput[]
    NOT?: StagesWhereInput | StagesWhereInput[]
    festivalId?: StringFilter<"Stages"> | string
    name?: StringFilter<"Stages"> | string
    festival?: XOR<FestivalsScalarRelationFilter, FestivalsWhereInput>
    performances?: ArtistPerformanceListRelationFilter
  }, "id">

  export type StagesOrderByWithAggregationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    name?: SortOrder
    _count?: StagesCountOrderByAggregateInput
    _max?: StagesMaxOrderByAggregateInput
    _min?: StagesMinOrderByAggregateInput
  }

  export type StagesScalarWhereWithAggregatesInput = {
    AND?: StagesScalarWhereWithAggregatesInput | StagesScalarWhereWithAggregatesInput[]
    OR?: StagesScalarWhereWithAggregatesInput[]
    NOT?: StagesScalarWhereWithAggregatesInput | StagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stages"> | string
    festivalId?: StringWithAggregatesFilter<"Stages"> | string
    name?: StringWithAggregatesFilter<"Stages"> | string
  }

  export type ArtistPerformanceWhereInput = {
    AND?: ArtistPerformanceWhereInput | ArtistPerformanceWhereInput[]
    OR?: ArtistPerformanceWhereInput[]
    NOT?: ArtistPerformanceWhereInput | ArtistPerformanceWhereInput[]
    artistId?: StringFilter<"ArtistPerformance"> | string
    stageId?: StringFilter<"ArtistPerformance"> | string
    day?: DateTimeFilter<"ArtistPerformance"> | Date | string
    start_time?: DateTimeFilter<"ArtistPerformance"> | Date | string
    end_time?: DateTimeFilter<"ArtistPerformance"> | Date | string
    artist?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
    stage?: XOR<StagesScalarRelationFilter, StagesWhereInput>
  }

  export type ArtistPerformanceOrderByWithRelationInput = {
    artistId?: SortOrder
    stageId?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    artist?: ArtistsOrderByWithRelationInput
    stage?: StagesOrderByWithRelationInput
  }

  export type ArtistPerformanceWhereUniqueInput = Prisma.AtLeast<{
    artistId_stageId_day?: ArtistPerformanceArtistIdStageIdDayCompoundUniqueInput
    AND?: ArtistPerformanceWhereInput | ArtistPerformanceWhereInput[]
    OR?: ArtistPerformanceWhereInput[]
    NOT?: ArtistPerformanceWhereInput | ArtistPerformanceWhereInput[]
    artistId?: StringFilter<"ArtistPerformance"> | string
    stageId?: StringFilter<"ArtistPerformance"> | string
    day?: DateTimeFilter<"ArtistPerformance"> | Date | string
    start_time?: DateTimeFilter<"ArtistPerformance"> | Date | string
    end_time?: DateTimeFilter<"ArtistPerformance"> | Date | string
    artist?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
    stage?: XOR<StagesScalarRelationFilter, StagesWhereInput>
  }, "artistId_stageId_day">

  export type ArtistPerformanceOrderByWithAggregationInput = {
    artistId?: SortOrder
    stageId?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    _count?: ArtistPerformanceCountOrderByAggregateInput
    _max?: ArtistPerformanceMaxOrderByAggregateInput
    _min?: ArtistPerformanceMinOrderByAggregateInput
  }

  export type ArtistPerformanceScalarWhereWithAggregatesInput = {
    AND?: ArtistPerformanceScalarWhereWithAggregatesInput | ArtistPerformanceScalarWhereWithAggregatesInput[]
    OR?: ArtistPerformanceScalarWhereWithAggregatesInput[]
    NOT?: ArtistPerformanceScalarWhereWithAggregatesInput | ArtistPerformanceScalarWhereWithAggregatesInput[]
    artistId?: StringWithAggregatesFilter<"ArtistPerformance"> | string
    stageId?: StringWithAggregatesFilter<"ArtistPerformance"> | string
    day?: DateTimeWithAggregatesFilter<"ArtistPerformance"> | Date | string
    start_time?: DateTimeWithAggregatesFilter<"ArtistPerformance"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"ArtistPerformance"> | Date | string
  }

  export type ArtistsWhereInput = {
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    id?: StringFilter<"Artists"> | string
    name?: StringFilter<"Artists"> | string
    genre?: StringFilter<"Artists"> | string
    performances?: ArtistPerformanceListRelationFilter
    lineupItems?: UserLineupItemListRelationFilter
  }

  export type ArtistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    genre?: SortOrder
    performances?: ArtistPerformanceOrderByRelationAggregateInput
    lineupItems?: UserLineupItemOrderByRelationAggregateInput
  }

  export type ArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    name?: StringFilter<"Artists"> | string
    genre?: StringFilter<"Artists"> | string
    performances?: ArtistPerformanceListRelationFilter
    lineupItems?: UserLineupItemListRelationFilter
  }, "id">

  export type ArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    genre?: SortOrder
    _count?: ArtistsCountOrderByAggregateInput
    _max?: ArtistsMaxOrderByAggregateInput
    _min?: ArtistsMinOrderByAggregateInput
  }

  export type ArtistsScalarWhereWithAggregatesInput = {
    AND?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    OR?: ArtistsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artists"> | string
    name?: StringWithAggregatesFilter<"Artists"> | string
    genre?: StringWithAggregatesFilter<"Artists"> | string
  }

  export type UserLineupWhereInput = {
    AND?: UserLineupWhereInput | UserLineupWhereInput[]
    OR?: UserLineupWhereInput[]
    NOT?: UserLineupWhereInput | UserLineupWhereInput[]
    id?: StringFilter<"UserLineup"> | string
    userId?: StringFilter<"UserLineup"> | string
    festivalId?: StringFilter<"UserLineup"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    festival?: XOR<FestivalsScalarRelationFilter, FestivalsWhereInput>
    items?: UserLineupItemListRelationFilter
  }

  export type UserLineupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
    user?: UsersOrderByWithRelationInput
    festival?: FestivalsOrderByWithRelationInput
    items?: UserLineupItemOrderByRelationAggregateInput
  }

  export type UserLineupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserLineupWhereInput | UserLineupWhereInput[]
    OR?: UserLineupWhereInput[]
    NOT?: UserLineupWhereInput | UserLineupWhereInput[]
    userId?: StringFilter<"UserLineup"> | string
    festivalId?: StringFilter<"UserLineup"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    festival?: XOR<FestivalsScalarRelationFilter, FestivalsWhereInput>
    items?: UserLineupItemListRelationFilter
  }, "id">

  export type UserLineupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
    _count?: UserLineupCountOrderByAggregateInput
    _max?: UserLineupMaxOrderByAggregateInput
    _min?: UserLineupMinOrderByAggregateInput
  }

  export type UserLineupScalarWhereWithAggregatesInput = {
    AND?: UserLineupScalarWhereWithAggregatesInput | UserLineupScalarWhereWithAggregatesInput[]
    OR?: UserLineupScalarWhereWithAggregatesInput[]
    NOT?: UserLineupScalarWhereWithAggregatesInput | UserLineupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLineup"> | string
    userId?: StringWithAggregatesFilter<"UserLineup"> | string
    festivalId?: StringWithAggregatesFilter<"UserLineup"> | string
  }

  export type UserLineupItemWhereInput = {
    AND?: UserLineupItemWhereInput | UserLineupItemWhereInput[]
    OR?: UserLineupItemWhereInput[]
    NOT?: UserLineupItemWhereInput | UserLineupItemWhereInput[]
    userLineupId?: StringFilter<"UserLineupItem"> | string
    artistsId?: StringFilter<"UserLineupItem"> | string
    lineup?: XOR<UserLineupScalarRelationFilter, UserLineupWhereInput>
    artist?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
  }

  export type UserLineupItemOrderByWithRelationInput = {
    userLineupId?: SortOrder
    artistsId?: SortOrder
    lineup?: UserLineupOrderByWithRelationInput
    artist?: ArtistsOrderByWithRelationInput
  }

  export type UserLineupItemWhereUniqueInput = Prisma.AtLeast<{
    userLineupId_artistsId?: UserLineupItemUserLineupIdArtistsIdCompoundUniqueInput
    AND?: UserLineupItemWhereInput | UserLineupItemWhereInput[]
    OR?: UserLineupItemWhereInput[]
    NOT?: UserLineupItemWhereInput | UserLineupItemWhereInput[]
    userLineupId?: StringFilter<"UserLineupItem"> | string
    artistsId?: StringFilter<"UserLineupItem"> | string
    lineup?: XOR<UserLineupScalarRelationFilter, UserLineupWhereInput>
    artist?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
  }, "userLineupId_artistsId">

  export type UserLineupItemOrderByWithAggregationInput = {
    userLineupId?: SortOrder
    artistsId?: SortOrder
    _count?: UserLineupItemCountOrderByAggregateInput
    _max?: UserLineupItemMaxOrderByAggregateInput
    _min?: UserLineupItemMinOrderByAggregateInput
  }

  export type UserLineupItemScalarWhereWithAggregatesInput = {
    AND?: UserLineupItemScalarWhereWithAggregatesInput | UserLineupItemScalarWhereWithAggregatesInput[]
    OR?: UserLineupItemScalarWhereWithAggregatesInput[]
    NOT?: UserLineupItemScalarWhereWithAggregatesInput | UserLineupItemScalarWhereWithAggregatesInput[]
    userLineupId?: StringWithAggregatesFilter<"UserLineupItem"> | string
    artistsId?: StringWithAggregatesFilter<"UserLineupItem"> | string
  }

  export type TicketsWhereInput = {
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    id?: StringFilter<"Tickets"> | string
    userId?: StringFilter<"Tickets"> | string
    festivalId?: StringFilter<"Tickets"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    festival?: XOR<FestivalsScalarRelationFilter, FestivalsWhereInput>
  }

  export type TicketsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
    user?: UsersOrderByWithRelationInput
    festival?: FestivalsOrderByWithRelationInput
  }

  export type TicketsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    userId?: StringFilter<"Tickets"> | string
    festivalId?: StringFilter<"Tickets"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    festival?: XOR<FestivalsScalarRelationFilter, FestivalsWhereInput>
  }, "id">

  export type TicketsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
    _count?: TicketsCountOrderByAggregateInput
    _max?: TicketsMaxOrderByAggregateInput
    _min?: TicketsMinOrderByAggregateInput
  }

  export type TicketsScalarWhereWithAggregatesInput = {
    AND?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    OR?: TicketsScalarWhereWithAggregatesInput[]
    NOT?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tickets"> | string
    userId?: StringWithAggregatesFilter<"Tickets"> | string
    festivalId?: StringWithAggregatesFilter<"Tickets"> | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    festivals?: FestivalsCreateNestedManyWithoutOrganiserInput
    tickets?: TicketsCreateNestedManyWithoutUserInput
    userLineups?: UserLineupCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    festivals?: FestivalsUncheckedCreateNestedManyWithoutOrganiserInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutUserInput
    userLineups?: UserLineupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalsUpdateManyWithoutOrganiserNestedInput
    tickets?: TicketsUpdateManyWithoutUserNestedInput
    userLineups?: UserLineupUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalsUncheckedUpdateManyWithoutOrganiserNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutUserNestedInput
    userLineups?: UserLineupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type FestivalsCreateInput = {
    id?: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    organiser: UsersCreateNestedOneWithoutFestivalsInput
    stages?: StagesCreateNestedManyWithoutFestivalInput
    tickets?: TicketsCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsUncheckedCreateInput = {
    id?: string
    organiserId: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    stages?: StagesUncheckedCreateNestedManyWithoutFestivalInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organiser?: UsersUpdateOneRequiredWithoutFestivalsNestedInput
    stages?: StagesUpdateManyWithoutFestivalNestedInput
    tickets?: TicketsUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organiserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StagesUncheckedUpdateManyWithoutFestivalNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsCreateManyInput = {
    id?: string
    organiserId: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
  }

  export type FestivalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organiserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagesCreateInput = {
    id?: string
    name: string
    festival: FestivalsCreateNestedOneWithoutStagesInput
    performances?: ArtistPerformanceCreateNestedManyWithoutStageInput
  }

  export type StagesUncheckedCreateInput = {
    id?: string
    festivalId: string
    name: string
    performances?: ArtistPerformanceUncheckedCreateNestedManyWithoutStageInput
  }

  export type StagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    festival?: FestivalsUpdateOneRequiredWithoutStagesNestedInput
    performances?: ArtistPerformanceUpdateManyWithoutStageNestedInput
  }

  export type StagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    performances?: ArtistPerformanceUncheckedUpdateManyWithoutStageNestedInput
  }

  export type StagesCreateManyInput = {
    id?: string
    festivalId: string
    name: string
  }

  export type StagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistPerformanceCreateInput = {
    day: Date | string
    start_time: Date | string
    end_time: Date | string
    artist: ArtistsCreateNestedOneWithoutPerformancesInput
    stage: StagesCreateNestedOneWithoutPerformancesInput
  }

  export type ArtistPerformanceUncheckedCreateInput = {
    artistId: string
    stageId: string
    day: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type ArtistPerformanceUpdateInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistsUpdateOneRequiredWithoutPerformancesNestedInput
    stage?: StagesUpdateOneRequiredWithoutPerformancesNestedInput
  }

  export type ArtistPerformanceUncheckedUpdateInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistPerformanceCreateManyInput = {
    artistId: string
    stageId: string
    day: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type ArtistPerformanceUpdateManyMutationInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistPerformanceUncheckedUpdateManyInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistsCreateInput = {
    id?: string
    name: string
    genre: string
    performances?: ArtistPerformanceCreateNestedManyWithoutArtistInput
    lineupItems?: UserLineupItemCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateInput = {
    id?: string
    name: string
    genre: string
    performances?: ArtistPerformanceUncheckedCreateNestedManyWithoutArtistInput
    lineupItems?: UserLineupItemUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    performances?: ArtistPerformanceUpdateManyWithoutArtistNestedInput
    lineupItems?: UserLineupItemUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    performances?: ArtistPerformanceUncheckedUpdateManyWithoutArtistNestedInput
    lineupItems?: UserLineupItemUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsCreateManyInput = {
    id?: string
    name: string
    genre: string
  }

  export type ArtistsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupCreateInput = {
    id?: string
    user: UsersCreateNestedOneWithoutUserLineupsInput
    festival: FestivalsCreateNestedOneWithoutUserLineupsInput
    items?: UserLineupItemCreateNestedManyWithoutLineupInput
  }

  export type UserLineupUncheckedCreateInput = {
    id?: string
    userId: string
    festivalId: string
    items?: UserLineupItemUncheckedCreateNestedManyWithoutLineupInput
  }

  export type UserLineupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutUserLineupsNestedInput
    festival?: FestivalsUpdateOneRequiredWithoutUserLineupsNestedInput
    items?: UserLineupItemUpdateManyWithoutLineupNestedInput
  }

  export type UserLineupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    items?: UserLineupItemUncheckedUpdateManyWithoutLineupNestedInput
  }

  export type UserLineupCreateManyInput = {
    id?: string
    userId: string
    festivalId: string
  }

  export type UserLineupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupItemCreateInput = {
    lineup: UserLineupCreateNestedOneWithoutItemsInput
    artist: ArtistsCreateNestedOneWithoutLineupItemsInput
  }

  export type UserLineupItemUncheckedCreateInput = {
    userLineupId: string
    artistsId: string
  }

  export type UserLineupItemUpdateInput = {
    lineup?: UserLineupUpdateOneRequiredWithoutItemsNestedInput
    artist?: ArtistsUpdateOneRequiredWithoutLineupItemsNestedInput
  }

  export type UserLineupItemUncheckedUpdateInput = {
    userLineupId?: StringFieldUpdateOperationsInput | string
    artistsId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupItemCreateManyInput = {
    userLineupId: string
    artistsId: string
  }

  export type UserLineupItemUpdateManyMutationInput = {

  }

  export type UserLineupItemUncheckedUpdateManyInput = {
    userLineupId?: StringFieldUpdateOperationsInput | string
    artistsId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsCreateInput = {
    id?: string
    user: UsersCreateNestedOneWithoutTicketsInput
    festival: FestivalsCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateInput = {
    id?: string
    userId: string
    festivalId: string
  }

  export type TicketsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutTicketsNestedInput
    festival?: FestivalsUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsCreateManyInput = {
    id?: string
    userId: string
    festivalId: string
  }

  export type TicketsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
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

  export type FestivalsListRelationFilter = {
    every?: FestivalsWhereInput
    some?: FestivalsWhereInput
    none?: FestivalsWhereInput
  }

  export type TicketsListRelationFilter = {
    every?: TicketsWhereInput
    some?: TicketsWhereInput
    none?: TicketsWhereInput
  }

  export type UserLineupListRelationFilter = {
    every?: UserLineupWhereInput
    some?: UserLineupWhereInput
    none?: UserLineupWhereInput
  }

  export type FestivalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLineupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
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

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type StagesListRelationFilter = {
    every?: StagesWhereInput
    some?: StagesWhereInput
    none?: StagesWhereInput
  }

  export type StagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FestivalsCountOrderByAggregateInput = {
    id?: SortOrder
    organiserId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type FestivalsAvgOrderByAggregateInput = {
    location?: SortOrder
  }

  export type FestivalsMaxOrderByAggregateInput = {
    id?: SortOrder
    organiserId?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type FestivalsMinOrderByAggregateInput = {
    id?: SortOrder
    organiserId?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type FestivalsSumOrderByAggregateInput = {
    location?: SortOrder
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

  export type FestivalsScalarRelationFilter = {
    is?: FestivalsWhereInput
    isNot?: FestivalsWhereInput
  }

  export type ArtistPerformanceListRelationFilter = {
    every?: ArtistPerformanceWhereInput
    some?: ArtistPerformanceWhereInput
    none?: ArtistPerformanceWhereInput
  }

  export type ArtistPerformanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StagesCountOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    name?: SortOrder
  }

  export type StagesMaxOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    name?: SortOrder
  }

  export type StagesMinOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    name?: SortOrder
  }

  export type ArtistsScalarRelationFilter = {
    is?: ArtistsWhereInput
    isNot?: ArtistsWhereInput
  }

  export type StagesScalarRelationFilter = {
    is?: StagesWhereInput
    isNot?: StagesWhereInput
  }

  export type ArtistPerformanceArtistIdStageIdDayCompoundUniqueInput = {
    artistId: string
    stageId: string
    day: Date | string
  }

  export type ArtistPerformanceCountOrderByAggregateInput = {
    artistId?: SortOrder
    stageId?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type ArtistPerformanceMaxOrderByAggregateInput = {
    artistId?: SortOrder
    stageId?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type ArtistPerformanceMinOrderByAggregateInput = {
    artistId?: SortOrder
    stageId?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type UserLineupItemListRelationFilter = {
    every?: UserLineupItemWhereInput
    some?: UserLineupItemWhereInput
    none?: UserLineupItemWhereInput
  }

  export type UserLineupItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genre?: SortOrder
  }

  export type ArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genre?: SortOrder
  }

  export type ArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genre?: SortOrder
  }

  export type UserLineupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
  }

  export type UserLineupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
  }

  export type UserLineupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
  }

  export type UserLineupScalarRelationFilter = {
    is?: UserLineupWhereInput
    isNot?: UserLineupWhereInput
  }

  export type UserLineupItemUserLineupIdArtistsIdCompoundUniqueInput = {
    userLineupId: string
    artistsId: string
  }

  export type UserLineupItemCountOrderByAggregateInput = {
    userLineupId?: SortOrder
    artistsId?: SortOrder
  }

  export type UserLineupItemMaxOrderByAggregateInput = {
    userLineupId?: SortOrder
    artistsId?: SortOrder
  }

  export type UserLineupItemMinOrderByAggregateInput = {
    userLineupId?: SortOrder
    artistsId?: SortOrder
  }

  export type TicketsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
  }

  export type TicketsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
  }

  export type TicketsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    festivalId?: SortOrder
  }

  export type FestivalsCreateNestedManyWithoutOrganiserInput = {
    create?: XOR<FestivalsCreateWithoutOrganiserInput, FestivalsUncheckedCreateWithoutOrganiserInput> | FestivalsCreateWithoutOrganiserInput[] | FestivalsUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: FestivalsCreateOrConnectWithoutOrganiserInput | FestivalsCreateOrConnectWithoutOrganiserInput[]
    createMany?: FestivalsCreateManyOrganiserInputEnvelope
    connect?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
  }

  export type TicketsCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketsCreateWithoutUserInput, TicketsUncheckedCreateWithoutUserInput> | TicketsCreateWithoutUserInput[] | TicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUserInput | TicketsCreateOrConnectWithoutUserInput[]
    createMany?: TicketsCreateManyUserInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type UserLineupCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLineupCreateWithoutUserInput, UserLineupUncheckedCreateWithoutUserInput> | UserLineupCreateWithoutUserInput[] | UserLineupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutUserInput | UserLineupCreateOrConnectWithoutUserInput[]
    createMany?: UserLineupCreateManyUserInputEnvelope
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
  }

  export type FestivalsUncheckedCreateNestedManyWithoutOrganiserInput = {
    create?: XOR<FestivalsCreateWithoutOrganiserInput, FestivalsUncheckedCreateWithoutOrganiserInput> | FestivalsCreateWithoutOrganiserInput[] | FestivalsUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: FestivalsCreateOrConnectWithoutOrganiserInput | FestivalsCreateOrConnectWithoutOrganiserInput[]
    createMany?: FestivalsCreateManyOrganiserInputEnvelope
    connect?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
  }

  export type TicketsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketsCreateWithoutUserInput, TicketsUncheckedCreateWithoutUserInput> | TicketsCreateWithoutUserInput[] | TicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUserInput | TicketsCreateOrConnectWithoutUserInput[]
    createMany?: TicketsCreateManyUserInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type UserLineupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLineupCreateWithoutUserInput, UserLineupUncheckedCreateWithoutUserInput> | UserLineupCreateWithoutUserInput[] | UserLineupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutUserInput | UserLineupCreateOrConnectWithoutUserInput[]
    createMany?: UserLineupCreateManyUserInputEnvelope
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FestivalsUpdateManyWithoutOrganiserNestedInput = {
    create?: XOR<FestivalsCreateWithoutOrganiserInput, FestivalsUncheckedCreateWithoutOrganiserInput> | FestivalsCreateWithoutOrganiserInput[] | FestivalsUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: FestivalsCreateOrConnectWithoutOrganiserInput | FestivalsCreateOrConnectWithoutOrganiserInput[]
    upsert?: FestivalsUpsertWithWhereUniqueWithoutOrganiserInput | FestivalsUpsertWithWhereUniqueWithoutOrganiserInput[]
    createMany?: FestivalsCreateManyOrganiserInputEnvelope
    set?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    disconnect?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    delete?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    connect?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    update?: FestivalsUpdateWithWhereUniqueWithoutOrganiserInput | FestivalsUpdateWithWhereUniqueWithoutOrganiserInput[]
    updateMany?: FestivalsUpdateManyWithWhereWithoutOrganiserInput | FestivalsUpdateManyWithWhereWithoutOrganiserInput[]
    deleteMany?: FestivalsScalarWhereInput | FestivalsScalarWhereInput[]
  }

  export type TicketsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketsCreateWithoutUserInput, TicketsUncheckedCreateWithoutUserInput> | TicketsCreateWithoutUserInput[] | TicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUserInput | TicketsCreateOrConnectWithoutUserInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutUserInput | TicketsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketsCreateManyUserInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutUserInput | TicketsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutUserInput | TicketsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type UserLineupUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLineupCreateWithoutUserInput, UserLineupUncheckedCreateWithoutUserInput> | UserLineupCreateWithoutUserInput[] | UserLineupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutUserInput | UserLineupCreateOrConnectWithoutUserInput[]
    upsert?: UserLineupUpsertWithWhereUniqueWithoutUserInput | UserLineupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLineupCreateManyUserInputEnvelope
    set?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    disconnect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    delete?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    update?: UserLineupUpdateWithWhereUniqueWithoutUserInput | UserLineupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLineupUpdateManyWithWhereWithoutUserInput | UserLineupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLineupScalarWhereInput | UserLineupScalarWhereInput[]
  }

  export type FestivalsUncheckedUpdateManyWithoutOrganiserNestedInput = {
    create?: XOR<FestivalsCreateWithoutOrganiserInput, FestivalsUncheckedCreateWithoutOrganiserInput> | FestivalsCreateWithoutOrganiserInput[] | FestivalsUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: FestivalsCreateOrConnectWithoutOrganiserInput | FestivalsCreateOrConnectWithoutOrganiserInput[]
    upsert?: FestivalsUpsertWithWhereUniqueWithoutOrganiserInput | FestivalsUpsertWithWhereUniqueWithoutOrganiserInput[]
    createMany?: FestivalsCreateManyOrganiserInputEnvelope
    set?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    disconnect?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    delete?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    connect?: FestivalsWhereUniqueInput | FestivalsWhereUniqueInput[]
    update?: FestivalsUpdateWithWhereUniqueWithoutOrganiserInput | FestivalsUpdateWithWhereUniqueWithoutOrganiserInput[]
    updateMany?: FestivalsUpdateManyWithWhereWithoutOrganiserInput | FestivalsUpdateManyWithWhereWithoutOrganiserInput[]
    deleteMany?: FestivalsScalarWhereInput | FestivalsScalarWhereInput[]
  }

  export type TicketsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketsCreateWithoutUserInput, TicketsUncheckedCreateWithoutUserInput> | TicketsCreateWithoutUserInput[] | TicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUserInput | TicketsCreateOrConnectWithoutUserInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutUserInput | TicketsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketsCreateManyUserInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutUserInput | TicketsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutUserInput | TicketsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type UserLineupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLineupCreateWithoutUserInput, UserLineupUncheckedCreateWithoutUserInput> | UserLineupCreateWithoutUserInput[] | UserLineupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutUserInput | UserLineupCreateOrConnectWithoutUserInput[]
    upsert?: UserLineupUpsertWithWhereUniqueWithoutUserInput | UserLineupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLineupCreateManyUserInputEnvelope
    set?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    disconnect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    delete?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    update?: UserLineupUpdateWithWhereUniqueWithoutUserInput | UserLineupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLineupUpdateManyWithWhereWithoutUserInput | UserLineupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLineupScalarWhereInput | UserLineupScalarWhereInput[]
  }

  export type FestivalsCreatelocationInput = {
    set: number[]
  }

  export type UsersCreateNestedOneWithoutFestivalsInput = {
    create?: XOR<UsersCreateWithoutFestivalsInput, UsersUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFestivalsInput
    connect?: UsersWhereUniqueInput
  }

  export type StagesCreateNestedManyWithoutFestivalInput = {
    create?: XOR<StagesCreateWithoutFestivalInput, StagesUncheckedCreateWithoutFestivalInput> | StagesCreateWithoutFestivalInput[] | StagesUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: StagesCreateOrConnectWithoutFestivalInput | StagesCreateOrConnectWithoutFestivalInput[]
    createMany?: StagesCreateManyFestivalInputEnvelope
    connect?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
  }

  export type TicketsCreateNestedManyWithoutFestivalInput = {
    create?: XOR<TicketsCreateWithoutFestivalInput, TicketsUncheckedCreateWithoutFestivalInput> | TicketsCreateWithoutFestivalInput[] | TicketsUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutFestivalInput | TicketsCreateOrConnectWithoutFestivalInput[]
    createMany?: TicketsCreateManyFestivalInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type UserLineupCreateNestedManyWithoutFestivalInput = {
    create?: XOR<UserLineupCreateWithoutFestivalInput, UserLineupUncheckedCreateWithoutFestivalInput> | UserLineupCreateWithoutFestivalInput[] | UserLineupUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutFestivalInput | UserLineupCreateOrConnectWithoutFestivalInput[]
    createMany?: UserLineupCreateManyFestivalInputEnvelope
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
  }

  export type StagesUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<StagesCreateWithoutFestivalInput, StagesUncheckedCreateWithoutFestivalInput> | StagesCreateWithoutFestivalInput[] | StagesUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: StagesCreateOrConnectWithoutFestivalInput | StagesCreateOrConnectWithoutFestivalInput[]
    createMany?: StagesCreateManyFestivalInputEnvelope
    connect?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
  }

  export type TicketsUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<TicketsCreateWithoutFestivalInput, TicketsUncheckedCreateWithoutFestivalInput> | TicketsCreateWithoutFestivalInput[] | TicketsUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutFestivalInput | TicketsCreateOrConnectWithoutFestivalInput[]
    createMany?: TicketsCreateManyFestivalInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type UserLineupUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<UserLineupCreateWithoutFestivalInput, UserLineupUncheckedCreateWithoutFestivalInput> | UserLineupCreateWithoutFestivalInput[] | UserLineupUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutFestivalInput | UserLineupCreateOrConnectWithoutFestivalInput[]
    createMany?: UserLineupCreateManyFestivalInputEnvelope
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
  }

  export type FestivalsUpdatelocationInput = {
    set?: number[]
    push?: number | number[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutFestivalsNestedInput = {
    create?: XOR<UsersCreateWithoutFestivalsInput, UsersUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFestivalsInput
    upsert?: UsersUpsertWithoutFestivalsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFestivalsInput, UsersUpdateWithoutFestivalsInput>, UsersUncheckedUpdateWithoutFestivalsInput>
  }

  export type StagesUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<StagesCreateWithoutFestivalInput, StagesUncheckedCreateWithoutFestivalInput> | StagesCreateWithoutFestivalInput[] | StagesUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: StagesCreateOrConnectWithoutFestivalInput | StagesCreateOrConnectWithoutFestivalInput[]
    upsert?: StagesUpsertWithWhereUniqueWithoutFestivalInput | StagesUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: StagesCreateManyFestivalInputEnvelope
    set?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    disconnect?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    delete?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    connect?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    update?: StagesUpdateWithWhereUniqueWithoutFestivalInput | StagesUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: StagesUpdateManyWithWhereWithoutFestivalInput | StagesUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: StagesScalarWhereInput | StagesScalarWhereInput[]
  }

  export type TicketsUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<TicketsCreateWithoutFestivalInput, TicketsUncheckedCreateWithoutFestivalInput> | TicketsCreateWithoutFestivalInput[] | TicketsUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutFestivalInput | TicketsCreateOrConnectWithoutFestivalInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutFestivalInput | TicketsUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: TicketsCreateManyFestivalInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutFestivalInput | TicketsUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutFestivalInput | TicketsUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type UserLineupUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<UserLineupCreateWithoutFestivalInput, UserLineupUncheckedCreateWithoutFestivalInput> | UserLineupCreateWithoutFestivalInput[] | UserLineupUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutFestivalInput | UserLineupCreateOrConnectWithoutFestivalInput[]
    upsert?: UserLineupUpsertWithWhereUniqueWithoutFestivalInput | UserLineupUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: UserLineupCreateManyFestivalInputEnvelope
    set?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    disconnect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    delete?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    update?: UserLineupUpdateWithWhereUniqueWithoutFestivalInput | UserLineupUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: UserLineupUpdateManyWithWhereWithoutFestivalInput | UserLineupUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: UserLineupScalarWhereInput | UserLineupScalarWhereInput[]
  }

  export type StagesUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<StagesCreateWithoutFestivalInput, StagesUncheckedCreateWithoutFestivalInput> | StagesCreateWithoutFestivalInput[] | StagesUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: StagesCreateOrConnectWithoutFestivalInput | StagesCreateOrConnectWithoutFestivalInput[]
    upsert?: StagesUpsertWithWhereUniqueWithoutFestivalInput | StagesUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: StagesCreateManyFestivalInputEnvelope
    set?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    disconnect?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    delete?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    connect?: StagesWhereUniqueInput | StagesWhereUniqueInput[]
    update?: StagesUpdateWithWhereUniqueWithoutFestivalInput | StagesUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: StagesUpdateManyWithWhereWithoutFestivalInput | StagesUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: StagesScalarWhereInput | StagesScalarWhereInput[]
  }

  export type TicketsUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<TicketsCreateWithoutFestivalInput, TicketsUncheckedCreateWithoutFestivalInput> | TicketsCreateWithoutFestivalInput[] | TicketsUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutFestivalInput | TicketsCreateOrConnectWithoutFestivalInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutFestivalInput | TicketsUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: TicketsCreateManyFestivalInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutFestivalInput | TicketsUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutFestivalInput | TicketsUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type UserLineupUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<UserLineupCreateWithoutFestivalInput, UserLineupUncheckedCreateWithoutFestivalInput> | UserLineupCreateWithoutFestivalInput[] | UserLineupUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: UserLineupCreateOrConnectWithoutFestivalInput | UserLineupCreateOrConnectWithoutFestivalInput[]
    upsert?: UserLineupUpsertWithWhereUniqueWithoutFestivalInput | UserLineupUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: UserLineupCreateManyFestivalInputEnvelope
    set?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    disconnect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    delete?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    connect?: UserLineupWhereUniqueInput | UserLineupWhereUniqueInput[]
    update?: UserLineupUpdateWithWhereUniqueWithoutFestivalInput | UserLineupUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: UserLineupUpdateManyWithWhereWithoutFestivalInput | UserLineupUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: UserLineupScalarWhereInput | UserLineupScalarWhereInput[]
  }

  export type FestivalsCreateNestedOneWithoutStagesInput = {
    create?: XOR<FestivalsCreateWithoutStagesInput, FestivalsUncheckedCreateWithoutStagesInput>
    connectOrCreate?: FestivalsCreateOrConnectWithoutStagesInput
    connect?: FestivalsWhereUniqueInput
  }

  export type ArtistPerformanceCreateNestedManyWithoutStageInput = {
    create?: XOR<ArtistPerformanceCreateWithoutStageInput, ArtistPerformanceUncheckedCreateWithoutStageInput> | ArtistPerformanceCreateWithoutStageInput[] | ArtistPerformanceUncheckedCreateWithoutStageInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutStageInput | ArtistPerformanceCreateOrConnectWithoutStageInput[]
    createMany?: ArtistPerformanceCreateManyStageInputEnvelope
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
  }

  export type ArtistPerformanceUncheckedCreateNestedManyWithoutStageInput = {
    create?: XOR<ArtistPerformanceCreateWithoutStageInput, ArtistPerformanceUncheckedCreateWithoutStageInput> | ArtistPerformanceCreateWithoutStageInput[] | ArtistPerformanceUncheckedCreateWithoutStageInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutStageInput | ArtistPerformanceCreateOrConnectWithoutStageInput[]
    createMany?: ArtistPerformanceCreateManyStageInputEnvelope
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
  }

  export type FestivalsUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<FestivalsCreateWithoutStagesInput, FestivalsUncheckedCreateWithoutStagesInput>
    connectOrCreate?: FestivalsCreateOrConnectWithoutStagesInput
    upsert?: FestivalsUpsertWithoutStagesInput
    connect?: FestivalsWhereUniqueInput
    update?: XOR<XOR<FestivalsUpdateToOneWithWhereWithoutStagesInput, FestivalsUpdateWithoutStagesInput>, FestivalsUncheckedUpdateWithoutStagesInput>
  }

  export type ArtistPerformanceUpdateManyWithoutStageNestedInput = {
    create?: XOR<ArtistPerformanceCreateWithoutStageInput, ArtistPerformanceUncheckedCreateWithoutStageInput> | ArtistPerformanceCreateWithoutStageInput[] | ArtistPerformanceUncheckedCreateWithoutStageInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutStageInput | ArtistPerformanceCreateOrConnectWithoutStageInput[]
    upsert?: ArtistPerformanceUpsertWithWhereUniqueWithoutStageInput | ArtistPerformanceUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: ArtistPerformanceCreateManyStageInputEnvelope
    set?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    disconnect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    delete?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    update?: ArtistPerformanceUpdateWithWhereUniqueWithoutStageInput | ArtistPerformanceUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: ArtistPerformanceUpdateManyWithWhereWithoutStageInput | ArtistPerformanceUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: ArtistPerformanceScalarWhereInput | ArtistPerformanceScalarWhereInput[]
  }

  export type ArtistPerformanceUncheckedUpdateManyWithoutStageNestedInput = {
    create?: XOR<ArtistPerformanceCreateWithoutStageInput, ArtistPerformanceUncheckedCreateWithoutStageInput> | ArtistPerformanceCreateWithoutStageInput[] | ArtistPerformanceUncheckedCreateWithoutStageInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutStageInput | ArtistPerformanceCreateOrConnectWithoutStageInput[]
    upsert?: ArtistPerformanceUpsertWithWhereUniqueWithoutStageInput | ArtistPerformanceUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: ArtistPerformanceCreateManyStageInputEnvelope
    set?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    disconnect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    delete?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    update?: ArtistPerformanceUpdateWithWhereUniqueWithoutStageInput | ArtistPerformanceUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: ArtistPerformanceUpdateManyWithWhereWithoutStageInput | ArtistPerformanceUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: ArtistPerformanceScalarWhereInput | ArtistPerformanceScalarWhereInput[]
  }

  export type ArtistsCreateNestedOneWithoutPerformancesInput = {
    create?: XOR<ArtistsCreateWithoutPerformancesInput, ArtistsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutPerformancesInput
    connect?: ArtistsWhereUniqueInput
  }

  export type StagesCreateNestedOneWithoutPerformancesInput = {
    create?: XOR<StagesCreateWithoutPerformancesInput, StagesUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: StagesCreateOrConnectWithoutPerformancesInput
    connect?: StagesWhereUniqueInput
  }

  export type ArtistsUpdateOneRequiredWithoutPerformancesNestedInput = {
    create?: XOR<ArtistsCreateWithoutPerformancesInput, ArtistsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutPerformancesInput
    upsert?: ArtistsUpsertWithoutPerformancesInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutPerformancesInput, ArtistsUpdateWithoutPerformancesInput>, ArtistsUncheckedUpdateWithoutPerformancesInput>
  }

  export type StagesUpdateOneRequiredWithoutPerformancesNestedInput = {
    create?: XOR<StagesCreateWithoutPerformancesInput, StagesUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: StagesCreateOrConnectWithoutPerformancesInput
    upsert?: StagesUpsertWithoutPerformancesInput
    connect?: StagesWhereUniqueInput
    update?: XOR<XOR<StagesUpdateToOneWithWhereWithoutPerformancesInput, StagesUpdateWithoutPerformancesInput>, StagesUncheckedUpdateWithoutPerformancesInput>
  }

  export type ArtistPerformanceCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistPerformanceCreateWithoutArtistInput, ArtistPerformanceUncheckedCreateWithoutArtistInput> | ArtistPerformanceCreateWithoutArtistInput[] | ArtistPerformanceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutArtistInput | ArtistPerformanceCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistPerformanceCreateManyArtistInputEnvelope
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
  }

  export type UserLineupItemCreateNestedManyWithoutArtistInput = {
    create?: XOR<UserLineupItemCreateWithoutArtistInput, UserLineupItemUncheckedCreateWithoutArtistInput> | UserLineupItemCreateWithoutArtistInput[] | UserLineupItemUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutArtistInput | UserLineupItemCreateOrConnectWithoutArtistInput[]
    createMany?: UserLineupItemCreateManyArtistInputEnvelope
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
  }

  export type ArtistPerformanceUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistPerformanceCreateWithoutArtistInput, ArtistPerformanceUncheckedCreateWithoutArtistInput> | ArtistPerformanceCreateWithoutArtistInput[] | ArtistPerformanceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutArtistInput | ArtistPerformanceCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistPerformanceCreateManyArtistInputEnvelope
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
  }

  export type UserLineupItemUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<UserLineupItemCreateWithoutArtistInput, UserLineupItemUncheckedCreateWithoutArtistInput> | UserLineupItemCreateWithoutArtistInput[] | UserLineupItemUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutArtistInput | UserLineupItemCreateOrConnectWithoutArtistInput[]
    createMany?: UserLineupItemCreateManyArtistInputEnvelope
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
  }

  export type ArtistPerformanceUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistPerformanceCreateWithoutArtistInput, ArtistPerformanceUncheckedCreateWithoutArtistInput> | ArtistPerformanceCreateWithoutArtistInput[] | ArtistPerformanceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutArtistInput | ArtistPerformanceCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistPerformanceUpsertWithWhereUniqueWithoutArtistInput | ArtistPerformanceUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistPerformanceCreateManyArtistInputEnvelope
    set?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    disconnect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    delete?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    update?: ArtistPerformanceUpdateWithWhereUniqueWithoutArtistInput | ArtistPerformanceUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistPerformanceUpdateManyWithWhereWithoutArtistInput | ArtistPerformanceUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistPerformanceScalarWhereInput | ArtistPerformanceScalarWhereInput[]
  }

  export type UserLineupItemUpdateManyWithoutArtistNestedInput = {
    create?: XOR<UserLineupItemCreateWithoutArtistInput, UserLineupItemUncheckedCreateWithoutArtistInput> | UserLineupItemCreateWithoutArtistInput[] | UserLineupItemUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutArtistInput | UserLineupItemCreateOrConnectWithoutArtistInput[]
    upsert?: UserLineupItemUpsertWithWhereUniqueWithoutArtistInput | UserLineupItemUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: UserLineupItemCreateManyArtistInputEnvelope
    set?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    disconnect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    delete?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    update?: UserLineupItemUpdateWithWhereUniqueWithoutArtistInput | UserLineupItemUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: UserLineupItemUpdateManyWithWhereWithoutArtistInput | UserLineupItemUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: UserLineupItemScalarWhereInput | UserLineupItemScalarWhereInput[]
  }

  export type ArtistPerformanceUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistPerformanceCreateWithoutArtistInput, ArtistPerformanceUncheckedCreateWithoutArtistInput> | ArtistPerformanceCreateWithoutArtistInput[] | ArtistPerformanceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistPerformanceCreateOrConnectWithoutArtistInput | ArtistPerformanceCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistPerformanceUpsertWithWhereUniqueWithoutArtistInput | ArtistPerformanceUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistPerformanceCreateManyArtistInputEnvelope
    set?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    disconnect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    delete?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    connect?: ArtistPerformanceWhereUniqueInput | ArtistPerformanceWhereUniqueInput[]
    update?: ArtistPerformanceUpdateWithWhereUniqueWithoutArtistInput | ArtistPerformanceUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistPerformanceUpdateManyWithWhereWithoutArtistInput | ArtistPerformanceUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistPerformanceScalarWhereInput | ArtistPerformanceScalarWhereInput[]
  }

  export type UserLineupItemUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<UserLineupItemCreateWithoutArtistInput, UserLineupItemUncheckedCreateWithoutArtistInput> | UserLineupItemCreateWithoutArtistInput[] | UserLineupItemUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutArtistInput | UserLineupItemCreateOrConnectWithoutArtistInput[]
    upsert?: UserLineupItemUpsertWithWhereUniqueWithoutArtistInput | UserLineupItemUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: UserLineupItemCreateManyArtistInputEnvelope
    set?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    disconnect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    delete?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    update?: UserLineupItemUpdateWithWhereUniqueWithoutArtistInput | UserLineupItemUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: UserLineupItemUpdateManyWithWhereWithoutArtistInput | UserLineupItemUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: UserLineupItemScalarWhereInput | UserLineupItemScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUserLineupsInput = {
    create?: XOR<UsersCreateWithoutUserLineupsInput, UsersUncheckedCreateWithoutUserLineupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserLineupsInput
    connect?: UsersWhereUniqueInput
  }

  export type FestivalsCreateNestedOneWithoutUserLineupsInput = {
    create?: XOR<FestivalsCreateWithoutUserLineupsInput, FestivalsUncheckedCreateWithoutUserLineupsInput>
    connectOrCreate?: FestivalsCreateOrConnectWithoutUserLineupsInput
    connect?: FestivalsWhereUniqueInput
  }

  export type UserLineupItemCreateNestedManyWithoutLineupInput = {
    create?: XOR<UserLineupItemCreateWithoutLineupInput, UserLineupItemUncheckedCreateWithoutLineupInput> | UserLineupItemCreateWithoutLineupInput[] | UserLineupItemUncheckedCreateWithoutLineupInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutLineupInput | UserLineupItemCreateOrConnectWithoutLineupInput[]
    createMany?: UserLineupItemCreateManyLineupInputEnvelope
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
  }

  export type UserLineupItemUncheckedCreateNestedManyWithoutLineupInput = {
    create?: XOR<UserLineupItemCreateWithoutLineupInput, UserLineupItemUncheckedCreateWithoutLineupInput> | UserLineupItemCreateWithoutLineupInput[] | UserLineupItemUncheckedCreateWithoutLineupInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutLineupInput | UserLineupItemCreateOrConnectWithoutLineupInput[]
    createMany?: UserLineupItemCreateManyLineupInputEnvelope
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutUserLineupsNestedInput = {
    create?: XOR<UsersCreateWithoutUserLineupsInput, UsersUncheckedCreateWithoutUserLineupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserLineupsInput
    upsert?: UsersUpsertWithoutUserLineupsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserLineupsInput, UsersUpdateWithoutUserLineupsInput>, UsersUncheckedUpdateWithoutUserLineupsInput>
  }

  export type FestivalsUpdateOneRequiredWithoutUserLineupsNestedInput = {
    create?: XOR<FestivalsCreateWithoutUserLineupsInput, FestivalsUncheckedCreateWithoutUserLineupsInput>
    connectOrCreate?: FestivalsCreateOrConnectWithoutUserLineupsInput
    upsert?: FestivalsUpsertWithoutUserLineupsInput
    connect?: FestivalsWhereUniqueInput
    update?: XOR<XOR<FestivalsUpdateToOneWithWhereWithoutUserLineupsInput, FestivalsUpdateWithoutUserLineupsInput>, FestivalsUncheckedUpdateWithoutUserLineupsInput>
  }

  export type UserLineupItemUpdateManyWithoutLineupNestedInput = {
    create?: XOR<UserLineupItemCreateWithoutLineupInput, UserLineupItemUncheckedCreateWithoutLineupInput> | UserLineupItemCreateWithoutLineupInput[] | UserLineupItemUncheckedCreateWithoutLineupInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutLineupInput | UserLineupItemCreateOrConnectWithoutLineupInput[]
    upsert?: UserLineupItemUpsertWithWhereUniqueWithoutLineupInput | UserLineupItemUpsertWithWhereUniqueWithoutLineupInput[]
    createMany?: UserLineupItemCreateManyLineupInputEnvelope
    set?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    disconnect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    delete?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    update?: UserLineupItemUpdateWithWhereUniqueWithoutLineupInput | UserLineupItemUpdateWithWhereUniqueWithoutLineupInput[]
    updateMany?: UserLineupItemUpdateManyWithWhereWithoutLineupInput | UserLineupItemUpdateManyWithWhereWithoutLineupInput[]
    deleteMany?: UserLineupItemScalarWhereInput | UserLineupItemScalarWhereInput[]
  }

  export type UserLineupItemUncheckedUpdateManyWithoutLineupNestedInput = {
    create?: XOR<UserLineupItemCreateWithoutLineupInput, UserLineupItemUncheckedCreateWithoutLineupInput> | UserLineupItemCreateWithoutLineupInput[] | UserLineupItemUncheckedCreateWithoutLineupInput[]
    connectOrCreate?: UserLineupItemCreateOrConnectWithoutLineupInput | UserLineupItemCreateOrConnectWithoutLineupInput[]
    upsert?: UserLineupItemUpsertWithWhereUniqueWithoutLineupInput | UserLineupItemUpsertWithWhereUniqueWithoutLineupInput[]
    createMany?: UserLineupItemCreateManyLineupInputEnvelope
    set?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    disconnect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    delete?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    connect?: UserLineupItemWhereUniqueInput | UserLineupItemWhereUniqueInput[]
    update?: UserLineupItemUpdateWithWhereUniqueWithoutLineupInput | UserLineupItemUpdateWithWhereUniqueWithoutLineupInput[]
    updateMany?: UserLineupItemUpdateManyWithWhereWithoutLineupInput | UserLineupItemUpdateManyWithWhereWithoutLineupInput[]
    deleteMany?: UserLineupItemScalarWhereInput | UserLineupItemScalarWhereInput[]
  }

  export type UserLineupCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserLineupCreateWithoutItemsInput, UserLineupUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserLineupCreateOrConnectWithoutItemsInput
    connect?: UserLineupWhereUniqueInput
  }

  export type ArtistsCreateNestedOneWithoutLineupItemsInput = {
    create?: XOR<ArtistsCreateWithoutLineupItemsInput, ArtistsUncheckedCreateWithoutLineupItemsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutLineupItemsInput
    connect?: ArtistsWhereUniqueInput
  }

  export type UserLineupUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserLineupCreateWithoutItemsInput, UserLineupUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserLineupCreateOrConnectWithoutItemsInput
    upsert?: UserLineupUpsertWithoutItemsInput
    connect?: UserLineupWhereUniqueInput
    update?: XOR<XOR<UserLineupUpdateToOneWithWhereWithoutItemsInput, UserLineupUpdateWithoutItemsInput>, UserLineupUncheckedUpdateWithoutItemsInput>
  }

  export type ArtistsUpdateOneRequiredWithoutLineupItemsNestedInput = {
    create?: XOR<ArtistsCreateWithoutLineupItemsInput, ArtistsUncheckedCreateWithoutLineupItemsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutLineupItemsInput
    upsert?: ArtistsUpsertWithoutLineupItemsInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutLineupItemsInput, ArtistsUpdateWithoutLineupItemsInput>, ArtistsUncheckedUpdateWithoutLineupItemsInput>
  }

  export type UsersCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTicketsInput
    connect?: UsersWhereUniqueInput
  }

  export type FestivalsCreateNestedOneWithoutTicketsInput = {
    create?: XOR<FestivalsCreateWithoutTicketsInput, FestivalsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FestivalsCreateOrConnectWithoutTicketsInput
    connect?: FestivalsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTicketsInput
    upsert?: UsersUpsertWithoutTicketsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTicketsInput, UsersUpdateWithoutTicketsInput>, UsersUncheckedUpdateWithoutTicketsInput>
  }

  export type FestivalsUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<FestivalsCreateWithoutTicketsInput, FestivalsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FestivalsCreateOrConnectWithoutTicketsInput
    upsert?: FestivalsUpsertWithoutTicketsInput
    connect?: FestivalsWhereUniqueInput
    update?: XOR<XOR<FestivalsUpdateToOneWithWhereWithoutTicketsInput, FestivalsUpdateWithoutTicketsInput>, FestivalsUncheckedUpdateWithoutTicketsInput>
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

  export type FestivalsCreateWithoutOrganiserInput = {
    id?: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    stages?: StagesCreateNestedManyWithoutFestivalInput
    tickets?: TicketsCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsUncheckedCreateWithoutOrganiserInput = {
    id?: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    stages?: StagesUncheckedCreateNestedManyWithoutFestivalInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsCreateOrConnectWithoutOrganiserInput = {
    where: FestivalsWhereUniqueInput
    create: XOR<FestivalsCreateWithoutOrganiserInput, FestivalsUncheckedCreateWithoutOrganiserInput>
  }

  export type FestivalsCreateManyOrganiserInputEnvelope = {
    data: FestivalsCreateManyOrganiserInput | FestivalsCreateManyOrganiserInput[]
    skipDuplicates?: boolean
  }

  export type TicketsCreateWithoutUserInput = {
    id?: string
    festival: FestivalsCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateWithoutUserInput = {
    id?: string
    festivalId: string
  }

  export type TicketsCreateOrConnectWithoutUserInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutUserInput, TicketsUncheckedCreateWithoutUserInput>
  }

  export type TicketsCreateManyUserInputEnvelope = {
    data: TicketsCreateManyUserInput | TicketsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLineupCreateWithoutUserInput = {
    id?: string
    festival: FestivalsCreateNestedOneWithoutUserLineupsInput
    items?: UserLineupItemCreateNestedManyWithoutLineupInput
  }

  export type UserLineupUncheckedCreateWithoutUserInput = {
    id?: string
    festivalId: string
    items?: UserLineupItemUncheckedCreateNestedManyWithoutLineupInput
  }

  export type UserLineupCreateOrConnectWithoutUserInput = {
    where: UserLineupWhereUniqueInput
    create: XOR<UserLineupCreateWithoutUserInput, UserLineupUncheckedCreateWithoutUserInput>
  }

  export type UserLineupCreateManyUserInputEnvelope = {
    data: UserLineupCreateManyUserInput | UserLineupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FestivalsUpsertWithWhereUniqueWithoutOrganiserInput = {
    where: FestivalsWhereUniqueInput
    update: XOR<FestivalsUpdateWithoutOrganiserInput, FestivalsUncheckedUpdateWithoutOrganiserInput>
    create: XOR<FestivalsCreateWithoutOrganiserInput, FestivalsUncheckedCreateWithoutOrganiserInput>
  }

  export type FestivalsUpdateWithWhereUniqueWithoutOrganiserInput = {
    where: FestivalsWhereUniqueInput
    data: XOR<FestivalsUpdateWithoutOrganiserInput, FestivalsUncheckedUpdateWithoutOrganiserInput>
  }

  export type FestivalsUpdateManyWithWhereWithoutOrganiserInput = {
    where: FestivalsScalarWhereInput
    data: XOR<FestivalsUpdateManyMutationInput, FestivalsUncheckedUpdateManyWithoutOrganiserInput>
  }

  export type FestivalsScalarWhereInput = {
    AND?: FestivalsScalarWhereInput | FestivalsScalarWhereInput[]
    OR?: FestivalsScalarWhereInput[]
    NOT?: FestivalsScalarWhereInput | FestivalsScalarWhereInput[]
    id?: StringFilter<"Festivals"> | string
    organiserId?: StringFilter<"Festivals"> | string
    name?: StringFilter<"Festivals"> | string
    location?: FloatNullableListFilter<"Festivals">
    created_at?: DateTimeFilter<"Festivals"> | Date | string
    start_date?: DateTimeFilter<"Festivals"> | Date | string
    end_date?: DateTimeFilter<"Festivals"> | Date | string
  }

  export type TicketsUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketsWhereUniqueInput
    update: XOR<TicketsUpdateWithoutUserInput, TicketsUncheckedUpdateWithoutUserInput>
    create: XOR<TicketsCreateWithoutUserInput, TicketsUncheckedCreateWithoutUserInput>
  }

  export type TicketsUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketsWhereUniqueInput
    data: XOR<TicketsUpdateWithoutUserInput, TicketsUncheckedUpdateWithoutUserInput>
  }

  export type TicketsUpdateManyWithWhereWithoutUserInput = {
    where: TicketsScalarWhereInput
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketsScalarWhereInput = {
    AND?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
    OR?: TicketsScalarWhereInput[]
    NOT?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
    id?: StringFilter<"Tickets"> | string
    userId?: StringFilter<"Tickets"> | string
    festivalId?: StringFilter<"Tickets"> | string
  }

  export type UserLineupUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLineupWhereUniqueInput
    update: XOR<UserLineupUpdateWithoutUserInput, UserLineupUncheckedUpdateWithoutUserInput>
    create: XOR<UserLineupCreateWithoutUserInput, UserLineupUncheckedCreateWithoutUserInput>
  }

  export type UserLineupUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLineupWhereUniqueInput
    data: XOR<UserLineupUpdateWithoutUserInput, UserLineupUncheckedUpdateWithoutUserInput>
  }

  export type UserLineupUpdateManyWithWhereWithoutUserInput = {
    where: UserLineupScalarWhereInput
    data: XOR<UserLineupUpdateManyMutationInput, UserLineupUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLineupScalarWhereInput = {
    AND?: UserLineupScalarWhereInput | UserLineupScalarWhereInput[]
    OR?: UserLineupScalarWhereInput[]
    NOT?: UserLineupScalarWhereInput | UserLineupScalarWhereInput[]
    id?: StringFilter<"UserLineup"> | string
    userId?: StringFilter<"UserLineup"> | string
    festivalId?: StringFilter<"UserLineup"> | string
  }

  export type UsersCreateWithoutFestivalsInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    tickets?: TicketsCreateNestedManyWithoutUserInput
    userLineups?: UserLineupCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFestivalsInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    tickets?: TicketsUncheckedCreateNestedManyWithoutUserInput
    userLineups?: UserLineupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFestivalsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFestivalsInput, UsersUncheckedCreateWithoutFestivalsInput>
  }

  export type StagesCreateWithoutFestivalInput = {
    id?: string
    name: string
    performances?: ArtistPerformanceCreateNestedManyWithoutStageInput
  }

  export type StagesUncheckedCreateWithoutFestivalInput = {
    id?: string
    name: string
    performances?: ArtistPerformanceUncheckedCreateNestedManyWithoutStageInput
  }

  export type StagesCreateOrConnectWithoutFestivalInput = {
    where: StagesWhereUniqueInput
    create: XOR<StagesCreateWithoutFestivalInput, StagesUncheckedCreateWithoutFestivalInput>
  }

  export type StagesCreateManyFestivalInputEnvelope = {
    data: StagesCreateManyFestivalInput | StagesCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type TicketsCreateWithoutFestivalInput = {
    id?: string
    user: UsersCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateWithoutFestivalInput = {
    id?: string
    userId: string
  }

  export type TicketsCreateOrConnectWithoutFestivalInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutFestivalInput, TicketsUncheckedCreateWithoutFestivalInput>
  }

  export type TicketsCreateManyFestivalInputEnvelope = {
    data: TicketsCreateManyFestivalInput | TicketsCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type UserLineupCreateWithoutFestivalInput = {
    id?: string
    user: UsersCreateNestedOneWithoutUserLineupsInput
    items?: UserLineupItemCreateNestedManyWithoutLineupInput
  }

  export type UserLineupUncheckedCreateWithoutFestivalInput = {
    id?: string
    userId: string
    items?: UserLineupItemUncheckedCreateNestedManyWithoutLineupInput
  }

  export type UserLineupCreateOrConnectWithoutFestivalInput = {
    where: UserLineupWhereUniqueInput
    create: XOR<UserLineupCreateWithoutFestivalInput, UserLineupUncheckedCreateWithoutFestivalInput>
  }

  export type UserLineupCreateManyFestivalInputEnvelope = {
    data: UserLineupCreateManyFestivalInput | UserLineupCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutFestivalsInput = {
    update: XOR<UsersUpdateWithoutFestivalsInput, UsersUncheckedUpdateWithoutFestivalsInput>
    create: XOR<UsersCreateWithoutFestivalsInput, UsersUncheckedCreateWithoutFestivalsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFestivalsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFestivalsInput, UsersUncheckedUpdateWithoutFestivalsInput>
  }

  export type UsersUpdateWithoutFestivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tickets?: TicketsUpdateManyWithoutUserNestedInput
    userLineups?: UserLineupUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFestivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tickets?: TicketsUncheckedUpdateManyWithoutUserNestedInput
    userLineups?: UserLineupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StagesUpsertWithWhereUniqueWithoutFestivalInput = {
    where: StagesWhereUniqueInput
    update: XOR<StagesUpdateWithoutFestivalInput, StagesUncheckedUpdateWithoutFestivalInput>
    create: XOR<StagesCreateWithoutFestivalInput, StagesUncheckedCreateWithoutFestivalInput>
  }

  export type StagesUpdateWithWhereUniqueWithoutFestivalInput = {
    where: StagesWhereUniqueInput
    data: XOR<StagesUpdateWithoutFestivalInput, StagesUncheckedUpdateWithoutFestivalInput>
  }

  export type StagesUpdateManyWithWhereWithoutFestivalInput = {
    where: StagesScalarWhereInput
    data: XOR<StagesUpdateManyMutationInput, StagesUncheckedUpdateManyWithoutFestivalInput>
  }

  export type StagesScalarWhereInput = {
    AND?: StagesScalarWhereInput | StagesScalarWhereInput[]
    OR?: StagesScalarWhereInput[]
    NOT?: StagesScalarWhereInput | StagesScalarWhereInput[]
    id?: StringFilter<"Stages"> | string
    festivalId?: StringFilter<"Stages"> | string
    name?: StringFilter<"Stages"> | string
  }

  export type TicketsUpsertWithWhereUniqueWithoutFestivalInput = {
    where: TicketsWhereUniqueInput
    update: XOR<TicketsUpdateWithoutFestivalInput, TicketsUncheckedUpdateWithoutFestivalInput>
    create: XOR<TicketsCreateWithoutFestivalInput, TicketsUncheckedCreateWithoutFestivalInput>
  }

  export type TicketsUpdateWithWhereUniqueWithoutFestivalInput = {
    where: TicketsWhereUniqueInput
    data: XOR<TicketsUpdateWithoutFestivalInput, TicketsUncheckedUpdateWithoutFestivalInput>
  }

  export type TicketsUpdateManyWithWhereWithoutFestivalInput = {
    where: TicketsScalarWhereInput
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyWithoutFestivalInput>
  }

  export type UserLineupUpsertWithWhereUniqueWithoutFestivalInput = {
    where: UserLineupWhereUniqueInput
    update: XOR<UserLineupUpdateWithoutFestivalInput, UserLineupUncheckedUpdateWithoutFestivalInput>
    create: XOR<UserLineupCreateWithoutFestivalInput, UserLineupUncheckedCreateWithoutFestivalInput>
  }

  export type UserLineupUpdateWithWhereUniqueWithoutFestivalInput = {
    where: UserLineupWhereUniqueInput
    data: XOR<UserLineupUpdateWithoutFestivalInput, UserLineupUncheckedUpdateWithoutFestivalInput>
  }

  export type UserLineupUpdateManyWithWhereWithoutFestivalInput = {
    where: UserLineupScalarWhereInput
    data: XOR<UserLineupUpdateManyMutationInput, UserLineupUncheckedUpdateManyWithoutFestivalInput>
  }

  export type FestivalsCreateWithoutStagesInput = {
    id?: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    organiser: UsersCreateNestedOneWithoutFestivalsInput
    tickets?: TicketsCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsUncheckedCreateWithoutStagesInput = {
    id?: string
    organiserId: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    tickets?: TicketsUncheckedCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsCreateOrConnectWithoutStagesInput = {
    where: FestivalsWhereUniqueInput
    create: XOR<FestivalsCreateWithoutStagesInput, FestivalsUncheckedCreateWithoutStagesInput>
  }

  export type ArtistPerformanceCreateWithoutStageInput = {
    day: Date | string
    start_time: Date | string
    end_time: Date | string
    artist: ArtistsCreateNestedOneWithoutPerformancesInput
  }

  export type ArtistPerformanceUncheckedCreateWithoutStageInput = {
    artistId: string
    day: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type ArtistPerformanceCreateOrConnectWithoutStageInput = {
    where: ArtistPerformanceWhereUniqueInput
    create: XOR<ArtistPerformanceCreateWithoutStageInput, ArtistPerformanceUncheckedCreateWithoutStageInput>
  }

  export type ArtistPerformanceCreateManyStageInputEnvelope = {
    data: ArtistPerformanceCreateManyStageInput | ArtistPerformanceCreateManyStageInput[]
    skipDuplicates?: boolean
  }

  export type FestivalsUpsertWithoutStagesInput = {
    update: XOR<FestivalsUpdateWithoutStagesInput, FestivalsUncheckedUpdateWithoutStagesInput>
    create: XOR<FestivalsCreateWithoutStagesInput, FestivalsUncheckedCreateWithoutStagesInput>
    where?: FestivalsWhereInput
  }

  export type FestivalsUpdateToOneWithWhereWithoutStagesInput = {
    where?: FestivalsWhereInput
    data: XOR<FestivalsUpdateWithoutStagesInput, FestivalsUncheckedUpdateWithoutStagesInput>
  }

  export type FestivalsUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organiser?: UsersUpdateOneRequiredWithoutFestivalsNestedInput
    tickets?: TicketsUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsUncheckedUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organiserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketsUncheckedUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type ArtistPerformanceUpsertWithWhereUniqueWithoutStageInput = {
    where: ArtistPerformanceWhereUniqueInput
    update: XOR<ArtistPerformanceUpdateWithoutStageInput, ArtistPerformanceUncheckedUpdateWithoutStageInput>
    create: XOR<ArtistPerformanceCreateWithoutStageInput, ArtistPerformanceUncheckedCreateWithoutStageInput>
  }

  export type ArtistPerformanceUpdateWithWhereUniqueWithoutStageInput = {
    where: ArtistPerformanceWhereUniqueInput
    data: XOR<ArtistPerformanceUpdateWithoutStageInput, ArtistPerformanceUncheckedUpdateWithoutStageInput>
  }

  export type ArtistPerformanceUpdateManyWithWhereWithoutStageInput = {
    where: ArtistPerformanceScalarWhereInput
    data: XOR<ArtistPerformanceUpdateManyMutationInput, ArtistPerformanceUncheckedUpdateManyWithoutStageInput>
  }

  export type ArtistPerformanceScalarWhereInput = {
    AND?: ArtistPerformanceScalarWhereInput | ArtistPerformanceScalarWhereInput[]
    OR?: ArtistPerformanceScalarWhereInput[]
    NOT?: ArtistPerformanceScalarWhereInput | ArtistPerformanceScalarWhereInput[]
    artistId?: StringFilter<"ArtistPerformance"> | string
    stageId?: StringFilter<"ArtistPerformance"> | string
    day?: DateTimeFilter<"ArtistPerformance"> | Date | string
    start_time?: DateTimeFilter<"ArtistPerformance"> | Date | string
    end_time?: DateTimeFilter<"ArtistPerformance"> | Date | string
  }

  export type ArtistsCreateWithoutPerformancesInput = {
    id?: string
    name: string
    genre: string
    lineupItems?: UserLineupItemCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateWithoutPerformancesInput = {
    id?: string
    name: string
    genre: string
    lineupItems?: UserLineupItemUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutPerformancesInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutPerformancesInput, ArtistsUncheckedCreateWithoutPerformancesInput>
  }

  export type StagesCreateWithoutPerformancesInput = {
    id?: string
    name: string
    festival: FestivalsCreateNestedOneWithoutStagesInput
  }

  export type StagesUncheckedCreateWithoutPerformancesInput = {
    id?: string
    festivalId: string
    name: string
  }

  export type StagesCreateOrConnectWithoutPerformancesInput = {
    where: StagesWhereUniqueInput
    create: XOR<StagesCreateWithoutPerformancesInput, StagesUncheckedCreateWithoutPerformancesInput>
  }

  export type ArtistsUpsertWithoutPerformancesInput = {
    update: XOR<ArtistsUpdateWithoutPerformancesInput, ArtistsUncheckedUpdateWithoutPerformancesInput>
    create: XOR<ArtistsCreateWithoutPerformancesInput, ArtistsUncheckedCreateWithoutPerformancesInput>
    where?: ArtistsWhereInput
  }

  export type ArtistsUpdateToOneWithWhereWithoutPerformancesInput = {
    where?: ArtistsWhereInput
    data: XOR<ArtistsUpdateWithoutPerformancesInput, ArtistsUncheckedUpdateWithoutPerformancesInput>
  }

  export type ArtistsUpdateWithoutPerformancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    lineupItems?: UserLineupItemUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutPerformancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    lineupItems?: UserLineupItemUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type StagesUpsertWithoutPerformancesInput = {
    update: XOR<StagesUpdateWithoutPerformancesInput, StagesUncheckedUpdateWithoutPerformancesInput>
    create: XOR<StagesCreateWithoutPerformancesInput, StagesUncheckedCreateWithoutPerformancesInput>
    where?: StagesWhereInput
  }

  export type StagesUpdateToOneWithWhereWithoutPerformancesInput = {
    where?: StagesWhereInput
    data: XOR<StagesUpdateWithoutPerformancesInput, StagesUncheckedUpdateWithoutPerformancesInput>
  }

  export type StagesUpdateWithoutPerformancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    festival?: FestivalsUpdateOneRequiredWithoutStagesNestedInput
  }

  export type StagesUncheckedUpdateWithoutPerformancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistPerformanceCreateWithoutArtistInput = {
    day: Date | string
    start_time: Date | string
    end_time: Date | string
    stage: StagesCreateNestedOneWithoutPerformancesInput
  }

  export type ArtistPerformanceUncheckedCreateWithoutArtistInput = {
    stageId: string
    day: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type ArtistPerformanceCreateOrConnectWithoutArtistInput = {
    where: ArtistPerformanceWhereUniqueInput
    create: XOR<ArtistPerformanceCreateWithoutArtistInput, ArtistPerformanceUncheckedCreateWithoutArtistInput>
  }

  export type ArtistPerformanceCreateManyArtistInputEnvelope = {
    data: ArtistPerformanceCreateManyArtistInput | ArtistPerformanceCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type UserLineupItemCreateWithoutArtistInput = {
    lineup: UserLineupCreateNestedOneWithoutItemsInput
  }

  export type UserLineupItemUncheckedCreateWithoutArtistInput = {
    userLineupId: string
  }

  export type UserLineupItemCreateOrConnectWithoutArtistInput = {
    where: UserLineupItemWhereUniqueInput
    create: XOR<UserLineupItemCreateWithoutArtistInput, UserLineupItemUncheckedCreateWithoutArtistInput>
  }

  export type UserLineupItemCreateManyArtistInputEnvelope = {
    data: UserLineupItemCreateManyArtistInput | UserLineupItemCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type ArtistPerformanceUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtistPerformanceWhereUniqueInput
    update: XOR<ArtistPerformanceUpdateWithoutArtistInput, ArtistPerformanceUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtistPerformanceCreateWithoutArtistInput, ArtistPerformanceUncheckedCreateWithoutArtistInput>
  }

  export type ArtistPerformanceUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtistPerformanceWhereUniqueInput
    data: XOR<ArtistPerformanceUpdateWithoutArtistInput, ArtistPerformanceUncheckedUpdateWithoutArtistInput>
  }

  export type ArtistPerformanceUpdateManyWithWhereWithoutArtistInput = {
    where: ArtistPerformanceScalarWhereInput
    data: XOR<ArtistPerformanceUpdateManyMutationInput, ArtistPerformanceUncheckedUpdateManyWithoutArtistInput>
  }

  export type UserLineupItemUpsertWithWhereUniqueWithoutArtistInput = {
    where: UserLineupItemWhereUniqueInput
    update: XOR<UserLineupItemUpdateWithoutArtistInput, UserLineupItemUncheckedUpdateWithoutArtistInput>
    create: XOR<UserLineupItemCreateWithoutArtistInput, UserLineupItemUncheckedCreateWithoutArtistInput>
  }

  export type UserLineupItemUpdateWithWhereUniqueWithoutArtistInput = {
    where: UserLineupItemWhereUniqueInput
    data: XOR<UserLineupItemUpdateWithoutArtistInput, UserLineupItemUncheckedUpdateWithoutArtistInput>
  }

  export type UserLineupItemUpdateManyWithWhereWithoutArtistInput = {
    where: UserLineupItemScalarWhereInput
    data: XOR<UserLineupItemUpdateManyMutationInput, UserLineupItemUncheckedUpdateManyWithoutArtistInput>
  }

  export type UserLineupItemScalarWhereInput = {
    AND?: UserLineupItemScalarWhereInput | UserLineupItemScalarWhereInput[]
    OR?: UserLineupItemScalarWhereInput[]
    NOT?: UserLineupItemScalarWhereInput | UserLineupItemScalarWhereInput[]
    userLineupId?: StringFilter<"UserLineupItem"> | string
    artistsId?: StringFilter<"UserLineupItem"> | string
  }

  export type UsersCreateWithoutUserLineupsInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    festivals?: FestivalsCreateNestedManyWithoutOrganiserInput
    tickets?: TicketsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserLineupsInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    festivals?: FestivalsUncheckedCreateNestedManyWithoutOrganiserInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserLineupsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserLineupsInput, UsersUncheckedCreateWithoutUserLineupsInput>
  }

  export type FestivalsCreateWithoutUserLineupsInput = {
    id?: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    organiser: UsersCreateNestedOneWithoutFestivalsInput
    stages?: StagesCreateNestedManyWithoutFestivalInput
    tickets?: TicketsCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsUncheckedCreateWithoutUserLineupsInput = {
    id?: string
    organiserId: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    stages?: StagesUncheckedCreateNestedManyWithoutFestivalInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsCreateOrConnectWithoutUserLineupsInput = {
    where: FestivalsWhereUniqueInput
    create: XOR<FestivalsCreateWithoutUserLineupsInput, FestivalsUncheckedCreateWithoutUserLineupsInput>
  }

  export type UserLineupItemCreateWithoutLineupInput = {
    artist: ArtistsCreateNestedOneWithoutLineupItemsInput
  }

  export type UserLineupItemUncheckedCreateWithoutLineupInput = {
    artistsId: string
  }

  export type UserLineupItemCreateOrConnectWithoutLineupInput = {
    where: UserLineupItemWhereUniqueInput
    create: XOR<UserLineupItemCreateWithoutLineupInput, UserLineupItemUncheckedCreateWithoutLineupInput>
  }

  export type UserLineupItemCreateManyLineupInputEnvelope = {
    data: UserLineupItemCreateManyLineupInput | UserLineupItemCreateManyLineupInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutUserLineupsInput = {
    update: XOR<UsersUpdateWithoutUserLineupsInput, UsersUncheckedUpdateWithoutUserLineupsInput>
    create: XOR<UsersCreateWithoutUserLineupsInput, UsersUncheckedCreateWithoutUserLineupsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserLineupsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserLineupsInput, UsersUncheckedUpdateWithoutUserLineupsInput>
  }

  export type UsersUpdateWithoutUserLineupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalsUpdateManyWithoutOrganiserNestedInput
    tickets?: TicketsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserLineupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalsUncheckedUpdateManyWithoutOrganiserNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FestivalsUpsertWithoutUserLineupsInput = {
    update: XOR<FestivalsUpdateWithoutUserLineupsInput, FestivalsUncheckedUpdateWithoutUserLineupsInput>
    create: XOR<FestivalsCreateWithoutUserLineupsInput, FestivalsUncheckedCreateWithoutUserLineupsInput>
    where?: FestivalsWhereInput
  }

  export type FestivalsUpdateToOneWithWhereWithoutUserLineupsInput = {
    where?: FestivalsWhereInput
    data: XOR<FestivalsUpdateWithoutUserLineupsInput, FestivalsUncheckedUpdateWithoutUserLineupsInput>
  }

  export type FestivalsUpdateWithoutUserLineupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organiser?: UsersUpdateOneRequiredWithoutFestivalsNestedInput
    stages?: StagesUpdateManyWithoutFestivalNestedInput
    tickets?: TicketsUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsUncheckedUpdateWithoutUserLineupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organiserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StagesUncheckedUpdateManyWithoutFestivalNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type UserLineupItemUpsertWithWhereUniqueWithoutLineupInput = {
    where: UserLineupItemWhereUniqueInput
    update: XOR<UserLineupItemUpdateWithoutLineupInput, UserLineupItemUncheckedUpdateWithoutLineupInput>
    create: XOR<UserLineupItemCreateWithoutLineupInput, UserLineupItemUncheckedCreateWithoutLineupInput>
  }

  export type UserLineupItemUpdateWithWhereUniqueWithoutLineupInput = {
    where: UserLineupItemWhereUniqueInput
    data: XOR<UserLineupItemUpdateWithoutLineupInput, UserLineupItemUncheckedUpdateWithoutLineupInput>
  }

  export type UserLineupItemUpdateManyWithWhereWithoutLineupInput = {
    where: UserLineupItemScalarWhereInput
    data: XOR<UserLineupItemUpdateManyMutationInput, UserLineupItemUncheckedUpdateManyWithoutLineupInput>
  }

  export type UserLineupCreateWithoutItemsInput = {
    id?: string
    user: UsersCreateNestedOneWithoutUserLineupsInput
    festival: FestivalsCreateNestedOneWithoutUserLineupsInput
  }

  export type UserLineupUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    festivalId: string
  }

  export type UserLineupCreateOrConnectWithoutItemsInput = {
    where: UserLineupWhereUniqueInput
    create: XOR<UserLineupCreateWithoutItemsInput, UserLineupUncheckedCreateWithoutItemsInput>
  }

  export type ArtistsCreateWithoutLineupItemsInput = {
    id?: string
    name: string
    genre: string
    performances?: ArtistPerformanceCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateWithoutLineupItemsInput = {
    id?: string
    name: string
    genre: string
    performances?: ArtistPerformanceUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutLineupItemsInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutLineupItemsInput, ArtistsUncheckedCreateWithoutLineupItemsInput>
  }

  export type UserLineupUpsertWithoutItemsInput = {
    update: XOR<UserLineupUpdateWithoutItemsInput, UserLineupUncheckedUpdateWithoutItemsInput>
    create: XOR<UserLineupCreateWithoutItemsInput, UserLineupUncheckedCreateWithoutItemsInput>
    where?: UserLineupWhereInput
  }

  export type UserLineupUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserLineupWhereInput
    data: XOR<UserLineupUpdateWithoutItemsInput, UserLineupUncheckedUpdateWithoutItemsInput>
  }

  export type UserLineupUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutUserLineupsNestedInput
    festival?: FestivalsUpdateOneRequiredWithoutUserLineupsNestedInput
  }

  export type UserLineupUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUpsertWithoutLineupItemsInput = {
    update: XOR<ArtistsUpdateWithoutLineupItemsInput, ArtistsUncheckedUpdateWithoutLineupItemsInput>
    create: XOR<ArtistsCreateWithoutLineupItemsInput, ArtistsUncheckedCreateWithoutLineupItemsInput>
    where?: ArtistsWhereInput
  }

  export type ArtistsUpdateToOneWithWhereWithoutLineupItemsInput = {
    where?: ArtistsWhereInput
    data: XOR<ArtistsUpdateWithoutLineupItemsInput, ArtistsUncheckedUpdateWithoutLineupItemsInput>
  }

  export type ArtistsUpdateWithoutLineupItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    performances?: ArtistPerformanceUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutLineupItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    performances?: ArtistPerformanceUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type UsersCreateWithoutTicketsInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    festivals?: FestivalsCreateNestedManyWithoutOrganiserInput
    userLineups?: UserLineupCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTicketsInput = {
    id?: string
    username: string
    password: string
    email: string
    role: string
    festivals?: FestivalsUncheckedCreateNestedManyWithoutOrganiserInput
    userLineups?: UserLineupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTicketsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
  }

  export type FestivalsCreateWithoutTicketsInput = {
    id?: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    organiser: UsersCreateNestedOneWithoutFestivalsInput
    stages?: StagesCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsUncheckedCreateWithoutTicketsInput = {
    id?: string
    organiserId: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
    stages?: StagesUncheckedCreateNestedManyWithoutFestivalInput
    userLineups?: UserLineupUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalsCreateOrConnectWithoutTicketsInput = {
    where: FestivalsWhereUniqueInput
    create: XOR<FestivalsCreateWithoutTicketsInput, FestivalsUncheckedCreateWithoutTicketsInput>
  }

  export type UsersUpsertWithoutTicketsInput = {
    update: XOR<UsersUpdateWithoutTicketsInput, UsersUncheckedUpdateWithoutTicketsInput>
    create: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTicketsInput, UsersUncheckedUpdateWithoutTicketsInput>
  }

  export type UsersUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalsUpdateManyWithoutOrganiserNestedInput
    userLineups?: UserLineupUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalsUncheckedUpdateManyWithoutOrganiserNestedInput
    userLineups?: UserLineupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FestivalsUpsertWithoutTicketsInput = {
    update: XOR<FestivalsUpdateWithoutTicketsInput, FestivalsUncheckedUpdateWithoutTicketsInput>
    create: XOR<FestivalsCreateWithoutTicketsInput, FestivalsUncheckedCreateWithoutTicketsInput>
    where?: FestivalsWhereInput
  }

  export type FestivalsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: FestivalsWhereInput
    data: XOR<FestivalsUpdateWithoutTicketsInput, FestivalsUncheckedUpdateWithoutTicketsInput>
  }

  export type FestivalsUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organiser?: UsersUpdateOneRequiredWithoutFestivalsNestedInput
    stages?: StagesUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organiserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StagesUncheckedUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsCreateManyOrganiserInput = {
    id?: string
    name: string
    location?: FestivalsCreatelocationInput | number[]
    created_at?: Date | string
    start_date: Date | string
    end_date: Date | string
  }

  export type TicketsCreateManyUserInput = {
    id?: string
    festivalId: string
  }

  export type UserLineupCreateManyUserInput = {
    id?: string
    festivalId: string
  }

  export type FestivalsUpdateWithoutOrganiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StagesUpdateManyWithoutFestivalNestedInput
    tickets?: TicketsUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsUncheckedUpdateWithoutOrganiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StagesUncheckedUpdateManyWithoutFestivalNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutFestivalNestedInput
    userLineups?: UserLineupUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalsUncheckedUpdateManyWithoutOrganiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: FestivalsUpdatelocationInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festival?: FestivalsUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festival?: FestivalsUpdateOneRequiredWithoutUserLineupsNestedInput
    items?: UserLineupItemUpdateManyWithoutLineupNestedInput
  }

  export type UserLineupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    items?: UserLineupItemUncheckedUpdateManyWithoutLineupNestedInput
  }

  export type UserLineupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
  }

  export type StagesCreateManyFestivalInput = {
    id?: string
    name: string
  }

  export type TicketsCreateManyFestivalInput = {
    id?: string
    userId: string
  }

  export type UserLineupCreateManyFestivalInput = {
    id?: string
    userId: string
  }

  export type StagesUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    performances?: ArtistPerformanceUpdateManyWithoutStageNestedInput
  }

  export type StagesUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    performances?: ArtistPerformanceUncheckedUpdateManyWithoutStageNestedInput
  }

  export type StagesUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutUserLineupsNestedInput
    items?: UserLineupItemUpdateManyWithoutLineupNestedInput
  }

  export type UserLineupUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: UserLineupItemUncheckedUpdateManyWithoutLineupNestedInput
  }

  export type UserLineupUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistPerformanceCreateManyStageInput = {
    artistId: string
    day: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type ArtistPerformanceUpdateWithoutStageInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistsUpdateOneRequiredWithoutPerformancesNestedInput
  }

  export type ArtistPerformanceUncheckedUpdateWithoutStageInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistPerformanceUncheckedUpdateManyWithoutStageInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistPerformanceCreateManyArtistInput = {
    stageId: string
    day: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type UserLineupItemCreateManyArtistInput = {
    userLineupId: string
  }

  export type ArtistPerformanceUpdateWithoutArtistInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: StagesUpdateOneRequiredWithoutPerformancesNestedInput
  }

  export type ArtistPerformanceUncheckedUpdateWithoutArtistInput = {
    stageId?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistPerformanceUncheckedUpdateManyWithoutArtistInput = {
    stageId?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLineupItemUpdateWithoutArtistInput = {
    lineup?: UserLineupUpdateOneRequiredWithoutItemsNestedInput
  }

  export type UserLineupItemUncheckedUpdateWithoutArtistInput = {
    userLineupId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupItemUncheckedUpdateManyWithoutArtistInput = {
    userLineupId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupItemCreateManyLineupInput = {
    artistsId: string
  }

  export type UserLineupItemUpdateWithoutLineupInput = {
    artist?: ArtistsUpdateOneRequiredWithoutLineupItemsNestedInput
  }

  export type UserLineupItemUncheckedUpdateWithoutLineupInput = {
    artistsId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLineupItemUncheckedUpdateManyWithoutLineupInput = {
    artistsId?: StringFieldUpdateOperationsInput | string
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