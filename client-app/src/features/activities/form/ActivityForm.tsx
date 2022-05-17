import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

type ActivityForm = {
    closeForm: () => void;
    activity: Activity | undefined;

}

const ActivityForm = ({closeForm} : ActivityForm) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input type='date' placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue'/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button floated='right' type='submit' content='Cancel'/>
            </Form>
        </Segment>
    )
}

export default ActivityForm;