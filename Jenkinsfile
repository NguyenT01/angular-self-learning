pipeline{
    agent any
    environment{
        SONAR_TOKEN = credentials('sonar-token')
        BRANCH_NAME = "${params.BRANCH}"
    }
    parameters {
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'main', name: 'BRANCH', type: 'PT_BRANCH'
        choice name: 'PROJECT_DIR', choices: ['ponyracer'], description: 'Select the project directory to build'
    }
    stages{
        stage('Clean Workspace'){
            steps{
                script{
                    deleteDir()
                }
            }
        }
        stage('Clone Repository'){
            steps {
                script {
                    echo "p: ${params.BRANCH} // ${BRANCH_NAME}"
                    echo "Using branch: ${BRANCH_NAME}"
                    git branch: "${BRANCH_NAME}", credentialsId: 'gitea-usr1', url: 'http://gitea.tsn.local/nguyents/angular-chapter8.git'
                }
            }
        }
        stage('Install Dependencies'){
            steps{
                dir("${params.PROJECT_DIR}") {
                    nodejs(nodeJSInstallationName: 'node_22lts') {
                        script{
                            sh 'node --version'
                            sh 'npm install'
                        }
                    }
                }
            }
        }
        stage('Build Project'){
            steps{
                dir("${params.PROJECT_DIR}") {
                    nodejs(nodeJSInstallationName: 'node_22lts'){
                        script{
                            sh 'npm run build'
                        }
                    }
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner1'
                    withSonarQubeEnv {
                        sh """
                            #!/bin/bash
                                ${scannerHome}/bin/sonar-scanner \
                                    -Dsonar.projectKey=angular-chapter8 \
                                    -Dsonar.host.url=http://sonar.tsn.local \
                                    -Dsonar.token=${SONAR_TOKEN} \
                                    -Dsonar.sources=. \
                                    -Dsonar.exclusions=node_modules/**,dist/** \
                                    -Dsonar.sourceEncoding=UTF-8
                        """
                    }
                }
            }
        }
        stage('Quality Gate Check') {
            steps {
                script {
                    timeout(time: 1, unit: 'MINUTES') {
                        def qualityGate = waitForQualityGate()
                        if (qualityGate.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qualityGate.status}"
                        }
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Project Build Successfully'
        }
        failure {
            echo 'Project Build Failed'
        }
        always {
            echo 'Project Build Finished'
        }
        unstable {
            echo 'Project Build Unstable'
        }
    }
}