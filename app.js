async function app(
  projectId = 'clearbank' // Your GCP projectId
) {
  // Imports the @google-cloud/kms client library
  const kms = require('@google-cloud/kms');

  // Instantiates an authorized client
  const client = new kms.KeyManagementServiceClient();

  // Lists keys in the "global" location.
  const locationId = 'global';

  // Lists key rings
  const parent = client.locationPath(projectId, locationId);
  const [keyRings] = await client.listKeyRings({parent});

  // Display the results
  if (keyRings.length) {
    console.log('Key rings:');
    keyRings.forEach(keyRing => console.log(keyRing.name));
  } else {
    console.log(`No key rings found.`);
  }
}

app();