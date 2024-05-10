### Environment variables

```bash
nano ./client/.env

VITE_IMG_TOKEN # (huggingface write token) - interface api, (custom llm) - figure shit out urself  
VITE_SERVER_URL  # (http/s://domain.com) - prod, (http://localhost:8080) - dev run  
```

```bash
nano ./server/.env

MONGODB_URL     # e.g. mongodb+srv://<username>:<pass>@<clusterinfo>.mongodb.net/?retryWrites=true&w=majority&appName=<clustername>  
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
CLOUDINARY_URL
```