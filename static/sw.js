self.addEventListener('fetch', event => {
    // Only intercept Nextcloud requests
    if (event.request.url.includes('your-nextcloud-domain')) {
      event.respondWith(
        fetch(event.request)
          .then(response => {
            const newResponse = response.clone();
            const headers = new Headers(newResponse.headers);
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
            
            return new Response(newResponse.body, {
              status: newResponse.status,
              statusText: newResponse.statusText,
              headers: headers
            });
          })
      );
    }
  });