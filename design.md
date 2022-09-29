I designed my SDK with scalability in mind, should the API add or change endpoints in the future. I separated methods by endpoint and reused code where I felt it was appropriate. I also separated them in this way so that calls can be easily chained. The primary function, theOne, returns an object containing all methods as properties.

I chose to allow all methods to intake an optional params object to handle query parameters. The user can set their query parameters to paginate, filter, and other actions by providing this object. The exact structure of the object can be found in the readme file.

Lastly, I used Babel to compile my code to ES5 to ensure cross-browser compatibility.