#!/bin/bash

docker-compose down -v && docker system prune -a -f && docker-compose up -d --build