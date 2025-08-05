const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.get('/', (req, res) => {
    res.json({
        message: 'DevOps Portfolio - HeyPico.ai Submission',
        version: '1.0.0',
        author: 'Junior DevOps Engineer',
        endpoints: {
            health: '/health',
            about: '/about'
        }
    });
});

app.get('/about', (req, res) => {
    res.json({
        project: 'DevOps Portfolio Submission',
        technologies: [
            'Node.js & Express',
            'Docker & Kubernetes',
            'Terraform (AWS)',
            'Jenkins CI/CD',
            'Prometheus & Grafana',
            'NGINX Reverse Proxy'
        ],
        features: [
            'Health checks for Kubernetes',
            'Metrics for Prometheus',
            'Containerized deployment',
            'Infrastructure as Code',
            'Automated CI/CD pipeline',
            'Load balancing & reverse proxy'
        ]
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`DevOps Portfolio app running on port ${port}`);
    console.log(`Health check: http://localhost:${port}/health`);
});

module.exports = app;
