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
    "id": 7,
    "title": "judul",
    "img_url": "google",
    "body": "body",
    "clap": 0,
    "date": "2020-05-19T12:54:19.833Z",
    "category": null,
    "UserId": 20,
    "createdAt": "2020-05-19T12:54:19.835Z",
    "updatedAt": "2020-05-19T12:54:19.835Z",
    "User": {
        "id": 20,
        "email": "asdf@mail.com",
        "user_name": "asdf",
        "password": "$2a$10$0z96o3gFUtvPUeSrpQzHM./W2sSM9axFBKzmpRJeHVPk/FNrv3Ry2",
        "createdAt": "2020-05-19T12:12:06.658Z",
        "updatedAt": "2020-05-19T12:12:06.658Z"
    }
  },
  {
    "id": 1,
    "title": "trial 1",
    "img_url": "google.com",
    "body": "this is trial 1",
    "clap": 43,
    "date": "2020-05-19T12:23:22.761Z",
    "category": "science",
    "UserId": 20,
    "createdAt": "2020-05-19T12:23:22.761Z",
    "updatedAt": "2020-05-19T15:36:35.583Z",
    "User": {
        "id": 20,
        "email": "asdf@mail.com",
        "user_name": "asdf",
        "password": "$2a$10$0z96o3gFUtvPUeSrpQzHM./W2sSM9axFBKzmpRJeHVPk/FNrv3Ry2",
        "createdAt": "2020-05-19T12:12:06.658Z",
        "updatedAt": "2020-05-19T12:12:06.658Z"
    }
  }
]
```

##### GET /articles/:id
###### get article by id
- Response (200):
```
{
    "id": 1,
    "title": "trial 1",
    "img_url": "google.com",
    "body": "this is trial 1",
    "clap": 43,
    "date": "2020-05-19T12:23:22.761Z",
    "category": "science",
    "UserId": 20,
    "createdAt": "2020-05-19T12:23:22.761Z",
    "updatedAt": "2020-05-19T15:36:35.583Z",
    "User": {
        "id": 20,
        "email": "asdf@mail.com",
        "user_name": "asdf",
        "password": "$2a$10$0z96o3gFUtvPUeSrpQzHM./W2sSM9axFBKzmpRJeHVPk/FNrv3Ry2",
        "createdAt": "2020-05-19T12:12:06.658Z",
        "updatedAt": "2020-05-19T12:12:06.658Z"
    }
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
- Request Headers:
```
{
  access_token: <access_token>
}
```

- Response (200):
```
{
    "message": "Article has been deleted"
}
```

##### PUT /articles/:id/bookmark
###### bookmark article
- Request Headers:
```
{
  access_token: <access_token>
}
```

- Response (200):
```
{
    "message": "Article has been bookmarked"
}
```

##### delete /articles/:id/unbookmark
###### bookmark article
- Request Headers:
```
{
  access_token: <access_token>
}
```

- Response (200):
```
{
    "message": "Article has been unbookmarked"
}
```

##### PUT /articles/:id/clapped
###### give clap to article
- Request Headers:
```
{
  access_token: <access_token>
}
```

- Response (200):
```
{
    "message": "You have clapped the article"
}
```

##### GET /articles/me/bookmarked
###### get articles that user has been bookmarked
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

##### GET /writer/:id
###### get writer by id
- Request Headers:
```
{
  access_token: <access_token>
}
```

- Response (200):
```
{
  "id": 20,
  "email": "asdf@mail.com",
  "user_name": "asdf",
  "password": "$2a$10$0z96o3gFUtvPUeSrpQzHM./W2sSM9axFBKzmpRJeHVPk/FNrv3Ry2",
  "createdAt": "2020-05-19T12:12:06.658Z",
  "updatedAt": "2020-05-19T12:12:06.658Z",
  "Articles": [
      {
          "id": 5,
          "title": "judul",
          "img_url": "google",
          "body": "body",
          "clap": 0,
          "date": "2020-05-19T12:36:45.418Z",
          "category": null,
          "UserId": 20,
          "createdAt": "2020-05-19T12:36:45.420Z",
          "updatedAt": "2020-05-19T12:36:45.420Z"
      },
      {
          "id": 7,
          "title": "judul",
          "img_url": "google",
          "body": "body",
          "clap": 0,
          "date": "2020-05-19T12:54:19.833Z",
          "category": null,
          "UserId": 20,
          "createdAt": "2020-05-19T12:54:19.835Z",
          "updatedAt": "2020-05-19T12:54:19.835Z"
      },
      {
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
  ]
}
```

##### POST /writer/:writerid/message
###### post message tu user
- Request Body:
```
{
	"title_message": "this is title",
	"title_body": "this is my message"
}
```

- Response (201):
```
{
    "id": 1,
    "title_message": "this is title",
    "body_message": "this is my message",
    "date": "2020-05-19T21:03:46.830Z",
    "UserId": 20,
    "SenderId": 21,
    "updatedAt": "2020-05-19T21:03:46.831Z",
    "createdAt": "2020-05-19T21:03:46.831Z"
}
```

##### GET /messages
###### get all messages
- Response (200):
```
[
  {
    "id": 3,
    "title_message": "this is title",
    "body_message": "this is my message",
    "date": "2020-05-19T21:11:31.518Z",
    "UserId": 21,
    "SenderId": 20,
    "createdAt": "2020-05-19T21:11:31.520Z",
    "updatedAt": "2020-05-19T21:11:31.520Z",
    "User": {
        "id": 21,
        "email": "fuza@mail.com",
        "user_name": "fuza",
        "password": "$2a$10$lMZSEZr7fC5Mp3dsg6ZXsu34q9VIBVWssKS3vgPgTUXiQRb9rMacy",
        "createdAt": "2020-05-19T21:02:14.563Z",
        "updatedAt": "2020-05-19T21:02:14.563Z"
    }
  },
  {
    "id": 4,
    "title_message": "this is title",
    "body_message": "this is my message",
    "date": "2020-05-19T21:11:38.632Z",
    "UserId": 21,
    "SenderId": 20,
    "createdAt": "2020-05-19T21:11:38.632Z",
    "updatedAt": "2020-05-19T21:11:38.632Z",
    "User": {
        "id": 21,
        "email": "fuza@mail.com",
        "user_name": "fuza",
        "password": "$2a$10$lMZSEZr7fC5Mp3dsg6ZXsu34q9VIBVWssKS3vgPgTUXiQRb9rMacy",
        "createdAt": "2020-05-19T21:02:14.563Z",
        "updatedAt": "2020-05-19T21:02:14.563Z"
    }
  }
]
```

##### GET /messages/:id
##### get message by id
- Response (200):
```
{
  "id": 4,
  "title_message": "this is title",
  "body_message": "this is my message",
  "date": "2020-05-19T21:11:38.632Z",
  "UserId": 21,
  "SenderId": 20,
  "createdAt": "2020-05-19T21:11:38.632Z",
  "updatedAt": "2020-05-19T21:11:38.632Z",
  "Responses": [
    {
        "id": 1,
        "response": "woi",
        "date": "2020-05-19T21:23:17.133Z",
        "MessageId": 4,
        "UserId": 21,
        "createdAt": "2020-05-19T21:23:17.133Z",
        "updatedAt": "2020-05-19T21:23:17.133Z",
        "User": {
            "id": 21,
            "email": "fuza@mail.com",
            "user_name": "fuza",
            "password": "$2a$10$lMZSEZr7fC5Mp3dsg6ZXsu34q9VIBVWssKS3vgPgTUXiQRb9rMacy",
            "createdAt": "2020-05-19T21:02:14.563Z",
            "updatedAt": "2020-05-19T21:02:14.563Z"
        }
    },
    {
        "id": 2,
        "response": "mamam",
        "date": "2020-05-19T21:33:12.024Z",
        "MessageId": 4,
        "UserId": 20,
        "createdAt": "2020-05-19T21:33:12.024Z",
        "updatedAt": "2020-05-19T21:33:12.024Z",
        "User": {
            "id": 20,
            "email": "asdf@mail.com",
            "user_name": "asdf",
            "password": "$2a$10$0z96o3gFUtvPUeSrpQzHM./W2sSM9axFBKzmpRJeHVPk/FNrv3Ry2",
            "createdAt": "2020-05-19T12:12:06.658Z",
            "updatedAt": "2020-05-19T12:12:06.658Z"
        }
    }
  ]
}
```

##### POST /messages/:id/response
###### post response message by id message
- Response (201):
```
{
    "id": 3,
    "response": "woi",
    "date": "2020-05-19T21:54:06.003Z",
    "MessageId": 4,
    "UserId": 21,
    "updatedAt": "2020-05-19T21:54:06.004Z",
    "createdAt": "2020-05-19T21:54:06.004Z"
}
```
