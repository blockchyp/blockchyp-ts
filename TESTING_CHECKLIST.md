# Security Remediation Testing Checklist

**Repository:** blockchyp-ts  
**Purpose:** Validate security fixes don't break functionality

---

## Pre-Remediation Baseline

### 1. Establish Baseline Test Results

```bash
cd /Users/mikecampbell/Projects/blockchyp-ts

# Clean install
rm -rf node_modules package-lock.json
npm install

# Run tests and record results
npm test > /tmp/baseline-tests.log 2>&1

# Build and record
npm run build > /tmp/baseline-build.log 2>&1

# Check bundle size
ls -lh _bundles/blockchyp.min.js
```

Record:
- [ ] Number of passing tests: _______
- [ ] Number of failing tests: _______
- [ ] Build warnings: _______
- [ ] Bundle size: _______
- [ ] Build time: _______

---

## Phase 1: Automatic Fixes Testing

### Commands:
```bash
npm audit fix
npm test
npm run build
```

### Validation:
- [ ] All previous passing tests still pass
- [ ] No new test failures introduced
- [ ] Build completes successfully
- [ ] No new TypeScript errors
- [ ] Bundle size within 5% of baseline
- [ ] Webpack warnings count similar to baseline

### Specific Tests:
- [ ] CryptoSpec: "Should Exist" - PASS
- [ ] CryptoSpec: "Should Generate Valid Headers" - PASS
- [ ] CryptoSpec: "Should Decrypt Go Encoded AES" - PASS
- [ ] CryptoSpec: "Should Compute SHA 256 Hashes" - PASS
- [ ] SanitySpec: "Should Exist" - PASS
- [ ] SanitySpec: "Should Fetch Heartbeat" - PASS

---

## Phase 2: Axios Update Testing

### Commands:
```bash
npm install axios@1.13.6
npm test
npm run build
```

### Critical Validation:
- [ ] HTTP requests still work (SanitySpec heartbeat test)
- [ ] Request/response handling unchanged
- [ ] Error handling still functional
- [ ] Headers properly included in requests
- [ ] Timeout handling works

### Code-Level Checks:

#### /Users/mikecampbell/Projects/blockchyp-ts/src/client.ts

Test all 4 axios call sites:

1. **_terminalRequest() - Line 884**
   - [ ] Terminal communication works
   - [ ] Timeout handling correct
   - [ ] HTTPS agent properly configured
   - [ ] Headers included

2. **_dashboardRequest() - Line 905**
   - [ ] Dashboard API calls work
   - [ ] Gateway headers generated
   - [ ] Authentication works

3. **_gatewayRequest() - Line 927**
   - [ ] Gateway API calls work
   - [ ] Relay parameter handled
   - [ ] Request timeout works

4. **_assembleTerminalUrl() - Line 987**
   - [ ] Terminal URL assembly works
   - [ ] HTTP requests complete

### API Integration Test:
```bash
# If you have API credentials, test real calls:
# (Update with actual test code)
node -e "
const BlockChyp = require('./lib/index.js');
BlockChyp.setGatewayHost('https://api.blockchyp.com/');
BlockChyp.heartbeat()
  .then(r => console.log('SUCCESS:', r.data))
  .catch(e => console.log('ERROR:', e));
"
```

- [ ] Heartbeat call successful
- [ ] Response structure correct
- [ ] Error handling works

---

## Phase 3: bn.js Update Testing (CRITICAL - Breaking Change)

### Commands:
```bash
npm install bn.js@5.2.3
npm test
npm run build
```

### Pre-Update Preparation:
```bash
# Check current bn.js usage
grep -r "bn\.js" src/
grep -r "import.*bn" src/
grep -r "require.*bn" src/

# Check if elliptic depends on bn.js
npm ls bn.js
```

### Critical Crypto Validation:

#### CryptoSpec Tests - ALL MUST PASS
- [ ] "Should Exist" - PASS
- [ ] "Should Generate Valid Headers" - PASS
- [ ] "Should Decrypt Go Encoded AES" - PASS (CRITICAL)
- [ ] "Should Compute SHA 256 Hashes" - PASS (CRITICAL)

#### Crypto Functions to Validate:

1. **Gateway Headers Generation**
   ```bash
   # Test HMAC signature generation
   # Expected: Headers include Nonce, Timestamp, Authorization
   ```
   - [ ] Headers contain all required fields
   - [ ] HMAC signatures match expected values
   - [ ] Nonce generation works
   - [ ] Timestamp format correct

2. **AES Decryption**
   ```bash
   # Test vector from CryptoSpec.ts:
   # Cipher: 14b4e146a46ca9581d0900590b5d4bb9...
   # Key: 7ef938ebbd24808f800bb368a4b97ba7
   # Expected: "The quick brown fox jumped over the lazy dog."
   ```
   - [ ] Decryption produces correct plaintext
   - [ ] No padding errors
   - [ ] No encoding issues

3. **SHA-256 Hashing**
   ```bash
   # Test vector from CryptoSpec.ts:
   # Expected hash: f04e71b08dd61a4b9b88e695f09e4688b1d54dd0930450b52444bcd961b6ec6d
   ```
   - [ ] Hash computation correct
   - [ ] Output format correct (hex string)
   - [ ] No performance regression

### Elliptic Curve Operations:
- [ ] elliptic library still works with bn.js 5.x
- [ ] browserify-sign still works
- [ ] create-ecdh still works
- [ ] No errors in dependency tree

### Performance Testing:
```bash
# Time the crypto operations
time npm test

# Compare to baseline
```
- [ ] Test execution time within 20% of baseline
- [ ] No significant slowdown in crypto operations

