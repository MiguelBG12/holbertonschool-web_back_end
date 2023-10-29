// Define a function named cleanSet that formats and joins values from a Set.
export default function cleanSet(set, startString) {
  const newString = [];

  // Check if startString is a non-empty string.
  if (typeof startString !== 'string' || startString.length === 0) return '';

  // Iterate through the set, format values starting with startString, and add them to newString.
  for (const value of set) {
    if (value && value.startsWith(startString)) newString.push(value.slice(startString.length));
  }

  // Return the formatted values joined by '-'.
  return newString.join('-');
}
