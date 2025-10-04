# Запуск статичного сайта в Docker без Dockerfile

## 1. Требования
- Установленный Docker (Desktop или Engine).
- Каталог со статикой: `public/`, в котором находится `index.html`.

## 2. Быстрый запуск через `docker run`
Выполните команду из корня проекта, чтобы смонтировать каталог `public/` в контейнер Nginx и опубликовать сайт на порту 8080:

```bash
docker run --rm -d \
  -p 8080:80 \
  -v "$(pwd)/public:/usr/share/nginx/html:ro" \
  --name legalshield-site \
  nginx:1.27-alpine
```

> Windows PowerShell: замените `$(pwd)` на `${PWD}`.

После запуска сайт доступен по адресу: `http://localhost:8080`.

## 3. Остановка контейнера
```bash
docker stop legalshield-site
```

## 4. Дополнительно: docker-compose без Dockerfile
Если удобнее работать через Compose, создайте файл `docker-compose.yml`:

```yaml
version: "3.9"
services:
  web:
    image: nginx:1.27-alpine
    ports:
      - "8080:80"
    volumes:
      - ./public:/usr/share/nginx/html:ro
    restart: unless-stopped
```

Запуск и остановка:

```bash
docker compose up -d
docker compose down
```

Таким образом, весь контент из каталога `public/` будет обслуживаться Nginx в Docker без создания собственного Dockerfile.
