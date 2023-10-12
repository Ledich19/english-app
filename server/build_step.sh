#!/bin/bash

echo "Build script"

# Перейти в папку с клиентской частью (Next.js)
# cd client

# Убедиться, что у вас установлены зависимости
npm install

# Собрать клиентскую часть (Next.js)
npm run build

# # Перейти в папку с серверной частью (Nest.js)
# cd ../server

# # Убедиться, что у вас установлены зависимости
# npm install

# Запустить серверную часть (Nest.js) - это зависит от вашего способа запуска сервера


# add the commands here