/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

}

require("request").get("https://www.instituteforapprenticeships.org/api/apprenticeshipstandards", (error, response, body) => {
    var _apiData = JSON.parse(body),
        _versionTypes = {}
    console.log(_apiData.length + " standards in API (https://www.instituteforapprenticeships.org/api/apprenticeshipstandards)")
    _apiData.forEach(function(_standard, index) {
        _versionTypes["version " + _standard.version] = (_versionTypes["version " + _standard.version] || 0) + 1
    });
    console.log(_versionTypes)
});