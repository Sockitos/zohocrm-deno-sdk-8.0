# Zoho CRM SDK Migration to Deno 2.0 - Implementation Plan

## Overview
This document outlines the comprehensive migration plan for the Zoho CRM TypeScript SDK from Node.js to Deno 2.0. The migration involves replacing Node.js-specific APIs, updating configuration files, and ensuring compatibility with Deno's module system.

## Current State Analysis

### Dependencies Analysis
The current project uses the following Node.js-specific dependencies that need migration:

1. **HTTP Client**: `got` (11.8.1) - Used for HTTP requests
2. **Database**: `mysql` (2.18.1) - For MySQL database operations  
3. **Logging**: `winston` (3.2.1) - For structured logging
4. **File Upload**: `form-data` (3.0.0) - For multipart form data
5. **Timezone**: `moment-timezone` (0.5.43) - For timezone operations
6. **Tunneling**: `tunnel` (0.0.6) - For HTTP proxy tunneling
7. **Build Tools**: `ts-node`, `typescript` - No longer needed with Deno

### Node.js APIs in Use
- **File System**: `fs` module (in `StreamWrapper`, `FileStore`, `InitializeBuilder`)
- **Path**: `path` module (in `StreamWrapper`, `CommonAPIHandler`, `InitializeBuilder`)
- **Crypto**: Likely used for OAuth token generation
- **Buffer**: For binary data handling

### Import Issues
- Found 7 relative imports missing `.ts` extensions
- All imports currently use `.js` extensions (likely for compiled output)
- Need to update to use `.ts` extensions for Deno compatibility

## Migration Steps

### Phase 1: Configuration Migration

#### 1.1 Replace package.json + tsconfig.json with deno.json
**Priority**: High
**Estimated Time**: 2 hours

Create `deno.json` with:
- **Compiler options** (based on current tsconfig.json)
- **Import map** using npm: specifiers for existing dependencies
- **Tasks** for common operations including import fixing
- **Permissions** configuration
- **Lint and format** settings

**Key Strategy**: Use `npm:` imports to maintain existing Node.js dependencies during migration

**Configuration Details**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": false,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "exactOptionalPropertyTypes": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "imports": {
    "mysql": "npm:mysql@^2.18.1",
    "winston": "npm:winston@^3.2.1",
    "form-data": "npm:form-data@^3.0.0",
    "got": "npm:got@^11.8.1",
    "moment-timezone": "npm:moment-timezone@0.5.43",
    "tunnel": "npm:tunnel@0.0.6"
  },
  "tasks": {
    "test": "deno test --allow-all",
    "build": "deno compile --allow-all index.ts",
    "dev": "deno run --allow-all --watch index.ts",
    "fix-imports": "deno run --allow-read --allow-write fix-imports.ts",
    "check": "deno check **/*.ts",
    "fmt": "deno fmt",
    "lint": "deno lint"
  },
  "permissions": {
    "net": true,
    "read": true,
    "write": true,
    "env": true
  }
}
```

### Phase 2: Import System Migration

#### 2.1 Update Relative Imports (AUTOMATED)
**Priority**: Critical  
**Estimated Time**: 1 hour (automated script execution)

**Scope**: 4,252+ relative imports across 1,334+ files need `.ts` extensions

**Automated Solution**: Created `fix-imports.ts` script that:
- Scans all `.ts` files in the project
- Identifies relative imports missing `.ts` extensions  
- Automatically adds `.ts` extensions where appropriate
- Validates import paths exist before modification
- Generates detailed report of all changes

**Usage**:
```bash
deno run --allow-read --allow-write fix-imports.ts
```

**Example Changes**:
```typescript
// Before
import { DataCenter } from './data_center'
import { SDKException } from '../../core/com/zoho/crm/api/exception/sdk_exception'

