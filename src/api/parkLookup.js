/**
 * Queries the park service for a given name.
 *
 * @param {String} parkName Name of the park to look up
 * @returns String with park info
 */
async function parkLookup(parkName) {
  const params = new URLSearchParams();
  params.set("park", parkName);

  return fetch(`/park-lookup?${params.toString()}`)
    .then((resp) => resp.json())
    .then((obj) => {
      console.debug("Got parks response!");
      return obj.info;
    })
    .catch((err) => {
      console.error("Error getting parks", err);
      throw err;
    });
}

export { parkLookup };
