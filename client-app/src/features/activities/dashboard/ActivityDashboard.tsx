import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

type ActivityDashboardProps = {
    activities : Activity[]
}

const ActivityDashboard = ({activities} : ActivityDashboardProps) => {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;