// After  
import { DataCenter } from './data_center.ts'
import { SDKException } from '../../core/com/zoho/crm/api/exception/sdk_exception.ts'
```

#### 2.2 Remove .js Extensions from zohocrmsdk.ts
**Priority**: High
**Estimated Time**: 1 hour

The main `zohocrmsdk.ts` file has numerous imports with `.js` extensions that need to be updated to `.ts` for Deno compatibility.

### Phase 3: Node.js API Replacement

#### 3.1 Replace HTTP Client (got → fetch)
**Priority**: Critical
**Estimated Time**: 8 hours

**Files to Update**:
- `routes/controllers/api_http_connector.ts`
- `models/authenticator/oauth_token.ts`

**Migration Details**:
- Replace `got` with Deno's native `fetch` API
- Update request/response handling
- Maintain proxy support using native Deno capabilities
- Update timeout handling
- Ensure streaming support for file uploads

**Implementation Notes**:
- Deno's `fetch` is standards-compliant
- Proxy configuration needs manual implementation
- Response streaming available via `ReadableStream`

#### 3.2 Replace File System Operations (fs → Deno.*)
**Priority**: High
**Estimated Time**: 4 hours

**Files to Update**:
- `utils/util/stream_wrapper.ts`
- `models/authenticator/store/file_store.ts`
- `routes/initialize_builder.ts`

**Migration Details**:
```typescript
// Before (Node.js)
import * as fs from "fs";
fs.existsSync(path)
fs.readFileSync(path, 'utf-8')
fs.writeFileSync(path, data, 'utf-8')
fs.createReadStream(path)

// After (Deno)
await Deno.stat(path).catch(() => null) // For existence check
await Deno.readTextFile(path)
await Deno.writeTextFile(path, data)
(await Deno.open(path)).readable // For streams
```

#### 3.3 Replace Path Operations (path → URL/pathname)
**Priority**: Medium
**Estimated Time**: 2 hours

**Files to Update**:
- `utils/util/stream_wrapper.ts`
- `routes/initialize_builder.ts`
- `routes/middlewares/common_api_handler.ts`

**Migration Details**:
```typescript
// Before
import * as path from "path";
path.basename(filePath)

// After  
import { basename } from "https://deno.land/std@0.208.0/path/mod.ts";
basename(filePath)
```

#### 3.4 Replace Database Client (mysql → deno_mysql)
**Priority**: Medium
**Estimated Time**: 6 hours

**Files to Update**:
- `models/authenticator/store/db_store.ts`

**Migration Details**:
- Replace `mysql` package with `https://deno.land/x/mysql@v2.12.1/mod.ts`
- Update connection syntax
- Maintain connection pooling functionality
- Update query execution patterns

#### 3.5 Replace Logging (winston → std/log)
**Priority**: Medium
**Estimated Time**: 4 hours

**Files to Update**:
- `routes/controllers/api_http_connector.ts`
- `routes/middlewares/common_api_handler.ts`  
- `routes/initializer.ts`
- `models/authenticator/oauth_token.ts`
- `utils/util/utility.ts`
- `routes/logger/sdk_logger.ts`
- `utils/util/module_fields_handler.ts`
- `routes/header_map.ts`
- `routes/parameter_map.ts`

**Migration Details**:
- Replace `winston` with Deno's standard logging library
- Maintain log levels and formatting
- Update log output configuration

#### 3.6 Replace Form Data (form-data → FormData)
**Priority**: Medium
**Estimated Time**: 3 hours

**Files to Update**:
- `utils/util/form_data_converter.ts`
- `models/authenticator/oauth_token.ts`

**Migration Details**:
- Replace `form-data` package with native `FormData` API
- Update multipart form data handling
- Ensure file upload compatibility

#### 3.7 Replace Timezone Library (moment-timezone → Temporal)
**Priority**: Low
**Estimated Time**: 2 hours

**Files to Update**:
- `utils/util/datatype_converter.ts`
- `core/com/zoho/crm/api/shift_hours/shift_hours.ts`
- `core/com/zoho/crm/api/users/users.ts`
- `core/com/zoho/crm/api/email_drafts/schedule_details.ts`