---

## Phase 4: Dev Dependencies Testing

### Commands:
```bash
npm install webpack@5.105.4 terser-webpack-plugin@5.4.0 npm@11.12.1
npm run build
npm run prod
```

### Build Process Validation:
- [ ] TypeScript compilation successful
- [ ] Webpack bundling successful
- [ ] Minification works (terser)
- [ ] Source maps generated
- [ ] Browser bundle created

### Bundle Quality Checks:
```bash
ls -lh _bundles/
```
- [ ] blockchyp.min.js exists
- [ ] File size reasonable (< 1MB typical)
- [ ] No obvious corruption (check first/last bytes)

### Webpack Configuration:
- [ ] No webpack errors
- [ ] Performance warnings acceptable
- [ ] Tree shaking works (if applicable)
- [ ] Code splitting works (if applicable)

---

## Post-Remediation Validation

### 1. Final Audit Check:
```bash
npm audit
```

Expected Results:
- [ ] 0 critical vulnerabilities (was 2)
- [ ] 0-2 high vulnerabilities (was 10)
- [ ] 0-2 moderate vulnerabilities (was 4)
- [ ] 1-2 low vulnerabilities (elliptic remains)
- [ ] Total ≤ 3 vulnerabilities (was 22)

### 2. Dependency Tree Verification:
```bash
npm ls axios
npm ls bn.js
npm ls webpack
npm ls form-data
npm ls cipher-base
```

Expected:
- [ ] axios@1.13.6 (was 1.9.0)
- [ ] bn.js@5.2.3 (was 4.12.2)
- [ ] webpack@5.105.4 (was 5.94.0)
- [ ] form-data@4.0.4+ (was 4.0.0-4.0.3)
- [ ] cipher-base@latest (was <=1.0.4)

### 3. Package.json Verification:
```bash
cat package.json | grep -E "(axios|bn\.js|webpack|terser-webpack-plugin|npm)"
```

Expected versions:
- [ ] "axios": "^1.13.6"
- [ ] "bn.js": "^5.2.3"
- [ ] "webpack": "^5.105.4"
- [ ] "terser-webpack-plugin": "^5.4.0"
- [ ] "npm": "^11.12.1"

---

## Integration Testing

### 1. Browser Compatibility:
Test the browser bundle in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### 2. Node.js Runtime:
```bash
node --version  # Record version
node -e "require('./lib/index.js'); console.log('OK')"
```
- [ ] Module loads without errors
- [ ] No runtime warnings

### 3. TypeScript Definitions:
```bash
tsc --noEmit  # Type check only
```
- [ ] No type errors
- [ ] Definitions match implementation

---

## Regression Testing Scenarios

### Scenario 1: API Authentication
```javascript
// Test gateway header generation
const creds = {
  apiKey: "SGLATIFZD7PIMLAQJ2744MOEGI",
  bearerToken: "FI2SWNNJHJVO6DBZEF26YEHHMY",
  signingKey: "c3a8214c318dd470b0107d6c111f086b60ad695aaeb598bf7d1032eee95339a0"
};
const headers = Crypto.generateGatewayHeaders(creds);
```
- [ ] Headers generated successfully
- [ ] All required fields present
- [ ] Signature format correct

### Scenario 2: Data Encryption/Decryption
```javascript
// Test AES operations
const cipher = '14b4e146a46ca9581d0900590b5d4bb9...';
const key = '7ef938ebbd24808f800bb368a4b97ba7';
const plaintext = Crypto.decrypt(key, cipher);
```
- [ ] Decryption successful
- [ ] Output matches expected
- [ ] No errors thrown

### Scenario 3: HTTP Communication
```javascript
// Test API call
BlockChyp.setGatewayHost('https://api.blockchyp.com/');
await BlockChyp.heartbeat();
```
- [ ] Request sent successfully
- [ ] Response received
- [ ] Response format correct

---

## Rollback Plan

If tests fail after any phase:

### 1. Identify Failed Phase:
- Phase 1 (npm audit fix): `git checkout package-lock.json && npm install`
- Phase 2 (axios): `npm install axios@1.9.0`
- Phase 3 (bn.js): `npm install bn.js@4.12.2`
- Phase 4 (dev deps): Revert specific packages

### 2. Document Failure:
Record:
- Which test failed
- Error message
- Stack trace
- Environment details

### 3. Report Issue:
Create issue with:
- Dependency version
- Test failure details
- Steps to reproduce

---

## Sign-off Checklist

Before considering remediation complete:

- [ ] All automated tests pass
- [ ] All manual validation complete
- [ ] No new errors introduced
- [ ] Performance acceptable
- [ ] Bundle size acceptable
- [ ] Crypto operations verified
- [ ] HTTP communication works
- [ ] Browser compatibility confirmed
- [ ] Documentation updated
- [ ] package.json committed
- [ ] package-lock.json committed

---

## Additional Resources

### Test Execution Logs:
- Baseline: `/tmp/baseline-tests.log`
- Phase 1: `/tmp/phase1-tests.log`
- Phase 2: `/tmp/phase2-tests.log`
- Phase 3: `/tmp/phase3-tests.log`
- Phase 4: `/tmp/phase4-tests.log`

### Useful Commands:
```bash
# View full test output
npm test -- --verbose

# Run specific test
npm test -- --filter="Should Decrypt Go Encoded AES"

# Check coverage (if configured)
npm test -- --coverage

# Verify build artifacts
ls -laR _bundles/ lib/
```

---

**Tester:** _______________  
**Date:** _______________  
**Result:** PASS / FAIL  
**Notes:** _______________
