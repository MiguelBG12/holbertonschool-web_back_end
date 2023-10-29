// Export a function named loadBalancer.
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to return the promise to resolve first between chinaDownload and USDownload
  return Promise.race([chinaDownload, USDownload]);
}
