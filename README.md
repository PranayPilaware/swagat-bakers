# Swagat Baker's — Premium Website + DevOps Practice

A responsive single-page bakery website built from the Swagat Baker's branding/menu material supplied in the project. It is intentionally static so you can practice the full DevOps lifecycle without needing a backend first.

## What is included

- Premium responsive bakery landing page
- Swagat Baker's branded SVG logo and high-resolution bakery photography
- Menu explorer for Khari, Toast, Butter, Sandwich Bread, Loaf, Pizza Bases, Bread Specialties, Pav, Snacks, Desserts and Cakes
- WhatsApp inquiry links for individual menu items
- Custom cake section
- Continuously scrolling customer-feedback/reel strip
- Hover-to-play support for local MP4 review videos
- Mobile navigation and mobile order bar
- Docker + Nginx
- Docker Compose
- Kubernetes Deployment, Service and Ingress
- GitHub Actions Docker build workflow
- `/health` endpoint for probes and health checks

## Run locally

You can open `index.html` directly, or run through Docker:

```bash
docker build -t swagat-bakers .
docker run --rm -p 8080:10000 swagat-bakers
```

Open `http://localhost:8080`.

Or use Docker Compose:

```bash
docker compose up --build
```

## Add real customer feedback videos

Create a folder such as:

```text
assets/reviews/
```

Put your MP4 files there, then edit the `feedback` array in `app.js`:

```js
{
  title: 'Birthday Celebration',
  img: 'https://images.unsplash.com/...',
  video: 'assets/reviews/birthday-feedback.mp4',
  url: 'https://www.instagram.com/swagat.bakers/'
}
```

On desktop, the video plays muted while hovering. Clicking the card can still open the Instagram page/reel. On mobile, the card remains a normal tap target.

## Kubernetes

1. Build and push the Docker image to your registry.
2. Replace `YOUR_DOCKERHUB_USERNAME` in `k8s/deployment.yaml`.
3. Apply the manifests:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/ingress.yaml
kubectl get pods,svc,ingress
```

## DevOps practice path

1. Put this project in Git and GitHub.
2. Build/tag the Docker image locally.
3. Configure GitHub Actions CI.
4. Push the image to Docker Hub or GHCR.
5. Deploy with Kubernetes.
6. Add ConfigMap, HPA, TLS and secrets.
7. Provision cloud infrastructure with Terraform.
8. Configure hosts with Ansible.
9. Add Prometheus/Grafana and centralized logs.
10. Add a staging environment and practice rolling updates/rollback.

## Business content

Menu names and bakery details are based on the supplied Swagat Baker's materials. Before production launch, verify phone numbers, opening hours, map pin, Instagram reel links, and any claims/pricing you want to publish.

## Image quality

Use high-resolution product photography. For product photos, use at least 1200px on the long edge and export as WebP around 90–96 quality.

## Deploy to Render

This version is prepared for a Docker-based Render web service.

- Docker listens on the platform-provided `PORT` environment variable.
- Health check: `/health`
- `render.yaml` is included for Blueprint-based deployment.
- Local Docker Compose maps `localhost:8080` to container port `10000`.

Recommended flow:

1. Push this folder to a GitHub repository.
2. In Render, create a Web Service from the repository (Docker runtime) or use the included `render.yaml` Blueprint.
3. Set the health check path to `/health` if not detected from the Blueprint.
4. Deploy and verify the generated public URL.

## Image delivery

The GitHub/deployment build uses high-resolution CDN image URLs for bakery photography and a repository-native SVG brand mark. This keeps the repository lightweight and the deployed images crisp.
