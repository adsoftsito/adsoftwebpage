# Hyperledger Fabric - install

## 0.- install docker-ce

 1. sudo yum update
 2. sudo yum install -y yum-utils device-mapper-persistent-data lvm2
 3. sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
 4. sudo yum install -y docker-ce
 5. sudo usermod -aG docker adsoft
 6. sudo systemctl start docker
 7. sudo docker run hello-world

## 1.- install docker-compose

1.  sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

2. sudo chmod +x /usr/local/bin/docker-compose
3. docker-compose --version


## 2.- install go
1. $ sudo yum install wget
2. $ wget https://dl.google.com/go/go1.12.9.linux-amd64.tar.gz
3. $ sudo tar -C /usr/local/ -xvf go1.12.9.linux-amd64.tar.gz
4. $ vi .bash_profile
   
   - PATH=$PATH:$HOME/.local/bin:$HOME/bin:/usr/local/go/bin
5. $ exit

## hello world - go
1. $ cd ~
2. $ mkdir go
3. $ cd go
4. $ mkdir src
5. $ cd src
6. $ mkdir hello
7. $ cd hello
8. $ vi hello.go

- package main
- import "fmt"

- func main() {
-   fmt.Printf("hello go world ! \n")
- }


9. $ go build
10. $ ./hello


## 3.- install  node 10.x

1. $ curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
2. $ sudo yum install nodejs


## 4.- install python 2.7, gcc, g++, make

1. $ sudo yum rm -fr /var/cache/yum/* 
2. $ sudo yum install gcc-g++
3. $ sudo yum group install "Development Tools"

## 5.- install fabric samples

1. $ sudo yum install git
2. $ git clone https://github.com/hyperledger/fabric-samples.git
3. $ cd fabric-samples/
4. $ curl -sSL http://bit.ly/2ysbOFE | bash -s
5. $ vi .bash_profile
   
-  PATH=$PATH:$HOME/.local/bin:$HOME/bin:/usr/local/go/bin:/home/adsoft_research/fabric-samples/bin

6. $ exit

## run hyperledger first network

1. $ cd fabric-samples/first-network

2. $ ./byfn.sh generate
3. $ ./byfn.sh up
4. $ ./byfn.sh down


## build, configure, run fab car

- https://medium.com/@kctheservant/deep-dive-into-fabcar-part-1-57c2530148a0
