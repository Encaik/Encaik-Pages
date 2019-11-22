# Docker 使用

## 安装

### Ubuntu

#### 卸载旧版本

docker的旧版本被称为docker,docker.io 或docker-engine。如果已安装,请卸载它们:

``` sh
sudo apt-get remove docker docker-engine docker.io containerd runc
```

#### 从存储库安装

##### 设置存储库

1. 更新apt包索引:

    ``` sh
    sudo apt-get update
    ```

2. 安装软件包以允许apt通过HTTPS使用存储库:

    ``` sh
    sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
    ```

3. 添加Docker的官方GPG密钥:

    ``` sh
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    ```

    `9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88`通过搜索指纹的后8个字符,验证您现在是否拥有带有指纹的密钥 。

    ``` sh
    sudo apt-key fingerprint 0EBFCD88

    pub   rsa4096 2017-02-22 [SCEA]
          9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
    uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
    sub   rsa4096 2017-02-22 [S]
    ```

4. 使用以下命令来设置稳定的存储库。要添加 每晚或测试存储库,请在以下命令中的单词后面添加nightly或test（或同时添加）stable。

    ::: tip
    注意:下面的lsb_release -cs子命令返回Ubuntu发行版的名称,例如xenial。有时,在Linux Mint等发行版中,您可能需要更改$(lsb_release -cs) 为父Ubuntu发行版。例如,如果您使用 Linux Mint Tessa,则可以使用bionic。Docker对未经测试和不受支持的Ubuntu发行版不提供任何保证。
    :::

    ``` sh
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    ```

##### 安装Docker

1. 更新apt包索引。

    ``` sh
    sudo apt-get update
    ```

2. 安装最新版本的Docker Engine-Community和containerd,或者转到下一步安装特定版本:

    ``` sh
    sudo apt-get install docker-ce docker-ce-cli containerd.io
    ```

    ::: tip
    如果启用了多个Docker存储库,则在未在apt-get installor apt-get update命令中指定版本的情况下进行安装或更新将始终安装可能的最高版本,这可能不适合您的稳定性需求。
    :::

3. 要安装特定版本的Docker Engine-Community,请在存储库中列出可用版本,然后选择并安装:

    a. 列出您的仓库中可用的版本:

    ``` sh
    apt-cache madison docker-ce

      docker-ce | 5:18.09.1~3-0~ubuntu-xenial | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
      docker-ce | 5:18.09.0~3-0~ubuntu-xenial | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
      docker-ce | 18.06.1~ce~3-0~ubuntu       | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
      docker-ce | 18.06.0~ce~3-0~ubuntu       | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
      ...
    ```

    b. 使用第二列中的版本字符串安装特定版本,例如5:18.09.1~3-0~ubuntu-xenial。

    ``` sh
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
    ```

4. 通过运行hello-world 映像来验证是否正确安装了Docker Engine-Community 。

    ``` sh
    sudo docker run hello-world
    ```

    此命令下载测试图像并在容器中运行。容器运行时,它会打印参考消息并退出。

#### 从软件包安装

如果您不能使用Docker的存储库来安装Docker Engine-Community,则可以下载.deb要发布的 文件并手动安装。每次升级Docker时,都需要下载一个新文件。

1. 去<https://download.docker.com/linux/ubuntu/dists/>选择你的Ubuntu版本,浏览pool/stable/,选择amd64,armhf,arm64,ppc64el,或s390x,并下载.deb文件对于docker引擎。

    ::: tip
    注意:要安装夜间 软件包,stable请将URL中的单词更改 为nightly。 了解每晚和测试频道。
    :::

2. 安装Docker Engine-Community,将下面的路径更改为您下载Docker软件包的路径。

    ``` sh
    sudo dpkg -i /path/to/package.deb
    ```

    Docker守护程序会自动启动。

3. 通过运行hello-world 映像来验证是否正确安装了Docker Engine-Community 。

    ``` sh
    sudo docker run hello-world
    ```

    此命令下载测试图像并在容器中运行。容器运行时,它会打印参考消息并退出。

## 概念

### 镜像

### 容器

## 命令

## Dockerfile
