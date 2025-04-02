Integrations
Learn more about how integrations extend the functionality of our SDK to cover common libraries and environments automatically.
The Sentry SDK uses integrations to hook into the functionality of popular libraries to automatically instrument your application and give you the best data out of the box.

Integrations automatically add error instrumentation, performance instrumentation, and/or extra context information to your application. Some are enabled by default, but you can disable them or modify their settings.

Integrations
Auto Enabled Errors Tracing Additional Context
amqplibIntegration ✓ ✓
consoleIntegration ✓ ✓
contextLinesIntegration ✓ ✓
dedupeIntegration ✓ ✓
functionToStringIntegration ✓
genericPoolIntegration ✓ ✓
graphqlIntegration ✓ ✓
httpIntegration ✓ ✓ ✓ ✓
inboundFiltersIntegration ✓ ✓
kafkaIntegration ✓ ✓
linkedErrorsIntegration ✓ ✓
lruMemoizerIntegration ✓ ✓
modulesIntegration ✓ ✓
mongoIntegration ✓ ✓
mongooseIntegration ✓ ✓
mysqlIntegration ✓ ✓
mysql2Integration ✓ ✓
nodeContextIntegration ✓ ✓
nativeNodeFetchIntegration ✓ ✓ ✓
onUncaughtExceptionIntegration ✓ ✓
onUnhandledRejectionIntegration ✓ ✓
postgresIntegration ✓ ✓
redisIntegration ✓ ✓
requestDataIntegration ✓ ✓
tediousIntegration ✓ ✓
childProcessIntegration ✓ ✓
anrIntegration ✓
captureConsoleIntegration ✓
dataloaderIntegration ✓
extraErrorDataIntegration ✓
fsIntegration ✓
knexIntegration ✓
localVariablesIntegration ✓
nodeProfilingIntegration ✓
prismaIntegration ✓
rewriteFramesIntegration ✓
trpcMiddleware ✓ ✓ ✓
Modifying Default Integrations
To disable system integrations, set defaultIntegrations: false when calling init().

To override their settings, provide a new instance with your config to the integrations option. For example, to turn off browser capturing console calls:

JavaScript

Copied
Sentry.init({
dsn: "https://f924f76e1c90056c0c536af397161c71@o4508670145658880.ingest.de.sentry.io/4508670151098448",

integrations: [
Sentry.linkedErrorsIntegration({
limit: 7,
}),
],
});
Adding an Integration
You can add additional integrations in your init call:

JavaScript

Copied
import \* as Sentry from "@sentry/node";

Sentry.init({
dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
integrations: [],
});

Sentry.addIntegration(Sentry.captureConsoleIntegration());
Alternatively, you can add integrations via Sentry.addIntegration(). This is useful if you only want to enable an integration in a specific environment or if you want to load an integration later. For all other cases, we recommend you use the integrations option.

JavaScript

Copied
import \* as Sentry from "@sentry/node";

Sentry.init({
dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
integrations: [Sentry.captureConsoleIntegration()],
});
Removing a Default Integration
If you only want to remove a single or some of the default integrations, instead of disabling all of them with defaultIntegrations: false, you can use the following syntax to filter out the ones you don't want.

This example removes the integration for adding breadcrumbs to the event, which is enabled by default:

JavaScript

Copied
Sentry.init({
// ...
integrations: function (integrations) {
// integrations will be all default integrations
return integrations.filter(function (integration) {
return integration.name !== "Breadcrumbs";
});
},
});
Custom Integrations
You can also create custom integrations.

Available Integrations
Amqplib
Adds instrumentation for Amqplib. (default)

Anr
Capture events when the event loop is blocked and the application is no longer responding.

CaptureConsole
Captures all Console API calls via `captureException` or `captureMessage`.

Child Process Integration
Adds instrumentation for child processes and worker threads (default)

Connect
Adds performance instrumentation for Connect. (default)

Console
Capture console logs as breadcrumbs. (default)

Context
Capture context about the environment and the device that the client is running on, and add it to events. (default)

ContextLines
Adds source code to your stack frames. (default)

Dataloader
Adds instrumentation for Dataloader.

