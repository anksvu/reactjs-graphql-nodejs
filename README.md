## reactjs-graphql-nodejs

## Install dependencies
<p>npm install</p>

## Production
<p>npm run build</p>
<p>npm start</p>
<p>open browser and go to http://localhost:3000</p>

## Development
### start dev server
<p>npm run dev-server</p>

### start dev client
<p>npm run dev-client</p>

## GrapgiQL
<p>open browser and go to http://localhost:3000/graphiql</p>

### Mutation : add student
mutation addStudent($student: StudentInput) {
  addStudent(student: $student) {
    name
  }
}

#### variable
{
  "student": {
    "name": "name",
    "email": "test@email.com",
    "phone": "479332973",
    "class": "I"
  }
}

### Query: list students
query{
  students {
    name
    class
    phone
    email
  }
}

### Subscription: listen for add students
subscription{
  student {
    name
    class
    phone
    email
  }
}
