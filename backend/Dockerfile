# Step 1: Use OpenJDK 17 as base
FROM openjdk:17-jdk-slim

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy the built jar file
COPY target/*.jar app.jar

# Step 4: Expose the port (Render will override with PORT)
EXPOSE 5001

# Step 5: Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
