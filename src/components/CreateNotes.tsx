import * as React from 'react';
import { Form } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
    return (<>
        <h2>Create Notes</h2>2
        <Form className='mt-3 mb-3'>
            <Form.Group className='mb-3' controlId='formBasicTitle'>
                <Form.Label>
                    Title
                </Form.Label>
                <Form.Control type='text' placeholder='Enter Title For the Note'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>
                    Text
                </Form.Label>
                <Form.Control placeholder='Enter your notes' as="textarea" rows={3}></Form.Control>
            </Form.Group>
        </Form>
    </>);
};

export default CreateNotes;
