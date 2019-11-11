# Ng5

https://hyperledger-fabric.readthedocs.io/en/latest/build_network.html

# 0.- install docker-ce

0.1.- sudo yum update
0.2.- sudo yum install -y yum-utils device-mapper-persistent-data lvm2
0.3.- sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
0.4.- sudo yum install -y docker-ce
0.5.- sudo usermod -aG docker adsoft
0.6.- sudo systemctl start docker
0.7.- sudo docker run hello-world

# 1.- install docker-compose

1.1.-  sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

1.2.- sudo chmod +x /usr/local/bin/docker-compose
1.3.- docker-compose --version


# 2.- install go
$ sudo yum install wget
$ wget https://dl.google.com/go/go1.12.9.linux-amd64.tar.gz
$ sudo tar -C /usr/local/ -xvf go1.12.9.linux-amd64.tar.gz
$ vi .bash_profile
   
   PATH=$PATH:$HOME/.local/bin:$HOME/bin:/usr/local/go/bin
$ exit

# hello world - go
$ cd ~
$ mkdir go
$ cd go
$ mkdir src
$ cd src
$ mkdir hello
$ cd hello

$ vi hello.go

package main
import "fmt"

func main() {
  fmt.Printf("hello go world ! \n")
}


$ go build
$ ./hello


# 3.- install  node 10.x

$ curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
$ sudo yum install nodejs


# 4.- install python 2.7, gcc, g++, make

$ sudo yum rm -fr /var/cache/yum/* 
$ sudo yum install gcc-g++
$ sudo yum group install "Development Tools"

# 5.- install fabric samples

$ sudo yum install git
$ git clone https://github.com/hyperledger/fabric-samples.git
$ cd fabric-samples/
$ curl -sSL http://bit.ly/2ysbOFE | bash -s

$ vi .bash_profile
   
   PATH=$PATH:$HOME/.local/bin:$HOME/bin:/usr/local/go/bin:/home/adsoft_research/fabric-samples/bin
$ exit

# run hyperledger first network

$ cd fabric-samples/first-network

$ ./byfn.sh generate
$ ./byfn.sh up
$ ./byfn.sh down


## build, configure, run fab car

https://medium.com/@kctheservant/deep-dive-into-fabcar-part-1-57c2530148a0
