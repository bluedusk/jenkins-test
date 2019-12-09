pipeline {
    agent { docker { image 'node:lts' } }

    environment {
        ME = 'Dan'
    }

    stages {
        stage('build') {
            steps {
                echo "User is ${ME}"
                sh 'npm --version'
                sh 'npm run build'
            }
        }
          stage('deploy') {
            steps {
                echo "Deployment stage."
            }
        }
    } 
}