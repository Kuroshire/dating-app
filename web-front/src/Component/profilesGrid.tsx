import { ProfileOverview } from "./profileOverview";
import { MockProfileInformations, ProfileInformations } from "../model/profileInformations.model";

export function ProfilesGrid() {
  const profileList: ProfileInformations[] = MockProfileInformations;
  return (
    <div>
      <div>
          {
            profileList.map((profile) => 
              <ProfileOverview profilePicture={profile.profilePicture} profileName={profile.profileName}/>
            )
          }
          
        </div>
      </div>
    );
}
