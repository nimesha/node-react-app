
## Table of contents

[Installation](#installation)


[ApiDOC](#API Doc)

[Testing](#Front-end-testing)



## Installation
#Backend API Express


> cd backend

Run

\$ npm install  

\$ npm run dev

#Front-end React app

> cd frontend
\$ npm install

\$ npm start

\$ npm run dev

## Photo

### GET

> GET /api/v1/photos/user/id

#### URL Parameters

id=[String]

##### Success Response

- Response body
  - content example

```
{
"user_id":"5656",
   "gallery":[
      {
         "id":204900001,
         "message":"",
         "picture":"https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN",
         "pictureSmall":"",
         "pictureMedium":"",
         "pictureStored":"",
         "timestamp":1578391381,
         "status":false
      }
}


```

- Response code
  - 200

##### Error Response

- Response body

```
    erroType: "Photo Finder Error",
        errorMessage: "Invalid userId",
        errorCode: 2010,
```
- Response code
  - 422
---

> GET /api/v1/photos/users

##### Success Response

- Response body
  - content example

```
{
   "user_id":"5656",
   "gallery":[
      {
         "id":204900001,
         "message":"",
         "picture":"https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN",
         "pictureSmall":"",
         "pictureMedium":"",
         "pictureStored":"",
         "timestamp":1578391381,
         "status":false
      },
      {
         "id":204900002,
         "message":"",
         "picture":"https://www.filepicker.io/api/file/oTUic0PTS4KiBJFbahbl",
         "pictureSmall":"",
         "pictureMedium":"",
         "pictureStored":"",
         "timestamp":1578391381,
         "status":false
      },
      {
         "id":204900003,
         "message":"",
         "picture":"https://www.filepicker.io/api/file/OqPljPIRimcdPI5DWxlv",
         "pictureSmall":"",
         "pictureMedium":"",
         "pictureStored":"",
         "timestamp":1578391381
      },
      {
         "id":204900004,
         "message":"",
         "picture":"https://www.filepicker.io/api/file/OkleqwBQLCvFBAbByUxY",
         "pictureSmall":"",
         "pictureMedium":"",
         "pictureStored":"",
         "timestamp":1578391381
      }
}


```

- Response code
  - 200

---

### POST

> POST /api/v1/photos

- Request Body
  - content example

```
{
"user_id":"5656",
   "gallery":[
      {
         "id":204900001,
         "message":"",
         "picture":"https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN",
         "pictureSmall":"",
         "pictureMedium":"",
         "pictureStored":"",
         "timestamp":1578391381,
         "status":false
      },
   ]
}
```

##### Success Response

- Response body
  - content example

```
{
  message: "Photo Gallery Created"
}
```

- Response code
  - 200

##### Error Response

- Response body

```
{
  erroType: "",
  errorMessage: "",
  errorCode: 2010,
}
```

- Response code
  - 422

---

### DELETE

> DELETE /api/v1/photos/user/id

#### URL Parameters

id=[String]

##### Success Response

- Response body

```
{
  message: "User Gallery Successfuly Deleted"
}
```

- Response code
  - 200

##### Error Response

- Response body

```
{
  erroType: "Gallery Detele Error",
  errorMessage: "User Gallery Delete unsuccessfuly! plz try again",
  errorCode: 2010,
}
```

- Response code
  - 422

** If userId is wrong
- Response body

```
{
  erroType: "Photo Delete Error",
  errorMessage: "Invalid user_Id",
  errorCode: 2010,
}
```

- Response code
  - 422


---



## Front-end-testing

> cd frontend

\$ npm run test

Launches the test runner in the interactive watch mode.\