Dedupe
Deduplicate certain events to avoid receiving duplicate errors. (default)

ExtraErrorData
Extracts all non-native attributes from the error object and attaches them to the event as extra data.

Fastify
Adds performance instrumentation for Fastify. (default)

FileSystem
Adds instrumentation for filesystem operations.

FunctionToString
Allows the SDK to provide original functions and method names, even when those functions or methods are wrapped by our error or breadcrumb handlers. (default)

Generic Pool
Adds instrumentation for Generic Pool. (default)

GraphQL
Adds instrumentation for GraphQL. (default)

Hapi
Adds performance instrumentation for Hapi. (default)

Http
Capture spans & breadcrumbs for http requests. (default)

InboundFilters
Allows you to ignore specific errors based on the type, message, or URLs in a given exception. (default)

Kafka
Adds instrumentation for KafkaJS. (default)

Knex
Adds instrumentation for Knex.

Koa
Adds performance instrumentation for Koa. (default)

LinkedErrors
Allows you to configure linked errors. (default)

LocalVariables
Add local variables to exception frames. (default)

LRU Memoizer
Adds instrumentation for LRU Memoizer. (default)

Modules
Add node modules / packages to the event. (default)

MongoDB
Adds instrumentation for MongoDB. (default)

Mongoose
Adds instrumentation for Mongoose. (default)

MySQL
Adds instrumentation for MySQL. (default)

MySQL2
Adds instrumentation for MySQL2. (default)

Nest.js
Adds performance instrumentation for Nest.js. (default)

NodeFetch
Capture spans & breadcrumbs for node fetch requests. (default)

NodeProfiling
Capture profiling data for Node.js applications.

OnUncaughtException
Registers handlers to capture global uncaught exceptions. (default)

OnUnhandledRejection
Registers handlers to capture global unhandled promise rejections. (default)

Postgres
Adds instrumentation for Postgres. (default)

Prisma
Adds instrumentation for Prisma.

Prisma
Adds instrumentation for Prisma.

Redis
Adds instrumentation for Redis. (default)

RequestData
Adds data about an incoming request to an event. (default)

RewriteFrames
Allows you to apply a transformation to each frame of the stack trace.

Tedious
Adds instrumentation for Tedious. (default)

trpcMiddleware
Capture spans & errors for tRPC handlers.

Vercel AI
Adds instrumentation for Vercel AI SDK.

Options
Learn more about how the SDK can be configured via options. These are being passed to the init function and therefore set when the SDK is first initialized.
Available Options
Core Options
dsn
debug
release
environment
tunnel
maxBreadcrumbs
attachStacktrace
serverName
initialScope
maxValueLength
normalizeDepth
normalizeMaxBreadth
enabled
sendClientReports
includeLocalVariables
integrations
defaultIntegrations
beforeBreadcrumb
transport
transportOptions
shutdownTimeout
Error Monitoring Options
sampleRate
beforeSend
ignoreErrors
Tracing Options
tracesSampleRate
tracesSampler
tracePropagationTargets
Profiling Options
profilesSampleRate
Core Options
dsn
Type string
ENV Variable SENTRY_DSN
The DSN tells the SDK where to send the events. If this is not set, the SDK will not send any events. Learn more about DSN utilization.

JavaScript

Copied
Sentry.init({
dsn: "https://f924f76e1c90056c0c536af397161c71@o4508670145658880.ingest.de.sentry.io/4508670151098448",
});
debug
Type boolean
Default false
Turns debug mode on or off. If debug is enabled SDK will attempt to print out useful debugging information about what the SDK is doing.

release
Type string
ENV Variable SENTRY_RELEASE
Sets the release. Release names are strings, but some formats are detected by Sentry and might be rendered differently. Learn more about how to send release data so Sentry can tell you about regressions between releases and identify the potential source in the releases documentation or the sandbox.

On the server, the SDK will try to read this value from the SENTRY_RELEASE environment variable.

environment
Type string
Default production
ENV Variable SENTRY_ENVIRONMENT
Sets the environment. Defaults to development or production depending on whether the application is packaged.

Environments tell you where an error occurred, whether that's in your production system, your staging server, or elsewhere.

