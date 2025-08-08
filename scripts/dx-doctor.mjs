const REQUIRED = ["NEXT_PUBLIC_SITE_URL"];
const missing = REQUIRED.filter((k) => !process.env[k]);
if (missing.length) {
  console.error("Missing env vars:", missing.join(", "));
  process.exit(1);
}
console.log("DX doctor OK");
