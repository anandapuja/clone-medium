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
      "id": 5,
      "title": "judul",
      "img_url": "google",
      "body": "body",
      "clap": 0,
      "date": "2020-05-19T12:36:45.418Z",
      "category": null,
      "UserId": 20,
      "createdAt": "2020-05-19T12:36:45.420Z",
      "updatedAt": "2020-05-19T12:36:45.420Z",
      "User": {
          "user_name": "asdf",
          "email": "asdf@mail.com"
      }
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
      "updatedAt": "2020-05-19T12:54:19.835Z",
      "User": {
          "user_name": "asdf",
          "email": "asdf@mail.com"
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
      "user_name": "asdf",
      "email": "asdf@mail.com"
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
{
  "id": 20,
  "email": "asdf@mail.com",
  "user_name": "asdf",
  "avatar": null,
  "about_me": null,
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
    }
  ]
}
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
        "id": 12,
        "UserId": 20,
        "ArticleId": 6,
        "createdAt": "2020-05-20T07:32:37.498Z",
        "updatedAt": "2020-05-20T07:32:37.498Z",
        "Article": {
            "id": 6,
            "title": "judl",
            "img_url": "google",
            "body": "body",
            "clap": 6,
            "date": "2020-05-19T12:43:36.169Z",
            "category": "science",
            "UserId": 45,
            "createdAt": "2020-05-19T12:43:36.169Z",
            "updatedAt": "2020-05-19T17:42:00.957Z",
            "User": null
        }
    },
    {
        "id": 13,
        "UserId": 20,
        "ArticleId": 5,
        "createdAt": "2020-05-20T07:36:08.667Z",
        "updatedAt": "2020-05-20T07:36:08.667Z",
        "Article": {
            "id": 5,
            "title": "judul",
            "img_url": "google",
            "body": "body",
            "clap": 0,
            "date": "2020-05-19T12:36:45.418Z",
            "category": null,
            "UserId": 20,
            "createdAt": "2020-05-19T12:36:45.420Z",
            "updatedAt": "2020-05-19T12:36:45.420Z",
            "User": {
                "user_name": "asdf",
                "email": "asdf@mail.com"
            }
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
            "updatedAt": "2020-05-19T15:36:35.583Z",
            "User": {
                "user_name": "asdf",
                "email": "asdf@mail.com"
            }
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
            "clap": 6,
            "date": "2020-05-19T12:43:36.169Z",
            "category": "science",
            "UserId": 45,
            "createdAt": "2020-05-19T12:43:36.169Z",
            "updatedAt": "2020-05-19T17:42:00.957Z",
            "User": null
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
    "user_name": "asdf",
    "email": "asdf@mail.com",
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
        },
        {
            "id": 8,
            "title": "judul",
            "img_url": "google",
            "body": "body",
            "clap": 0,
            "date": "2020-05-20T07:37:33.659Z",
            "category": "science",
            "UserId": 20,
            "createdAt": "2020-05-20T07:37:33.660Z",
            "updatedAt": "2020-05-20T07:37:33.660Z"
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
{
    "receive": [
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
                "user_name": "asdf",
                "email": "asdf@mail.com"
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
                "user_name": "asdf",
                "email": "asdf@mail.com"
            }
        },
        {
            "id": 5,
            "title_message": "this is title",
            "body_message": "this is my message",
            "date": "2020-05-19T21:12:41.818Z",
            "UserId": 21,
            "SenderId": 20,
            "createdAt": "2020-05-19T21:12:41.818Z",
            "updatedAt": "2020-05-19T21:12:41.818Z",
            "User": {
                "user_name": "asdf",
                "email": "asdf@mail.com"
            }
        },
        {
            "id": 6,
            "title_message": "this is title",
            "body_message": "this is my message",
            "date": "2020-05-20T07:41:00.517Z",
            "UserId": 21,
            "SenderId": 20,
            "createdAt": "2020-05-20T07:41:00.518Z",
            "updatedAt": "2020-05-20T07:41:00.518Z",
            "User": {
                "user_name": "asdf",
                "email": "asdf@mail.com"
            }
        }
    ],
    "send": []
}
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
                "user_name": "fuza",
                "email": "fuza@mail.com"
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
                "user_name": "asdf",
                "email": "asdf@mail.com"
            }
        },
        {
            "id": 3,
            "response": "woi",
            "date": "2020-05-19T21:54:06.003Z",
            "MessageId": 4,
            "UserId": 21,
            "createdAt": "2020-05-19T21:54:06.004Z",
            "updatedAt": "2020-05-19T21:54:06.004Z",
            "User": {
                "user_name": "fuza",
                "email": "fuza@mail.com"
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
