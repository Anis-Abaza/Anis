pipeline {
  agent any
  stages {
    
    stage('Prepare') {
      steps {
        sh "ssh BUadmin@192.168.10.19 'cd ov-frontend && git pull origin backup'"
      }
    }
    
    stage('Build') {
      steps {
        sh "ssh BUadmin@192.168.10.19 'cd ov-frontend && npm install'"
      }
    }
    

  }
}
