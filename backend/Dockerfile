# backend/Dockerfile

# FROM openjdk:17-jdk-slim

# WORKDIR /app

# COPY . .

# RUN ./mvnw clean package -DskipTests

# COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# EXPOSE 8080

# CMD ["java", "-jar", "app.jar"]


# 🔨 Build Stage
FROM maven:3.9.4-eclipse-temurin-17 AS builder
WORKDIR /app
COPY . .
RUN ./mvn clean package -DskipTests

# 🚀 Run Stage
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
