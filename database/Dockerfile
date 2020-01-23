FROM mysql:8.0.19

# Create app directory
WORKDIR /usr/src/app

COPY . .

CMD mysql --host=db --port=33060 -u root@% password 'example' < ./database.sql
