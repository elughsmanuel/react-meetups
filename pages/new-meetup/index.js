// our-domain/new-meetup

import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMeetUpHandler(enteredMeetUpData) {
        console.log(enteredMeetUpData);
    }

    return(
        <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    );
}

export default NewMeetupPage;