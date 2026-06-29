const { createReadStream, existsSync, statSync } = require('node:fs');
const { createServer } = require('node:http');
const { extname, join, normalize, resolve } = require('node:path');

const root = resolve(__dirname);
const port = Number(process.env.PORT || 3000);

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

const send = (response, status, body, contentType = 'text/plain; charset=utf-8') => {
  response.writeHead(status, {
    'content-type': contentType,
    'cache-control': status === 200 ? 'public, max-age=300' : 'no-store'
  });
  response.end(body);
};

createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(url.pathname);
  const requestedPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = normalize(join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    send(response, 403, 'Forbidden');
    return;
  }

  const candidate = existsSync(filePath) && statSync(filePath).isFile() ? filePath : join(root, 'index.html');
  const extension = extname(candidate);

  response.writeHead(200, {
    'content-type': types[extension] || 'application/octet-stream',
    'cache-control': extension === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
  });
  createReadStream(candidate).pipe(response);
}).listen(port, () => {
  console.log(`Portfolio server running on port ${port}`);
});
