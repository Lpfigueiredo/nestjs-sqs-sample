#!/bin/bash

docker-compose up -d

sleep 10

aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name audio

# aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4566/queue/audio --message-body "Mensagem de teste"

# aws --endpoint-url=http://localhost:4566 sqs receive-message --queue-url http://localhost:4566/queue/audio --max-number-of-messages 10