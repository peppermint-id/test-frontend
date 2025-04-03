export default async (request, context) => {
	// Fetch the original response
	const response = await context.next();

	// Clone the response to modify headers
	const newHeaders = new Headers(response.headers);

	// Remove some headers from WP
	newHeaders.delete("Link");
	newHeaders.delete("X-Pingback");

	// Rewrite Location header path to relative
	const headersLocation = response.headers.get("Location");
	if (headersLocation && headersLocation.indexOf('//tetrate.pm.peppermint.id') > -1) {
		const url = new URL(headersLocation);
		const relativeUrl = url.pathname + url.search + url.hash;
		newHeaders.set("Location", relativeUrl);
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders,
	});
};