Sentry automatically creates an environment when it receives an event with the environment parameter set.

Environments are case-sensitive. The environment name can't contain newlines, spaces or forward slashes, can't be the string "None", or exceed 64 characters. You can't delete environments, but you can hide them.

tunnel
Type string
Sets the URL that will be used to transport captured events. This can be used to work around ad-blockers or to have more granular control over events sent to Sentry. Adding your DSN is still required when using this option so necessary attributes can be set on the generated Sentry data. This option requires the implementation of a custom server endpoint. Learn more and find examples in Dealing with Ad-Blockers.

maxBreadcrumbs
Type number
Default 100
This variable controls the total amount of breadcrumbs that should be captured. You should be aware that Sentry has a maximum payload size and any events exceeding that payload size will be dropped.

attachStacktrace
Type boolean
Default false
When enabled, stack traces are automatically attached to all messages logged. Stack traces are always attached to exceptions; however, when this option is set, stack traces are also sent with messages. This option, for instance, means that stack traces appear next to all messages captured with Sentry.captureMessage().

Grouping in Sentry is different for events with stack traces and without. As a result, you will get new groups as you enable or disable this flag for certain events.

serverName
Type string
This option can be used to supply a server name. When provided, the name of the server is sent along and persisted in the event. For many integrations, the server name actually corresponds to the device hostname, even in situations where the machine is not actually a server.

Most SDKs will attempt to auto-discover this value.

initialScope
Type CaptureContext
Data to be set to the initial scope. Initial scope can be defined either as an object or a callback function, as shown below.

JavaScript

Copied
// Using an object
Sentry.init({
dsn: "https://f924f76e1c90056c0c536af397161c71@o4508670145658880.ingest.de.sentry.io/4508670151098448",
initialScope: {
tags: { "my-tag": "my value" },
user: { id: 42, email: "john.doe@example.com" },
},
});

// Using a callback function
Sentry.init({
dsn: "https://f924f76e1c90056c0c536af397161c71@o4508670145658880.ingest.de.sentry.io/4508670151098448",
initialScope: (scope) => {
scope.setTags({ a: "b" });
return scope;
},
});
maxValueLength
Type number
Default 250
Maximum number of characters every string property on events sent to Sentry can have before it will be truncated.

normalizeDepth
Type number
Default 3
Sentry SDKs normalize any contextual data to a given depth. Any data beyond this depth will be trimmed and marked using its type instead ([Object] or [Array]), without walking the tree any further. By default, walking is performed three levels deep.

normalizeMaxBreadth
Type number
Default 1000
This is the maximum number of properties or entries that will be included in any given object or array when the SDK is normalizing contextual data. Any data beyond this depth will be dropped.

enabled
Type boolean
Default true
Specifies whether this SDK should send events to Sentry. Setting this to enabled: false doesn't prevent all overhead from Sentry instrumentation. To disable Sentry completely, depending on environment, call Sentry.init conditionally.

sendClientReports
Type boolean
Default true
Set this option to false to disable sending of client reports. Client reports are a protocol feature that let clients send status reports about themselves to Sentry. They are currently mainly used to emit outcomes for events that were never sent.

includeLocalVariables
Type boolean
Default false
Set this option to true to add stack local variables to stack traces.

For more advanced configuration options, see the documentation on the Local Variables integration options.

integrations
Type Array<Integration> | (integrations: Array<Integration>) => Array<Integration>
Default []
Pass additional integrations that should be initialized with the SDK. Integrations are pieces of code that can be used to extend the SDK's functionality. They can be used to add custom event processors, context providers, or to hook into the SDK's lifecycle.

See integration docs for more information.

defaultIntegrations
Type undefined | false
This can be used to disable integrations that are added by default. When set to false, no default integrations are added.

See integration docs to see how you can modify the default integrations.

beforeBreadcrumb
Type (breadcrumb: Breadcrumb, hint?: BreadcrumbHint) => Breadcrumb | null
This function is called with a breadcrumb object before the breadcrumb is added to the scope. When nothing is returned from the function, the breadcrumb is dropped. To pass the breadcrumb through, return the first argument, which contains the breadcrumb object. The callback gets a second argument (called a "hint") which contains the original object from which the breadcrumb was created to further customize what the breadcrumb should look like.

