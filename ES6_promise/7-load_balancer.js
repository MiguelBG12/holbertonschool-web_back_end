// Function to implement a load balancer using Promise.race
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]); // Returns the first resolved promise
}
