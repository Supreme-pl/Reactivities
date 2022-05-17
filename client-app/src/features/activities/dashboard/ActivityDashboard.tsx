import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

type ActivityDashboardProps = {
    activities : Activity[];
    selectedActivity : Activity | undefined;
    selectActivity : (id : string) => void;
    cancelSelectActivity : () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

const ActivityDashboard = ({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm} : ActivityDashboardProps) => {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={activities}
                    selectActivity={selectActivity}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                />}
                <ActivityForm closeForm={closeForm} activity={selectedActivity} />
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;