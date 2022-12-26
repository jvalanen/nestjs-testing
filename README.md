Run database in docker:

```
docker run \
  --name nesting-db --rm -p 5432:5432 \
  -v $(pwd)/db/init.sql:/docker-entrypoint-initdb.d/init.sql \
  -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root \
  postgres:13
```
