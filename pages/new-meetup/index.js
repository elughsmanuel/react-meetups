import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const router = useRouter();

    async function addMeetUpHandler(enteredMeetUpData) {
        const response = await fetch('/api/new-meetup', { 
            method: 'POST',
            body: JSON.stringify(enteredMeetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    // function addMeetUpHandler(enteredMeetUpData) {
    //     console.log(enteredMeetUpData);
    // }

    return(
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta 
                    name='description'
                    content='Add your own meetups and create amazing network opportunities'
                />
            </Head>
            <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
        </Fragment>
    );
}

export default NewMeetupPage;