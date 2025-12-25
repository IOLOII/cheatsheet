# 第一阶段：构建 React 应用
FROM node:18-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn install --frozen-lockfile

# 复制项目文件
COPY . .

# 构建项目
RUN yarn build

# 第二阶段：使用 Nginx 提供静态文件
FROM nginx:alpine

# 复制构建产物到 Nginx 的静态文件目录
COPY --from=build /app/build /usr/share/nginx/html/

# 复制自定义 Nginx 配置文件（如果需要）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

# 构建镜像
# docker build -t tailwindcss-doc .
# 运行容器
# docker rm -f tailwind-doc
# docker run -d -p 0:80 --name tailwind-doc  tailwindcss-doc

# docker rm -f tailwind-doc && docker build -t tailwindcss-doc . &&  docker run -d -p 0:80 --name tailwind-doc  tailwindcss-doc