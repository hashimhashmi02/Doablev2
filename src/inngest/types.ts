// E2B SDK expects milliseconds. 15 minutes = 900,000ms
// Hobby users: max 1 hour (3,600,000ms), Pro users: max 24 hours
export const SANDBOX_TIMEOUT = 15 * 60 * 1000;