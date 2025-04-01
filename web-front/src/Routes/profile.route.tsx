import { useParams } from "react-router-dom";
import { MockProfileInformations } from "../model/profileInformations.model";

export function ProfilePage() {
    const { userId } = useParams();
    
    const getProfileFromId = ( {userId} : {userId: number} ) => {
        return MockProfileInformations.find((profile) => profile.profileId == userId)
    }

    if(userId == undefined) {
        return <div>
            <div>No UserId given...</div>
        </div>
    }

    const profile = getProfileFromId({userId: +userId});

    if(profile == undefined) {
        return <div>
            <div>Profile not found...</div>
        </div>
    }

    return (
        <div>
            <div>Name: {profile.profileName}</div>
        </div>
    );
}
