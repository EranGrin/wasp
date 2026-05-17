{{={= =}=}}
import * as z from 'zod'

{=# envValidationSchema.isDefined =}
{=& envValidationSchema.importStatement =}
const userClientEnvSchema = {= envValidationSchema.importIdentifier =}
{=/ envValidationSchema.isDefined =}
{=^ envValidationSchema.isDefined =}
const userClientEnvSchema = z.object({})
{=/ envValidationSchema.isDefined =}

const waspClientEnvSchema = z.object({
  "{= serverUrlEnvVarName =}":
    z.url({
      error: '{= serverUrlEnvVarName =} must be a valid URL',
    })
    .default('{= defaultServerUrl =}'),
})

// PRIVATE API (sdk, Vite config)
export const clientEnvSchema = z.object({
  ...userClientEnvSchema.shape,
  ...waspClientEnvSchema.shape,
})
