pipeline {
    agent { docker { image 'lts' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}