transport
Type (transportOptions: TransportOptions) => Transport
The JavaScript SDK uses a transport to send events to Sentry. On modern browsers, most transports use the browsers' fetch API to send events. Transports will drop an event if it fails to send due to a lack of connection.

On the server, a https-based transport is used by default.

transportOptions
Type TransportOptions
Options used to configure the transport. This is an object with the following possible optional keys:

headers: An object containing headers to be sent with every request.
proxy: A proxy used for outbound requests. Can be http or https.
caCerts: A path or list of paths to a CA certificate, or a buffer of CA certificates.
httpModule: A custom HTTP module to use for requests. Defaults to the the native http and https modules.
keepAlive: Determines whether to keep the socket alive between requests. Defaults to false.
shutdownTimeout
Type number
Default 2000
Controls how many seconds to wait before shutting down. Sentry SDKs send events from a background queue. This queue is given a certain amount to drain pending events. The default is SDK specific but typically around two seconds. Setting this value too low may cause problems for sending events from command line applications. Setting the value too high will cause the application to block for a long time for users experiencing network connectivity problems.

Error Monitoring Options
sampleRate
Type number
Default 1.0
Configures the sample rate for error events, in the range of 0.0 to 1.0. The default is 1.0, which means that 100% of error events will be sent. If set to 0.1, only 10% of error events will be sent. Events are picked randomly.

beforeSend
Type (event: Event, hint: EventHint) => Event | null
This function is called with an SDK-specific message or error event object, and can return a modified event object, or null to skip reporting the event. This can be used, for instance, for manual PII stripping before sending.

By the time beforeSend is executed, all scope data has already been applied to the event. Further modification of the scope won't have any effect.

ignoreErrors
Type Array<string | RegExp>
Default []
A list of strings or regex patterns that match error messages that shouldn't be sent to Sentry. Messages that match these strings or regular expressions will be filtered out before they're sent to Sentry. When using strings, partial matches will be filtered out, so if you need to filter by exact match, use regex patterns instead. By default, all errors are sent.

Tracing Options
tracesSampleRate
Type number
ENV Variable SENTRY_TRACES_SAMPLE_RATE
A number between 0 and 1, controlling the percentage chance a given transaction will be sent to Sentry. (0 represents 0% while 1 represents 100%.) Applies equally to all transactions created in the app. Either this or tracesSampler must be defined to enable tracing.

tracesSampler
Type (samplingContext: SamplingContext) => number | boolean
A function responsible for determining the percentage chance a given transaction will be sent to Sentry. It will automatically be passed information about the transaction and the context in which it's being created, and must return a number between 0 (0% chance of being sent) and 1 (100% chance of being sent). Can also be used for filtering transactions, by returning 0 for those that are unwanted. Either this or tracesSampleRate must be defined to enable tracing.

The samplingContext object passed to the function has the following properties:

parentSampled: The sampling decision of the parent transaction. This is true if the parent transaction was sampled, and false if it was not.
name: The name of the span as it was started.
attributes: The initial attributes of the span.
normalizedRequest: Request information of the currently active HTTP server request, if applicable.
tracePropagationTargets
Type Array<string | RegExp>
An optional property that controls which downstream services receive tracing data, in the form of a sentry-trace and a baggage header attached to any outgoing HTTP requests.

The option may contain a list of strings or regex against which the URLs of outgoing requests are matched. If one of the entries in the list matches the URL of an outgoing request, trace data will be attached to that request. String entries do not have to be full matches, meaning the URL of a request is matched when it contains a string provided through the option.

On the server, all outgoing requests will be propagated by default.

If you want to disable trace propagation, you can set this option to [].

Profiling Options
profilesSampleRate
Type number
A number between 0 and 1, controlling the percentage chance a given sampled transaction will be profiled. (0 represents 0% while 1 represents 100%.) Applies equally to all transactions created in the app. This is relative to the tracing sample rate - e.g. 0.5 means 50% of sampled transactions will be profiled.
