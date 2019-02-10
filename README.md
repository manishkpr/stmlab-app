

## Twitch Streaming
[Heroku App Link] (https://stark-mesa-77966.herokuapp.com/)

 Additionally please answer the following questions 

- How would you deploy the above on AWS? (ideally, a rough architecture diagram will help)

![alt text](https://github.com/manishkpr/stmlab-app/raw/master/public/images/twitch_stream_app.png)

- Where do you see bottlenecks in your proposed architecture and how would you approach scaling this app starting from 100 reqs/sec to
   900MM reqs/sec over 6 months?

 - we can analytics requests/web traffic. Based on requests/web traffic we can do the load testing using [Artillery] (https://artillery.io/) for example   if 1 EC2 instance can handling 100 req/sec. We can configure the scaling policy accordingly that handles 900MM reqs/sec ```

## Bonus
##### The Twitch authentication token expires at a fixed period and the backend should ensure that its refreshed before expiry.

 - We can use Redis or other cache mechanism to store and check TTL then refresh token

#### Please answer the following questions 

##### How will you handle duplicate events?
 - duplicate events can be handle by unique ID


##### If you chose a relational datastore; what alternative NoSQL datastore would you use? Why? And vice-versa?

- I would choose DynamoDB because above architecture is based on AWS infrastructure as well if there is no relationship require. 

##### Implement front-end using a modern Javascript SPA framework
 - can implement but due to time i haven't