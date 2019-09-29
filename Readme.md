# STACK

- Node.js / Express.js
- MongoDB / Mongoose
- Jest

---
# HOW TO RUN

```bash
npm start
```

# ROUTES / API
-  Root url:
```bash
curl -X GET \
  http://localhost:7777/
```
-  Swagger url:

      http://localhost:7777/api-docs

- Get Records
```bash
curl -X GET \
  'http://localhost:7777/api/records?startDate={{startDate}}&endDate={{endDate}}&minCount={{minCount}&maxCount={{maxcount}}'
```

