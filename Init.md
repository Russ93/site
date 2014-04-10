# Initalizing

## Install

        sudo apt-get update
        sudo apt-get install apache2
        sudo apt-get update
        sudo apt-get install git
        sudo apt-get install git-core

## Git user stuff

        git config --global user.name “NAME”
        git config --global user.email Your@Email.com
        
        // check
        
        git config --list
        
## Ssh keys

        sudo mkdir ~/.ssh
        cd ~/.ssh
        ssh-keygen -t rsa -C ”YourEmail@example.com”
        Enter a passphrase
        sudo less ~/.ssh/id_rsa.pub
        // Copy this content -- yes starting at the ssh
        // paste it in the github Deploy keys

## Repos

	sudo mkdir /var/repos
	sudo mkdir /var/repos/produtcion.git
	cd /var/repos/produtcion.git
	sudo git init
	sudo nano /var/repos/produtcion.git/hooks/post-recieve

        // info
		"""
        #!/bin/sh
        GIT_WORK_TREE=/var/www git checkout -f
		"""
        
        sudo chmod User -R /var/www
        sudo chmod 775 -R /var/www
        sudo chown User -R /var/repos

## Local Dev

        cd /location
        git init
        git remote add ProdServer ssh://YourUserName@IPAddress/var/repos/SiteName.git
        
        git remote add site ssh://russ@107.170.57.28/var/repos/produtcion.git
        
## Upload basics
        
        git add -A
        git tag -a vX.X.X -m ‘Release Code or Feature Name ’
        git commit -m 'Hello World'
        git push RepoName BranchName

