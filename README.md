# clone-medium

## RESTful API
---

##### POST /register
- Request Body:
```
{
  "user_name" : <user_name>,
  "email" : <email>,
  "password" : <password> 
}
```

- Response (201):
```
{
  "access_token" : <access_token>
}
```

##### POST /login
- Request Body:
```
{
  "email" : <email>,
  "password" : <password> 
}
```

- Response (200):
```
{
  "access_token" : <access_token>
}
```

##### GET /articles
###### get all article
- Response (200)
```
[
  {
    "id": 1,
    "title": "trial 1",
    "img_url": "google.com",
    "body": "this is trial 1",
    "clap": 40,
    "date": "2020-05-19T12:23:22.761Z",
    "category": "science",
    "UserId": 20,
    "createdAt": "2020-05-19T12:23:22.761Z",
    "updatedAt": "2020-05-19T12:23:22.761Z"
  },
  {
    "id": 2,
    "title": "trial 2",
    "img_url": "google.com",
    "body": "this is trial 2",
    "clap": 23,
    "date": "2020-05-19T12:24:09.255Z",
    "category": "science",
    "UserId": 20,
    "createdAt": "2020-05-19T12:24:09.255Z",
    "updatedAt": "2020-05-19T12:24:09.255Z"
  }
]
```

##### GET /articles/:id
###### get article by id
- Response (200):
```
{
  "id": 2,
  "title": "trial 2",
  "img_url": "google.com",
  "body": "this is trial 2",
  "clap": 23,
  "date": "2020-05-19T12:24:09.255Z",
  "category": "science",
  "UserId": 20,
  "createdAt": "2020-05-19T12:24:09.255Z",
  "updatedAt": "2020-05-19T12:24:09.255Z"
}
```

##### POST /articles
###### post article
- Request body:
```
{
	"title": "judul",
	"img_url": "google",
	"body": "body",
  "UserId": 20,
  "category": "science"
}
```

- Request headers:
```
{
  access_token: <access_token>
}
```

- Response (200):
```
{
  "id": 5,
  "title": "judul",
  "img_url": "google",
  "body": "body",
  "date": "2020-05-19T12:36:45.418Z",
  "UserId": 20,
  "clap": 0,
  "updatedAt": "2020-05-19T12:36:45.420Z",
  "createdAt": "2020-05-19T12:36:45.420Z",
  "category": null
}
```


##### GET /me/articles
###### get the articles user write
- Request Headers:
```
{
  access_token: <access_token>
}
```

- Response (200):
```
[
  {
    "id": 1,
    "title": "trial 1",
    "img_url": "google.com",
    "body": "this is trial 1",
    "clap": 40,
    "date": "2020-05-19T12:23:22.761Z",
    "category": "science",
    "UserId": 20,
    "createdAt": "2020-05-19T12:23:22.761Z",
    "updatedAt": "2020-05-19T12:23:22.761Z"
  },
  {
    "id": 2,
    "title": "trial 2",
    "img_url": "google.com",
    "body": "this is trial 2",
    "clap": 23,
    "date": "2020-05-19T12:24:09.255Z",
    "category": "science",
    "UserId": 20,
    "createdAt": "2020-05-19T12:24:09.255Z",
    "updatedAt": "2020-05-19T12:24:09.255Z"
  }
]
```

##### PUT /me/articles/:id
###### edit articles that user write
- Request Headers:
```
{
  access_token: <access_token>
}
```

- Request body:
```
{
	"title": "judul",
	"img_url": "google",
	"body": "body",
  "UserId": 20,
  "category": "science"
}
```

- Response (200):
```
{
  "message": "Article has been updated"
}
```

##### DELETE /me/articles/:id
###### delete articles that user write
- Response (200):
```
{
    "message": "Article has been deleted"
}
```

##### PUT /articles/:id/bookmark
###### bookmark article
- Response (200):
```
{
    "message": "Article has been bookmarked"
}
```

##### delete /articles/:id/unbookmark
###### bookmark article
- Response (200):
```
{
    "message": "Article has been unbookmarked"
}
```

##### PUT /articles/:id/clapped
###### give clap to article
```
{
    "message": "You have clapped the article"
}
```

##### GET /articles/me/bookmarked
###### get articles that user has been bookmarked
- Response (200):
```
[
  {
    "id": 8,
    "UserId": 20,
    "ArticleId": 1,
    "createdAt": "2020-05-19T13:44:07.922Z",
    "updatedAt": "2020-05-19T13:44:07.922Z",
    "Article": {
        "id": 1,
        "title": "trial 1",
        "img_url": "google.com",
        "body": "this is trial 1",
        "clap": 40,
        "date": "2020-05-19T12:23:22.761Z",
        "category": "science",
        "UserId": 20,
        "createdAt": "2020-05-19T12:23:22.761Z",
        "updatedAt": "2020-05-19T12:23:22.761Z"
    }
  },
  {
    "id": 9,
    "UserId": 20,
    "ArticleId": 3,
    "createdAt": "2020-05-19T13:44:13.608Z",
    "updatedAt": "2020-05-19T13:44:13.608Z",
    "Article": {
        "id": 3,
        "title": "judul",
        "img_url": "google",
        "body": "body",
        "clap": null,
        "date": "2020-05-19T12:35:44.112Z",
        "category": null,
        "UserId": 20,
        "createdAt": "2020-05-19T12:35:44.113Z",
        "updatedAt": "2020-05-19T12:35:44.113Z"
    }
  }
]
```

##### GET /articles/me/clap
###### get articles that user has been clapped
```
[
  {
    "id": 1,
    "UserId": 20,
    "ArticleId": 1,
    "createdAt": "2020-05-19T15:34:07.297Z",
    "updatedAt": "2020-05-19T15:34:07.297Z",
    "Article": {
        "id": 1,
        "title": "trial 1",
        "img_url": "google.com",
        "body": "this is trial 1",
        "clap": 43,
        "date": "2020-05-19T12:23:22.761Z",
        "category": "science",
        "UserId": 20,
        "createdAt": "2020-05-19T12:23:22.761Z",
        "updatedAt": "2020-05-19T15:36:35.583Z"
    }
  },
  {
    "id": 2,
    "UserId": 20,
    "ArticleId": 6,
    "createdAt": "2020-05-19T15:41:40.001Z",
    "updatedAt": "2020-05-19T15:41:40.001Z",
    "Article": {
        "id": 6,
        "title": "judl",
        "img_url": "google",
        "body": "body",
        "clap": 2,
        "date": "2020-05-19T12:43:36.169Z",
        "category": "science",
        "UserId": 45,
        "createdAt": "2020-05-19T12:43:36.169Z",
        "updatedAt": "2020-05-19T15:41:42.047Z"
    }
  }
]
```

##### GET /user/:id
###### get user by id

##### POST /user/:id/message
###### post message tu user

##### GET /messages
###### get our messages

##### GET /messages/:id
##### get message by id

##### POST /messages/:id/response
###### post response message by id message
