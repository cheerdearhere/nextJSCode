# I. docker에서 설치하기
## A. db 설치
### 1. 이미지 pull
입력
```dockerfile
PS C:\Users\user> docker pull mcr.microsoft.com/mssql/server:2022-latest
```
출력
```dockerfile
2022-latest: Pulling from mssql/server
e481c36a257f: Pull complete
167fcf789ae3: Pull complete
de849cbae9b1: Pull complete
Digest: sha256:3adc70cba564b18190340eb4b82d11dd1c99dbca5fc490b20290f8f6a138069f
Status: Downloaded newer image for mcr.microsoft.com/mssql/server:2022-latest
mcr.microsoft.com/mssql/server:2022-latest
What's Next?
1. Sign in to your Docker account → docker login
2. View a summary of image vulnerabilities and recommendations → docker scout quickview mcr.microsoft.com/mssql/server:2022-latest
```
## B. 이미지를 포함한 컨테이너 동작시키기
### 1. 이미지를 갖는 컨테이너 생성
입력
```dockerfile
    docker run 
        -e "ACCEPT_EULA=Y"  기본설정
        -e "MSSQL_SA_PASSWORD=aA12345678" 비밀번호 
        -p 1433:1433  포트
        --name mssql1 컨테이너명
        --hostname aa 컨테이너이름. 입력하지않으면 난수로 처리
        -d mcr.microsoft.com/mssql/server:2022-latest 이미지
```
생성확인: 현재 존재하는 이미지 정보 확인하기
```dockerfile
docker ps -a
```
결과
```dockerfile
CONTAINER ID   IMAGE                                        COMMAND                   CREATED          STATUS         PORTS                    NAMES
a81d19f031e1   mcr.microsoft.com/mssql/server:2022-latest   "/opt/mssql/bin/perm…"   45 seconds ago   Up 32 seconds   0.0.0.0:1433->1433/tcp   mssql1
9b84253f9110   postgres                                     "docker-entrypoint.s…"   7 days ago       Exited (0) 7 minutes ago                 rest
```
### 2. 컨테이너 접속하기
```dockerfile
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

docker exec 
    -t TTY 할당(Allocate a pseudo-TTY)
    -i 인터랙티브 모드
    mssql1 컨테이너명
    cat /var/opt/mssql/log/errorlog 로그기록
    bash 규칙
```
<details>
<summary>mssql 처리 결과 보기(내용 김...)</summary>

