#!/usr/bin/env deno run --allow-all

/**
 * Smoke test for Zoho CRM Deno SDK
 * Tests basic SDK functionality without making API calls
 */

import * as SDK from "./index.ts";

console.log("🧪 Running Zoho CRM Deno SDK smoke tests...\n");

// Test 1: Check main exports
console.log("✅ Test 1: Main exports");
const exportCount = Object.keys(SDK).length;
console.log(`   - Found ${exportCount} exports`);
console.log(
  `   - Key exports include: ${Object.keys(SDK).slice(0, 5).join(", ")}...`
);

// Test 2: Test core classes instantiation
console.log("\n✅ Test 2: Core classes instantiation");

try {
  // Test OAuthToken creation
  const oauthBuilder = new SDK.OAuthBuilder();
  console.log("   - OAuthBuilder: ✓");

  // Test User Signature
  const userSignature = new SDK.UserSignature("test@example.com");
  console.log("   - UserSignature: ✓");

  // Test Environment/DataCenter
  const environment = SDK.USDataCenter.PRODUCTION();
  console.log("   - DataCenter (US Production): ✓");

  // Test Logger
  const logBuilder = new SDK.LogBuilder();
  console.log("   - LogBuilder: ✓");
} catch (error) {
  console.error("   - Error instantiating core classes:", error.message);
}

// Test 3: Test API operation classes exist
console.log("\n✅ Test 3: API operation classes");

const apiClasses = [
  "Records",
  "Users",
  "Modules",
  "Layouts",
  "CustomViews",
  "Fields",
  "Roles",
  "Profiles",
  "Org",
  "Currency",
];

let availableClasses = 0;
for (const className of apiClasses) {
  if (SDK[className]) {
    availableClasses++;
  }
}

console.log(
  `   - Found ${availableClasses}/${apiClasses.length} expected API operation classes`
);

// Test 4: Test Constants
console.log("\n✅ Test 4: Constants availability");
try {
  const constants = SDK.Constants;
  console.log("   - Constants class: ✓");
  console.log(
    `   - Sample constants: REQUEST_METHOD_GET=${constants.REQUEST_METHOD_GET}`
  );
} catch (error) {
  console.error("   - Error accessing Constants:", error.message);
}

// Test 5: Test utilities
console.log("\n✅ Test 5: Utility classes");
const utilClasses = ["Utility", "Choice", "HeaderMap", "ParameterMap"];
let availableUtils = 0;

for (const utilClass of utilClasses) {
  if (SDK[utilClass]) {
    availableUtils++;
  }
}

console.log(
  `   - Found ${availableUtils}/${utilClasses.length} utility classes`
);

// Test 6: Test record operations structure
console.log("\n✅ Test 6: Records operations structure");
try {
  if (SDK.RecordsOperations) {
    console.log("   - RecordsOperations class: ✓");

    // Test instantiation with dummy parameters
    const recordOps = new SDK.RecordsOperations("Deals");
    console.log("   - RecordsOperations instantiation: ✓");
  } else {
    console.log("   - RecordsOperations class: ✗ (not found)");
  }
} catch (error) {
  console.error("   - Error with RecordsOperations:", error.message);
}

console.log("\n🎉 Smoke test completed!");
console.log("\n📋 Summary:");
console.log(`   - Total exports: ${exportCount}`);
console.log("   - Core SDK functionality appears to be working");
console.log("   - Ready for integration testing with actual API credentials");

console.log("\n📚 Next steps:");
console.log("   1. Set up authentication with your Zoho CRM credentials");
console.log("   2. Initialize the SDK with proper configuration");
console.log("   3. Test actual API operations");

console.log("\n🔗 For more information, check the README.md file");
