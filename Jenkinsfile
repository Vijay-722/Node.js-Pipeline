pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-app"
        CONTAINER_NAME = "node-container"
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Vijay-722/Node.js-Pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$DOCKER_TAG .'
            }
        }

        stage('Deploy') {
    steps {
        sh '''
        ssh ubuntu@localhost "
        docker stop node-container || true
        docker rm node-container || true
        docker run -d --name node-container -p 3000:3000 node-app:$BUILD_NUMBER
        "
        '''
    }
}
    }

    post {
        failure {
            echo "Deployment failed. Rolling back..."
        }

        success {
            echo "Deployment Successful!"
        }
    }
} 
