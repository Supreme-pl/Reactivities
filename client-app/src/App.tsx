import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

type Activity = {
  id : any,
  title : string,
  date : any,
  description : string,
  category : string,
  city : string,
  venue : string
}

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
    .get('http://localhost:5000/api/activities')
    .then(response => {
      console.log(response);
      setActivities(response.data as Activity[]);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {activities.map((activity : Activity) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
