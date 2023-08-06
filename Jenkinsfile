pipeline {
    agent any
    stages {
        stage ('Clone') {
            steps {
                git 'https://github.com/NguyenKhang1202/Test_Docker.git'
            }
        }
        stage ('Build image') {
            steps {
                script {
                    docker.build("khangnv1202/test")
                }
                // withDockerRegistry(credentialsId: 'docker-hub-id', url: 'https://index.docker.io/v1/') {
                //     sh 'docker build -t khangnv1202/test .'
                // }
            }
        }
    }
}