2023-11-16 00:42:50.70 Server      Microsoft SQL Server 2022 (RTM-CU9) (KB5030731) - 16.0.4085.2 (X64)
Sep 27 2023 12:05:43
Copyright (C) 2022 Microsoft Corporation
Developer Edition (64-bit) on Linux (Ubuntu 20.04.6 LTS) <X64>
2023-11-16 00:42:50.71 Server      UTC adjustment: 0:00
2023-11-16 00:42:50.72 Server      (c) Microsoft Corporation.
2023-11-16 00:42:50.72 Server      All rights reserved.
2023-11-16 00:42:50.72 Server      Server process ID is 436.
2023-11-16 00:42:50.73 Server      Logging SQL Server messages in file '/var/opt/mssql/log/errorlog'.
2023-11-16 00:42:50.73 Server      Registry startup parameters:
-d /var/opt/mssql/data/master.mdf
-l /var/opt/mssql/data/mastlog.ldf
-e /var/opt/mssql/log/errorlog
2023-11-16 00:42:50.74 Server      SQL Server detected 1 sockets with 2 cores per socket and 4 logical processors per socket, 4 total logical processors; using 4 logical processors based on SQL Server licensing. This is an informational message; no user action is required.
2023-11-16 00:42:50.75 Server      SQL Server is starting at normal priority base (=7). This is an informational message only. No user action is required.
2023-11-16 00:42:50.77 Server      Detected 6325 MB of RAM. This is an informational message; no user action is required.
2023-11-16 00:42:50.77 Server      Using conventional memory in the memory manager.
2023-11-16 00:42:50.78 Server      Detected pause instruction latency: 38 cycles.
2023-11-16 00:42:50.78 Server      Page exclusion bitmap is enabled.
2023-11-16 00:42:50.84 Server      Buffer pool extension is not supported on Linux platform.
2023-11-16 00:42:50.85 Server      Buffer Pool: Allocating 1048576 bytes for 922860 hashPages.
2023-11-16 00:42:51.33 Server      Buffer pool extension is already disabled. No action is necessary.
2023-11-16 00:42:53.04 Server      Installing Client TLS certificates to the store.
2023-11-16 00:42:53.08 Server      Error searching first file in /var/opt/mssql/security/ca-certificates: 3(The system cannot find the path specified.)
2023-11-16 00:42:53.10 Server      CPU vectorization level(s) detected:  SSE SSE2 SSE3 SSSE3 SSE41 SSE42 POPCNT
2023-11-16 00:42:53.25 Server      Successfully initialized the TLS configuration. Allowed TLS protocol versions are ['1.0 1.1 1.2']. Allowed TLS ciphers are ['ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:AES256-GCM-SHA384:AES128-GCM-SHA256:AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA:!DHE-RSA-AES256-GCM-SHA384:!DHE-RSA-AES128-GCM-SHA256:!DHE-RSA-AES256-SHA:!DHE-RSA-AES128-SHA'].
2023-11-16 00:42:53.32 Server      Query Store settings initialized with enabled = 1,
2023-11-16 00:42:53.37 Server      The maximum number of dedicated administrator connections for this instance is '1'
2023-11-16 00:42:53.37 Server      Node configuration: node 0: CPU mask: 0x000000000000000f:0 Active CPU mask: 0x000000000000000f:0. This message provides a description of the NUMA configuration for this computer. This is an informational message only. No user action is required.
2023-11-16 00:42:53.41 Server      Using dynamic lock allocation.  Initial allocation of 2500 Lock blocks and 5000 Lock Owner blocks per node.  This is an informational message only.  No user action is required.
2023-11-16 00:42:53.53 Server      In-Memory OLTP initialized on lowend machine.
2023-11-16 00:42:53.58 Server      CLR version v4.0.30319 loaded.
2023-11-16 00:42:53.62 Server      [INFO] Created Extended Events session 'hkenginexesession'
2023-11-16 00:42:53.64 Server      Database Instant File Initialization: enabled. For security and performance considerations see the topic 'Database Instant File Initialization' in SQL Server Books Online. This is an informational message only. No user action is required.
2023-11-16 00:42:53.72 Server      Total Log Writer threads: 2. This is an informational message; no user action is required.
2023-11-16 00:42:53.78 Server      clflushopt is selected for pmem flush operation.
2023-11-16 00:42:53.80 Server      Software Usage Metrics is disabled.
2023-11-16 00:42:53.83 spid18s     [1]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
2023-11-16 00:42:53.88 spid18s     Starting up database 'master'.
2023-11-16 00:42:54.19 spid18s     The tail of the log for database master is being rewritten to match the new sector size of 4096 bytes.  1024 bytes at offset 396288 in file /var/opt/mssql/data/mastlog.ldf will be written.
2023-11-16 00:42:54.47 spid18s     Converting database 'master' from version 927 to the current version 957.
2023-11-16 00:42:54.48 spid18s     Database 'master' running the upgrade step from version 927 to version 928.
2023-11-16 00:42:54.65 spid18s     Database 'master' running the upgrade step from version 928 to version 929.
2023-11-16 00:42:54.91 spid18s     Database 'master' running the upgrade step from version 929 to version 930.
2023-11-16 00:42:54.95 spid18s     Database 'master' running the upgrade step from version 930 to version 931.
2023-11-16 00:42:55.02 spid18s     Database 'master' running the upgrade step from version 931 to version 932.
2023-11-16 00:42:55.06 spid18s     Database 'master' running the upgrade step from version 932 to version 933.
2023-11-16 00:42:55.12 spid18s     Database 'master' running the upgrade step from version 933 to version 934.
2023-11-16 00:42:55.16 Server      Common language runtime (CLR) functionality initialized.
2023-11-16 00:42:55.18 spid18s     Database 'master' running the upgrade step from version 934 to version 935.
2023-11-16 00:42:55.28 spid18s     Database 'master' running the upgrade step from version 935 to version 936.
2023-11-16 00:42:55.32 spid18s     Database 'master' running the upgrade step from version 936 to version 937.
2023-11-16 00:42:55.35 spid18s     Database 'master' running the upgrade step from version 937 to version 938.
2023-11-16 00:42:55.43 spid18s     Database 'master' running the upgrade step from version 938 to version 939.
2023-11-16 00:42:55.46 spid18s     Database 'master' running the upgrade step from version 939 to version 940.
2023-11-16 00:42:55.54 spid18s     Database 'master' running the upgrade step from version 940 to version 941.
2023-11-16 00:42:55.58 spid18s     Database 'master' running the upgrade step from version 941 to version 942.
2023-11-16 00:42:55.60 spid18s     Database 'master' running the upgrade step from version 942 to version 943.
2023-11-16 00:42:55.75 spid18s     Database 'master' running the upgrade step from version 943 to version 944.
2023-11-16 00:42:55.79 spid18s     Database 'master' running the upgrade step from version 944 to version 945.
2023-11-16 00:42:55.90 spid18s     Database 'master' running the upgrade step from version 945 to version 946.
2023-11-16 00:42:55.95 spid18s     Database 'master' running the upgrade step from version 946 to version 947.
2023-11-16 00:42:56.03 spid18s     Database 'master' running the upgrade step from version 947 to version 948.
2023-11-16 00:42:56.09 spid18s     Database 'master' running the upgrade step from version 948 to version 949.
2023-11-16 00:42:56.16 spid18s     Database 'master' running the upgrade step from version 949 to version 950.
2023-11-16 00:42:56.22 spid18s     Database 'master' running the upgrade step from version 950 to version 951.
2023-11-16 00:42:56.39 spid18s     Database 'master' running the upgrade step from version 951 to version 952.
2023-11-16 00:42:56.50 spid18s     Database 'master' running the upgrade step from version 952 to version 953.
2023-11-16 00:42:56.60 spid18s     Database 'master' running the upgrade step from version 953 to version 954.
2023-11-16 00:42:56.63 spid18s     Database 'master' running the upgrade step from version 954 to version 955.
2023-11-16 00:42:56.69 spid18s     Database 'master' running the upgrade step from version 955 to version 956.
2023-11-16 00:42:56.77 spid18s     Database 'master' running the upgrade step from version 956 to version 957.
2023-11-16 00:42:56.84 Server      External governance manager initialized
2023-11-16 00:42:57.19 spid21s     [32767]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
2023-11-16 00:42:57.23 spid21s     Starting up database 'mssqlsystemresource'.
2023-11-16 00:42:57.25 spid21s     The resource database build version is 16.00.4085. This is an informational message only. No user action is required.
2023-11-16 00:42:57.36 spid29s     Password policy update was successful.
2023-11-16 00:42:57.37 spid21s     [3]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
2023-11-16 00:42:57.39 spid21s     Starting up database 'model'.
2023-11-16 00:42:57.42 spid18s     [32762]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
2023-11-16 00:42:57.42 spid18s     Starting up database 'model_replicatedmaster'.
2023-11-16 00:42:57.65 spid18s     The tail of the log for database model_replicatedmaster is being rewritten to match the new sector size of 4096 bytes.  2560 bytes at offset 99840 in file /var/opt/mssql/data/model_replicatedmaster.ldf will be written.
2023-11-16 00:42:57.67 spid21s     The tail of the log for database model is being rewritten to match the new sector size of 4096 bytes.  2048 bytes at offset 75776 in file /var/opt/mssql/data/modellog.ldf will be written.
2023-11-16 00:42:57.93 spid21s     Converting database 'model' from version 927 to the current version 957.
2023-11-16 00:42:57.94 spid21s     Database 'model' running the upgrade step from version 927 to version 928.
2023-11-16 00:42:58.09 spid18s     Converting database 'model_replicatedmaster' from version 927 to the current version 957.
2023-11-16 00:42:58.12 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 927 to version 928.
2023-11-16 00:42:58.10 spid21s     Database 'model' running the upgrade step from version 928 to version 929.
2023-11-16 00:42:58.20 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 928 to version 929.
2023-11-16 00:42:58.29 spid21s     Database 'model' running the upgrade step from version 929 to version 930.
2023-11-16 00:42:58.36 spid21s     Database 'model' running the upgrade step from version 930 to version 931.
2023-11-16 00:42:58.37 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 929 to version 930.
2023-11-16 00:42:58.44 spid21s     Database 'model' running the upgrade step from version 931 to version 932.
2023-11-16 00:42:58.51 spid21s     Database 'model' running the upgrade step from version 932 to version 933.
2023-11-16 00:42:58.56 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 930 to version 931.
2023-11-16 00:42:58.59 spid21s     Database 'model' running the upgrade step from version 933 to version 934.
2023-11-16 00:42:58.66 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 931 to version 932.
2023-11-16 00:42:58.68 spid21s     Database 'model' running the upgrade step from version 934 to version 935.
2023-11-16 00:42:58.73 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 932 to version 933.
2023-11-16 00:42:58.76 spid21s     Database 'model' running the upgrade step from version 935 to version 936.
2023-11-16 00:42:58.78 spid29s     A self-generated certificate was successfully loaded for encryption.
2023-11-16 00:42:58.79 spid29s     Server is listening on [ 'any' <ipv6> 1433] accept sockets 1.
2023-11-16 00:42:58.79 spid29s     Server is listening on [ 'any' <ipv4> 1433] accept sockets 1.
2023-11-16 00:42:58.81 Server      Server is listening on [ ::1 <ipv6> 1434] accept sockets 1.
2023-11-16 00:42:58.81 Server      Server is listening on [ 127.0.0.1 <ipv4> 1434] accept sockets 1.
2023-11-16 00:42:58.83 Server      Dedicated admin connection support was established for listening locally on port 1434.
2023-11-16 00:42:58.85 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 933 to version 934.
2023-11-16 00:42:58.86 spid21s     Database 'model' running the upgrade step from version 936 to version 937.
2023-11-16 00:42:58.86 spid29s     Server is listening on [ ::1 <ipv6> 1431] accept sockets 1.
2023-11-16 00:42:58.87 spid29s     Server is listening on [ 127.0.0.1 <ipv4> 1431] accept sockets 1.
2023-11-16 00:42:58.87 spid29s     SQL Server is now ready for client connections. This is an informational message; no user action is required.
2023-11-16 00:42:58.93 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 934 to version 935.
2023-11-16 00:42:58.96 spid21s     Database 'model' running the upgrade step from version 937 to version 938.
2023-11-16 00:42:58.98 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 935 to version 936.
2023-11-16 00:42:59.00 spid21s     Database 'model' running the upgrade step from version 938 to version 939.
2023-11-16 00:42:59.02 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 936 to version 937.
2023-11-16 00:42:59.04 spid21s     Database 'model' running the upgrade step from version 939 to version 940.
2023-11-16 00:42:59.08 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 937 to version 938.
2023-11-16 00:42:59.11 spid21s     Database 'model' running the upgrade step from version 940 to version 941.
2023-11-16 00:42:59.17 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 938 to version 939.
2023-11-16 00:42:59.19 spid21s     Database 'model' running the upgrade step from version 941 to version 942.
2023-11-16 00:42:59.23 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 939 to version 940.
2023-11-16 00:42:59.25 spid21s     Database 'model' running the upgrade step from version 942 to version 943.
2023-11-16 00:42:59.27 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 940 to version 941.
2023-11-16 00:42:59.33 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 941 to version 942.
2023-11-16 00:42:59.34 spid21s     Database 'model' running the upgrade step from version 943 to version 944.
2023-11-16 00:42:59.54 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 942 to version 943.
2023-11-16 00:42:59.54 spid21s     Database 'model' running the upgrade step from version 944 to version 945.
2023-11-16 00:42:59.73 spid21s     Database 'model' running the upgrade step from version 945 to version 946.
2023-11-16 00:42:59.82 spid21s     Database 'model' running the upgrade step from version 946 to version 947.
2023-11-16 00:43:00.33 spid21s     Database 'model' running the upgrade step from version 947 to version 948.
2023-11-16 00:43:00.34 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 943 to version 944.
2023-11-16 00:43:00.40 spid21s     Database 'model' running the upgrade step from version 948 to version 949.
2023-11-16 00:43:00.49 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 944 to version 945.
2023-11-16 00:43:00.52 spid21s     Database 'model' running the upgrade step from version 949 to version 950.
2023-11-16 00:43:00.58 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 945 to version 946.
2023-11-16 00:43:00.60 spid21s     Database 'model' running the upgrade step from version 950 to version 951.
2023-11-16 00:43:00.62 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 946 to version 947.
2023-11-16 00:43:00.73 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 947 to version 948.
2023-11-16 00:43:00.74 spid21s     Database 'model' running the upgrade step from version 951 to version 952.
2023-11-16 00:43:00.83 spid21s     Database 'model' running the upgrade step from version 952 to version 953.
2023-11-16 00:43:00.83 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 948 to version 949.
2023-11-16 00:43:00.87 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 949 to version 950.
2023-11-16 00:43:00.89 spid21s     Database 'model' running the upgrade step from version 953 to version 954.
2023-11-16 00:43:00.92 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 950 to version 951.
2023-11-16 00:43:00.94 spid21s     Database 'model' running the upgrade step from version 954 to version 955.
2023-11-16 00:43:00.97 spid21s     Database 'model' running the upgrade step from version 955 to version 956.
2023-11-16 00:43:01.01 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 951 to version 952.
2023-11-16 00:43:01.05 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 952 to version 953.
2023-11-16 00:43:01.06 spid21s     Database 'model' running the upgrade step from version 956 to version 957.
2023-11-16 00:43:01.12 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 953 to version 954.
2023-11-16 00:43:01.20 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 954 to version 955.
2023-11-16 00:43:01.37 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 955 to version 956.
2023-11-16 00:43:01.44 spid18s     Database 'model_replicatedmaster' running the upgrade step from version 956 to version 957.
2023-11-16 00:43:01.77 spid18s     [32761]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
2023-11-16 00:43:01.78 spid18s     Starting up database 'model_msdb'.
2023-11-16 00:43:02.05 spid18s     Converting database 'model_msdb' from version 927 to the current version 957.
2023-11-16 00:43:02.06 spid18s     Database 'model_msdb' running the upgrade step from version 927 to version 928.
2023-11-16 00:43:02.08 spid18s     Database 'model_msdb' running the upgrade step from version 928 to version 929.
2023-11-16 00:43:02.19 spid18s     Database 'model_msdb' running the upgrade step from version 929 to version 930.
2023-11-16 00:43:02.25 spid18s     Database 'model_msdb' running the upgrade step from version 930 to version 931.
2023-11-16 00:43:02.27 spid18s     Database 'model_msdb' running the upgrade step from version 931 to version 932.
2023-11-16 00:43:02.32 spid18s     Database 'model_msdb' running the upgrade step from version 932 to version 933.
2023-11-16 00:43:02.41 spid18s     Database 'model_msdb' running the upgrade step from version 933 to version 934.
2023-11-16 00:43:02.45 spid18s     Database 'model_msdb' running the upgrade step from version 934 to version 935.
2023-11-16 00:43:02.48 spid18s     Database 'model_msdb' running the upgrade step from version 935 to version 936.
2023-11-16 00:43:02.54 spid18s     Database 'model_msdb' running the upgrade step from version 936 to version 937.
2023-11-16 00:43:02.56 spid18s     Database 'model_msdb' running the upgrade step from version 937 to version 938.
2023-11-16 00:43:02.59 spid18s     Database 'model_msdb' running the upgrade step from version 938 to version 939.
2023-11-16 00:43:02.63 spid18s     Database 'model_msdb' running the upgrade step from version 939 to version 940.
2023-11-16 00:43:02.66 spid18s     Database 'model_msdb' running the upgrade step from version 940 to version 941.
2023-11-16 00:43:02.69 spid18s     Database 'model_msdb' running the upgrade step from version 941 to version 942.
2023-11-16 00:43:02.73 spid18s     Database 'model_msdb' running the upgrade step from version 942 to version 943.
2023-11-16 00:43:02.89 spid18s     Database 'model_msdb' running the upgrade step from version 943 to version 944.
2023-11-16 00:43:02.91 spid18s     Database 'model_msdb' running the upgrade step from version 944 to version 945.
2023-11-16 00:43:03.02 spid18s     Database 'model_msdb' running the upgrade step from version 945 to version 946.
2023-11-16 00:43:03.11 spid18s     Database 'model_msdb' running the upgrade step from version 946 to version 947.
2023-11-16 00:43:03.16 spid18s     Database 'model_msdb' running the upgrade step from version 947 to version 948.
2023-11-16 00:43:03.21 spid18s     Database 'model_msdb' running the upgrade step from version 948 to version 949.
2023-11-16 00:43:03.26 spid18s     Database 'model_msdb' running the upgrade step from version 949 to version 950.
2023-11-16 00:43:03.30 spid18s     Database 'model_msdb' running the upgrade step from version 950 to version 951.
2023-11-16 00:43:03.38 spid18s     Database 'model_msdb' running the upgrade step from version 951 to version 952.
2023-11-16 00:43:03.42 spid18s     Database 'model_msdb' running the upgrade step from version 952 to version 953.
2023-11-16 00:43:03.48 spid18s     Database 'model_msdb' running the upgrade step from version 953 to version 954.
2023-11-16 00:43:03.55 spid18s     Database 'model_msdb' running the upgrade step from version 954 to version 955.
2023-11-16 00:43:03.63 spid18s     Database 'model_msdb' running the upgrade step from version 955 to version 956.
2023-11-16 00:43:03.74 spid18s     Database 'model_msdb' running the upgrade step from version 956 to version 957.
2023-11-16 00:43:04.06 spid18s     Resource governor reconfiguration succeeded.
2023-11-16 00:43:04.06 spid18s     SQL Server Audit is starting the audits. This is an informational message. No user action is required.
2023-11-16 00:43:04.07 spid37s     Attribute synchronization initialized
2023-11-16 00:43:04.12 spid37s     Attribute synchronization manager initialized
2023-11-16 00:43:04.10 spid18s     SQL Server Audit has started the audits. This is an informational message. No user action is required.
2023-11-16 00:43:04.21 spid18s     XE session 'system_health' started.
2023-11-16 00:43:04.36 spid18s     SQL Trace ID 1 was started by login "sa".
2023-11-16 00:43:04.40 spid18s     Server name is 'a81d19f031e1'. This is an informational message only. No user action is required.
2023-11-16 00:43:04.46 spid21s     Clearing tempdb database.
2023-11-16 00:43:04.46 spid57s     Always On: The availability replica manager is starting. This is an informational message only. No user action is required.
2023-11-16 00:43:04.47 spid57s     Always On: The availability replica manager is waiting for the instance of SQL Server to allow client connections. This is an informational message only. No user action is required.
2023-11-16 00:43:04.46 spid58s     [4]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
2023-11-16 00:43:04.50 spid58s     Starting up database 'msdb'.
2023-11-16 00:43:04.92 spid58s     Converting database 'msdb' from version 927 to the current version 957.
2023-11-16 00:43:04.93 spid58s     Database 'msdb' running the upgrade step from version 927 to version 928.
2023-11-16 00:43:05.15 spid58s     Database 'msdb' running the upgrade step from version 928 to version 929.
2023-11-16 00:43:05.16 spid21s     [2]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
2023-11-16 00:43:05.18 spid21s     Starting up database 'tempdb'.
2023-11-16 00:43:05.30 spid58s     Database 'msdb' running the upgrade step from version 929 to version 930.
2023-11-16 00:43:05.38 spid58s     Database 'msdb' running the upgrade step from version 930 to version 931.
2023-11-16 00:43:05.39 spid21s     The tempdb database has 1 data file(s).
2023-11-16 00:43:05.41 spid57s     The Service Broker endpoint is in disabled or stopped state.
2023-11-16 00:43:05.42 spid57s     The Database Mirroring endpoint is in disabled or stopped state.
2023-11-16 00:43:05.46 spid58s     Database 'msdb' running the upgrade step from version 931 to version 932.
2023-11-16 00:43:05.49 spid58s     Database 'msdb' running the upgrade step from version 932 to version 933.
2023-11-16 00:43:05.49 spid57s     Service Broker manager has started.
2023-11-16 00:43:05.57 spid58s     Database 'msdb' running the upgrade step from version 933 to version 934.
2023-11-16 00:43:05.61 spid58s     Database 'msdb' running the upgrade step from version 934 to version 935.
2023-11-16 00:43:05.63 spid58s     Database 'msdb' running the upgrade step from version 935 to version 936.
2023-11-16 00:43:05.68 spid58s     Database 'msdb' running the upgrade step from version 936 to version 937.
2023-11-16 00:43:05.71 spid58s     Database 'msdb' running the upgrade step from version 937 to version 938.
2023-11-16 00:43:05.75 spid58s     Database 'msdb' running the upgrade step from version 938 to version 939.
2023-11-16 00:43:05.78 spid58s     Database 'msdb' running the upgrade step from version 939 to version 940.
2023-11-16 00:43:05.81 spid58s     Database 'msdb' running the upgrade step from version 940 to version 941.
2023-11-16 00:43:05.84 spid58s     Database 'msdb' running the upgrade step from version 941 to version 942.
2023-11-16 00:43:05.87 spid58s     Database 'msdb' running the upgrade step from version 942 to version 943.
2023-11-16 00:43:05.96 spid58s     Database 'msdb' running the upgrade step from version 943 to version 944.
2023-11-16 00:43:06.01 spid58s     Database 'msdb' running the upgrade step from version 944 to version 945.
2023-11-16 00:43:06.08 spid58s     Database 'msdb' running the upgrade step from version 945 to version 946.
2023-11-16 00:43:06.11 spid58s     Database 'msdb' running the upgrade step from version 946 to version 947.
2023-11-16 00:43:06.15 spid58s     Database 'msdb' running the upgrade step from version 947 to version 948.
2023-11-16 00:43:06.19 spid58s     Database 'msdb' running the upgrade step from version 948 to version 949.
2023-11-16 00:43:06.23 spid58s     Database 'msdb' running the upgrade step from version 949 to version 950.
2023-11-16 00:43:06.27 spid58s     Database 'msdb' running the upgrade step from version 950 to version 951.
2023-11-16 00:43:06.33 spid58s     Database 'msdb' running the upgrade step from version 951 to version 952.
2023-11-16 00:43:06.36 spid58s     Database 'msdb' running the upgrade step from version 952 to version 953.
2023-11-16 00:43:06.40 spid58s     Database 'msdb' running the upgrade step from version 953 to version 954.
2023-11-16 00:43:06.43 spid58s     Database 'msdb' running the upgrade step from version 954 to version 955.
2023-11-16 00:43:06.47 spid58s     Database 'msdb' running the upgrade step from version 955 to version 956.
2023-11-16 00:43:06.60 spid58s     Database 'msdb' running the upgrade step from version 956 to version 957.
2023-11-16 00:43:06.81 spid18s     Recovery is complete. This is an informational message only. No user action is required.
2023-11-16 00:43:06.88 spid27s     The default language (LCID 0) has been set for engine and full-text services.
2023-11-16 00:43:08.08 spid27s     The tempdb database has 4 data file(s).
</details>


