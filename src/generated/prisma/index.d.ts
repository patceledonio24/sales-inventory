
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductPrice
 * 
 */
export type ProductPrice = $Result.DefaultSelection<Prisma.$ProductPricePayload>
/**
 * Model DailyInventoryEntry
 * 
 */
export type DailyInventoryEntry = $Result.DefaultSelection<Prisma.$DailyInventoryEntryPayload>
/**
 * Model DailyRemittance
 * 
 */
export type DailyRemittance = $Result.DefaultSelection<Prisma.$DailyRemittancePayload>
/**
 * Model DailyExpense
 * 
 */
export type DailyExpense = $Result.DefaultSelection<Prisma.$DailyExpensePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPrice`: Exposes CRUD operations for the **ProductPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPrices
    * const productPrices = await prisma.productPrice.findMany()
    * ```
    */
  get productPrice(): Prisma.ProductPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyInventoryEntry`: Exposes CRUD operations for the **DailyInventoryEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyInventoryEntries
    * const dailyInventoryEntries = await prisma.dailyInventoryEntry.findMany()
    * ```
    */
  get dailyInventoryEntry(): Prisma.DailyInventoryEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyRemittance`: Exposes CRUD operations for the **DailyRemittance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyRemittances
    * const dailyRemittances = await prisma.dailyRemittance.findMany()
    * ```
    */
  get dailyRemittance(): Prisma.DailyRemittanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyExpense`: Exposes CRUD operations for the **DailyExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyExpenses
    * const dailyExpenses = await prisma.dailyExpense.findMany()
    * ```
    */
  get dailyExpense(): Prisma.DailyExpenseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    User: 'User',
    Store: 'Store',
    Product: 'Product',
    ProductPrice: 'ProductPrice',
    DailyInventoryEntry: 'DailyInventoryEntry',
    DailyRemittance: 'DailyRemittance',
    DailyExpense: 'DailyExpense'
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
      modelProps: "user" | "store" | "product" | "productPrice" | "dailyInventoryEntry" | "dailyRemittance" | "dailyExpense"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductPrice: {
        payload: Prisma.$ProductPricePayload<ExtArgs>
        fields: Prisma.ProductPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findFirst: {
            args: Prisma.ProductPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findMany: {
            args: Prisma.ProductPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          create: {
            args: Prisma.ProductPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          createMany: {
            args: Prisma.ProductPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          delete: {
            args: Prisma.ProductPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          update: {
            args: Prisma.ProductPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          deleteMany: {
            args: Prisma.ProductPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          upsert: {
            args: Prisma.ProductPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          aggregate: {
            args: Prisma.ProductPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPrice>
          }
          groupBy: {
            args: Prisma.ProductPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPriceCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceCountAggregateOutputType> | number
          }
        }
      }
      DailyInventoryEntry: {
        payload: Prisma.$DailyInventoryEntryPayload<ExtArgs>
        fields: Prisma.DailyInventoryEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyInventoryEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyInventoryEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>
          }
          findFirst: {
            args: Prisma.DailyInventoryEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyInventoryEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>
          }
          findMany: {
            args: Prisma.DailyInventoryEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>[]
          }
          create: {
            args: Prisma.DailyInventoryEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>
          }
          createMany: {
            args: Prisma.DailyInventoryEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyInventoryEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>[]
          }
          delete: {
            args: Prisma.DailyInventoryEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>
          }
          update: {
            args: Prisma.DailyInventoryEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>
          }
          deleteMany: {
            args: Prisma.DailyInventoryEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyInventoryEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyInventoryEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>[]
          }
          upsert: {
            args: Prisma.DailyInventoryEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyInventoryEntryPayload>
          }
          aggregate: {
            args: Prisma.DailyInventoryEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyInventoryEntry>
          }
          groupBy: {
            args: Prisma.DailyInventoryEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyInventoryEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyInventoryEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DailyInventoryEntryCountAggregateOutputType> | number
          }
        }
      }
      DailyRemittance: {
        payload: Prisma.$DailyRemittancePayload<ExtArgs>
        fields: Prisma.DailyRemittanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyRemittanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyRemittanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>
          }
          findFirst: {
            args: Prisma.DailyRemittanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyRemittanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>
          }
          findMany: {
            args: Prisma.DailyRemittanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>[]
          }
          create: {
            args: Prisma.DailyRemittanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>
          }
          createMany: {
            args: Prisma.DailyRemittanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyRemittanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>[]
          }
          delete: {
            args: Prisma.DailyRemittanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>
          }
          update: {
            args: Prisma.DailyRemittanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>
          }
          deleteMany: {
            args: Prisma.DailyRemittanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyRemittanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyRemittanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>[]
          }
          upsert: {
            args: Prisma.DailyRemittanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRemittancePayload>
          }
          aggregate: {
            args: Prisma.DailyRemittanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyRemittance>
          }
          groupBy: {
            args: Prisma.DailyRemittanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyRemittanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyRemittanceCountArgs<ExtArgs>
            result: $Utils.Optional<DailyRemittanceCountAggregateOutputType> | number
          }
        }
      }
      DailyExpense: {
        payload: Prisma.$DailyExpensePayload<ExtArgs>
        fields: Prisma.DailyExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>
          }
          findFirst: {
            args: Prisma.DailyExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>
          }
          findMany: {
            args: Prisma.DailyExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>[]
          }
          create: {
            args: Prisma.DailyExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>
          }
          createMany: {
            args: Prisma.DailyExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>[]
          }
          delete: {
            args: Prisma.DailyExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>
          }
          update: {
            args: Prisma.DailyExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>
          }
          deleteMany: {
            args: Prisma.DailyExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>[]
          }
          upsert: {
            args: Prisma.DailyExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyExpensePayload>
          }
          aggregate: {
            args: Prisma.DailyExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyExpense>
          }
          groupBy: {
            args: Prisma.DailyExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<DailyExpenseCountAggregateOutputType> | number
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
    user?: UserOmit
    store?: StoreOmit
    product?: ProductOmit
    productPrice?: ProductPriceOmit
    dailyInventoryEntry?: DailyInventoryEntryOmit
    dailyRemittance?: DailyRemittanceOmit
    dailyExpense?: DailyExpenseOmit
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
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    prices: number
    dailyEntries: number
    dailyRemittances: number
    dailyExpenses: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | StoreCountOutputTypeCountPricesArgs
    dailyEntries?: boolean | StoreCountOutputTypeCountDailyEntriesArgs
    dailyRemittances?: boolean | StoreCountOutputTypeCountDailyRemittancesArgs
    dailyExpenses?: boolean | StoreCountOutputTypeCountDailyExpensesArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountDailyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyInventoryEntryWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountDailyRemittancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRemittanceWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountDailyExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyExpenseWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    prices: number
    dailyEntries: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | ProductCountOutputTypeCountPricesArgs
    dailyEntries?: boolean | ProductCountOutputTypeCountDailyEntriesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDailyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyInventoryEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.UserRole
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.UserRole
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    code: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    code: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prices?: boolean | Store$pricesArgs<ExtArgs>
    dailyEntries?: boolean | Store$dailyEntriesArgs<ExtArgs>
    dailyRemittances?: boolean | Store$dailyRemittancesArgs<ExtArgs>
    dailyExpenses?: boolean | Store$dailyExpensesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | Store$pricesArgs<ExtArgs>
    dailyEntries?: boolean | Store$dailyEntriesArgs<ExtArgs>
    dailyRemittances?: boolean | Store$dailyRemittancesArgs<ExtArgs>
    dailyExpenses?: boolean | Store$dailyExpensesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      prices: Prisma.$ProductPricePayload<ExtArgs>[]
      dailyEntries: Prisma.$DailyInventoryEntryPayload<ExtArgs>[]
      dailyRemittances: Prisma.$DailyRemittancePayload<ExtArgs>[]
      dailyExpenses: Prisma.$DailyExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prices<T extends Store$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Store$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyEntries<T extends Store$dailyEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Store$dailyEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyRemittances<T extends Store$dailyRemittancesArgs<ExtArgs> = {}>(args?: Subset<T, Store$dailyRemittancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyExpenses<T extends Store$dailyExpensesArgs<ExtArgs> = {}>(args?: Subset<T, Store$dailyExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly code: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly isActive: FieldRef<"Store", 'Boolean'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.prices
   */
  export type Store$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    cursor?: ProductPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * Store.dailyEntries
   */
  export type Store$dailyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    where?: DailyInventoryEntryWhereInput
    orderBy?: DailyInventoryEntryOrderByWithRelationInput | DailyInventoryEntryOrderByWithRelationInput[]
    cursor?: DailyInventoryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyInventoryEntryScalarFieldEnum | DailyInventoryEntryScalarFieldEnum[]
  }

  /**
   * Store.dailyRemittances
   */
  export type Store$dailyRemittancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    where?: DailyRemittanceWhereInput
    orderBy?: DailyRemittanceOrderByWithRelationInput | DailyRemittanceOrderByWithRelationInput[]
    cursor?: DailyRemittanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyRemittanceScalarFieldEnum | DailyRemittanceScalarFieldEnum[]
  }

  /**
   * Store.dailyExpenses
   */
  export type Store$dailyExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    where?: DailyExpenseWhereInput
    orderBy?: DailyExpenseOrderByWithRelationInput | DailyExpenseOrderByWithRelationInput[]
    cursor?: DailyExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyExpenseScalarFieldEnum | DailyExpenseScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    sku: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    sku: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    sku: string | null
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prices?: boolean | Product$pricesArgs<ExtArgs>
    dailyEntries?: boolean | Product$dailyEntriesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | Product$pricesArgs<ExtArgs>
    dailyEntries?: boolean | Product$dailyEntriesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      prices: Prisma.$ProductPricePayload<ExtArgs>[]
      dailyEntries: Prisma.$DailyInventoryEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku: string | null
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prices<T extends Product$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Product$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyEntries<T extends Product$dailyEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$dailyEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.prices
   */
  export type Product$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    cursor?: ProductPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * Product.dailyEntries
   */
  export type Product$dailyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    where?: DailyInventoryEntryWhereInput
    orderBy?: DailyInventoryEntryOrderByWithRelationInput | DailyInventoryEntryOrderByWithRelationInput[]
    cursor?: DailyInventoryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyInventoryEntryScalarFieldEnum | DailyInventoryEntryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductPrice
   */

  export type AggregateProductPrice = {
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  export type ProductPriceAvgAggregateOutputType = {
    lp: Decimal | null
    srp: Decimal | null
  }

  export type ProductPriceSumAggregateOutputType = {
    lp: Decimal | null
    srp: Decimal | null
  }

  export type ProductPriceMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    productId: string | null
    lp: Decimal | null
    srp: Decimal | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ProductPriceMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    productId: string | null
    lp: Decimal | null
    srp: Decimal | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ProductPriceCountAggregateOutputType = {
    id: number
    storeId: number
    productId: number
    lp: number
    srp: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ProductPriceAvgAggregateInputType = {
    lp?: true
    srp?: true
  }

  export type ProductPriceSumAggregateInputType = {
    lp?: true
    srp?: true
  }

  export type ProductPriceMinAggregateInputType = {
    id?: true
    storeId?: true
    productId?: true
    lp?: true
    srp?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ProductPriceMaxAggregateInputType = {
    id?: true
    storeId?: true
    productId?: true
    lp?: true
    srp?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ProductPriceCountAggregateInputType = {
    id?: true
    storeId?: true
    productId?: true
    lp?: true
    srp?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ProductPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrice to aggregate.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPrices
    **/
    _count?: true | ProductPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPriceMaxAggregateInputType
  }

  export type GetProductPriceAggregateType<T extends ProductPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPrice[P]>
      : GetScalarType<T[P], AggregateProductPrice[P]>
  }




  export type ProductPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithAggregationInput | ProductPriceOrderByWithAggregationInput[]
    by: ProductPriceScalarFieldEnum[] | ProductPriceScalarFieldEnum
    having?: ProductPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPriceCountAggregateInputType | true
    _avg?: ProductPriceAvgAggregateInputType
    _sum?: ProductPriceSumAggregateInputType
    _min?: ProductPriceMinAggregateInputType
    _max?: ProductPriceMaxAggregateInputType
  }

  export type ProductPriceGroupByOutputType = {
    id: string
    storeId: string
    productId: string
    lp: Decimal
    srp: Decimal
    updatedAt: Date
    createdAt: Date
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  type GetProductPriceGroupByPayload<T extends ProductPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
        }
      >
    >


  export type ProductPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    productId?: boolean
    lp?: boolean
    srp?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    productId?: boolean
    lp?: boolean
    srp?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    productId?: boolean
    lp?: boolean
    srp?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectScalar = {
    id?: boolean
    storeId?: boolean
    productId?: boolean
    lp?: boolean
    srp?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ProductPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "productId" | "lp" | "srp" | "updatedAt" | "createdAt", ExtArgs["result"]["productPrice"]>
  export type ProductPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPrice"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      productId: string
      lp: Prisma.Decimal
      srp: Prisma.Decimal
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["productPrice"]>
    composites: {}
  }

  type ProductPriceGetPayload<S extends boolean | null | undefined | ProductPriceDefaultArgs> = $Result.GetResult<Prisma.$ProductPricePayload, S>

  type ProductPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPriceCountAggregateInputType | true
    }

  export interface ProductPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPrice'], meta: { name: 'ProductPrice' } }
    /**
     * Find zero or one ProductPrice that matches the filter.
     * @param {ProductPriceFindUniqueArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPriceFindUniqueArgs>(args: SelectSubset<T, ProductPriceFindUniqueArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPriceFindUniqueOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPriceFindFirstArgs>(args?: SelectSubset<T, ProductPriceFindFirstArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPrices
     * const productPrices = await prisma.productPrice.findMany()
     * 
     * // Get first 10 ProductPrices
     * const productPrices = await prisma.productPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPriceFindManyArgs>(args?: SelectSubset<T, ProductPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPrice.
     * @param {ProductPriceCreateArgs} args - Arguments to create a ProductPrice.
     * @example
     * // Create one ProductPrice
     * const ProductPrice = await prisma.productPrice.create({
     *   data: {
     *     // ... data to create a ProductPrice
     *   }
     * })
     * 
     */
    create<T extends ProductPriceCreateArgs>(args: SelectSubset<T, ProductPriceCreateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPrices.
     * @param {ProductPriceCreateManyArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPriceCreateManyArgs>(args?: SelectSubset<T, ProductPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPrices and returns the data saved in the database.
     * @param {ProductPriceCreateManyAndReturnArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPrices and only return the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductPrice.
     * @param {ProductPriceDeleteArgs} args - Arguments to delete one ProductPrice.
     * @example
     * // Delete one ProductPrice
     * const ProductPrice = await prisma.productPrice.delete({
     *   where: {
     *     // ... filter to delete one ProductPrice
     *   }
     * })
     * 
     */
    delete<T extends ProductPriceDeleteArgs>(args: SelectSubset<T, ProductPriceDeleteArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPrice.
     * @param {ProductPriceUpdateArgs} args - Arguments to update one ProductPrice.
     * @example
     * // Update one ProductPrice
     * const productPrice = await prisma.productPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPriceUpdateArgs>(args: SelectSubset<T, ProductPriceUpdateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPrices.
     * @param {ProductPriceDeleteManyArgs} args - Arguments to filter ProductPrices to delete.
     * @example
     * // Delete a few ProductPrices
     * const { count } = await prisma.productPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPriceDeleteManyArgs>(args?: SelectSubset<T, ProductPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPrices
     * const productPrice = await prisma.productPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPriceUpdateManyArgs>(args: SelectSubset<T, ProductPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPrices and returns the data updated in the database.
     * @param {ProductPriceUpdateManyAndReturnArgs} args - Arguments to update many ProductPrices.
     * @example
     * // Update many ProductPrices
     * const productPrice = await prisma.productPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductPrices and only return the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductPrice.
     * @param {ProductPriceUpsertArgs} args - Arguments to update or create a ProductPrice.
     * @example
     * // Update or create a ProductPrice
     * const productPrice = await prisma.productPrice.upsert({
     *   create: {
     *     // ... data to create a ProductPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPrice we want to update
     *   }
     * })
     */
    upsert<T extends ProductPriceUpsertArgs>(args: SelectSubset<T, ProductPriceUpsertArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceCountArgs} args - Arguments to filter ProductPrices to count.
     * @example
     * // Count the number of ProductPrices
     * const count = await prisma.productPrice.count({
     *   where: {
     *     // ... the filter for the ProductPrices we want to count
     *   }
     * })
    **/
    count<T extends ProductPriceCountArgs>(
      args?: Subset<T, ProductPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPriceAggregateArgs>(args: Subset<T, ProductPriceAggregateArgs>): Prisma.PrismaPromise<GetProductPriceAggregateType<T>>

    /**
     * Group by ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceGroupByArgs} args - Group by arguments.
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
      T extends ProductPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPriceGroupByArgs['orderBy'] }
        : { orderBy?: ProductPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPrice model
   */
  readonly fields: ProductPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductPrice model
   */
  interface ProductPriceFieldRefs {
    readonly id: FieldRef<"ProductPrice", 'String'>
    readonly storeId: FieldRef<"ProductPrice", 'String'>
    readonly productId: FieldRef<"ProductPrice", 'String'>
    readonly lp: FieldRef<"ProductPrice", 'Decimal'>
    readonly srp: FieldRef<"ProductPrice", 'Decimal'>
    readonly updatedAt: FieldRef<"ProductPrice", 'DateTime'>
    readonly createdAt: FieldRef<"ProductPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductPrice findUnique
   */
  export type ProductPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findUniqueOrThrow
   */
  export type ProductPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findFirst
   */
  export type ProductPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findFirstOrThrow
   */
  export type ProductPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findMany
   */
  export type ProductPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrices to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice create
   */
  export type ProductPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPrice.
     */
    data: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
  }

  /**
   * ProductPrice createMany
   */
  export type ProductPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPrice createManyAndReturn
   */
  export type ProductPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPrice update
   */
  export type ProductPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPrice.
     */
    data: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
    /**
     * Choose, which ProductPrice to update.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice updateMany
   */
  export type ProductPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPrices.
     */
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyInput>
    /**
     * Filter which ProductPrices to update
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to update.
     */
    limit?: number
  }

  /**
   * ProductPrice updateManyAndReturn
   */
  export type ProductPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * The data used to update ProductPrices.
     */
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyInput>
    /**
     * Filter which ProductPrices to update
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPrice upsert
   */
  export type ProductPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPrice to update in case it exists.
     */
    where: ProductPriceWhereUniqueInput
    /**
     * In case the ProductPrice found by the `where` argument doesn't exist, create a new ProductPrice with this data.
     */
    create: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
    /**
     * In case the ProductPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
  }

  /**
   * ProductPrice delete
   */
  export type ProductPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter which ProductPrice to delete.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice deleteMany
   */
  export type ProductPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrices to delete
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to delete.
     */
    limit?: number
  }

  /**
   * ProductPrice without action
   */
  export type ProductPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
  }


  /**
   * Model DailyInventoryEntry
   */

  export type AggregateDailyInventoryEntry = {
    _count: DailyInventoryEntryCountAggregateOutputType | null
    _avg: DailyInventoryEntryAvgAggregateOutputType | null
    _sum: DailyInventoryEntrySumAggregateOutputType | null
    _min: DailyInventoryEntryMinAggregateOutputType | null
    _max: DailyInventoryEntryMaxAggregateOutputType | null
  }

  export type DailyInventoryEntryAvgAggregateOutputType = {
    beginQty: number | null
    incomingQty: number | null
    salesQty: number | null
    endQty: number | null
    lpSnapshot: Decimal | null
    srpSnapshot: Decimal | null
  }

  export type DailyInventoryEntrySumAggregateOutputType = {
    beginQty: number | null
    incomingQty: number | null
    salesQty: number | null
    endQty: number | null
    lpSnapshot: Decimal | null
    srpSnapshot: Decimal | null
  }

  export type DailyInventoryEntryMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    productId: string | null
    date: Date | null
    beginQty: number | null
    incomingQty: number | null
    salesQty: number | null
    endQty: number | null
    lpSnapshot: Decimal | null
    srpSnapshot: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyInventoryEntryMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    productId: string | null
    date: Date | null
    beginQty: number | null
    incomingQty: number | null
    salesQty: number | null
    endQty: number | null
    lpSnapshot: Decimal | null
    srpSnapshot: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyInventoryEntryCountAggregateOutputType = {
    id: number
    storeId: number
    productId: number
    date: number
    beginQty: number
    incomingQty: number
    salesQty: number
    endQty: number
    lpSnapshot: number
    srpSnapshot: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyInventoryEntryAvgAggregateInputType = {
    beginQty?: true
    incomingQty?: true
    salesQty?: true
    endQty?: true
    lpSnapshot?: true
    srpSnapshot?: true
  }

  export type DailyInventoryEntrySumAggregateInputType = {
    beginQty?: true
    incomingQty?: true
    salesQty?: true
    endQty?: true
    lpSnapshot?: true
    srpSnapshot?: true
  }

  export type DailyInventoryEntryMinAggregateInputType = {
    id?: true
    storeId?: true
    productId?: true
    date?: true
    beginQty?: true
    incomingQty?: true
    salesQty?: true
    endQty?: true
    lpSnapshot?: true
    srpSnapshot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyInventoryEntryMaxAggregateInputType = {
    id?: true
    storeId?: true
    productId?: true
    date?: true
    beginQty?: true
    incomingQty?: true
    salesQty?: true
    endQty?: true
    lpSnapshot?: true
    srpSnapshot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyInventoryEntryCountAggregateInputType = {
    id?: true
    storeId?: true
    productId?: true
    date?: true
    beginQty?: true
    incomingQty?: true
    salesQty?: true
    endQty?: true
    lpSnapshot?: true
    srpSnapshot?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyInventoryEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyInventoryEntry to aggregate.
     */
    where?: DailyInventoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyInventoryEntries to fetch.
     */
    orderBy?: DailyInventoryEntryOrderByWithRelationInput | DailyInventoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyInventoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyInventoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyInventoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyInventoryEntries
    **/
    _count?: true | DailyInventoryEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyInventoryEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyInventoryEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyInventoryEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyInventoryEntryMaxAggregateInputType
  }

  export type GetDailyInventoryEntryAggregateType<T extends DailyInventoryEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyInventoryEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyInventoryEntry[P]>
      : GetScalarType<T[P], AggregateDailyInventoryEntry[P]>
  }




  export type DailyInventoryEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyInventoryEntryWhereInput
    orderBy?: DailyInventoryEntryOrderByWithAggregationInput | DailyInventoryEntryOrderByWithAggregationInput[]
    by: DailyInventoryEntryScalarFieldEnum[] | DailyInventoryEntryScalarFieldEnum
    having?: DailyInventoryEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyInventoryEntryCountAggregateInputType | true
    _avg?: DailyInventoryEntryAvgAggregateInputType
    _sum?: DailyInventoryEntrySumAggregateInputType
    _min?: DailyInventoryEntryMinAggregateInputType
    _max?: DailyInventoryEntryMaxAggregateInputType
  }

  export type DailyInventoryEntryGroupByOutputType = {
    id: string
    storeId: string
    productId: string
    date: Date
    beginQty: number
    incomingQty: number
    salesQty: number
    endQty: number
    lpSnapshot: Decimal
    srpSnapshot: Decimal
    createdAt: Date
    updatedAt: Date
    _count: DailyInventoryEntryCountAggregateOutputType | null
    _avg: DailyInventoryEntryAvgAggregateOutputType | null
    _sum: DailyInventoryEntrySumAggregateOutputType | null
    _min: DailyInventoryEntryMinAggregateOutputType | null
    _max: DailyInventoryEntryMaxAggregateOutputType | null
  }

  type GetDailyInventoryEntryGroupByPayload<T extends DailyInventoryEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyInventoryEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyInventoryEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyInventoryEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DailyInventoryEntryGroupByOutputType[P]>
        }
      >
    >


  export type DailyInventoryEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    productId?: boolean
    date?: boolean
    beginQty?: boolean
    incomingQty?: boolean
    salesQty?: boolean
    endQty?: boolean
    lpSnapshot?: boolean
    srpSnapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyInventoryEntry"]>

  export type DailyInventoryEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    productId?: boolean
    date?: boolean
    beginQty?: boolean
    incomingQty?: boolean
    salesQty?: boolean
    endQty?: boolean
    lpSnapshot?: boolean
    srpSnapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyInventoryEntry"]>

  export type DailyInventoryEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    productId?: boolean
    date?: boolean
    beginQty?: boolean
    incomingQty?: boolean
    salesQty?: boolean
    endQty?: boolean
    lpSnapshot?: boolean
    srpSnapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyInventoryEntry"]>

  export type DailyInventoryEntrySelectScalar = {
    id?: boolean
    storeId?: boolean
    productId?: boolean
    date?: boolean
    beginQty?: boolean
    incomingQty?: boolean
    salesQty?: boolean
    endQty?: boolean
    lpSnapshot?: boolean
    srpSnapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyInventoryEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "productId" | "date" | "beginQty" | "incomingQty" | "salesQty" | "endQty" | "lpSnapshot" | "srpSnapshot" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyInventoryEntry"]>
  export type DailyInventoryEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DailyInventoryEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DailyInventoryEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DailyInventoryEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyInventoryEntry"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      productId: string
      date: Date
      beginQty: number
      incomingQty: number
      salesQty: number
      endQty: number
      lpSnapshot: Prisma.Decimal
      srpSnapshot: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyInventoryEntry"]>
    composites: {}
  }

  type DailyInventoryEntryGetPayload<S extends boolean | null | undefined | DailyInventoryEntryDefaultArgs> = $Result.GetResult<Prisma.$DailyInventoryEntryPayload, S>

  type DailyInventoryEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyInventoryEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyInventoryEntryCountAggregateInputType | true
    }

  export interface DailyInventoryEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyInventoryEntry'], meta: { name: 'DailyInventoryEntry' } }
    /**
     * Find zero or one DailyInventoryEntry that matches the filter.
     * @param {DailyInventoryEntryFindUniqueArgs} args - Arguments to find a DailyInventoryEntry
     * @example
     * // Get one DailyInventoryEntry
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyInventoryEntryFindUniqueArgs>(args: SelectSubset<T, DailyInventoryEntryFindUniqueArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyInventoryEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyInventoryEntryFindUniqueOrThrowArgs} args - Arguments to find a DailyInventoryEntry
     * @example
     * // Get one DailyInventoryEntry
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyInventoryEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyInventoryEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyInventoryEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyInventoryEntryFindFirstArgs} args - Arguments to find a DailyInventoryEntry
     * @example
     * // Get one DailyInventoryEntry
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyInventoryEntryFindFirstArgs>(args?: SelectSubset<T, DailyInventoryEntryFindFirstArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyInventoryEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyInventoryEntryFindFirstOrThrowArgs} args - Arguments to find a DailyInventoryEntry
     * @example
     * // Get one DailyInventoryEntry
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyInventoryEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyInventoryEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyInventoryEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyInventoryEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyInventoryEntries
     * const dailyInventoryEntries = await prisma.dailyInventoryEntry.findMany()
     * 
     * // Get first 10 DailyInventoryEntries
     * const dailyInventoryEntries = await prisma.dailyInventoryEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyInventoryEntryWithIdOnly = await prisma.dailyInventoryEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyInventoryEntryFindManyArgs>(args?: SelectSubset<T, DailyInventoryEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyInventoryEntry.
     * @param {DailyInventoryEntryCreateArgs} args - Arguments to create a DailyInventoryEntry.
     * @example
     * // Create one DailyInventoryEntry
     * const DailyInventoryEntry = await prisma.dailyInventoryEntry.create({
     *   data: {
     *     // ... data to create a DailyInventoryEntry
     *   }
     * })
     * 
     */
    create<T extends DailyInventoryEntryCreateArgs>(args: SelectSubset<T, DailyInventoryEntryCreateArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyInventoryEntries.
     * @param {DailyInventoryEntryCreateManyArgs} args - Arguments to create many DailyInventoryEntries.
     * @example
     * // Create many DailyInventoryEntries
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyInventoryEntryCreateManyArgs>(args?: SelectSubset<T, DailyInventoryEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyInventoryEntries and returns the data saved in the database.
     * @param {DailyInventoryEntryCreateManyAndReturnArgs} args - Arguments to create many DailyInventoryEntries.
     * @example
     * // Create many DailyInventoryEntries
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyInventoryEntries and only return the `id`
     * const dailyInventoryEntryWithIdOnly = await prisma.dailyInventoryEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyInventoryEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyInventoryEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyInventoryEntry.
     * @param {DailyInventoryEntryDeleteArgs} args - Arguments to delete one DailyInventoryEntry.
     * @example
     * // Delete one DailyInventoryEntry
     * const DailyInventoryEntry = await prisma.dailyInventoryEntry.delete({
     *   where: {
     *     // ... filter to delete one DailyInventoryEntry
     *   }
     * })
     * 
     */
    delete<T extends DailyInventoryEntryDeleteArgs>(args: SelectSubset<T, DailyInventoryEntryDeleteArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyInventoryEntry.
     * @param {DailyInventoryEntryUpdateArgs} args - Arguments to update one DailyInventoryEntry.
     * @example
     * // Update one DailyInventoryEntry
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyInventoryEntryUpdateArgs>(args: SelectSubset<T, DailyInventoryEntryUpdateArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyInventoryEntries.
     * @param {DailyInventoryEntryDeleteManyArgs} args - Arguments to filter DailyInventoryEntries to delete.
     * @example
     * // Delete a few DailyInventoryEntries
     * const { count } = await prisma.dailyInventoryEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyInventoryEntryDeleteManyArgs>(args?: SelectSubset<T, DailyInventoryEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyInventoryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyInventoryEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyInventoryEntries
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyInventoryEntryUpdateManyArgs>(args: SelectSubset<T, DailyInventoryEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyInventoryEntries and returns the data updated in the database.
     * @param {DailyInventoryEntryUpdateManyAndReturnArgs} args - Arguments to update many DailyInventoryEntries.
     * @example
     * // Update many DailyInventoryEntries
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyInventoryEntries and only return the `id`
     * const dailyInventoryEntryWithIdOnly = await prisma.dailyInventoryEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyInventoryEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyInventoryEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyInventoryEntry.
     * @param {DailyInventoryEntryUpsertArgs} args - Arguments to update or create a DailyInventoryEntry.
     * @example
     * // Update or create a DailyInventoryEntry
     * const dailyInventoryEntry = await prisma.dailyInventoryEntry.upsert({
     *   create: {
     *     // ... data to create a DailyInventoryEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyInventoryEntry we want to update
     *   }
     * })
     */
    upsert<T extends DailyInventoryEntryUpsertArgs>(args: SelectSubset<T, DailyInventoryEntryUpsertArgs<ExtArgs>>): Prisma__DailyInventoryEntryClient<$Result.GetResult<Prisma.$DailyInventoryEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyInventoryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyInventoryEntryCountArgs} args - Arguments to filter DailyInventoryEntries to count.
     * @example
     * // Count the number of DailyInventoryEntries
     * const count = await prisma.dailyInventoryEntry.count({
     *   where: {
     *     // ... the filter for the DailyInventoryEntries we want to count
     *   }
     * })
    **/
    count<T extends DailyInventoryEntryCountArgs>(
      args?: Subset<T, DailyInventoryEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyInventoryEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyInventoryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyInventoryEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyInventoryEntryAggregateArgs>(args: Subset<T, DailyInventoryEntryAggregateArgs>): Prisma.PrismaPromise<GetDailyInventoryEntryAggregateType<T>>

    /**
     * Group by DailyInventoryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyInventoryEntryGroupByArgs} args - Group by arguments.
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
      T extends DailyInventoryEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyInventoryEntryGroupByArgs['orderBy'] }
        : { orderBy?: DailyInventoryEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyInventoryEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyInventoryEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyInventoryEntry model
   */
  readonly fields: DailyInventoryEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyInventoryEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyInventoryEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyInventoryEntry model
   */
  interface DailyInventoryEntryFieldRefs {
    readonly id: FieldRef<"DailyInventoryEntry", 'String'>
    readonly storeId: FieldRef<"DailyInventoryEntry", 'String'>
    readonly productId: FieldRef<"DailyInventoryEntry", 'String'>
    readonly date: FieldRef<"DailyInventoryEntry", 'DateTime'>
    readonly beginQty: FieldRef<"DailyInventoryEntry", 'Int'>
    readonly incomingQty: FieldRef<"DailyInventoryEntry", 'Int'>
    readonly salesQty: FieldRef<"DailyInventoryEntry", 'Int'>
    readonly endQty: FieldRef<"DailyInventoryEntry", 'Int'>
    readonly lpSnapshot: FieldRef<"DailyInventoryEntry", 'Decimal'>
    readonly srpSnapshot: FieldRef<"DailyInventoryEntry", 'Decimal'>
    readonly createdAt: FieldRef<"DailyInventoryEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyInventoryEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyInventoryEntry findUnique
   */
  export type DailyInventoryEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyInventoryEntry to fetch.
     */
    where: DailyInventoryEntryWhereUniqueInput
  }

  /**
   * DailyInventoryEntry findUniqueOrThrow
   */
  export type DailyInventoryEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyInventoryEntry to fetch.
     */
    where: DailyInventoryEntryWhereUniqueInput
  }

  /**
   * DailyInventoryEntry findFirst
   */
  export type DailyInventoryEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyInventoryEntry to fetch.
     */
    where?: DailyInventoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyInventoryEntries to fetch.
     */
    orderBy?: DailyInventoryEntryOrderByWithRelationInput | DailyInventoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyInventoryEntries.
     */
    cursor?: DailyInventoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyInventoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyInventoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyInventoryEntries.
     */
    distinct?: DailyInventoryEntryScalarFieldEnum | DailyInventoryEntryScalarFieldEnum[]
  }

  /**
   * DailyInventoryEntry findFirstOrThrow
   */
  export type DailyInventoryEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyInventoryEntry to fetch.
     */
    where?: DailyInventoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyInventoryEntries to fetch.
     */
    orderBy?: DailyInventoryEntryOrderByWithRelationInput | DailyInventoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyInventoryEntries.
     */
    cursor?: DailyInventoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyInventoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyInventoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyInventoryEntries.
     */
    distinct?: DailyInventoryEntryScalarFieldEnum | DailyInventoryEntryScalarFieldEnum[]
  }

  /**
   * DailyInventoryEntry findMany
   */
  export type DailyInventoryEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DailyInventoryEntries to fetch.
     */
    where?: DailyInventoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyInventoryEntries to fetch.
     */
    orderBy?: DailyInventoryEntryOrderByWithRelationInput | DailyInventoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyInventoryEntries.
     */
    cursor?: DailyInventoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyInventoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyInventoryEntries.
     */
    skip?: number
    distinct?: DailyInventoryEntryScalarFieldEnum | DailyInventoryEntryScalarFieldEnum[]
  }

  /**
   * DailyInventoryEntry create
   */
  export type DailyInventoryEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyInventoryEntry.
     */
    data: XOR<DailyInventoryEntryCreateInput, DailyInventoryEntryUncheckedCreateInput>
  }

  /**
   * DailyInventoryEntry createMany
   */
  export type DailyInventoryEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyInventoryEntries.
     */
    data: DailyInventoryEntryCreateManyInput | DailyInventoryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyInventoryEntry createManyAndReturn
   */
  export type DailyInventoryEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DailyInventoryEntries.
     */
    data: DailyInventoryEntryCreateManyInput | DailyInventoryEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyInventoryEntry update
   */
  export type DailyInventoryEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyInventoryEntry.
     */
    data: XOR<DailyInventoryEntryUpdateInput, DailyInventoryEntryUncheckedUpdateInput>
    /**
     * Choose, which DailyInventoryEntry to update.
     */
    where: DailyInventoryEntryWhereUniqueInput
  }

  /**
   * DailyInventoryEntry updateMany
   */
  export type DailyInventoryEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyInventoryEntries.
     */
    data: XOR<DailyInventoryEntryUpdateManyMutationInput, DailyInventoryEntryUncheckedUpdateManyInput>
    /**
     * Filter which DailyInventoryEntries to update
     */
    where?: DailyInventoryEntryWhereInput
    /**
     * Limit how many DailyInventoryEntries to update.
     */
    limit?: number
  }

  /**
   * DailyInventoryEntry updateManyAndReturn
   */
  export type DailyInventoryEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * The data used to update DailyInventoryEntries.
     */
    data: XOR<DailyInventoryEntryUpdateManyMutationInput, DailyInventoryEntryUncheckedUpdateManyInput>
    /**
     * Filter which DailyInventoryEntries to update
     */
    where?: DailyInventoryEntryWhereInput
    /**
     * Limit how many DailyInventoryEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyInventoryEntry upsert
   */
  export type DailyInventoryEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyInventoryEntry to update in case it exists.
     */
    where: DailyInventoryEntryWhereUniqueInput
    /**
     * In case the DailyInventoryEntry found by the `where` argument doesn't exist, create a new DailyInventoryEntry with this data.
     */
    create: XOR<DailyInventoryEntryCreateInput, DailyInventoryEntryUncheckedCreateInput>
    /**
     * In case the DailyInventoryEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyInventoryEntryUpdateInput, DailyInventoryEntryUncheckedUpdateInput>
  }

  /**
   * DailyInventoryEntry delete
   */
  export type DailyInventoryEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
    /**
     * Filter which DailyInventoryEntry to delete.
     */
    where: DailyInventoryEntryWhereUniqueInput
  }

  /**
   * DailyInventoryEntry deleteMany
   */
  export type DailyInventoryEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyInventoryEntries to delete
     */
    where?: DailyInventoryEntryWhereInput
    /**
     * Limit how many DailyInventoryEntries to delete.
     */
    limit?: number
  }

  /**
   * DailyInventoryEntry without action
   */
  export type DailyInventoryEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyInventoryEntry
     */
    select?: DailyInventoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyInventoryEntry
     */
    omit?: DailyInventoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInventoryEntryInclude<ExtArgs> | null
  }


  /**
   * Model DailyRemittance
   */

  export type AggregateDailyRemittance = {
    _count: DailyRemittanceCountAggregateOutputType | null
    _avg: DailyRemittanceAvgAggregateOutputType | null
    _sum: DailyRemittanceSumAggregateOutputType | null
    _min: DailyRemittanceMinAggregateOutputType | null
    _max: DailyRemittanceMaxAggregateOutputType | null
  }

  export type DailyRemittanceAvgAggregateOutputType = {
    cash: Decimal | null
    gcash: Decimal | null
  }

  export type DailyRemittanceSumAggregateOutputType = {
    cash: Decimal | null
    gcash: Decimal | null
  }

  export type DailyRemittanceMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    date: Date | null
    cash: Decimal | null
    gcash: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyRemittanceMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    date: Date | null
    cash: Decimal | null
    gcash: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyRemittanceCountAggregateOutputType = {
    id: number
    storeId: number
    date: number
    cash: number
    gcash: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyRemittanceAvgAggregateInputType = {
    cash?: true
    gcash?: true
  }

  export type DailyRemittanceSumAggregateInputType = {
    cash?: true
    gcash?: true
  }

  export type DailyRemittanceMinAggregateInputType = {
    id?: true
    storeId?: true
    date?: true
    cash?: true
    gcash?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyRemittanceMaxAggregateInputType = {
    id?: true
    storeId?: true
    date?: true
    cash?: true
    gcash?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyRemittanceCountAggregateInputType = {
    id?: true
    storeId?: true
    date?: true
    cash?: true
    gcash?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyRemittanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRemittance to aggregate.
     */
    where?: DailyRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRemittances to fetch.
     */
    orderBy?: DailyRemittanceOrderByWithRelationInput | DailyRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRemittances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyRemittances
    **/
    _count?: true | DailyRemittanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyRemittanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyRemittanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyRemittanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyRemittanceMaxAggregateInputType
  }

  export type GetDailyRemittanceAggregateType<T extends DailyRemittanceAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyRemittance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyRemittance[P]>
      : GetScalarType<T[P], AggregateDailyRemittance[P]>
  }




  export type DailyRemittanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRemittanceWhereInput
    orderBy?: DailyRemittanceOrderByWithAggregationInput | DailyRemittanceOrderByWithAggregationInput[]
    by: DailyRemittanceScalarFieldEnum[] | DailyRemittanceScalarFieldEnum
    having?: DailyRemittanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyRemittanceCountAggregateInputType | true
    _avg?: DailyRemittanceAvgAggregateInputType
    _sum?: DailyRemittanceSumAggregateInputType
    _min?: DailyRemittanceMinAggregateInputType
    _max?: DailyRemittanceMaxAggregateInputType
  }

  export type DailyRemittanceGroupByOutputType = {
    id: string
    storeId: string
    date: Date
    cash: Decimal
    gcash: Decimal
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: DailyRemittanceCountAggregateOutputType | null
    _avg: DailyRemittanceAvgAggregateOutputType | null
    _sum: DailyRemittanceSumAggregateOutputType | null
    _min: DailyRemittanceMinAggregateOutputType | null
    _max: DailyRemittanceMaxAggregateOutputType | null
  }

  type GetDailyRemittanceGroupByPayload<T extends DailyRemittanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyRemittanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyRemittanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyRemittanceGroupByOutputType[P]>
            : GetScalarType<T[P], DailyRemittanceGroupByOutputType[P]>
        }
      >
    >


  export type DailyRemittanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    date?: boolean
    cash?: boolean
    gcash?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRemittance"]>

  export type DailyRemittanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    date?: boolean
    cash?: boolean
    gcash?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRemittance"]>

  export type DailyRemittanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    date?: boolean
    cash?: boolean
    gcash?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRemittance"]>

  export type DailyRemittanceSelectScalar = {
    id?: boolean
    storeId?: boolean
    date?: boolean
    cash?: boolean
    gcash?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyRemittanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "date" | "cash" | "gcash" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyRemittance"]>
  export type DailyRemittanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type DailyRemittanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type DailyRemittanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $DailyRemittancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyRemittance"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      date: Date
      cash: Prisma.Decimal
      gcash: Prisma.Decimal
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyRemittance"]>
    composites: {}
  }

  type DailyRemittanceGetPayload<S extends boolean | null | undefined | DailyRemittanceDefaultArgs> = $Result.GetResult<Prisma.$DailyRemittancePayload, S>

  type DailyRemittanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyRemittanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyRemittanceCountAggregateInputType | true
    }

  export interface DailyRemittanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyRemittance'], meta: { name: 'DailyRemittance' } }
    /**
     * Find zero or one DailyRemittance that matches the filter.
     * @param {DailyRemittanceFindUniqueArgs} args - Arguments to find a DailyRemittance
     * @example
     * // Get one DailyRemittance
     * const dailyRemittance = await prisma.dailyRemittance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyRemittanceFindUniqueArgs>(args: SelectSubset<T, DailyRemittanceFindUniqueArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyRemittance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyRemittanceFindUniqueOrThrowArgs} args - Arguments to find a DailyRemittance
     * @example
     * // Get one DailyRemittance
     * const dailyRemittance = await prisma.dailyRemittance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyRemittanceFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyRemittanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRemittance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRemittanceFindFirstArgs} args - Arguments to find a DailyRemittance
     * @example
     * // Get one DailyRemittance
     * const dailyRemittance = await prisma.dailyRemittance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyRemittanceFindFirstArgs>(args?: SelectSubset<T, DailyRemittanceFindFirstArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRemittance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRemittanceFindFirstOrThrowArgs} args - Arguments to find a DailyRemittance
     * @example
     * // Get one DailyRemittance
     * const dailyRemittance = await prisma.dailyRemittance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyRemittanceFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyRemittanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyRemittances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRemittanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyRemittances
     * const dailyRemittances = await prisma.dailyRemittance.findMany()
     * 
     * // Get first 10 DailyRemittances
     * const dailyRemittances = await prisma.dailyRemittance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyRemittanceWithIdOnly = await prisma.dailyRemittance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyRemittanceFindManyArgs>(args?: SelectSubset<T, DailyRemittanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyRemittance.
     * @param {DailyRemittanceCreateArgs} args - Arguments to create a DailyRemittance.
     * @example
     * // Create one DailyRemittance
     * const DailyRemittance = await prisma.dailyRemittance.create({
     *   data: {
     *     // ... data to create a DailyRemittance
     *   }
     * })
     * 
     */
    create<T extends DailyRemittanceCreateArgs>(args: SelectSubset<T, DailyRemittanceCreateArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyRemittances.
     * @param {DailyRemittanceCreateManyArgs} args - Arguments to create many DailyRemittances.
     * @example
     * // Create many DailyRemittances
     * const dailyRemittance = await prisma.dailyRemittance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyRemittanceCreateManyArgs>(args?: SelectSubset<T, DailyRemittanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyRemittances and returns the data saved in the database.
     * @param {DailyRemittanceCreateManyAndReturnArgs} args - Arguments to create many DailyRemittances.
     * @example
     * // Create many DailyRemittances
     * const dailyRemittance = await prisma.dailyRemittance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyRemittances and only return the `id`
     * const dailyRemittanceWithIdOnly = await prisma.dailyRemittance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyRemittanceCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyRemittanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyRemittance.
     * @param {DailyRemittanceDeleteArgs} args - Arguments to delete one DailyRemittance.
     * @example
     * // Delete one DailyRemittance
     * const DailyRemittance = await prisma.dailyRemittance.delete({
     *   where: {
     *     // ... filter to delete one DailyRemittance
     *   }
     * })
     * 
     */
    delete<T extends DailyRemittanceDeleteArgs>(args: SelectSubset<T, DailyRemittanceDeleteArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyRemittance.
     * @param {DailyRemittanceUpdateArgs} args - Arguments to update one DailyRemittance.
     * @example
     * // Update one DailyRemittance
     * const dailyRemittance = await prisma.dailyRemittance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyRemittanceUpdateArgs>(args: SelectSubset<T, DailyRemittanceUpdateArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyRemittances.
     * @param {DailyRemittanceDeleteManyArgs} args - Arguments to filter DailyRemittances to delete.
     * @example
     * // Delete a few DailyRemittances
     * const { count } = await prisma.dailyRemittance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyRemittanceDeleteManyArgs>(args?: SelectSubset<T, DailyRemittanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRemittances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRemittanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyRemittances
     * const dailyRemittance = await prisma.dailyRemittance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyRemittanceUpdateManyArgs>(args: SelectSubset<T, DailyRemittanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRemittances and returns the data updated in the database.
     * @param {DailyRemittanceUpdateManyAndReturnArgs} args - Arguments to update many DailyRemittances.
     * @example
     * // Update many DailyRemittances
     * const dailyRemittance = await prisma.dailyRemittance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyRemittances and only return the `id`
     * const dailyRemittanceWithIdOnly = await prisma.dailyRemittance.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyRemittanceUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyRemittanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyRemittance.
     * @param {DailyRemittanceUpsertArgs} args - Arguments to update or create a DailyRemittance.
     * @example
     * // Update or create a DailyRemittance
     * const dailyRemittance = await prisma.dailyRemittance.upsert({
     *   create: {
     *     // ... data to create a DailyRemittance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyRemittance we want to update
     *   }
     * })
     */
    upsert<T extends DailyRemittanceUpsertArgs>(args: SelectSubset<T, DailyRemittanceUpsertArgs<ExtArgs>>): Prisma__DailyRemittanceClient<$Result.GetResult<Prisma.$DailyRemittancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyRemittances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRemittanceCountArgs} args - Arguments to filter DailyRemittances to count.
     * @example
     * // Count the number of DailyRemittances
     * const count = await prisma.dailyRemittance.count({
     *   where: {
     *     // ... the filter for the DailyRemittances we want to count
     *   }
     * })
    **/
    count<T extends DailyRemittanceCountArgs>(
      args?: Subset<T, DailyRemittanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyRemittanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyRemittance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRemittanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyRemittanceAggregateArgs>(args: Subset<T, DailyRemittanceAggregateArgs>): Prisma.PrismaPromise<GetDailyRemittanceAggregateType<T>>

    /**
     * Group by DailyRemittance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRemittanceGroupByArgs} args - Group by arguments.
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
      T extends DailyRemittanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyRemittanceGroupByArgs['orderBy'] }
        : { orderBy?: DailyRemittanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyRemittanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyRemittanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyRemittance model
   */
  readonly fields: DailyRemittanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyRemittance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyRemittanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyRemittance model
   */
  interface DailyRemittanceFieldRefs {
    readonly id: FieldRef<"DailyRemittance", 'String'>
    readonly storeId: FieldRef<"DailyRemittance", 'String'>
    readonly date: FieldRef<"DailyRemittance", 'DateTime'>
    readonly cash: FieldRef<"DailyRemittance", 'Decimal'>
    readonly gcash: FieldRef<"DailyRemittance", 'Decimal'>
    readonly notes: FieldRef<"DailyRemittance", 'String'>
    readonly createdAt: FieldRef<"DailyRemittance", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyRemittance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyRemittance findUnique
   */
  export type DailyRemittanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which DailyRemittance to fetch.
     */
    where: DailyRemittanceWhereUniqueInput
  }

  /**
   * DailyRemittance findUniqueOrThrow
   */
  export type DailyRemittanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which DailyRemittance to fetch.
     */
    where: DailyRemittanceWhereUniqueInput
  }

  /**
   * DailyRemittance findFirst
   */
  export type DailyRemittanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which DailyRemittance to fetch.
     */
    where?: DailyRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRemittances to fetch.
     */
    orderBy?: DailyRemittanceOrderByWithRelationInput | DailyRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRemittances.
     */
    cursor?: DailyRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRemittances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRemittances.
     */
    distinct?: DailyRemittanceScalarFieldEnum | DailyRemittanceScalarFieldEnum[]
  }

  /**
   * DailyRemittance findFirstOrThrow
   */
  export type DailyRemittanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which DailyRemittance to fetch.
     */
    where?: DailyRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRemittances to fetch.
     */
    orderBy?: DailyRemittanceOrderByWithRelationInput | DailyRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRemittances.
     */
    cursor?: DailyRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRemittances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRemittances.
     */
    distinct?: DailyRemittanceScalarFieldEnum | DailyRemittanceScalarFieldEnum[]
  }

  /**
   * DailyRemittance findMany
   */
  export type DailyRemittanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * Filter, which DailyRemittances to fetch.
     */
    where?: DailyRemittanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRemittances to fetch.
     */
    orderBy?: DailyRemittanceOrderByWithRelationInput | DailyRemittanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyRemittances.
     */
    cursor?: DailyRemittanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRemittances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRemittances.
     */
    skip?: number
    distinct?: DailyRemittanceScalarFieldEnum | DailyRemittanceScalarFieldEnum[]
  }

  /**
   * DailyRemittance create
   */
  export type DailyRemittanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyRemittance.
     */
    data: XOR<DailyRemittanceCreateInput, DailyRemittanceUncheckedCreateInput>
  }

  /**
   * DailyRemittance createMany
   */
  export type DailyRemittanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyRemittances.
     */
    data: DailyRemittanceCreateManyInput | DailyRemittanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyRemittance createManyAndReturn
   */
  export type DailyRemittanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * The data used to create many DailyRemittances.
     */
    data: DailyRemittanceCreateManyInput | DailyRemittanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyRemittance update
   */
  export type DailyRemittanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyRemittance.
     */
    data: XOR<DailyRemittanceUpdateInput, DailyRemittanceUncheckedUpdateInput>
    /**
     * Choose, which DailyRemittance to update.
     */
    where: DailyRemittanceWhereUniqueInput
  }

  /**
   * DailyRemittance updateMany
   */
  export type DailyRemittanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyRemittances.
     */
    data: XOR<DailyRemittanceUpdateManyMutationInput, DailyRemittanceUncheckedUpdateManyInput>
    /**
     * Filter which DailyRemittances to update
     */
    where?: DailyRemittanceWhereInput
    /**
     * Limit how many DailyRemittances to update.
     */
    limit?: number
  }

  /**
   * DailyRemittance updateManyAndReturn
   */
  export type DailyRemittanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * The data used to update DailyRemittances.
     */
    data: XOR<DailyRemittanceUpdateManyMutationInput, DailyRemittanceUncheckedUpdateManyInput>
    /**
     * Filter which DailyRemittances to update
     */
    where?: DailyRemittanceWhereInput
    /**
     * Limit how many DailyRemittances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyRemittance upsert
   */
  export type DailyRemittanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyRemittance to update in case it exists.
     */
    where: DailyRemittanceWhereUniqueInput
    /**
     * In case the DailyRemittance found by the `where` argument doesn't exist, create a new DailyRemittance with this data.
     */
    create: XOR<DailyRemittanceCreateInput, DailyRemittanceUncheckedCreateInput>
    /**
     * In case the DailyRemittance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyRemittanceUpdateInput, DailyRemittanceUncheckedUpdateInput>
  }

  /**
   * DailyRemittance delete
   */
  export type DailyRemittanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
    /**
     * Filter which DailyRemittance to delete.
     */
    where: DailyRemittanceWhereUniqueInput
  }

  /**
   * DailyRemittance deleteMany
   */
  export type DailyRemittanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRemittances to delete
     */
    where?: DailyRemittanceWhereInput
    /**
     * Limit how many DailyRemittances to delete.
     */
    limit?: number
  }

  /**
   * DailyRemittance without action
   */
  export type DailyRemittanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRemittance
     */
    select?: DailyRemittanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRemittance
     */
    omit?: DailyRemittanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRemittanceInclude<ExtArgs> | null
  }


  /**
   * Model DailyExpense
   */

  export type AggregateDailyExpense = {
    _count: DailyExpenseCountAggregateOutputType | null
    _avg: DailyExpenseAvgAggregateOutputType | null
    _sum: DailyExpenseSumAggregateOutputType | null
    _min: DailyExpenseMinAggregateOutputType | null
    _max: DailyExpenseMaxAggregateOutputType | null
  }

  export type DailyExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type DailyExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type DailyExpenseMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    date: Date | null
    description: string | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyExpenseMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    date: Date | null
    description: string | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyExpenseCountAggregateOutputType = {
    id: number
    storeId: number
    date: number
    description: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type DailyExpenseSumAggregateInputType = {
    amount?: true
  }

  export type DailyExpenseMinAggregateInputType = {
    id?: true
    storeId?: true
    date?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyExpenseMaxAggregateInputType = {
    id?: true
    storeId?: true
    date?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyExpenseCountAggregateInputType = {
    id?: true
    storeId?: true
    date?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyExpense to aggregate.
     */
    where?: DailyExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyExpenses to fetch.
     */
    orderBy?: DailyExpenseOrderByWithRelationInput | DailyExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyExpenses
    **/
    _count?: true | DailyExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyExpenseMaxAggregateInputType
  }

  export type GetDailyExpenseAggregateType<T extends DailyExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyExpense[P]>
      : GetScalarType<T[P], AggregateDailyExpense[P]>
  }




  export type DailyExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyExpenseWhereInput
    orderBy?: DailyExpenseOrderByWithAggregationInput | DailyExpenseOrderByWithAggregationInput[]
    by: DailyExpenseScalarFieldEnum[] | DailyExpenseScalarFieldEnum
    having?: DailyExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyExpenseCountAggregateInputType | true
    _avg?: DailyExpenseAvgAggregateInputType
    _sum?: DailyExpenseSumAggregateInputType
    _min?: DailyExpenseMinAggregateInputType
    _max?: DailyExpenseMaxAggregateInputType
  }

  export type DailyExpenseGroupByOutputType = {
    id: string
    storeId: string
    date: Date
    description: string
    amount: Decimal
    createdAt: Date
    updatedAt: Date
    _count: DailyExpenseCountAggregateOutputType | null
    _avg: DailyExpenseAvgAggregateOutputType | null
    _sum: DailyExpenseSumAggregateOutputType | null
    _min: DailyExpenseMinAggregateOutputType | null
    _max: DailyExpenseMaxAggregateOutputType | null
  }

  type GetDailyExpenseGroupByPayload<T extends DailyExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], DailyExpenseGroupByOutputType[P]>
        }
      >
    >


  export type DailyExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyExpense"]>

  export type DailyExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyExpense"]>

  export type DailyExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyExpense"]>

  export type DailyExpenseSelectScalar = {
    id?: boolean
    storeId?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "date" | "description" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyExpense"]>
  export type DailyExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type DailyExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type DailyExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $DailyExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyExpense"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      date: Date
      description: string
      amount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyExpense"]>
    composites: {}
  }

  type DailyExpenseGetPayload<S extends boolean | null | undefined | DailyExpenseDefaultArgs> = $Result.GetResult<Prisma.$DailyExpensePayload, S>

  type DailyExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyExpenseCountAggregateInputType | true
    }

  export interface DailyExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyExpense'], meta: { name: 'DailyExpense' } }
    /**
     * Find zero or one DailyExpense that matches the filter.
     * @param {DailyExpenseFindUniqueArgs} args - Arguments to find a DailyExpense
     * @example
     * // Get one DailyExpense
     * const dailyExpense = await prisma.dailyExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyExpenseFindUniqueArgs>(args: SelectSubset<T, DailyExpenseFindUniqueArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyExpense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyExpenseFindUniqueOrThrowArgs} args - Arguments to find a DailyExpense
     * @example
     * // Get one DailyExpense
     * const dailyExpense = await prisma.dailyExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyExpenseFindFirstArgs} args - Arguments to find a DailyExpense
     * @example
     * // Get one DailyExpense
     * const dailyExpense = await prisma.dailyExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyExpenseFindFirstArgs>(args?: SelectSubset<T, DailyExpenseFindFirstArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyExpenseFindFirstOrThrowArgs} args - Arguments to find a DailyExpense
     * @example
     * // Get one DailyExpense
     * const dailyExpense = await prisma.dailyExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyExpenses
     * const dailyExpenses = await prisma.dailyExpense.findMany()
     * 
     * // Get first 10 DailyExpenses
     * const dailyExpenses = await prisma.dailyExpense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyExpenseWithIdOnly = await prisma.dailyExpense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyExpenseFindManyArgs>(args?: SelectSubset<T, DailyExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyExpense.
     * @param {DailyExpenseCreateArgs} args - Arguments to create a DailyExpense.
     * @example
     * // Create one DailyExpense
     * const DailyExpense = await prisma.dailyExpense.create({
     *   data: {
     *     // ... data to create a DailyExpense
     *   }
     * })
     * 
     */
    create<T extends DailyExpenseCreateArgs>(args: SelectSubset<T, DailyExpenseCreateArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyExpenses.
     * @param {DailyExpenseCreateManyArgs} args - Arguments to create many DailyExpenses.
     * @example
     * // Create many DailyExpenses
     * const dailyExpense = await prisma.dailyExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyExpenseCreateManyArgs>(args?: SelectSubset<T, DailyExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyExpenses and returns the data saved in the database.
     * @param {DailyExpenseCreateManyAndReturnArgs} args - Arguments to create many DailyExpenses.
     * @example
     * // Create many DailyExpenses
     * const dailyExpense = await prisma.dailyExpense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyExpenses and only return the `id`
     * const dailyExpenseWithIdOnly = await prisma.dailyExpense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyExpense.
     * @param {DailyExpenseDeleteArgs} args - Arguments to delete one DailyExpense.
     * @example
     * // Delete one DailyExpense
     * const DailyExpense = await prisma.dailyExpense.delete({
     *   where: {
     *     // ... filter to delete one DailyExpense
     *   }
     * })
     * 
     */
    delete<T extends DailyExpenseDeleteArgs>(args: SelectSubset<T, DailyExpenseDeleteArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyExpense.
     * @param {DailyExpenseUpdateArgs} args - Arguments to update one DailyExpense.
     * @example
     * // Update one DailyExpense
     * const dailyExpense = await prisma.dailyExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyExpenseUpdateArgs>(args: SelectSubset<T, DailyExpenseUpdateArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyExpenses.
     * @param {DailyExpenseDeleteManyArgs} args - Arguments to filter DailyExpenses to delete.
     * @example
     * // Delete a few DailyExpenses
     * const { count } = await prisma.dailyExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyExpenseDeleteManyArgs>(args?: SelectSubset<T, DailyExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyExpenses
     * const dailyExpense = await prisma.dailyExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyExpenseUpdateManyArgs>(args: SelectSubset<T, DailyExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyExpenses and returns the data updated in the database.
     * @param {DailyExpenseUpdateManyAndReturnArgs} args - Arguments to update many DailyExpenses.
     * @example
     * // Update many DailyExpenses
     * const dailyExpense = await prisma.dailyExpense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyExpenses and only return the `id`
     * const dailyExpenseWithIdOnly = await prisma.dailyExpense.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyExpense.
     * @param {DailyExpenseUpsertArgs} args - Arguments to update or create a DailyExpense.
     * @example
     * // Update or create a DailyExpense
     * const dailyExpense = await prisma.dailyExpense.upsert({
     *   create: {
     *     // ... data to create a DailyExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyExpense we want to update
     *   }
     * })
     */
    upsert<T extends DailyExpenseUpsertArgs>(args: SelectSubset<T, DailyExpenseUpsertArgs<ExtArgs>>): Prisma__DailyExpenseClient<$Result.GetResult<Prisma.$DailyExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyExpenseCountArgs} args - Arguments to filter DailyExpenses to count.
     * @example
     * // Count the number of DailyExpenses
     * const count = await prisma.dailyExpense.count({
     *   where: {
     *     // ... the filter for the DailyExpenses we want to count
     *   }
     * })
    **/
    count<T extends DailyExpenseCountArgs>(
      args?: Subset<T, DailyExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyExpenseAggregateArgs>(args: Subset<T, DailyExpenseAggregateArgs>): Prisma.PrismaPromise<GetDailyExpenseAggregateType<T>>

    /**
     * Group by DailyExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyExpenseGroupByArgs} args - Group by arguments.
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
      T extends DailyExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyExpenseGroupByArgs['orderBy'] }
        : { orderBy?: DailyExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyExpense model
   */
  readonly fields: DailyExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyExpense model
   */
  interface DailyExpenseFieldRefs {
    readonly id: FieldRef<"DailyExpense", 'String'>
    readonly storeId: FieldRef<"DailyExpense", 'String'>
    readonly date: FieldRef<"DailyExpense", 'DateTime'>
    readonly description: FieldRef<"DailyExpense", 'String'>
    readonly amount: FieldRef<"DailyExpense", 'Decimal'>
    readonly createdAt: FieldRef<"DailyExpense", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyExpense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyExpense findUnique
   */
  export type DailyExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * Filter, which DailyExpense to fetch.
     */
    where: DailyExpenseWhereUniqueInput
  }

  /**
   * DailyExpense findUniqueOrThrow
   */
  export type DailyExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * Filter, which DailyExpense to fetch.
     */
    where: DailyExpenseWhereUniqueInput
  }

  /**
   * DailyExpense findFirst
   */
  export type DailyExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * Filter, which DailyExpense to fetch.
     */
    where?: DailyExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyExpenses to fetch.
     */
    orderBy?: DailyExpenseOrderByWithRelationInput | DailyExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyExpenses.
     */
    cursor?: DailyExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyExpenses.
     */
    distinct?: DailyExpenseScalarFieldEnum | DailyExpenseScalarFieldEnum[]
  }

  /**
   * DailyExpense findFirstOrThrow
   */
  export type DailyExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * Filter, which DailyExpense to fetch.
     */
    where?: DailyExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyExpenses to fetch.
     */
    orderBy?: DailyExpenseOrderByWithRelationInput | DailyExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyExpenses.
     */
    cursor?: DailyExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyExpenses.
     */
    distinct?: DailyExpenseScalarFieldEnum | DailyExpenseScalarFieldEnum[]
  }

  /**
   * DailyExpense findMany
   */
  export type DailyExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * Filter, which DailyExpenses to fetch.
     */
    where?: DailyExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyExpenses to fetch.
     */
    orderBy?: DailyExpenseOrderByWithRelationInput | DailyExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyExpenses.
     */
    cursor?: DailyExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyExpenses.
     */
    skip?: number
    distinct?: DailyExpenseScalarFieldEnum | DailyExpenseScalarFieldEnum[]
  }

  /**
   * DailyExpense create
   */
  export type DailyExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyExpense.
     */
    data: XOR<DailyExpenseCreateInput, DailyExpenseUncheckedCreateInput>
  }

  /**
   * DailyExpense createMany
   */
  export type DailyExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyExpenses.
     */
    data: DailyExpenseCreateManyInput | DailyExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyExpense createManyAndReturn
   */
  export type DailyExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many DailyExpenses.
     */
    data: DailyExpenseCreateManyInput | DailyExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyExpense update
   */
  export type DailyExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyExpense.
     */
    data: XOR<DailyExpenseUpdateInput, DailyExpenseUncheckedUpdateInput>
    /**
     * Choose, which DailyExpense to update.
     */
    where: DailyExpenseWhereUniqueInput
  }

  /**
   * DailyExpense updateMany
   */
  export type DailyExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyExpenses.
     */
    data: XOR<DailyExpenseUpdateManyMutationInput, DailyExpenseUncheckedUpdateManyInput>
    /**
     * Filter which DailyExpenses to update
     */
    where?: DailyExpenseWhereInput
    /**
     * Limit how many DailyExpenses to update.
     */
    limit?: number
  }

  /**
   * DailyExpense updateManyAndReturn
   */
  export type DailyExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * The data used to update DailyExpenses.
     */
    data: XOR<DailyExpenseUpdateManyMutationInput, DailyExpenseUncheckedUpdateManyInput>
    /**
     * Filter which DailyExpenses to update
     */
    where?: DailyExpenseWhereInput
    /**
     * Limit how many DailyExpenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyExpense upsert
   */
  export type DailyExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyExpense to update in case it exists.
     */
    where: DailyExpenseWhereUniqueInput
    /**
     * In case the DailyExpense found by the `where` argument doesn't exist, create a new DailyExpense with this data.
     */
    create: XOR<DailyExpenseCreateInput, DailyExpenseUncheckedCreateInput>
    /**
     * In case the DailyExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyExpenseUpdateInput, DailyExpenseUncheckedUpdateInput>
  }

  /**
   * DailyExpense delete
   */
  export type DailyExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
    /**
     * Filter which DailyExpense to delete.
     */
    where: DailyExpenseWhereUniqueInput
  }

  /**
   * DailyExpense deleteMany
   */
  export type DailyExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyExpenses to delete
     */
    where?: DailyExpenseWhereInput
    /**
     * Limit how many DailyExpenses to delete.
     */
    limit?: number
  }

  /**
   * DailyExpense without action
   */
  export type DailyExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyExpense
     */
    select?: DailyExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyExpense
     */
    omit?: DailyExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyExpenseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductPriceScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    productId: 'productId',
    lp: 'lp',
    srp: 'srp',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ProductPriceScalarFieldEnum = (typeof ProductPriceScalarFieldEnum)[keyof typeof ProductPriceScalarFieldEnum]


  export const DailyInventoryEntryScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    productId: 'productId',
    date: 'date',
    beginQty: 'beginQty',
    incomingQty: 'incomingQty',
    salesQty: 'salesQty',
    endQty: 'endQty',
    lpSnapshot: 'lpSnapshot',
    srpSnapshot: 'srpSnapshot',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyInventoryEntryScalarFieldEnum = (typeof DailyInventoryEntryScalarFieldEnum)[keyof typeof DailyInventoryEntryScalarFieldEnum]


  export const DailyRemittanceScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    date: 'date',
    cash: 'cash',
    gcash: 'gcash',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyRemittanceScalarFieldEnum = (typeof DailyRemittanceScalarFieldEnum)[keyof typeof DailyRemittanceScalarFieldEnum]


  export const DailyExpenseScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    date: 'date',
    description: 'description',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyExpenseScalarFieldEnum = (typeof DailyExpenseScalarFieldEnum)[keyof typeof DailyExpenseScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    code?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    isActive?: BoolFilter<"Store"> | boolean
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    prices?: ProductPriceListRelationFilter
    dailyEntries?: DailyInventoryEntryListRelationFilter
    dailyRemittances?: DailyRemittanceListRelationFilter
    dailyExpenses?: DailyExpenseListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prices?: ProductPriceOrderByRelationAggregateInput
    dailyEntries?: DailyInventoryEntryOrderByRelationAggregateInput
    dailyRemittances?: DailyRemittanceOrderByRelationAggregateInput
    dailyExpenses?: DailyExpenseOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    isActive?: BoolFilter<"Store"> | boolean
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    prices?: ProductPriceListRelationFilter
    dailyEntries?: DailyInventoryEntryListRelationFilter
    dailyRemittances?: DailyRemittanceListRelationFilter
    dailyExpenses?: DailyExpenseListRelationFilter
  }, "id" | "code">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    code?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    isActive?: BoolWithAggregatesFilter<"Store"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    sku?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    prices?: ProductPriceListRelationFilter
    dailyEntries?: DailyInventoryEntryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrderInput | SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prices?: ProductPriceOrderByRelationAggregateInput
    dailyEntries?: DailyInventoryEntryOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    prices?: ProductPriceListRelationFilter
    dailyEntries?: DailyInventoryEntryListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrderInput | SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductPriceWhereInput = {
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    id?: StringFilter<"ProductPrice"> | string
    storeId?: StringFilter<"ProductPrice"> | string
    productId?: StringFilter<"ProductPrice"> | string
    lp?: DecimalFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    srp?: DecimalFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"ProductPrice"> | Date | string
    createdAt?: DateTimeFilter<"ProductPrice"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductPriceOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    lp?: SortOrder
    srp?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storeId_productId?: ProductPriceStoreIdProductIdCompoundUniqueInput
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    storeId?: StringFilter<"ProductPrice"> | string
    productId?: StringFilter<"ProductPrice"> | string
    lp?: DecimalFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    srp?: DecimalFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"ProductPrice"> | Date | string
    createdAt?: DateTimeFilter<"ProductPrice"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "storeId_productId">

  export type ProductPriceOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    lp?: SortOrder
    srp?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ProductPriceCountOrderByAggregateInput
    _avg?: ProductPriceAvgOrderByAggregateInput
    _max?: ProductPriceMaxOrderByAggregateInput
    _min?: ProductPriceMinOrderByAggregateInput
    _sum?: ProductPriceSumOrderByAggregateInput
  }

  export type ProductPriceScalarWhereWithAggregatesInput = {
    AND?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    OR?: ProductPriceScalarWhereWithAggregatesInput[]
    NOT?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPrice"> | string
    storeId?: StringWithAggregatesFilter<"ProductPrice"> | string
    productId?: StringWithAggregatesFilter<"ProductPrice"> | string
    lp?: DecimalWithAggregatesFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    srp?: DecimalWithAggregatesFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductPrice"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductPrice"> | Date | string
  }

  export type DailyInventoryEntryWhereInput = {
    AND?: DailyInventoryEntryWhereInput | DailyInventoryEntryWhereInput[]
    OR?: DailyInventoryEntryWhereInput[]
    NOT?: DailyInventoryEntryWhereInput | DailyInventoryEntryWhereInput[]
    id?: StringFilter<"DailyInventoryEntry"> | string
    storeId?: StringFilter<"DailyInventoryEntry"> | string
    productId?: StringFilter<"DailyInventoryEntry"> | string
    date?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    beginQty?: IntFilter<"DailyInventoryEntry"> | number
    incomingQty?: IntFilter<"DailyInventoryEntry"> | number
    salesQty?: IntFilter<"DailyInventoryEntry"> | number
    endQty?: IntFilter<"DailyInventoryEntry"> | number
    lpSnapshot?: DecimalFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DailyInventoryEntryOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    beginQty?: SortOrder
    incomingQty?: SortOrder
    salesQty?: SortOrder
    endQty?: SortOrder
    lpSnapshot?: SortOrder
    srpSnapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type DailyInventoryEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storeId_date_productId?: DailyInventoryEntryStoreIdDateProductIdCompoundUniqueInput
    AND?: DailyInventoryEntryWhereInput | DailyInventoryEntryWhereInput[]
    OR?: DailyInventoryEntryWhereInput[]
    NOT?: DailyInventoryEntryWhereInput | DailyInventoryEntryWhereInput[]
    storeId?: StringFilter<"DailyInventoryEntry"> | string
    productId?: StringFilter<"DailyInventoryEntry"> | string
    date?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    beginQty?: IntFilter<"DailyInventoryEntry"> | number
    incomingQty?: IntFilter<"DailyInventoryEntry"> | number
    salesQty?: IntFilter<"DailyInventoryEntry"> | number
    endQty?: IntFilter<"DailyInventoryEntry"> | number
    lpSnapshot?: DecimalFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "storeId_date_productId">

  export type DailyInventoryEntryOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    beginQty?: SortOrder
    incomingQty?: SortOrder
    salesQty?: SortOrder
    endQty?: SortOrder
    lpSnapshot?: SortOrder
    srpSnapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyInventoryEntryCountOrderByAggregateInput
    _avg?: DailyInventoryEntryAvgOrderByAggregateInput
    _max?: DailyInventoryEntryMaxOrderByAggregateInput
    _min?: DailyInventoryEntryMinOrderByAggregateInput
    _sum?: DailyInventoryEntrySumOrderByAggregateInput
  }

  export type DailyInventoryEntryScalarWhereWithAggregatesInput = {
    AND?: DailyInventoryEntryScalarWhereWithAggregatesInput | DailyInventoryEntryScalarWhereWithAggregatesInput[]
    OR?: DailyInventoryEntryScalarWhereWithAggregatesInput[]
    NOT?: DailyInventoryEntryScalarWhereWithAggregatesInput | DailyInventoryEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyInventoryEntry"> | string
    storeId?: StringWithAggregatesFilter<"DailyInventoryEntry"> | string
    productId?: StringWithAggregatesFilter<"DailyInventoryEntry"> | string
    date?: DateTimeWithAggregatesFilter<"DailyInventoryEntry"> | Date | string
    beginQty?: IntWithAggregatesFilter<"DailyInventoryEntry"> | number
    incomingQty?: IntWithAggregatesFilter<"DailyInventoryEntry"> | number
    salesQty?: IntWithAggregatesFilter<"DailyInventoryEntry"> | number
    endQty?: IntWithAggregatesFilter<"DailyInventoryEntry"> | number
    lpSnapshot?: DecimalWithAggregatesFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalWithAggregatesFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyInventoryEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyInventoryEntry"> | Date | string
  }

  export type DailyRemittanceWhereInput = {
    AND?: DailyRemittanceWhereInput | DailyRemittanceWhereInput[]
    OR?: DailyRemittanceWhereInput[]
    NOT?: DailyRemittanceWhereInput | DailyRemittanceWhereInput[]
    id?: StringFilter<"DailyRemittance"> | string
    storeId?: StringFilter<"DailyRemittance"> | string
    date?: DateTimeFilter<"DailyRemittance"> | Date | string
    cash?: DecimalFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"DailyRemittance"> | string | null
    createdAt?: DateTimeFilter<"DailyRemittance"> | Date | string
    updatedAt?: DateTimeFilter<"DailyRemittance"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type DailyRemittanceOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    cash?: SortOrder
    gcash?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type DailyRemittanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storeId_date?: DailyRemittanceStoreIdDateCompoundUniqueInput
    AND?: DailyRemittanceWhereInput | DailyRemittanceWhereInput[]
    OR?: DailyRemittanceWhereInput[]
    NOT?: DailyRemittanceWhereInput | DailyRemittanceWhereInput[]
    storeId?: StringFilter<"DailyRemittance"> | string
    date?: DateTimeFilter<"DailyRemittance"> | Date | string
    cash?: DecimalFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"DailyRemittance"> | string | null
    createdAt?: DateTimeFilter<"DailyRemittance"> | Date | string
    updatedAt?: DateTimeFilter<"DailyRemittance"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id" | "storeId_date">

  export type DailyRemittanceOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    cash?: SortOrder
    gcash?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyRemittanceCountOrderByAggregateInput
    _avg?: DailyRemittanceAvgOrderByAggregateInput
    _max?: DailyRemittanceMaxOrderByAggregateInput
    _min?: DailyRemittanceMinOrderByAggregateInput
    _sum?: DailyRemittanceSumOrderByAggregateInput
  }

  export type DailyRemittanceScalarWhereWithAggregatesInput = {
    AND?: DailyRemittanceScalarWhereWithAggregatesInput | DailyRemittanceScalarWhereWithAggregatesInput[]
    OR?: DailyRemittanceScalarWhereWithAggregatesInput[]
    NOT?: DailyRemittanceScalarWhereWithAggregatesInput | DailyRemittanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyRemittance"> | string
    storeId?: StringWithAggregatesFilter<"DailyRemittance"> | string
    date?: DateTimeWithAggregatesFilter<"DailyRemittance"> | Date | string
    cash?: DecimalWithAggregatesFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    gcash?: DecimalWithAggregatesFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"DailyRemittance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyRemittance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyRemittance"> | Date | string
  }

  export type DailyExpenseWhereInput = {
    AND?: DailyExpenseWhereInput | DailyExpenseWhereInput[]
    OR?: DailyExpenseWhereInput[]
    NOT?: DailyExpenseWhereInput | DailyExpenseWhereInput[]
    id?: StringFilter<"DailyExpense"> | string
    storeId?: StringFilter<"DailyExpense"> | string
    date?: DateTimeFilter<"DailyExpense"> | Date | string
    description?: StringFilter<"DailyExpense"> | string
    amount?: DecimalFilter<"DailyExpense"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyExpense"> | Date | string
    updatedAt?: DateTimeFilter<"DailyExpense"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type DailyExpenseOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type DailyExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyExpenseWhereInput | DailyExpenseWhereInput[]
    OR?: DailyExpenseWhereInput[]
    NOT?: DailyExpenseWhereInput | DailyExpenseWhereInput[]
    storeId?: StringFilter<"DailyExpense"> | string
    date?: DateTimeFilter<"DailyExpense"> | Date | string
    description?: StringFilter<"DailyExpense"> | string
    amount?: DecimalFilter<"DailyExpense"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyExpense"> | Date | string
    updatedAt?: DateTimeFilter<"DailyExpense"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type DailyExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyExpenseCountOrderByAggregateInput
    _avg?: DailyExpenseAvgOrderByAggregateInput
    _max?: DailyExpenseMaxOrderByAggregateInput
    _min?: DailyExpenseMinOrderByAggregateInput
    _sum?: DailyExpenseSumOrderByAggregateInput
  }

  export type DailyExpenseScalarWhereWithAggregatesInput = {
    AND?: DailyExpenseScalarWhereWithAggregatesInput | DailyExpenseScalarWhereWithAggregatesInput[]
    OR?: DailyExpenseScalarWhereWithAggregatesInput[]
    NOT?: DailyExpenseScalarWhereWithAggregatesInput | DailyExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyExpense"> | string
    storeId?: StringWithAggregatesFilter<"DailyExpense"> | string
    date?: DateTimeWithAggregatesFilter<"DailyExpense"> | Date | string
    description?: StringWithAggregatesFilter<"DailyExpense"> | string
    amount?: DecimalWithAggregatesFilter<"DailyExpense"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyExpense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyExpense"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceCreateNestedManyWithoutStoreInput
    dailyEntries?: DailyInventoryEntryCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceUncheckedCreateNestedManyWithoutStoreInput
    dailyEntries?: DailyInventoryEntryUncheckedCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceUncheckedCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUpdateManyWithoutStoreNestedInput
    dailyEntries?: DailyInventoryEntryUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUncheckedUpdateManyWithoutStoreNestedInput
    dailyEntries?: DailyInventoryEntryUncheckedUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUncheckedUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    sku?: string | null
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceCreateNestedManyWithoutProductInput
    dailyEntries?: DailyInventoryEntryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    sku?: string | null
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceUncheckedCreateNestedManyWithoutProductInput
    dailyEntries?: DailyInventoryEntryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUpdateManyWithoutProductNestedInput
    dailyEntries?: DailyInventoryEntryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUncheckedUpdateManyWithoutProductNestedInput
    dailyEntries?: DailyInventoryEntryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    sku?: string | null
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceCreateInput = {
    id?: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutPricesInput
    product: ProductCreateNestedOneWithoutPricesInput
  }

  export type ProductPriceUncheckedCreateInput = {
    id?: string
    storeId: string
    productId: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProductPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutPricesNestedInput
    product?: ProductUpdateOneRequiredWithoutPricesNestedInput
  }

  export type ProductPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceCreateManyInput = {
    id?: string
    storeId: string
    productId: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProductPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyInventoryEntryCreateInput = {
    id?: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutDailyEntriesInput
    product: ProductCreateNestedOneWithoutDailyEntriesInput
  }

  export type DailyInventoryEntryUncheckedCreateInput = {
    id?: string
    storeId: string
    productId: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyInventoryEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutDailyEntriesNestedInput
    product?: ProductUpdateOneRequiredWithoutDailyEntriesNestedInput
  }

  export type DailyInventoryEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyInventoryEntryCreateManyInput = {
    id?: string
    storeId: string
    productId: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyInventoryEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyInventoryEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRemittanceCreateInput = {
    id?: string
    date: Date | string
    cash?: Decimal | DecimalJsLike | number | string
    gcash?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutDailyRemittancesInput
  }

  export type DailyRemittanceUncheckedCreateInput = {
    id?: string
    storeId: string
    date: Date | string
    cash?: Decimal | DecimalJsLike | number | string
    gcash?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyRemittanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutDailyRemittancesNestedInput
  }

  export type DailyRemittanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRemittanceCreateManyInput = {
    id?: string
    storeId: string
    date: Date | string
    cash?: Decimal | DecimalJsLike | number | string
    gcash?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyRemittanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRemittanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyExpenseCreateInput = {
    id?: string
    date: Date | string
    description: string
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutDailyExpensesInput
  }

  export type DailyExpenseUncheckedCreateInput = {
    id?: string
    storeId: string
    date: Date | string
    description: string
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutDailyExpensesNestedInput
  }

  export type DailyExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyExpenseCreateManyInput = {
    id?: string
    storeId: string
    date: Date | string
    description: string
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductPriceListRelationFilter = {
    every?: ProductPriceWhereInput
    some?: ProductPriceWhereInput
    none?: ProductPriceWhereInput
  }

  export type DailyInventoryEntryListRelationFilter = {
    every?: DailyInventoryEntryWhereInput
    some?: DailyInventoryEntryWhereInput
    none?: DailyInventoryEntryWhereInput
  }

  export type DailyRemittanceListRelationFilter = {
    every?: DailyRemittanceWhereInput
    some?: DailyRemittanceWhereInput
    none?: DailyRemittanceWhereInput
  }

  export type DailyExpenseListRelationFilter = {
    every?: DailyExpenseWhereInput
    some?: DailyExpenseWhereInput
    none?: DailyExpenseWhereInput
  }

  export type ProductPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyInventoryEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyRemittanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductPriceStoreIdProductIdCompoundUniqueInput = {
    storeId: string
    productId: string
  }

  export type ProductPriceCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    lp?: SortOrder
    srp?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPriceAvgOrderByAggregateInput = {
    lp?: SortOrder
    srp?: SortOrder
  }

  export type ProductPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    lp?: SortOrder
    srp?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPriceMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    lp?: SortOrder
    srp?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPriceSumOrderByAggregateInput = {
    lp?: SortOrder
    srp?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DailyInventoryEntryStoreIdDateProductIdCompoundUniqueInput = {
    storeId: string
    date: Date | string
    productId: string
  }

  export type DailyInventoryEntryCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    beginQty?: SortOrder
    incomingQty?: SortOrder
    salesQty?: SortOrder
    endQty?: SortOrder
    lpSnapshot?: SortOrder
    srpSnapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyInventoryEntryAvgOrderByAggregateInput = {
    beginQty?: SortOrder
    incomingQty?: SortOrder
    salesQty?: SortOrder
    endQty?: SortOrder
    lpSnapshot?: SortOrder
    srpSnapshot?: SortOrder
  }

  export type DailyInventoryEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    beginQty?: SortOrder
    incomingQty?: SortOrder
    salesQty?: SortOrder
    endQty?: SortOrder
    lpSnapshot?: SortOrder
    srpSnapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyInventoryEntryMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    beginQty?: SortOrder
    incomingQty?: SortOrder
    salesQty?: SortOrder
    endQty?: SortOrder
    lpSnapshot?: SortOrder
    srpSnapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyInventoryEntrySumOrderByAggregateInput = {
    beginQty?: SortOrder
    incomingQty?: SortOrder
    salesQty?: SortOrder
    endQty?: SortOrder
    lpSnapshot?: SortOrder
    srpSnapshot?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DailyRemittanceStoreIdDateCompoundUniqueInput = {
    storeId: string
    date: Date | string
  }

  export type DailyRemittanceCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    cash?: SortOrder
    gcash?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyRemittanceAvgOrderByAggregateInput = {
    cash?: SortOrder
    gcash?: SortOrder
  }

  export type DailyRemittanceMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    cash?: SortOrder
    gcash?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyRemittanceMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    cash?: SortOrder
    gcash?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyRemittanceSumOrderByAggregateInput = {
    cash?: SortOrder
    gcash?: SortOrder
  }

  export type DailyExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DailyExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductPriceCreateNestedManyWithoutStoreInput = {
    create?: XOR<ProductPriceCreateWithoutStoreInput, ProductPriceUncheckedCreateWithoutStoreInput> | ProductPriceCreateWithoutStoreInput[] | ProductPriceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutStoreInput | ProductPriceCreateOrConnectWithoutStoreInput[]
    createMany?: ProductPriceCreateManyStoreInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type DailyInventoryEntryCreateNestedManyWithoutStoreInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutStoreInput, DailyInventoryEntryUncheckedCreateWithoutStoreInput> | DailyInventoryEntryCreateWithoutStoreInput[] | DailyInventoryEntryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutStoreInput | DailyInventoryEntryCreateOrConnectWithoutStoreInput[]
    createMany?: DailyInventoryEntryCreateManyStoreInputEnvelope
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
  }

  export type DailyRemittanceCreateNestedManyWithoutStoreInput = {
    create?: XOR<DailyRemittanceCreateWithoutStoreInput, DailyRemittanceUncheckedCreateWithoutStoreInput> | DailyRemittanceCreateWithoutStoreInput[] | DailyRemittanceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyRemittanceCreateOrConnectWithoutStoreInput | DailyRemittanceCreateOrConnectWithoutStoreInput[]
    createMany?: DailyRemittanceCreateManyStoreInputEnvelope
    connect?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
  }

  export type DailyExpenseCreateNestedManyWithoutStoreInput = {
    create?: XOR<DailyExpenseCreateWithoutStoreInput, DailyExpenseUncheckedCreateWithoutStoreInput> | DailyExpenseCreateWithoutStoreInput[] | DailyExpenseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyExpenseCreateOrConnectWithoutStoreInput | DailyExpenseCreateOrConnectWithoutStoreInput[]
    createMany?: DailyExpenseCreateManyStoreInputEnvelope
    connect?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
  }

  export type ProductPriceUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ProductPriceCreateWithoutStoreInput, ProductPriceUncheckedCreateWithoutStoreInput> | ProductPriceCreateWithoutStoreInput[] | ProductPriceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutStoreInput | ProductPriceCreateOrConnectWithoutStoreInput[]
    createMany?: ProductPriceCreateManyStoreInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type DailyInventoryEntryUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutStoreInput, DailyInventoryEntryUncheckedCreateWithoutStoreInput> | DailyInventoryEntryCreateWithoutStoreInput[] | DailyInventoryEntryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutStoreInput | DailyInventoryEntryCreateOrConnectWithoutStoreInput[]
    createMany?: DailyInventoryEntryCreateManyStoreInputEnvelope
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
  }

  export type DailyRemittanceUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<DailyRemittanceCreateWithoutStoreInput, DailyRemittanceUncheckedCreateWithoutStoreInput> | DailyRemittanceCreateWithoutStoreInput[] | DailyRemittanceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyRemittanceCreateOrConnectWithoutStoreInput | DailyRemittanceCreateOrConnectWithoutStoreInput[]
    createMany?: DailyRemittanceCreateManyStoreInputEnvelope
    connect?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
  }

  export type DailyExpenseUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<DailyExpenseCreateWithoutStoreInput, DailyExpenseUncheckedCreateWithoutStoreInput> | DailyExpenseCreateWithoutStoreInput[] | DailyExpenseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyExpenseCreateOrConnectWithoutStoreInput | DailyExpenseCreateOrConnectWithoutStoreInput[]
    createMany?: DailyExpenseCreateManyStoreInputEnvelope
    connect?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductPriceUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ProductPriceCreateWithoutStoreInput, ProductPriceUncheckedCreateWithoutStoreInput> | ProductPriceCreateWithoutStoreInput[] | ProductPriceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutStoreInput | ProductPriceCreateOrConnectWithoutStoreInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutStoreInput | ProductPriceUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ProductPriceCreateManyStoreInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutStoreInput | ProductPriceUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutStoreInput | ProductPriceUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type DailyInventoryEntryUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutStoreInput, DailyInventoryEntryUncheckedCreateWithoutStoreInput> | DailyInventoryEntryCreateWithoutStoreInput[] | DailyInventoryEntryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutStoreInput | DailyInventoryEntryCreateOrConnectWithoutStoreInput[]
    upsert?: DailyInventoryEntryUpsertWithWhereUniqueWithoutStoreInput | DailyInventoryEntryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DailyInventoryEntryCreateManyStoreInputEnvelope
    set?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    disconnect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    delete?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    update?: DailyInventoryEntryUpdateWithWhereUniqueWithoutStoreInput | DailyInventoryEntryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DailyInventoryEntryUpdateManyWithWhereWithoutStoreInput | DailyInventoryEntryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DailyInventoryEntryScalarWhereInput | DailyInventoryEntryScalarWhereInput[]
  }

  export type DailyRemittanceUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DailyRemittanceCreateWithoutStoreInput, DailyRemittanceUncheckedCreateWithoutStoreInput> | DailyRemittanceCreateWithoutStoreInput[] | DailyRemittanceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyRemittanceCreateOrConnectWithoutStoreInput | DailyRemittanceCreateOrConnectWithoutStoreInput[]
    upsert?: DailyRemittanceUpsertWithWhereUniqueWithoutStoreInput | DailyRemittanceUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DailyRemittanceCreateManyStoreInputEnvelope
    set?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    disconnect?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    delete?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    connect?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    update?: DailyRemittanceUpdateWithWhereUniqueWithoutStoreInput | DailyRemittanceUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DailyRemittanceUpdateManyWithWhereWithoutStoreInput | DailyRemittanceUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DailyRemittanceScalarWhereInput | DailyRemittanceScalarWhereInput[]
  }

  export type DailyExpenseUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DailyExpenseCreateWithoutStoreInput, DailyExpenseUncheckedCreateWithoutStoreInput> | DailyExpenseCreateWithoutStoreInput[] | DailyExpenseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyExpenseCreateOrConnectWithoutStoreInput | DailyExpenseCreateOrConnectWithoutStoreInput[]
    upsert?: DailyExpenseUpsertWithWhereUniqueWithoutStoreInput | DailyExpenseUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DailyExpenseCreateManyStoreInputEnvelope
    set?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    disconnect?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    delete?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    connect?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    update?: DailyExpenseUpdateWithWhereUniqueWithoutStoreInput | DailyExpenseUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DailyExpenseUpdateManyWithWhereWithoutStoreInput | DailyExpenseUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DailyExpenseScalarWhereInput | DailyExpenseScalarWhereInput[]
  }

  export type ProductPriceUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ProductPriceCreateWithoutStoreInput, ProductPriceUncheckedCreateWithoutStoreInput> | ProductPriceCreateWithoutStoreInput[] | ProductPriceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutStoreInput | ProductPriceCreateOrConnectWithoutStoreInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutStoreInput | ProductPriceUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ProductPriceCreateManyStoreInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutStoreInput | ProductPriceUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutStoreInput | ProductPriceUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type DailyInventoryEntryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutStoreInput, DailyInventoryEntryUncheckedCreateWithoutStoreInput> | DailyInventoryEntryCreateWithoutStoreInput[] | DailyInventoryEntryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutStoreInput | DailyInventoryEntryCreateOrConnectWithoutStoreInput[]
    upsert?: DailyInventoryEntryUpsertWithWhereUniqueWithoutStoreInput | DailyInventoryEntryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DailyInventoryEntryCreateManyStoreInputEnvelope
    set?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    disconnect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    delete?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    update?: DailyInventoryEntryUpdateWithWhereUniqueWithoutStoreInput | DailyInventoryEntryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DailyInventoryEntryUpdateManyWithWhereWithoutStoreInput | DailyInventoryEntryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DailyInventoryEntryScalarWhereInput | DailyInventoryEntryScalarWhereInput[]
  }

  export type DailyRemittanceUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DailyRemittanceCreateWithoutStoreInput, DailyRemittanceUncheckedCreateWithoutStoreInput> | DailyRemittanceCreateWithoutStoreInput[] | DailyRemittanceUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyRemittanceCreateOrConnectWithoutStoreInput | DailyRemittanceCreateOrConnectWithoutStoreInput[]
    upsert?: DailyRemittanceUpsertWithWhereUniqueWithoutStoreInput | DailyRemittanceUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DailyRemittanceCreateManyStoreInputEnvelope
    set?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    disconnect?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    delete?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    connect?: DailyRemittanceWhereUniqueInput | DailyRemittanceWhereUniqueInput[]
    update?: DailyRemittanceUpdateWithWhereUniqueWithoutStoreInput | DailyRemittanceUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DailyRemittanceUpdateManyWithWhereWithoutStoreInput | DailyRemittanceUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DailyRemittanceScalarWhereInput | DailyRemittanceScalarWhereInput[]
  }

  export type DailyExpenseUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DailyExpenseCreateWithoutStoreInput, DailyExpenseUncheckedCreateWithoutStoreInput> | DailyExpenseCreateWithoutStoreInput[] | DailyExpenseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DailyExpenseCreateOrConnectWithoutStoreInput | DailyExpenseCreateOrConnectWithoutStoreInput[]
    upsert?: DailyExpenseUpsertWithWhereUniqueWithoutStoreInput | DailyExpenseUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DailyExpenseCreateManyStoreInputEnvelope
    set?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    disconnect?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    delete?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    connect?: DailyExpenseWhereUniqueInput | DailyExpenseWhereUniqueInput[]
    update?: DailyExpenseUpdateWithWhereUniqueWithoutStoreInput | DailyExpenseUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DailyExpenseUpdateManyWithWhereWithoutStoreInput | DailyExpenseUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DailyExpenseScalarWhereInput | DailyExpenseScalarWhereInput[]
  }

  export type ProductPriceCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type DailyInventoryEntryCreateNestedManyWithoutProductInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutProductInput, DailyInventoryEntryUncheckedCreateWithoutProductInput> | DailyInventoryEntryCreateWithoutProductInput[] | DailyInventoryEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutProductInput | DailyInventoryEntryCreateOrConnectWithoutProductInput[]
    createMany?: DailyInventoryEntryCreateManyProductInputEnvelope
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
  }

  export type ProductPriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type DailyInventoryEntryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutProductInput, DailyInventoryEntryUncheckedCreateWithoutProductInput> | DailyInventoryEntryCreateWithoutProductInput[] | DailyInventoryEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutProductInput | DailyInventoryEntryCreateOrConnectWithoutProductInput[]
    createMany?: DailyInventoryEntryCreateManyProductInputEnvelope
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
  }

  export type ProductPriceUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutProductInput | ProductPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutProductInput | ProductPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutProductInput | ProductPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type DailyInventoryEntryUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutProductInput, DailyInventoryEntryUncheckedCreateWithoutProductInput> | DailyInventoryEntryCreateWithoutProductInput[] | DailyInventoryEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutProductInput | DailyInventoryEntryCreateOrConnectWithoutProductInput[]
    upsert?: DailyInventoryEntryUpsertWithWhereUniqueWithoutProductInput | DailyInventoryEntryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailyInventoryEntryCreateManyProductInputEnvelope
    set?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    disconnect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    delete?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    update?: DailyInventoryEntryUpdateWithWhereUniqueWithoutProductInput | DailyInventoryEntryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailyInventoryEntryUpdateManyWithWhereWithoutProductInput | DailyInventoryEntryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailyInventoryEntryScalarWhereInput | DailyInventoryEntryScalarWhereInput[]
  }

  export type ProductPriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutProductInput | ProductPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutProductInput | ProductPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutProductInput | ProductPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type DailyInventoryEntryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailyInventoryEntryCreateWithoutProductInput, DailyInventoryEntryUncheckedCreateWithoutProductInput> | DailyInventoryEntryCreateWithoutProductInput[] | DailyInventoryEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyInventoryEntryCreateOrConnectWithoutProductInput | DailyInventoryEntryCreateOrConnectWithoutProductInput[]
    upsert?: DailyInventoryEntryUpsertWithWhereUniqueWithoutProductInput | DailyInventoryEntryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailyInventoryEntryCreateManyProductInputEnvelope
    set?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    disconnect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    delete?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    connect?: DailyInventoryEntryWhereUniqueInput | DailyInventoryEntryWhereUniqueInput[]
    update?: DailyInventoryEntryUpdateWithWhereUniqueWithoutProductInput | DailyInventoryEntryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailyInventoryEntryUpdateManyWithWhereWithoutProductInput | DailyInventoryEntryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailyInventoryEntryScalarWhereInput | DailyInventoryEntryScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutPricesInput = {
    create?: XOR<StoreCreateWithoutPricesInput, StoreUncheckedCreateWithoutPricesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutPricesInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPricesInput = {
    create?: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
    connect?: ProductWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StoreUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<StoreCreateWithoutPricesInput, StoreUncheckedCreateWithoutPricesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutPricesInput
    upsert?: StoreUpsertWithoutPricesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutPricesInput, StoreUpdateWithoutPricesInput>, StoreUncheckedUpdateWithoutPricesInput>
  }

  export type ProductUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
    upsert?: ProductUpsertWithoutPricesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPricesInput, ProductUpdateWithoutPricesInput>, ProductUncheckedUpdateWithoutPricesInput>
  }

  export type StoreCreateNestedOneWithoutDailyEntriesInput = {
    create?: XOR<StoreCreateWithoutDailyEntriesInput, StoreUncheckedCreateWithoutDailyEntriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDailyEntriesInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDailyEntriesInput = {
    create?: XOR<ProductCreateWithoutDailyEntriesInput, ProductUncheckedCreateWithoutDailyEntriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailyEntriesInput
    connect?: ProductWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoreUpdateOneRequiredWithoutDailyEntriesNestedInput = {
    create?: XOR<StoreCreateWithoutDailyEntriesInput, StoreUncheckedCreateWithoutDailyEntriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDailyEntriesInput
    upsert?: StoreUpsertWithoutDailyEntriesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutDailyEntriesInput, StoreUpdateWithoutDailyEntriesInput>, StoreUncheckedUpdateWithoutDailyEntriesInput>
  }

  export type ProductUpdateOneRequiredWithoutDailyEntriesNestedInput = {
    create?: XOR<ProductCreateWithoutDailyEntriesInput, ProductUncheckedCreateWithoutDailyEntriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailyEntriesInput
    upsert?: ProductUpsertWithoutDailyEntriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDailyEntriesInput, ProductUpdateWithoutDailyEntriesInput>, ProductUncheckedUpdateWithoutDailyEntriesInput>
  }

  export type StoreCreateNestedOneWithoutDailyRemittancesInput = {
    create?: XOR<StoreCreateWithoutDailyRemittancesInput, StoreUncheckedCreateWithoutDailyRemittancesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDailyRemittancesInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutDailyRemittancesNestedInput = {
    create?: XOR<StoreCreateWithoutDailyRemittancesInput, StoreUncheckedCreateWithoutDailyRemittancesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDailyRemittancesInput
    upsert?: StoreUpsertWithoutDailyRemittancesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutDailyRemittancesInput, StoreUpdateWithoutDailyRemittancesInput>, StoreUncheckedUpdateWithoutDailyRemittancesInput>
  }

  export type StoreCreateNestedOneWithoutDailyExpensesInput = {
    create?: XOR<StoreCreateWithoutDailyExpensesInput, StoreUncheckedCreateWithoutDailyExpensesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDailyExpensesInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutDailyExpensesNestedInput = {
    create?: XOR<StoreCreateWithoutDailyExpensesInput, StoreUncheckedCreateWithoutDailyExpensesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDailyExpensesInput
    upsert?: StoreUpsertWithoutDailyExpensesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutDailyExpensesInput, StoreUpdateWithoutDailyExpensesInput>, StoreUncheckedUpdateWithoutDailyExpensesInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type ProductPriceCreateWithoutStoreInput = {
    id?: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutPricesInput
  }

  export type ProductPriceUncheckedCreateWithoutStoreInput = {
    id?: string
    productId: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProductPriceCreateOrConnectWithoutStoreInput = {
    where: ProductPriceWhereUniqueInput
    create: XOR<ProductPriceCreateWithoutStoreInput, ProductPriceUncheckedCreateWithoutStoreInput>
  }

  export type ProductPriceCreateManyStoreInputEnvelope = {
    data: ProductPriceCreateManyStoreInput | ProductPriceCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type DailyInventoryEntryCreateWithoutStoreInput = {
    id?: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutDailyEntriesInput
  }

  export type DailyInventoryEntryUncheckedCreateWithoutStoreInput = {
    id?: string
    productId: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyInventoryEntryCreateOrConnectWithoutStoreInput = {
    where: DailyInventoryEntryWhereUniqueInput
    create: XOR<DailyInventoryEntryCreateWithoutStoreInput, DailyInventoryEntryUncheckedCreateWithoutStoreInput>
  }

  export type DailyInventoryEntryCreateManyStoreInputEnvelope = {
    data: DailyInventoryEntryCreateManyStoreInput | DailyInventoryEntryCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type DailyRemittanceCreateWithoutStoreInput = {
    id?: string
    date: Date | string
    cash?: Decimal | DecimalJsLike | number | string
    gcash?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyRemittanceUncheckedCreateWithoutStoreInput = {
    id?: string
    date: Date | string
    cash?: Decimal | DecimalJsLike | number | string
    gcash?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyRemittanceCreateOrConnectWithoutStoreInput = {
    where: DailyRemittanceWhereUniqueInput
    create: XOR<DailyRemittanceCreateWithoutStoreInput, DailyRemittanceUncheckedCreateWithoutStoreInput>
  }

  export type DailyRemittanceCreateManyStoreInputEnvelope = {
    data: DailyRemittanceCreateManyStoreInput | DailyRemittanceCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type DailyExpenseCreateWithoutStoreInput = {
    id?: string
    date: Date | string
    description: string
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyExpenseUncheckedCreateWithoutStoreInput = {
    id?: string
    date: Date | string
    description: string
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyExpenseCreateOrConnectWithoutStoreInput = {
    where: DailyExpenseWhereUniqueInput
    create: XOR<DailyExpenseCreateWithoutStoreInput, DailyExpenseUncheckedCreateWithoutStoreInput>
  }

  export type DailyExpenseCreateManyStoreInputEnvelope = {
    data: DailyExpenseCreateManyStoreInput | DailyExpenseCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type ProductPriceUpsertWithWhereUniqueWithoutStoreInput = {
    where: ProductPriceWhereUniqueInput
    update: XOR<ProductPriceUpdateWithoutStoreInput, ProductPriceUncheckedUpdateWithoutStoreInput>
    create: XOR<ProductPriceCreateWithoutStoreInput, ProductPriceUncheckedCreateWithoutStoreInput>
  }

  export type ProductPriceUpdateWithWhereUniqueWithoutStoreInput = {
    where: ProductPriceWhereUniqueInput
    data: XOR<ProductPriceUpdateWithoutStoreInput, ProductPriceUncheckedUpdateWithoutStoreInput>
  }

  export type ProductPriceUpdateManyWithWhereWithoutStoreInput = {
    where: ProductPriceScalarWhereInput
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyWithoutStoreInput>
  }

  export type ProductPriceScalarWhereInput = {
    AND?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    OR?: ProductPriceScalarWhereInput[]
    NOT?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    id?: StringFilter<"ProductPrice"> | string
    storeId?: StringFilter<"ProductPrice"> | string
    productId?: StringFilter<"ProductPrice"> | string
    lp?: DecimalFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    srp?: DecimalFilter<"ProductPrice"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"ProductPrice"> | Date | string
    createdAt?: DateTimeFilter<"ProductPrice"> | Date | string
  }

  export type DailyInventoryEntryUpsertWithWhereUniqueWithoutStoreInput = {
    where: DailyInventoryEntryWhereUniqueInput
    update: XOR<DailyInventoryEntryUpdateWithoutStoreInput, DailyInventoryEntryUncheckedUpdateWithoutStoreInput>
    create: XOR<DailyInventoryEntryCreateWithoutStoreInput, DailyInventoryEntryUncheckedCreateWithoutStoreInput>
  }

  export type DailyInventoryEntryUpdateWithWhereUniqueWithoutStoreInput = {
    where: DailyInventoryEntryWhereUniqueInput
    data: XOR<DailyInventoryEntryUpdateWithoutStoreInput, DailyInventoryEntryUncheckedUpdateWithoutStoreInput>
  }

  export type DailyInventoryEntryUpdateManyWithWhereWithoutStoreInput = {
    where: DailyInventoryEntryScalarWhereInput
    data: XOR<DailyInventoryEntryUpdateManyMutationInput, DailyInventoryEntryUncheckedUpdateManyWithoutStoreInput>
  }

  export type DailyInventoryEntryScalarWhereInput = {
    AND?: DailyInventoryEntryScalarWhereInput | DailyInventoryEntryScalarWhereInput[]
    OR?: DailyInventoryEntryScalarWhereInput[]
    NOT?: DailyInventoryEntryScalarWhereInput | DailyInventoryEntryScalarWhereInput[]
    id?: StringFilter<"DailyInventoryEntry"> | string
    storeId?: StringFilter<"DailyInventoryEntry"> | string
    productId?: StringFilter<"DailyInventoryEntry"> | string
    date?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    beginQty?: IntFilter<"DailyInventoryEntry"> | number
    incomingQty?: IntFilter<"DailyInventoryEntry"> | number
    salesQty?: IntFilter<"DailyInventoryEntry"> | number
    endQty?: IntFilter<"DailyInventoryEntry"> | number
    lpSnapshot?: DecimalFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFilter<"DailyInventoryEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DailyInventoryEntry"> | Date | string
  }

  export type DailyRemittanceUpsertWithWhereUniqueWithoutStoreInput = {
    where: DailyRemittanceWhereUniqueInput
    update: XOR<DailyRemittanceUpdateWithoutStoreInput, DailyRemittanceUncheckedUpdateWithoutStoreInput>
    create: XOR<DailyRemittanceCreateWithoutStoreInput, DailyRemittanceUncheckedCreateWithoutStoreInput>
  }

  export type DailyRemittanceUpdateWithWhereUniqueWithoutStoreInput = {
    where: DailyRemittanceWhereUniqueInput
    data: XOR<DailyRemittanceUpdateWithoutStoreInput, DailyRemittanceUncheckedUpdateWithoutStoreInput>
  }

  export type DailyRemittanceUpdateManyWithWhereWithoutStoreInput = {
    where: DailyRemittanceScalarWhereInput
    data: XOR<DailyRemittanceUpdateManyMutationInput, DailyRemittanceUncheckedUpdateManyWithoutStoreInput>
  }

  export type DailyRemittanceScalarWhereInput = {
    AND?: DailyRemittanceScalarWhereInput | DailyRemittanceScalarWhereInput[]
    OR?: DailyRemittanceScalarWhereInput[]
    NOT?: DailyRemittanceScalarWhereInput | DailyRemittanceScalarWhereInput[]
    id?: StringFilter<"DailyRemittance"> | string
    storeId?: StringFilter<"DailyRemittance"> | string
    date?: DateTimeFilter<"DailyRemittance"> | Date | string
    cash?: DecimalFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFilter<"DailyRemittance"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"DailyRemittance"> | string | null
    createdAt?: DateTimeFilter<"DailyRemittance"> | Date | string
    updatedAt?: DateTimeFilter<"DailyRemittance"> | Date | string
  }

  export type DailyExpenseUpsertWithWhereUniqueWithoutStoreInput = {
    where: DailyExpenseWhereUniqueInput
    update: XOR<DailyExpenseUpdateWithoutStoreInput, DailyExpenseUncheckedUpdateWithoutStoreInput>
    create: XOR<DailyExpenseCreateWithoutStoreInput, DailyExpenseUncheckedCreateWithoutStoreInput>
  }

  export type DailyExpenseUpdateWithWhereUniqueWithoutStoreInput = {
    where: DailyExpenseWhereUniqueInput
    data: XOR<DailyExpenseUpdateWithoutStoreInput, DailyExpenseUncheckedUpdateWithoutStoreInput>
  }

  export type DailyExpenseUpdateManyWithWhereWithoutStoreInput = {
    where: DailyExpenseScalarWhereInput
    data: XOR<DailyExpenseUpdateManyMutationInput, DailyExpenseUncheckedUpdateManyWithoutStoreInput>
  }

  export type DailyExpenseScalarWhereInput = {
    AND?: DailyExpenseScalarWhereInput | DailyExpenseScalarWhereInput[]
    OR?: DailyExpenseScalarWhereInput[]
    NOT?: DailyExpenseScalarWhereInput | DailyExpenseScalarWhereInput[]
    id?: StringFilter<"DailyExpense"> | string
    storeId?: StringFilter<"DailyExpense"> | string
    date?: DateTimeFilter<"DailyExpense"> | Date | string
    description?: StringFilter<"DailyExpense"> | string
    amount?: DecimalFilter<"DailyExpense"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyExpense"> | Date | string
    updatedAt?: DateTimeFilter<"DailyExpense"> | Date | string
  }

  export type ProductPriceCreateWithoutProductInput = {
    id?: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutPricesInput
  }

  export type ProductPriceUncheckedCreateWithoutProductInput = {
    id?: string
    storeId: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProductPriceCreateOrConnectWithoutProductInput = {
    where: ProductPriceWhereUniqueInput
    create: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceCreateManyProductInputEnvelope = {
    data: ProductPriceCreateManyProductInput | ProductPriceCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DailyInventoryEntryCreateWithoutProductInput = {
    id?: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutDailyEntriesInput
  }

  export type DailyInventoryEntryUncheckedCreateWithoutProductInput = {
    id?: string
    storeId: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyInventoryEntryCreateOrConnectWithoutProductInput = {
    where: DailyInventoryEntryWhereUniqueInput
    create: XOR<DailyInventoryEntryCreateWithoutProductInput, DailyInventoryEntryUncheckedCreateWithoutProductInput>
  }

  export type DailyInventoryEntryCreateManyProductInputEnvelope = {
    data: DailyInventoryEntryCreateManyProductInput | DailyInventoryEntryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductPriceUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPriceWhereUniqueInput
    update: XOR<ProductPriceUpdateWithoutProductInput, ProductPriceUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPriceWhereUniqueInput
    data: XOR<ProductPriceUpdateWithoutProductInput, ProductPriceUncheckedUpdateWithoutProductInput>
  }

  export type ProductPriceUpdateManyWithWhereWithoutProductInput = {
    where: ProductPriceScalarWhereInput
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyWithoutProductInput>
  }

  export type DailyInventoryEntryUpsertWithWhereUniqueWithoutProductInput = {
    where: DailyInventoryEntryWhereUniqueInput
    update: XOR<DailyInventoryEntryUpdateWithoutProductInput, DailyInventoryEntryUncheckedUpdateWithoutProductInput>
    create: XOR<DailyInventoryEntryCreateWithoutProductInput, DailyInventoryEntryUncheckedCreateWithoutProductInput>
  }

  export type DailyInventoryEntryUpdateWithWhereUniqueWithoutProductInput = {
    where: DailyInventoryEntryWhereUniqueInput
    data: XOR<DailyInventoryEntryUpdateWithoutProductInput, DailyInventoryEntryUncheckedUpdateWithoutProductInput>
  }

  export type DailyInventoryEntryUpdateManyWithWhereWithoutProductInput = {
    where: DailyInventoryEntryScalarWhereInput
    data: XOR<DailyInventoryEntryUpdateManyMutationInput, DailyInventoryEntryUncheckedUpdateManyWithoutProductInput>
  }

  export type StoreCreateWithoutPricesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyEntries?: DailyInventoryEntryCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutPricesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyEntries?: DailyInventoryEntryUncheckedCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceUncheckedCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutPricesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutPricesInput, StoreUncheckedCreateWithoutPricesInput>
  }

  export type ProductCreateWithoutPricesInput = {
    id?: string
    sku?: string | null
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyEntries?: DailyInventoryEntryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPricesInput = {
    id?: string
    sku?: string | null
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyEntries?: DailyInventoryEntryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPricesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
  }

  export type StoreUpsertWithoutPricesInput = {
    update: XOR<StoreUpdateWithoutPricesInput, StoreUncheckedUpdateWithoutPricesInput>
    create: XOR<StoreCreateWithoutPricesInput, StoreUncheckedCreateWithoutPricesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutPricesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutPricesInput, StoreUncheckedUpdateWithoutPricesInput>
  }

  export type StoreUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyInventoryEntryUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyInventoryEntryUncheckedUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUncheckedUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithoutPricesInput = {
    update: XOR<ProductUpdateWithoutPricesInput, ProductUncheckedUpdateWithoutPricesInput>
    create: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPricesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPricesInput, ProductUncheckedUpdateWithoutPricesInput>
  }

  export type ProductUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyInventoryEntryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyEntries?: DailyInventoryEntryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreCreateWithoutDailyEntriesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutDailyEntriesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceUncheckedCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceUncheckedCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutDailyEntriesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutDailyEntriesInput, StoreUncheckedCreateWithoutDailyEntriesInput>
  }

  export type ProductCreateWithoutDailyEntriesInput = {
    id?: string
    sku?: string | null
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDailyEntriesInput = {
    id?: string
    sku?: string | null
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDailyEntriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDailyEntriesInput, ProductUncheckedCreateWithoutDailyEntriesInput>
  }

  export type StoreUpsertWithoutDailyEntriesInput = {
    update: XOR<StoreUpdateWithoutDailyEntriesInput, StoreUncheckedUpdateWithoutDailyEntriesInput>
    create: XOR<StoreCreateWithoutDailyEntriesInput, StoreUncheckedCreateWithoutDailyEntriesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutDailyEntriesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutDailyEntriesInput, StoreUncheckedUpdateWithoutDailyEntriesInput>
  }

  export type StoreUpdateWithoutDailyEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutDailyEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUncheckedUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUncheckedUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithoutDailyEntriesInput = {
    update: XOR<ProductUpdateWithoutDailyEntriesInput, ProductUncheckedUpdateWithoutDailyEntriesInput>
    create: XOR<ProductCreateWithoutDailyEntriesInput, ProductUncheckedCreateWithoutDailyEntriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDailyEntriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDailyEntriesInput, ProductUncheckedUpdateWithoutDailyEntriesInput>
  }

  export type ProductUpdateWithoutDailyEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDailyEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreCreateWithoutDailyRemittancesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceCreateNestedManyWithoutStoreInput
    dailyEntries?: DailyInventoryEntryCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutDailyRemittancesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceUncheckedCreateNestedManyWithoutStoreInput
    dailyEntries?: DailyInventoryEntryUncheckedCreateNestedManyWithoutStoreInput
    dailyExpenses?: DailyExpenseUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutDailyRemittancesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutDailyRemittancesInput, StoreUncheckedCreateWithoutDailyRemittancesInput>
  }

  export type StoreUpsertWithoutDailyRemittancesInput = {
    update: XOR<StoreUpdateWithoutDailyRemittancesInput, StoreUncheckedUpdateWithoutDailyRemittancesInput>
    create: XOR<StoreCreateWithoutDailyRemittancesInput, StoreUncheckedCreateWithoutDailyRemittancesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutDailyRemittancesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutDailyRemittancesInput, StoreUncheckedUpdateWithoutDailyRemittancesInput>
  }

  export type StoreUpdateWithoutDailyRemittancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUpdateManyWithoutStoreNestedInput
    dailyEntries?: DailyInventoryEntryUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutDailyRemittancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUncheckedUpdateManyWithoutStoreNestedInput
    dailyEntries?: DailyInventoryEntryUncheckedUpdateManyWithoutStoreNestedInput
    dailyExpenses?: DailyExpenseUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutDailyExpensesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceCreateNestedManyWithoutStoreInput
    dailyEntries?: DailyInventoryEntryCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutDailyExpensesInput = {
    id?: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: ProductPriceUncheckedCreateNestedManyWithoutStoreInput
    dailyEntries?: DailyInventoryEntryUncheckedCreateNestedManyWithoutStoreInput
    dailyRemittances?: DailyRemittanceUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutDailyExpensesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutDailyExpensesInput, StoreUncheckedCreateWithoutDailyExpensesInput>
  }

  export type StoreUpsertWithoutDailyExpensesInput = {
    update: XOR<StoreUpdateWithoutDailyExpensesInput, StoreUncheckedUpdateWithoutDailyExpensesInput>
    create: XOR<StoreCreateWithoutDailyExpensesInput, StoreUncheckedCreateWithoutDailyExpensesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutDailyExpensesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutDailyExpensesInput, StoreUncheckedUpdateWithoutDailyExpensesInput>
  }

  export type StoreUpdateWithoutDailyExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUpdateManyWithoutStoreNestedInput
    dailyEntries?: DailyInventoryEntryUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutDailyExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: ProductPriceUncheckedUpdateManyWithoutStoreNestedInput
    dailyEntries?: DailyInventoryEntryUncheckedUpdateManyWithoutStoreNestedInput
    dailyRemittances?: DailyRemittanceUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductPriceCreateManyStoreInput = {
    id?: string
    productId: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DailyInventoryEntryCreateManyStoreInput = {
    id?: string
    productId: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyRemittanceCreateManyStoreInput = {
    id?: string
    date: Date | string
    cash?: Decimal | DecimalJsLike | number | string
    gcash?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyExpenseCreateManyStoreInput = {
    id?: string
    date: Date | string
    description: string
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPricesNestedInput
  }

  export type ProductPriceUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyInventoryEntryUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDailyEntriesNestedInput
  }

  export type DailyInventoryEntryUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyInventoryEntryUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRemittanceUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRemittanceUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRemittanceUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gcash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyExpenseUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyExpenseUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyExpenseUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceCreateManyProductInput = {
    id?: string
    storeId: string
    lp: Decimal | DecimalJsLike | number | string
    srp: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DailyInventoryEntryCreateManyProductInput = {
    id?: string
    storeId: string
    date: Date | string
    beginQty?: number
    incomingQty?: number
    salesQty?: number
    endQty?: number
    lpSnapshot?: Decimal | DecimalJsLike | number | string
    srpSnapshot?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutPricesNestedInput
  }

  export type ProductPriceUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    lp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyInventoryEntryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutDailyEntriesNestedInput
  }

  export type DailyInventoryEntryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyInventoryEntryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    beginQty?: IntFieldUpdateOperationsInput | number
    incomingQty?: IntFieldUpdateOperationsInput | number
    salesQty?: IntFieldUpdateOperationsInput | number
    endQty?: IntFieldUpdateOperationsInput | number
    lpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    srpSnapshot?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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