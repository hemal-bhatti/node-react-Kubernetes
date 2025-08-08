pipeline {
    agent {
        label 'react'
    }

    stages {
        stage('Build Frontend Docker Image') {
            steps {
                dir('/home/hemal-bhatti/Desktop/Devops/kuber-prac/uday-kuber/frontend') {
                    sh "sudo docker build -t react ."
                }
            }
        }
        stage('Run Frontend Docker image') {
            steps{
                sh "sudo docker run -d -p 8585:80 react"
            }
        }



        stage('Build backend Docker Image') {
            steps {
                dir('/home/hemal-bhatti/Desktop/Devops/kuber-prac/uday-kuber/backend') {
                    sh "sudo docker build -t node ."
                }
            }
        }
        stage('Run Backend Docker image') {
            steps{
                sh "sudo docker run -d -p 30080:80 node"
            }
        }
        
    }
}



















// ED25519

// pipeline {
//     agent any

//     stages {
//         stage('Build Docker') {
//             steps {
//                 sh "docker build -t react ."
//             }
//         }
//         stage('Docker Run') {
//             steps {
//                 sh "docker run -d -p 8585:80 react"
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 echo 'Deploying....'
//             }
//         }
//     }
// }