### 3. MS-SQL 접속 화면
실행
```dockerfile
docker exec -i -t mssql1 bash
```
위의 컨테이너 정보(docker ps -a)로 db 접속
mssql@CONTAINER_ID :/$ COMMAND -S 서버호스트 -U 유저명 -P 환경변수로지정한비밀번호
```dockerfile
mssql@a81d19f031e1:/$ /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P aA12345678
1> {수식입력칸}
```
## C. mssql 작성하기
### 1. mssql 사용방법
#### a. 사용할 sql문을 작성한다. 
#### b. 원하는 결과(view가 필요하다면 select문까지)를 다 입력했다면 'GO'를 입력해 수행시킨다. 
### 2. 예시
#### a. 등록된 DB 조회
```dockerfile
mssql@a81d19f031e1:/$ /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "aA12345678"
1> create database nextshop;
2> select Name from sys.databases;
3> go
```
결과
```dockerfile
Name

--------------------------------------------------------------------------------------------------------------------------------
master

tempdb

model

msdb

nextshop


(5 rows affected)
```
#### b. database(스키마) 선택하기
```dockerfile
1> use nextshop;
2> go
```
결과
```dockerfile
Changed database context to 'nextshop'.
```
#### c. 테이블 생성하기
```dockerfile
1> create table next_product
2> ( id INT
3> , title NVARCHAR(100)
4> , quantity INT
5> , price INT);
6> go
```
생성만하면 결과는 없음
#### d. 테이블 조회하기
```dockerfile
1> select * from next_product;
```
결과
```dockerfile
title                                                         quantity    price
----------------------------------------------------------- ----------- -----------
(1 rows affected)
```
#### e. 입력 후 조회하기
```dockerfile
1> insert into next_product values(1, 'newer banana', 20, 13000);
2> select * from next_product;
3> go
```
결과값은 자료유형에 따라 정렬이 달라진다(INT는 우측 정렬, 문자열은 좌측정렬).
```dockerfile
id          title                                              quantity    price
----------- ------------------------------------------------ ----------- -----------
          1 newer banana                                             20       13000

(1 rows affected)

```