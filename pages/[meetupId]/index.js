import MeetUpDetail from '../../components/meetups/MeetupDetail';

function MeetUpDetails() {
    return(
        <MeetUpDetail 
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
            title='First Meetup'
            address='Some Street 5, Some City'
            description='This is a first meetup'
        />
    );
}

export default MeetUpDetails;