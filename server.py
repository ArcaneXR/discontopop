import http.server
import socketserver
import os

PORT = 3000
DIRECTORY = "examples"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor rodando em http://localhost:{PORT}")
    print(f"Acesse o merchant dashboard em: http://localhost:{PORT}/merchant-dashboard.html")
    httpd.serve_forever() 