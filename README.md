# DevOps Portfolio Submission for HeyPico.ai

This repository demonstrates comprehensive DevOps skills including containerization, orchestration, infrastructure as code, CI/CD, monitoring, and reverse proxy configuration.

## 📁 Project Structure

```
devops-submission/
├── app.js                         # Node.js Express application
├── package.json                   # Application dependencies
├── docker-compose.yml             # Local development setup
├── docker-k8s/                    # Docker and Kubernetes configs
│   ├── Dockerfile                 # Container configuration
│   ├── k8s-configmap.yaml        # Kubernetes ConfigMap
│   ├── k8s-deployment.yaml       # Kubernetes Deployment
│   └── k8s-service.yaml          # Kubernetes Service
├── terraform/                     # AWS infrastructure provisioning
│   ├── main.tf                   # Main Terraform configuration
│   ├── variables.tf              # Input variables
│   ├── outputs.tf                # Output values
│   └── user_data.sh              # EC2 user data script
├── cicd/                          # CI/CD pipeline configuration
│   └── Jenkinsfile               # Jenkins pipeline
├── monitoring/                    # Monitoring and alerting setup
│   ├── prometheus.yml            # Prometheus configuration
│   └── alert.rules.yml           # Alerting rules
└── nginx/                         # NGINX reverse proxy configuration
    └── nginx.conf                # NGINX configuration
```

## 🚀 Requirements Fulfilled

### 1. Web Application with Docker and Kubernetes ✅

- **Technology**: Node.js Express application
- **Files**: `Dockerfile`, Kubernetes manifests (deployment, service, configmap)
- **Demonstrates**: Pods, services, config maps, container orchestration

### 2. Infrastructure Provisioning ✅

- **Technology**: Terraform for AWS
- **Files**: `main.tf`, `variables.tf`, `outputs.tf`
- **Demonstrates**: VPC, EC2, RDS, S3, security groups, auto-scaling

### 3. CI/CD Pipeline ✅

- **Technology**: Jenkins Pipeline
- **Files**: `cicd/Jenkinsfile`
- **Demonstrates**: Build, test, security scan, auto-deploy to staging/production

### 4. Monitoring Solution ✅

- **Technology**: Prometheus + Grafana
- **Files**: `monitoring/prometheus.yml`, `monitoring/alert.rules.yml`, `docker-compose.yml`
- **Demonstrates**: Metrics collection, alerting, security monitoring, comprehensive alerts

### 5. NGINX Reverse Proxy ✅

- **Technology**: NGINX
- **Files**: `nginx.conf`
- **Demonstrates**: Load balancing, SSL termination, upstream configuration

## 🛠️ Quick Start

### Local Development with Docker Compose

```bash
# Clone the repository
git clone <repository-url>
cd Submission-Devops

# Install dependencies
npm install

# Run locally for testing
npm start

# Or run the full stack with Docker Compose
docker-compose up -d

# Access the application
# Main app: http://localhost:3000
# Prometheus: http://localhost:9090
# Grafana: http://localhost:3001 (admin/admin123)
```

### Kubernetes Deployment

```bash
# Build and push Docker image
docker build -t devops-portfolio:latest -f docker-k8s/Dockerfile .

# Deploy to Kubernetes
kubectl apply -f docker-k8s/k8s-configmap.yaml
kubectl apply -f docker-k8s/k8s-deployment.yaml
kubectl apply -f docker-k8s/k8s-service.yaml

# Check deployment status
kubectl get pods,services
```

### Terraform Infrastructure

```bash
cd terraform

# Initialize Terraform
terraform init

# Plan infrastructure changes
terraform plan

# Apply infrastructure
terraform apply

# View outputs
terraform output
```

Each directory contains detailed configuration files demonstrating production-ready DevOps practices.

## 👨‍💻 About This Portfolio

This portfolio showcases real-world DevOps implementations that I've used in production environments, demonstrating:

- Container orchestration and microservices architecture
- Infrastructure as Code best practices
- Automated CI/CD pipelines with testing
- Production-grade monitoring and alerting
- Secure reverse proxy configurations
- Security best practices and compliance

---

**Submission Date**: August 2025  
**Candidate**: [Your Name]  
**Position**: DevOps Engineer @ HeyPico.ai
