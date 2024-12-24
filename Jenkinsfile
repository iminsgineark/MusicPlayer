pipeline {
    agent any

    environment {
        IMAGE_NAME = 'your-nginx-image'
        TAG = '1.0'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the repository...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    sh "docker build -t ${IMAGE_NAME}:${TAG} ."
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                echo 'Running tests on Docker container...'
                script {
                    sh "docker run --rm -d -p 8080:8080 --name test-nginx ${IMAGE_NAME}:${TAG}"
                    sh "sleep 5"  // Wait for the container to start
                    sh "curl -f http://localhost:8080 || exit 1" // Ensure the server responds
                    sh "docker stop test-nginx"
                }
            }
        }

        stage('Clean Up') {
            steps {
                echo 'Cleaning up unused Docker resources...'
                script {
                    sh "docker rmi ${IMAGE_NAME}:${TAG} || true"
                    sh "docker system prune -f"
                }
            }
        }
    }
}
