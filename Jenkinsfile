pipeline {
    agent any
    stages {
        stage ('Clone') {
            steps {
                git 'https://github.com/NguyenKhang1202/Test_Docker.git'
            }
        }
        stage ('Build image') {
            withDockerRegistry(credentialsId: 'docker-hub-id', url: 'https://index.docker.io/v1/') {
                sh 'docker build -t khangnv1202/test .'
                sh 'docker push khangnv1202/test'
            }
        }
    }
}