**Migration Details**:
- Replace `moment-timezone` with modern `Temporal` API or standard `Intl` APIs
- Update timezone conversion logic
- Maintain date/time formatting consistency

### Phase 4: Dependency Updates

#### 4.1 Remove Node.js Specific Dependencies
**Priority**: High
**Estimated Time**: 1 hour

Remove the following from dependency management:
- `@types/mysql`
- `@types/tunnel` 
- `ts-node`
- `typescript` (Deno has built-in TypeScript support)

#### 4.2 Update External Dependencies  
**Priority**: Low (using npm: imports)
**Estimated Time**: 1 hour

Using `npm:` imports allows keeping existing dependencies:
- All current dependencies can be imported via `npm:` specifier
- No need to find Deno-specific alternatives initially
- Future optimization can gradually replace with Deno-native packages

### Phase 5: Testing & Validation

#### 5.1 Create Test Scripts
**Priority**: High
**Estimated Time**: 4 hours

- Port existing sample scripts to Deno
- Create integration tests for core functionality
- Test OAuth flow with Deno runtime
- Validate file upload/download operations

#### 5.2 Performance Testing
**Priority**: Medium
**Estimated Time**: 2 hours

- Compare performance between Node.js and Deno versions
- Benchmark HTTP requests and file operations
- Validate memory usage patterns

### Phase 6: Documentation Updates

#### 6.1 Update README.md
**Priority**: Medium
**Estimated Time**: 2 hours

- Replace Node.js installation instructions with Deno setup
- Update dependency installation section
- Revise usage examples for Deno runtime
- Update system requirements

#### 6.2 Update Sample Scripts
**Priority**: Medium
**Estimated Time**: 3 hours

Update all sample scripts in `samples/` directory:
- Replace Node.js specific imports
- Update execution instructions
- Ensure compatibility with Deno permissions model

## Risk Assessment

### High Risk Items
1. **HTTP Client Migration**: Complex proxy and streaming support
2. **Database Operations**: Connection pooling and transaction handling
3. **File System Operations**: Permission model differences

### Medium Risk Items
1. **OAuth Token Management**: Crypto operations compatibility
2. **Form Data Handling**: Multipart upload complexity
3. **Logging Integration**: Format compatibility

### Low Risk Items
1. **Timezone Operations**: Well-established alternatives available
2. **Path Operations**: Standard library equivalents exist
3. **Configuration Migration**: Straightforward mapping

## Success Criteria

1. **Functional Compatibility**: All existing API functionality works identically
2. **Performance**: No significant performance degradation (< 10%)
3. **Security**: Maintains current security standards
4. **Developer Experience**: Clear migration path and documentation
5. **Testing**: 100% test coverage maintained

## Timeline Estimate

**Total Estimated Time**: 40 hours (reduced due to automation and npm: imports)

**Breakdown**:
- Phase 1 (Configuration): 2 hours
- Phase 2 (Imports): 1 hour (automated script)  
- Phase 3 (APIs): 29 hours
- Phase 4 (Dependencies): 1 hour (npm: imports reduce work)
- Phase 5 (Testing): 6 hours
- Phase 6 (Documentation): 5 hours

**Recommended Schedule**: 2-3 weeks with 2-3 developers

## Post-Migration Considerations

1. **Continuous Integration**: Update CI/CD pipelines for Deno
2. **Publishing**: Update package publishing for Deno ecosystem
3. **Monitoring**: Establish runtime monitoring for Deno deployment
4. **Community**: Engage with Deno community for feedback
5. **Maintenance**: Establish maintenance procedures for Deno-specific issues

## Conclusion

This migration plan provides a systematic approach to converting the Zoho CRM TypeScript SDK from Node.js to Deno 2.0. The plan prioritizes critical functionality while minimizing risk through careful dependency analysis and phased implementation. Success depends on thorough testing and maintaining backward compatibility for API consumers.
